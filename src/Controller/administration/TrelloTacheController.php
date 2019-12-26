<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/TrelloTacheController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TrelloTache;
use App\Form\TrelloTacheType;
use App\MesClasses\MyExport;
use App\Repository\TrelloTacheRepository;
use DateInterval;
use DateTimeImmutable;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/trello/taches")
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
        return $this->render(
            'administration/trello_tache/index.html.twig',
            [
                'trello_taches' => $trelloTacheRepository->findAll()
            ]
        );
    }

    /**
     * @Route("/board", name="administration_trello_tache_board", methods="GET")
     * @param TrelloTacheRepository $trelloTacheRepository
     *
     * @return Response
     * @throws \Exception
     */
    public function board(TrelloTacheRepository $trelloTacheRepository): Response
    {
        $jourDuJour = date('N');
        $dateDuJour = new DateTimeImmutable();
        $dp = $dateDuJour;

        $tab = [];
        for ($i = $jourDuJour - 1; $i > 0; $i--) {
            $tab[$i] = $dp->sub(new DateInterval('P1D'));
            $dp = $tab[$i];
        }
        $tab[$jourDuJour] = $dateDuJour;
        $dp = $dateDuJour;
        $end = 32 + $jourDuJour;

        for ($i = $jourDuJour + 1; $i < $end; $i++) {
            //le 32 dépend du jour de début ...
            $tab[$i] = $dp->add(new DateInterval('P1D'));
            $dp = $tab[$i];
        }

        sort($tab);

        return $this->render('administration/trello_tache/board.html.twig', [
            'taches'     => $trelloTacheRepository->findByDepartementTaches($this->dataUserSession->getDepartementId()),
            'calendrier' => $tab
        ]);
    }


    /**
     * @Route("/export.{_format}", name="administration_trello_tache_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport              $myExport
     * @param TrelloTacheRepository $trelloTacheRepository
     *
     * @param                       $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, TrelloTacheRepository $trelloTacheRepository, $_format): Response
    {
        $trellos = $trelloTacheRepository->findByDepartement($this->dataUserSession->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $trellos,
            'treelo_tache',
            ['trello_administration', 'utilisateur'],
            ['libelle', 'deadline', 'description', 'personnels' => ['nom', 'prenom']]
        );
    }


    /**
     * @Route("/new", name="administration_trello_tache_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Exception
     */
    public function create(Request $request): Response
    {
        $trelloTache = new TrelloTache($this->dataUserSession->getDepartement());
        $form = $this->createForm(
            TrelloTacheType::class,
            $trelloTache,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($trelloTache);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'trello.add.success.flash');

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
        $form = $this->createForm(
            TrelloTacheType::class,
            $trelloTache,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'trello.edit.success.flash');

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
            $this->entityManager->remove($trelloTache);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'trello.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'trello.delete.error.flash');

        return $this->redirectToRoute('administration_trello_tache_index');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_trello_tache_duplicate", methods="GET|POST")
     * @param TrelloTache $trelloTache
     *
     * @return Response
     */
    public function duplicate(TrelloTache $trelloTache): Response
    {
        $newTrelloTache = clone $trelloTache;

        $this->entityManager->persist($newTrelloTache);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'trello.duplicate.success.flash');

        return $this->redirectToRoute('administration_trello_tache_edit', ['id' => $newTrelloTache->getId()]);
    }
}
