<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Form\MatiereType;
use App\Repository\MatiereRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/matiere",
 *         "en":"administration/course"}
 *)
 */
class MatiereController extends BaseController
{
    /**
     * @Route("/", name="administration_matiere_index", methods="GET")
     * @param MatiereRepository $matiereRepository
     *
     * @return Response
     */
    public function index(MatiereRepository $matiereRepository): Response
    {
        return $this->render('administration/matiere/index.html.twig', ['matieres' => $matiereRepository->findAll()]);
    }

    /**
     * @Route("/help", name="administration_matiere_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/matiere/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_matiere_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_matiere_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_matiere_new", methods="GET|POST")
     * @param Request                $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $matiere = new Matiere();
        $form = $this->createForm(MatiereType::class, $matiere);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($matiere);
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_matiere_index');
        }

        return $this->render('administration/matiere/new.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_matiere_show", methods="GET")
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function show(Matiere $matiere): Response
    {
        return $this->render('administration/matiere/show.html.twig', ['matiere' => $matiere]);
    }

    /**
     * @Route("/{id}/edit", name="administration_matiere_edit", methods="GET|POST")
     * @param Request                $request
     * @param Matiere                $matiere
     *
     * @return Response
     */
    public function edit(Request $request, Matiere $matiere): Response
    {
        $form = $this->createForm(MatiereType::class, $matiere);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_matiere_edit', ['id' => $matiere->getId()]);
        }

        return $this->render('administration/matiere/edit.html.twig', [
            'matiere' => $matiere,
            'form'    => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_matiere_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
