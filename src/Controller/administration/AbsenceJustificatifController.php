<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/AbsenceJustificatifController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\AbsenceJustificatif;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Event\JustificatifEvent;
use App\Form\AbsenceJustificatifType;
use App\Repository\AbsenceJustificatifRepository;
use App\Table\AbsenceJustificatifTableType;
use JsonException;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[Route('/administration/absence/justificatif')]
class AbsenceJustificatifController extends BaseController
{
    /**
     * @throws JsonException
     */
    #[Route('/semestre/{semestre}', name: 'administration_absences_justificatif_semestre_liste')]
    public function justificatif(
        Request $request,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);
        $this->breadcrumbHelper->addAdministration();
        $this->breadcrumbHelper->addItem('Semestre ' . $semestre->getOrdreLmd(), 'administration_semestre_index', ['semestre' => $semestre->getId()]);
        $this->breadcrumbHelper->addLastItem('Justificatifs d\'absence');

        $table = $this->createTable(AbsenceJustificatifTableType::class, [
            'semestre' => $semestre,
            'anneeUniversitaire' => $this->getAnneeUniversitaire(),
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/absencejustificatif/justificatif.html.twig', [
            'semestre' => $semestre,
            'table' => $table,
        ]);
    }

    #[Route('/semestre/{semestre}/ajout', name: 'administration_absence_justificatif_new')]
    public function depot(Request $request, EventDispatcherInterface $eventDispatcher, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        $absenceJustificatif = new AbsenceJustificatif();
        $absenceJustificatif->setSemestre($semestre);
        $absenceJustificatif->setAnneeUniversitaire($this->getAnneeUniversitaire());

        $form = $this->createForm(AbsenceJustificatifType::class, $absenceJustificatif,
            ['role' => 'admin', 'semestre' => $semestre]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $absenceJustificatif->transformeData();
            $this->entityManager->persist($absenceJustificatif);
            $this->entityManager->flush();
            $this->gereEtat($absenceJustificatif->getEtat(), $absenceJustificatif, $eventDispatcher);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence_justificatif.add.success.flash');

            return $this->redirectToRoute('administration_absences_justificatif_semestre_liste',
                ['semestre' => $semestre->getId()]);
        }

        return $this->render('administration/absencejustificatif/ajout.html.twig', [
            'semestre' => $semestre,
            'form' => $form,
        ]);
    }

    #[Route('/semestre/{semestre}/export.{_format}',
        name: 'administration_absences_justificatif_semestre_export',
        requirements: ['_format' => 'csv|xlsx|pdf'])]
    public function exportJustificatif(
        MyExport $myExport,
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre,
        string $_format
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        $justificatifs = $absenceJustificatifRepository->findBySemestre(
            $semestre);

        return $myExport->genereFichierJustificatifAbsence($justificatifs, 'justificatifs_absences_'.$semestre->getLibelle());

//        return $myExport->genereFichierGenerique(
//            $_format,
//            $justificatifs,
//            'justificatifs_' . $semestre->getLibelle(),
//            ['justificatif_administration', 'utilisateur'],
//            ['dateDebut', 'heureDebut', 'dateFin', 'heureFin', 'motif', 'etatLong', 'etudiant' => ['prenom', 'nom']]
//        );
    }

    #[Route('/supprimer-annee/{semestre}', name: 'administration_absence_justificatif_delete_all', methods: [
        'DELETE',
        'POST',
    ])]
    public function deleteAllAnnee(
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $semestre);

        $absenceJustificatifs = $absenceJustificatifRepository->findByAnnee($semestre->getAnnee());
        foreach ($absenceJustificatifs as $absenceJustificatif) {
            $this->entityManager->remove($absenceJustificatif);
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.justificatif_all.delete.success.flash');

        return $this->json([
            'redirect' => true,
            'url' => $this->generateUrl('administration_absences_justificatif_semestre_liste',
                ['semestre' => $semestre->getId()]),
        ]);
    }

    #[Route('/{id}', name: 'administration_absence_justificatif_delete', options: ['expose' => true], methods: ['DELETE', 'POST'])]
    public function delete(
        EventDispatcherInterface $eventDispatcher,
        Request $request,
        AbsenceJustificatif $absenceJustificatif
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $absenceJustificatif->getEtudiant()?->getSemestre());

        $id = $absenceJustificatif->getUuidString();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $event = new JustificatifEvent($absenceJustificatif);
            $eventDispatcher->dispatch($event, JustificatifEvent::DELETED);
            $this->entityManager->remove($absenceJustificatif);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.justificatif.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/show/{uuid}', name: 'administration_absence_justificatif_details')]
    public function details(#[MapEntity(mapping: ['uuid' => 'uuid'])]
                            AbsenceJustificatif $absenceJustificatif): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $absenceJustificatif->getEtudiant()?->getSemestre());

        return $this->render('administration/absencejustificatif/_details.html.twig', [
            'justificatif' => $absenceJustificatif,
        ]);
    }

    #[Route(path: '/change-etat/{uuid}/{etat}', name: 'administration_absence_justificatif_change_etat', requirements: ['etat' => 'A|R|D'], options: ['expose' => true], methods: 'GET')]
    public function accepte(EventDispatcherInterface $eventDispatcher, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    AbsenceJustificatif                              $absenceJustificatif, string $etat): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ABS', $absenceJustificatif->getEtudiant()?->getSemestre());
        $absenceJustificatif->setEtat($etat);
        $this->entityManager->flush();
        $this->gereEtat($etat, $absenceJustificatif, $eventDispatcher);

        return new Response('', Response::HTTP_OK);
    }

    private function gereEtat(
        string $etat,
        AbsenceJustificatif $absenceJustificatif,
        EventDispatcherInterface $eventDispatcher
    ): void {
        //gérer le annuler

        if (AbsenceJustificatif::ACCEPTE === $etat) {
            $event = new JustificatifEvent($absenceJustificatif);
            // Justification des absences
            $eventDispatcher->dispatch($event, JustificatifEvent::DECISION_JUSTIFICATIF_ACCEPTEE);
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.justificatif.valide.success.flash');
        }

        if (AbsenceJustificatif::ACCEPTE === $etat || AbsenceJustificatif::REFUSE === $etat) {
            $event = new JustificatifEvent($absenceJustificatif);
            $eventDispatcher->dispatch($event, JustificatifEvent::DECISION);
        }
    }
}
