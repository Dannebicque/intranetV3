<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Actualite;
use App\Form\ActualiteType;
use App\Repository\ActualiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/actualite")
 */
class ActualiteController extends BaseController
{
    /**
     * @Route("/", name="administration_actualite_index", methods="GET")
     */
    public function index(ActualiteRepository $actualiteRepository): Response
    {
        return $this->render('administration/actualite/index.html.twig',
            ['actualites' => $actualiteRepository->findAll()]);
    }

    /**
     * @Route("/new", name="administration_actualite_new", methods="GET|POST")
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
     */
    public function show(Actualite $actualite): Response
    {
        return $this->render('administration/actualite/show.html.twig', ['actualite' => $actualite]);
    }

    /**
     * @Route("/{id}/edit", name="administration_actualite_edit", methods="GET|POST")
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
     */
    public function delete(Request $request, Actualite $actualite): Response
    {

    }

    /**
     * @Route("/help", name="administration_actualite_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/actualite/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_actualite_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', 200);
    }

    /**
     * @Route("/imprimer", name="administration_actualite_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', 200);
    }
}
