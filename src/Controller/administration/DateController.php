<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/DateController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Date;
use App\Form\DatesType;
use App\Repository\DateRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/dates")
 */
class DateController extends BaseController
{
    /**
     * @Route("/", name="administration_date_index", methods="GET")
     */
    public function index(DateRepository $dateRepository): Response
    {
        $dates = $dateRepository->findByDepartement($this->getDepartement());

        return $this->render('administration/date/index.html.twig', ['dates' => $dates]);
    }

    /**
     * @Route("/export.{_format}", name="administration_date_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, DateRepository $dateRepository, $_format): Response
    {
        $dates = $dateRepository->findByDepartement($this->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $dates,
            'dates',
            ['date_administration', 'semestre'],
            [
                'libelle',
                'texte',
                'dateDebut',
                'heureDebut',
                'dateFin',
                'heureFin',
                'lieu',
                'allday',
                'qui',
                'type',
                'semestre' => ['libelle'],
            ]
        );
    }

    /**
     * @Route("/new", name="administration_date_new", methods="GET|POST")
     */
    public function create(Request $request): Response
    {
        $date = new Date();
        $date->setDepartement($this->getDepartement());
        $form = $this->createForm(
            DatesType::class,
            $date,
            [
                'departement' => $this->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($date);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.create.success.flash');

            return $this->redirectToRoute('administration_date_index');
        }

        return $this->render('administration/date/new.html.twig', [
            'date' => $date,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_date_show", methods="GET")
     */
    public function show(Date $date): Response
    {
        return $this->render('administration/date/show.html.twig', ['date' => $date]);
    }

    /**
     * @Route("/{id}/edit", name="administration_date_edit", methods="GET|POST")
     */
    public function edit(Request $request, Date $date): Response
    {
        $form = $this->createForm(
            DatesType::class,
            $date,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'date.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_date_index');
            }

            return $this->redirectToRoute('administration_date_edit', ['id' => $date->getId()]);
        }

        return $this->render('administration/date/edit.html.twig', [
            'date' => $date,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_date_duplicate", methods="GET")
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
