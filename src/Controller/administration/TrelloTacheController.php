<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\TrelloTache;
use App\Form\TrelloTacheType;
use App\MesClasses\Csv\Csv;
use App\Repository\TrelloTacheRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/trello/tache")
 */
class TrelloTacheController extends BaseController
{
    /**
     * @Route("/", name="administration_trello_tache_index", methods="GET")
     * @param TrelloTacheRepository $trelloTacheRepository
     *
     * @return Response
     */
    public function index(TrelloTacheRepository $trelloTacheRepository): Response
    {
        return $this->render('administration/trello_tache/index.html.twig',
            [
                'trello_taches' => $trelloTacheRepository->findAll()
            ]);
    }

    /**
     * @Route("/board", name="administration_trello_tache_board", methods="GET")
     * @param TrelloTacheRepository $trelloTacheRepository
     *
     * @return Response
     * @throws \Exception
     */
    public function board(TrelloTacheRepository $trelloTacheRepository)
    {
        $jourDuJour = date('N');
        $dateDuJour = new \DateTimeImmutable();
        $dp = $dateDuJour;

        dump($dateDuJour);
        dump($jourDuJour);
        $tab = array();
        for ($i = $jourDuJour - 1; $i > 0; $i--) {
            $tab[$i] = $dp->sub(new \DateInterval('P1D'));
            $dp = $tab[$i];
        }
        $tab[$jourDuJour] = $dateDuJour;
        $dp = $dateDuJour;
        $end = 32 + $jourDuJour;

        for ($i = $jourDuJour + 1; $i < $end; $i++) //le 32 dépend du jour de début ...
        {
            $tab[$i] = $dp->add(new \DateInterval('P1D'));
            $dp = $tab[$i];
        }

        sort($tab);
        dump($tab);

        return $this->render('administration/trello_tache/board.html.twig', [
            'taches' => $trelloTacheRepository->findByFormationTaches($this->dataUserSession->getFormation()->getId()),
            'calendrier'    => $tab
        ]);
    }


    /**
     * @Route("/save", name="administration_trello_tache_save", methods="GET")
     * @param Csv                   $csv
     * @param TrelloTacheRepository $trello_tacheRepository
     *
     * @return Response
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function save(Csv $csv, TrelloTacheRepository $trello_tacheRepository): Response
    {
        $trello_taches = $trello_tacheRepository->findByFormation($this->dataUserSession->getFormation());
        $csv->export('trello_taches.csv', $trello_taches, array('acutalite_administration'));

        return $csv->response();
    }

    /**
     * @Route("/imprimer", name="administration_trello_tache_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_trello_tache_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $trelloTache = new TrelloTache($this->dataUserSession->getFormation());
        $form = $this->createForm(TrelloTacheType::class, $trelloTache,
            array('formation' => $this->dataUserSession->getFormation()->getId()));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($trelloTache);
            $em->flush();

            return $this->redirectToRoute('administration_trello_tache_index');
        }

        return $this->render('administration/trello_tache/new.html.twig', [
            'trello_tache' => $trelloTache,
            'form'         => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_trello_tache_show", methods="GET")
     * @param TrelloTache $trelloTache
     *
     * @return Response
     */
    public function show(TrelloTache $trelloTache): Response
    {
        return $this->render('administration/trello_tache/show.html.twig', ['trello_tache' => $trelloTache]);
    }

    /**
     * @Route("/{id}/edit", name="administration_trello_tache_edit", methods="GET|POST")
     * @param Request     $request
     * @param TrelloTache $trelloTache
     *
     * @return Response
     */
    public function edit(Request $request, TrelloTache $trelloTache): Response
    {
        $form = $this->createForm(TrelloTacheType::class, $trelloTache,
            array('formation' => $this->dataUserSession->getFormation()->getId()));
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_trello_tache_edit', ['id' => $trelloTache->getId()]);
        }

        return $this->render('administration/trello_tache/edit.html.twig', [
            'trello_tache' => $trelloTache,
            'form'         => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_trello_tache_delete", methods="DELETE")
     * @param Request     $request
     * @param TrelloTache $trelloTache
     *
     * @return Response
     */
    public function delete(Request $request, TrelloTache $trelloTache): Response
    {
        if ($this->isCsrfTokenValid('delete' . $trelloTache->getId(), $request->request->get('_token'))) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($trelloTache);
            $em->flush();
        }

        return $this->redirectToRoute('administration_trello_tache_index');
    }

    /**
     * @Route("/help", name="administration_trello_tache_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/trello_tache/help.html.twig');
    }
}
