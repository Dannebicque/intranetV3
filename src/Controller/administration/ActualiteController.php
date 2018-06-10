<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Actualite;
use App\Form\ActualiteType;
use App\MesClasses\Csv\Csv;
use App\Repository\ActualiteRepository;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/actualite")
 */
class ActualiteController extends BaseController
{
    /**
     * @Route("/", name="administration_actualite_index", methods="GET")
     * @param ActualiteRepository $actualiteRepository
     *
     * @return Response
     */
    public function index(ActualiteRepository $actualiteRepository): Response
    {
        return $this->render('administration/actualite/index.html.twig',
            ['actualites' => $actualiteRepository->findAll()]);
    }

    /**
     * @Route("/save", name="administration_actualite_save", methods="GET")
     * @param Csv                 $csv
     * @param ActualiteRepository $actualiteRepository
     *
     * @return Response
     * @throws \Doctrine\Common\Annotations\AnnotationException
     */
    public function save(Csv $csv, ActualiteRepository $actualiteRepository): Response
    {
        $actualites = $actualiteRepository->findByFormation($this->dataUserSession->getFormation(), 0);
        $csv->export('actualites.csv', $actualites, array('acutalite_administration'));

        return $csv->response();
    }

    /**
     * @Route("/imprimer", name="administration_actualite_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_actualite_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $actualite = new Actualite($this->dataUserSession->getFormation());
        $form = $this->createForm(ActualiteType::class, $actualite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($actualite);
            $em->flush();

            return $this->redirectToRoute('administration_actualite_index');
        }

        return $this->render('administration/actualite/new.html.twig', [
            'actualite' => $actualite,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_actualite_show", methods="GET")
     * @param Actualite $actualite
     *
     * @return Response
     */
    public function show(Actualite $actualite): Response
    {
        return $this->render('administration/actualite/show.html.twig', ['actualite' => $actualite]);
    }

    /**
     * @Route("/{id}/edit", name="administration_actualite_edit", methods="GET|POST")
     * @param Request   $request
     * @param Actualite $actualite
     *
     * @return Response
     */
    public function edit(Request $request, Actualite $actualite): Response
    {
        $form = $this->createForm(ActualiteType::class, $actualite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_actualite_edit', ['id' => $actualite->getId()]);
        }

        return $this->render('administration/actualite/edit.html.twig', [
            'actualite' => $actualite,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_actualite_delete", methods="DELETE")
     * @param Request   $request
     * @param Actualite $actualite
     *
     * @return Response
     */
    public function delete(Request $request, Actualite $actualite): Response
    {
        $id = $actualite->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $em = $this->getDoctrine()->getManager();
            $em->remove($actualite);
            $em->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/help", name="administration_actualite_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/actualite/help.html.twig');
    }


}
