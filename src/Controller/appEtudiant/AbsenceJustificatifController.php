<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/AbsenceJustificatifController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\AbsenceJustificatif;
use App\Entity\Constantes;
use App\Event\JustificatifEvent;
use App\Form\AbsenceJustificatifType;
use App\Repository\AbsenceJustificatifRepository;
use Exception;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[Route(path: '/application/etudiant/absence/justificatif')]
class AbsenceJustificatifController extends BaseController
{
    #[Route(path: '/', name: 'app_etudiant_absence_justificatif_index', methods: 'GET')]
    public function index(AbsenceJustificatifRepository $absenceJustificatifRepository): Response
    {
        return $this->render('appEtudiant/absence_justificatif/index.html.twig',
            ['absence_justificatifs' => $absenceJustificatifRepository->findByEtudiant($this->getUser())]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/depot', name: 'app_etudiant_absence_justificatif_new', methods: 'GET|POST')]
    public function depot(EventDispatcherInterface $eventDispatcher, Request $request): Response
    {
        if (null !== $this->getUser()) {
            $absenceJustificatif = new AbsenceJustificatif();
            $absenceJustificatif->setEtudiant($this->getUser());
            $absenceJustificatif->setSemestre($this->getEtudiantSemestre());
            $absenceJustificatif->setAnneeUniversitaire($this->getAnneeUniversitaire());
            $form = $this->createForm(AbsenceJustificatifType::class, $absenceJustificatif);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $absenceJustificatif->transformeData();
                $this->entityManager->persist($absenceJustificatif);
                $this->entityManager->flush();

                $event = new JustificatifEvent($absenceJustificatif);
                $eventDispatcher->dispatch($event, JustificatifEvent::ADDED);

                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence_justificatif.add.success.flash');

                return $this->redirectToRoute('application_index', ['onglet' => 'justificatif']);
            }

            return $this->render('appEtudiant/absence_justificatif/new.html.twig', [
                'absence_justificatif' => $absenceJustificatif,
                'form' => $form,
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    #[Route(path: '/{id}/edit', name: 'app_etudiant_absence_justificatif_edit', methods: 'GET|POST')]
    public function edit(Request $request, #[MapEntity(mapping: ['id' => 'uuid'])]
    AbsenceJustificatif          $absenceJustificatif): Response
    {
        $absenceJustificatif->prepareData();
        $form = $this->createForm(AbsenceJustificatifType::class, $absenceJustificatif, [
            'action' => $this->generateUrl('app_etudiant_absence_justificatif_edit', [
                'id' => $absenceJustificatif->getUuidString(),
            ]),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $absenceJustificatif->transformeData();
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence_justificatif.edit.success.flash');

            return $this->redirectToRoute('app_etudiant_absence_justificatif_edit',
                ['id' => $absenceJustificatif->getUuidString()]);
        }

        return $this->render('appEtudiant/absence_justificatif/edit.html.twig', [
            'absence_justificatif' => $absenceJustificatif,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'app_etudiant_absence_justificatif_delete', methods: 'DELETE')]
    public function delete(Request $request, #[MapEntity(mapping: ['id' => 'uuid'])]
    AbsenceJustificatif            $absenceJustificatif): Response
    {
        $id = $absenceJustificatif->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($absenceJustificatif);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'absence_justificatif.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'absence_justificatif.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
