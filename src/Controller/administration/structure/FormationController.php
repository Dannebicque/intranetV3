<?php

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Formation;
use App\Form\FormationType;
use App\Repository\FormationRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/structure/formation",
 *         "en":"administration/organization/training"}
 *)
 */
class FormationController extends BaseController
{
    /**
     * @Route("/", name="administration_structure_formation_index", methods="GET")
     * @param FormationRepository $formationRepository
     *
     * @return Response
     */
    public function index(FormationRepository $formationRepository): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/formation/index.html.twig', ['formations' => $formationRepository->findAll()]);
    }

    /**
     * @Route("/help", name="administration_structure_formation_help", methods="GET")
     */
    public function help(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/formation/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_structure_formation_save", methods="GET")
     */
    public function save(): Response
    {
        //todo: comment l'exploiter...
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_structure_formation_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //todo: comment l'exploiter...
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/{id}", name="administration_structure_formation_show", methods="GET")
     * @param Formation $formation
     *
     * @return Response
     */
    public function show(Formation $formation): Response
    {
        return $this->render('structure/formation/show.html.twig', ['formation' => $formation]);
    }

    /**
     * @Route("/{id}/edit", name="administration_structure_formation_edit", methods="GET|POST")
     * @param Request   $request
     * @param Formation $formation
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Formation $formation): Response
    {
        $form = $this->createForm(FormationType::class, $formation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_structure_formation_edit', ['id' => $formation->getId()]);
        }

        return $this->render('structure/formation/edit.html.twig', [
            'formation' => $formation,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_formation_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
