<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/DateController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 12:32
 */

namespace App\Controller\administration;

use App\Components\Exporter\ExporterManager;
use App\Components\Exporter\SourceIterator\DoctrineSourceIterator;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Date;
use App\Form\DatesType;
use App\Repository\DateRepository;
use App\Table\DateTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/dates")
 */
class DateController extends BaseController
{
    #[Route('/', name: 'administration_date_index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $table = $this->createTable(DateTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/date/index.html.twig',
            [
                'table' => $table,
            ]);
    }

    /**
     * @Route("/export.{_format}", name="administration_date_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(ExporterManager $exporter, DateRepository $dateRepository, $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $dates = $dateRepository->findByDepartementArray($this->getDepartement());
        $datas = new DoctrineSourceIterator($dates, $this->entityManager, Date::class);

        return $exporter->export($datas, $_format, 'dates');
    }

    /**
     * @Route("/new", name="administration_date_new", methods="GET|POST")
     */
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

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
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $date->getDepartement());

        return $this->render('administration/date/show.html.twig', ['date' => $date]);
    }

    /**
     * @Route("/{id}/edit", name="administration_date_edit", methods="GET|POST")
     */
    public function edit(Request $request, Date $date): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $date->getDepartement());

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
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $date->getDepartement());

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
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $date->getDepartement());

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
