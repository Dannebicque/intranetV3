<?php

namespace App\Controller\administration\structure;

use App\Entity\Formation;
use App\Form\FormationType;
use App\Repository\FormationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/structure/formation",
 *         "en":"administration/organization/training"}
 *)
 */
class FormationController extends Controller
{
    /**
     * @Route("/", name="administration_structure_formation_index", methods="GET")
     * @param FormationRepository $formationRepository
     *
     * @return Response
     */
    public function index(FormationRepository $formationRepository): Response
    {
        return $this->render('administration/structure/formation/index.html.twig', ['formations' => $formationRepository->findAll()]);
    }

    /**
    * @Route("/help", name="administration_structure_formation_help", methods="GET")
    */
    public function help(): Response
    {
        return $this->render('administration/structure/formation/help.html.twig');
    }

    /**
    * @Route("/save", name="administration_structure_formation_save", methods="GET")
    */
    public function save(): Response
    {
        //save en csv
        return new Response('', 200);
    }

    /**
    * @Route("/imprimer", name="administration_structure_formation_print", methods="GET")
    */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', 200);
    }

    /**
     * @Route("/new", name="administration_structure_formation_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function new(Request $request): Response
    {
        $formation = new Formation();
        $form = $this->createForm(FormationType::class, $formation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($formation);
            $em->flush();

            return $this->redirectToRoute('administration_structure_formation_index');
        }

        return $this->render('administration/structure/formation/new.html.twig', [
            'formation' => $formation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_formation_show", methods="GET")
     * @param Formation $formation
     *
     * @return Response
     */
    public function show(Formation $formation): Response
    {
        return $this->render('administration/structure/formation/show.html.twig', ['formation' => $formation]);
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
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_structure_formation_edit', ['id' => $formation->getId()]);
        }

        return $this->render('administration/structure/formation/edit.html.twig', [
            'formation' => $formation,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_structure_formation_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
