<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Date;
use App\Form\DatesType;
use App\MesClasses\DataUserSession;
use App\Repository\DateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route({"fr":"administration/evenements",
 *         "en":"administration/events"}
 *)
 */
class DateController extends BaseController
{
    /**
     * @Route("/", name="administration_date_index", methods="GET")
     * @param DateRepository $dateRepository
     *
     * @return Response
     */
    public function index(DateRepository $dateRepository): Response
    {
        return $this->render('administration/date/index.html.twig', ['dates' => $dateRepository->findAll()]);
    }

    /**
     * @Route("/help", name="administration_date_help", methods="GET")
     */
    public function help(): Response
    {
        return $this->render('administration/date/help.html.twig');
    }

    /**
     * @Route("/save", name="administration_date_save", methods="GET")
     */
    public function save(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/imprimer", name="administration_date_print", methods="GET")
     */
    public function imprimer(): Response
    {
        //print (pdf)
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_date_new", methods="GET|POST")
     * @param Request         $request
     * @param DataUserSession $dataUserSession
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function create(Request $request): Response
    {
        $date = new Date();
        $form = $this->createForm(DatesType::class, $date,
            ['formation' => $this->dataUserSession->getFormation()->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($date);
            $em->flush();

            return $this->redirectToRoute('administration_date_index');
        }

        return $this->render('administration/date/new.html.twig', [
            'date' => $date,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_date_show", methods="GET")
     * @param Date $date
     *
     * @return Response
     */
    public function show(Date $date): Response
    {
        return $this->render('administration/date/show.html.twig', ['date' => $date]);
    }

    /**
     * @Route("/{id}/edit", name="administration_date_edit", methods="GET|POST")
     * @param Request $request
     * @param Date    $date
     *
     * @return Response
     * @throws \Symfony\Component\Form\Exception\LogicException
     */
    public function edit(Request $request, Date $date): Response
    {
        $form = $this->createForm(DatesType::class, $date,
            ['formation' => $this->dataUserSession->getFormation()->getId()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_date_edit', ['id' => $date->getId()]);
        }

        return $this->render('administration/date/edit.html.twig', [
            'date' => $date,
            'form' => $form->createView(),
        ]);
    }
}
