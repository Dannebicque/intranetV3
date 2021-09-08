<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AbsenceJustificatifController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2021 16:51
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\AbsenceJustificatif;
use App\Entity\Constantes;
use App\Entity\Semestre;
use App\Event\JustificatifEvent;
use App\Repository\AbsenceJustificatifRepository;
use App\Table\AbsenceJustificatifTableType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class AbsenceController.
 *
 * @Route("/administration/absence/justificatif")
 */
class AbsenceJustificatifController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_absences_justificatif_semestre_liste")
     */
    public function justificatif(
        Request $request,
        Semestre $semestre
    ): Response {

        $table = $this->createTable(AbsenceJustificatifTableType::class, [
            'semestre' => $semestre
        ]);

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }


        return $this->render('administration/absencejustificatif/justificatif.html.twig', [
            'semestre' => $semestre,
            'table' => $table
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/export.{_format}", name="administration_absences_justificatif_semestre_export",
     *                                                 requirements={"_format"="csv|xlsx|pdf"})
     */
    public function exportJustificatif(
        MyExport $myExport,
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $justificatifs = $absenceJustificatifRepository->findBySemestre(
            $semestre);

        return $myExport->genereFichierGenerique(
            $_format,
            $justificatifs,
            'justificatifs_' . $semestre->getLibelle(),
            ['justificatif_administration', 'utilisateur'],
            ['dateDebut', 'heureDebut', 'dateFin', 'heureFin', 'motif', 'etatLong', 'etudiant' => ['prenom', 'nom']]
        );
    }

    /**
     * @Route("/supprimer-annee/{semestre}", name="administration_absence_justificatif_delete_all", methods="DELETE")
     */
    public function deleteAllAnnee(
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre
    ): Response {
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

    /**
     * @Route("/{id}", name="administration_absence_justificatif_delete", methods="DELETE")
     */
    public function delete(
        EventDispatcherInterface $eventDispatcher,
        Request $request,
        AbsenceJustificatif $absenceJustificatif
    ): Response {
        $id = $absenceJustificatif->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $event = new JustificatifEvent($absenceJustificatif);
            $eventDispatcher->dispatch($event, JustificatifEvent::DELETED);
            $this->entityManager->remove($absenceJustificatif);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'absence.justificatif.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/show/{uuid}", name="administration_absence_justificatif_details")
     * @ParamConverter("absenceJustificatif", options={"mapping": {"uuid": "uuid"}})
     */
    public function details(AbsenceJustificatif $absenceJustificatif): Response
    {
        return $this->render('administration/absencejustificatif/_details.html.twig', [
            'justificatif' => $absenceJustificatif,
        ]);
    }

    /**
     * @Route("/change-etat/{uuid}/{etat}", name="administration_absence_justificatif_change_etat", methods="GET",
     *                                    requirements={"etat"="A|R|D"}, options={"expose":true})
     * @ParamConverter("absenceJustificatif", options={"mapping": {"uuid": "uuid"}})
     */
    public function accepte(
        EventDispatcherInterface $eventDispatcher,
        AbsenceJustificatif $absenceJustificatif,
        $etat
    ): Response {
        $absenceJustificatif->setEtat($etat);
        $this->entityManager->flush();

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

        return new Response('', Response::HTTP_OK);
    }
}
