<?php

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Form\DiplomeType;
use App\MesClasses\DataUserSession;
use App\Repository\DiplomeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/structure/diplome",
 *         "en":"administration/organization/diploma"}
 *)
 */
class DiplomeController extends BaseController
{
    /**
     * @Route("/", name="administration_structure_diplome_index", methods="GET")
     * @param DiplomeRepository $diplomeRepository
     *
     * @return Response
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/diplome/index.html.twig',
            ['diplomes' => $diplomeRepository->findByFormation($this->dataUserSession->getFormationId())]);
    }

    /**
    * @Route("/help", name="administration_structure_diplome_help", methods="GET")
    */
    public function help(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/diplome/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_structure_diplome_save", methods="GET")
    */
    public function save(): Response
    {
        //todo: comment l'exploiter...
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
    * @Route("/imprimer", name="administration_structure_diplome_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //todo: comment l'exploiter...
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_structure_diplome_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(Request $request): Response
    {
        $diplome = new Diplome();
        $diplome->setFormation($this->dataUserSession->getFormation());
        $form = $this->createForm(DiplomeType::class, $diplome, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($diplome);
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_structure_index');
        }

        return $this->render('structure/diplome/new.html.twig', [
            'diplome' => $diplome,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_diplome_show", methods="GET")
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function show(Diplome $diplome): Response
    {
        return $this->render('structure/diplome/show.html.twig', ['diplome' => $diplome]);
    }

    /**
     * @Route("/{id}/edit", name="administration_structure_diplome_edit", methods="GET|POST")
     * @param Request $request
     * @param Diplome $diplome
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Diplome $diplome): Response
    {
        $form = $this->createForm(DiplomeType::class, $diplome, [
            'attr' => [
                'data-provide' => 'validation'
            ]
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_structure_index');
        }

        return $this->render('structure/diplome/edit.html.twig', [
            'diplome' => $diplome,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_structure_diplome_duplicate", methods="GET|POST")
     * @param Diplome $diplome
     *
     * @return Response
     */
    public function duplicate(Diplome $diplome): Response
    {
        $newDiplome = clone $diplome;

        $this->entityManager->persist($newDiplome);
        $this->entityManager->flush();

        return $this->redirectToRoute('administration_structure_diplome_edit', ['id' => $newDiplome->getId()]);
    }

    /**
     * @Route("/{id}", name="administration_structure_diplome_delete", methods="DELETE")
     * @param Diplome $id
     */
    public function delete(Diplome $id): void
    {

    }
}
