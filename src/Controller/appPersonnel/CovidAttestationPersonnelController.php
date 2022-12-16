<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/CovidAttestationPersonnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\appPersonnel;

use App\Classes\Covid\MyExportPresence;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\CovidAttestationPersonnel;
use App\Event\CovidEvent;
use App\Form\CovidAttestationPersonnelType;
use App\Repository\CovidAttestationPersonnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[Route('/covid/attestation/personnel', name: 'application_personnel_')]
#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_PERMANENT')]
class CovidAttestationPersonnelController extends BaseController
{
    #[Route(path: '/', name: 'covid_attestation_personnel_index', methods: ['GET'])]
    public function index(CovidAttestationPersonnelRepository $covidAttestationPersonnelRepository): Response
    {
        return $this->render('appPersonnel/covid_attestation_personnel/index.html.twig', [
            'covid_attestation_personnels' => $covidAttestationPersonnelRepository->findByPersonnel($this->getUser()),
        ]);
    }

    #[Route(path: '/new', name: 'covid_attestation_personnel_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EventDispatcherInterface $eventDispatcher): Response
    {
        $covidAttestationPersonnel = new CovidAttestationPersonnel($this->getUser());
        $form = $this->createForm(CovidAttestationPersonnelType::class, $covidAttestationPersonnel,
            [
                'departement' => $this->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($covidAttestationPersonnel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_personnel.add.success.flash');
            $event = new CovidEvent($covidAttestationPersonnel);
            $eventDispatcher->dispatch($event, CovidEvent::COVID_AUTORISATION_DEPOSEE);

            return $this->redirectToRoute('application_personnel_covid_attestation_personnel_index');
        }

        return $this->render('appPersonnel/covid_attestation_personnel/new.html.twig', [
            'covid_attestation_personnel' => $covidAttestationPersonnel,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'covid_attestation_personnel_show', methods: ['GET'])]
    public function show(CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        if ($covidAttestationPersonnel->getPersonnel()->getId() === $this->getUser()->getId()) {
            return $this->render('appPersonnel/covid_attestation_personnel/show.html.twig', [
                'covid_attestation_personnel' => $covidAttestationPersonnel,
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}/pdf', name: 'covid_attestation_personnel_pdf', methods: ['GET'])]
    public function pdf(MyExportPresence $myExportPresence, CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        if ($covidAttestationPersonnel->getPersonnel()->getId() === $this->getUser()->getId()) {
            return $myExportPresence->genereAttestationPdf($covidAttestationPersonnel, 'force');
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}/edit', name: 'covid_attestation_personnel_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, EventDispatcherInterface $eventDispatcher, CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        if ($covidAttestationPersonnel->getPersonnel()->getId() === $this->getUser()->getId()) {
            $form = $this->createForm(CovidAttestationPersonnelType::class, $covidAttestationPersonnel, [
                'departement' => $this->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $covidAttestationPersonnel->setValidationDepartement(null);
                $this->entityManager->flush();
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_personnel.edit.success.flash');

                $event = new CovidEvent($covidAttestationPersonnel);
                $eventDispatcher->dispatch($event, CovidEvent::COVID_AUTORISATION_EDITEE);

                return $this->redirectToRoute('application_personnel_covid_attestation_personnel_index');
            }

            return $this->render('appPersonnel/covid_attestation_personnel/edit.html.twig', [
                'covid_attestation_personnel' => $covidAttestationPersonnel,
                'form' => $form->createView(),
            ]);
        }

        return $this->redirectToRoute('erreur_666');
    }

    #[Route(path: '/{id}', name: 'covid_attestation_personnel_delete', methods: 'DELETE')]
    public function delete(Request $request, CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        $id = $covidAttestationPersonnel->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($covidAttestationPersonnel);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'covid_attestation_personnel.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'covid_attestation_personnel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'covid_attestation_personnel_duplicate', methods: 'GET|POST')]
    public function duplicate(CovidAttestationPersonnel $covidAttestationPersonnel): Response
    {
        if ($covidAttestationPersonnel->getPersonnel()->getId() === $this->getUser()->getId()) {
            $newCovidAttestationPersonnel = clone $covidAttestationPersonnel;

            $this->entityManager->persist($newCovidAttestationPersonnel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'covid_attestation_personnel.duplicate.success.flash');

            return $this->redirectToRoute('application_personnel_covid_attestation_personnel_edit',
                ['id' => $newCovidAttestationPersonnel->getId()]);
        }

        return $this->redirectToRoute('erreur_666');
    }
}
