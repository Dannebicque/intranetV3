<?php

namespace App\Controller\superAdministration;

use App\Entity\Formation;
use App\Form\FormationType;
use App\MesClasses\Manager\FormationManager;
use App\Repository\FormationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"super-administration/formation",
 *         "en":"super-administration/training"}
 *)
 */
class FormationController extends BaseController
{

    /**
     * @Route("/", name="sa_formation_index", methods="GET")
     */
    public function index(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/formation/help.html.twig');
    }

    /**
     * @Route("/help", name="sa_formation_help", methods="GET")
     */
    public function help(): Response
    {
        //todo: comment l'exploiter...
        return $this->render('structure/formation/help.html.twig');
    }

    /**
     * @Route("/save", name="sa_formation_save", methods="GET")
     */
    public function save(): Response
    {
        //todo: comment l'exploiter...
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="sa_formation_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //todo: comment l'exploiter...
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="sa_formation_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $formation = new Formation();
        $form = $this->createForm(FormationType::class, $formation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($formation);
            $entityManager->flush();

            return $this->redirectToRoute('super_admin_homepage');
        }

        return $this->render('structure/formation/new.html.twig', [
            'formation' => $formation,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_formation_show", methods="GET")
     * @param Formation $formation
     *
     * @return Response
     */
    public function show(Formation $formation): Response
    {
        return $this->render('structure/formation/show.html.twig', ['formation' => $formation]);
    }

    /**
     * @Route("/{id}/edit", name="sa_formation_edit", methods="GET|POST")
     * @param Request   $request
     * @param Formation $formation
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, Formation $formation): Response
    {
        $form = $this->createForm(FormationType::class, $formation);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('super_admin_homepage');
        }

        return $this->render('structure/formation/new.html.twig', [
            'formation' => $formation,
            'form'      => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_formation_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
