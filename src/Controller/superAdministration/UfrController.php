<?php

namespace App\Controller\superAdministration;

use App\Entity\Ufr;
use App\Form\UfrType;
use App\Repository\UfrRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/{_locale}/super-administration/ufr",
 *      requirements={
 *         "_locale": "fr|en"})
 */
class UfrController extends BaseController
{
    /**
     * @Route("/", name="sa_ufr_index", methods="GET")
     * @param UfrRepository $ufrRepository
     *
     * @return Response
     */
    public function index(UfrRepository $ufrRepository): Response
    {
        return $this->render('super-administration/ufr/index.html.twig', ['ufrs' => $ufrRepository->findAll()]);
    }

    /**
     * @Route("/help", name="sa_ufr_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('super-administration/ufr/help.html.twig');
    }

    /**
     * @Route("/save", name="sa_ufr_save", methods="GET")
     */
    public function save(): Response
    {
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="sa_ufr_print", methods="GET")
     */
    public function imprimer(): Response
    {
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="sa_ufr_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(EntityManagerInterface $entityManager, Request $request): Response
    {
        $ufr = new Ufr();
        $form = $this->createForm(UfrType::class, $ufr);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($ufr);
            $entityManager->flush();

            return $this->redirectToRoute('sa_ufr_index');
        }

        return $this->render('super-administration/ufr/new.html.twig', [
            'ufr' => $ufr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_ufr_show", methods="GET")
     * @param Ufr $ufr
     *
     * @return Response
     */
    public function show(Ufr $ufr): Response
    {
        return $this->render('super-administration/ufr/show.html.twig', ['ufr' => $ufr]);
    }

    /**
     * @Route("/{id}/edit", name="sa_ufr_edit", methods="GET|POST")
     * @param Request $request
     * @param Ufr     $ufr
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(EntityManagerInterface $entityManager, Request $request, Ufr $ufr): Response
    {
        $form = $this->createForm(UfrType::class, $ufr);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('sa_ufr_edit', ['id' => $ufr->getId()]);
        }

        return $this->render('super-administration/ufr/edit.html.twig', [
            'ufr' => $ufr,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="sa_ufr_delete", methods="DELETE")
     */
    public function delete(): void
    {

    }
}
