<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Date;
use App\Form\DatesType;
use App\Repository\DateRepository;
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
     * @param Request                $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $date = new Date();
        $form = $this->createForm(DatesType::class, $date,
            [
                'formation' => $this->dataUserSession->getFormation(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($date);
            $this->entityManager->flush();

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
     * @param Request                $request
     * @param Date                   $date
     *
     * @return Response
     */
    public function edit(Request $request, Date $date): Response
    {
        $form = $this->createForm(DatesType::class, $date,
            [
                'formation' => $this->dataUserSession->getFormation(),
                'attr'      => [
                    'data-provide' => 'validation'
                ]
            ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.edit.success.flash');

            return $this->redirectToRoute('administration_date_edit', ['id' => $date->getId()]);
        }

        return $this->render('administration/date/edit.html.twig', [
            'date' => $date,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_date_duplicate", methods="GET")
     * @param Date                   $date
     *
     * @return Response
     */
    public function duplicate(Date $date): Response
    {
        $newDate = clone $date;
        $this->entityManager->persist($newDate);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.duplicate.success.flash');

        return $this->redirectToRoute('administration_date_edit', ['id' => $newDate->getId()]);

    }

    /**
     * @Route("/{id}", name="administration_date_delete", methods="DELETE")
     * @param Request                $request
     * @param Date                   $date
     *
     * @return Response
     */
    public function delete(Request $request, Date $date): Response
    {
        $id = $date->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $this->entityManager->remove($date);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'date.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
