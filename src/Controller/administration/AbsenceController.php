<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AbsenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\MyAbsences;
use App\Classes\MyExport;
use App\Classes\StatsAbsences;
use App\Classes\Tools;
use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Event\AbsenceEvent;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use App\Repository\MatiereRepository;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class AbsenceController.
 *
 * @Route("/administration/absence")
 */
class AbsenceController extends BaseController
{
    /**
     * @Route("/semestre/etudiant/{etudiant}", name="administration_absences_liste_absence_etudiant",
     *                                         options={"expose":true})
     *
     * @throws Exception
     */
    public function listeAbsenceEtudiant(
        EtudiantAbsences $etudiantAbsences,
        StatsAbsences $statsAbsences,
        Etudiant $etudiant
    ): Response {
        $etudiantAbsences->setEtudiant($etudiant);

        $absences = $etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($etudiant->getSemestre(),
            $this->dataUserSession->getAnneeUniversitaire());
        $statistiquesAbsences = $statsAbsences->calculStatistiquesAbsencesEtudiant($absences);

        return $this->render('administration/absence/_listeEtudiant.html.twig', [
            'absences'             => $absences,
            'etudiant'             => $etudiant,
            'statistiquesAbsences' => $statistiquesAbsences,
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/liste", name="administration_absences_semestre_liste")
     *
     * @throws Exception
     */
    public function liste(MyAbsences $myAbsences, Semestre $semestre): Response
    {
        $myAbsences->getAbsencesSemestre($semestre);

        return $this->render('administration/absence/liste.html.twig', [
            'semestre' => $semestre,
            'absences' => $myAbsences,
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/justifier", name="administration_absences_semestre_justifier")
     */
    public function justifier(Semestre $semestre): Response
    {
        return $this->render('administration/absence/justifier.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/saisie", name="administration_absences_semestre_saisie")
     */
    public function saisie(Semestre $semestre): Response
    {
        return $this->render('administration/absence/saisie.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/justificatif/export.{_format}", name="administration_absences_semestre_justificatif_export",
     *                                                              requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function exportJustificatif(
        MyExport $myExport,
        AbsenceJustificatifRepository $absenceJustificatifRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $justificatifs = $absenceJustificatifRepository->findBySemestre($semestre);

        return $myExport->genereFichierAbsence($_format, $justificatifs, 'absences_' . $semestre->getLibelle());
    }

    /**
     * @Route("/semestre/{semestre}/export.{_format}", name="administration_absences_semestre_liste_export",
     *                                                 requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     *
     * @throws Exception
     */
    public function export(MyExport $myExport, MyAbsences $myAbsences, Semestre $semestre, $_format): Response
    {
        $myAbsences->getAbsencesSemestre($semestre);

        return $myExport->genereFichierAbsence($_format, $myAbsences, 'absences_' . $semestre->getLibelle());
    }

    /**
     * @Route("/all/semestre/{semestre}/export.{_format}", name="administration_all_absences_semestre_export",
     *                                                     requirements={"_format"="csv|xlsx|pdf"})
     *
     * @param $_format
     */
    public function exportAllAbsences(
        MyExport $myExport,
        AbsenceRepository $absenceRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $absences = $absenceRepository->getBySemestre($semestre, $semestre->getAnneeUniversitaire());

        return $myExport->genereFichierGenerique(
            $_format,
            $absences,
            'absences_' . $semestre->getLibelle(),
            ['absences_administration', 'utilisateur', 'matiere'],
            [
                'date',
                'heure',
                'duree',
                'etudiant'  => ['nom', 'prenom'],
                'justifie',
                'matiere'   => ['libelle'],
                'personnel' => ['nom', 'prenom'],
            ]
        );
    }

    /**
     * @Route("/ajax/justifie/{absence}/{etat}", name="administration_absences_justifie", options={"expose":true})
     */
    public function justifie(
        EventDispatcherInterface $eventDispatcher,
        Absence $absence,
        bool $etat
    ): JsonResponse {
        $absence->setJustifie($etat);
        $this->entityManager->flush();

        if (true === $etat) {
            $event = new AbsenceEvent($absence);
            $eventDispatcher->dispatch($event, AbsenceEvent::JUSTIFIED);
        }

        return $this->json($etat);
    }

    /**
     * @throws Exception
     * @Route("/ajax/addabs",
     *     name="administration_absences_ajax_add",
     *     methods={"POST"},
     *     options={"expose":true})
     */
    public function ajaxAddAbsence(
        MatiereRepository $matiereRepository,
        Request $request,
        EtudiantRepository $etudiantRepository,
        EtudiantAbsences $etudiantAbsences
    ): JsonResponse {
        $etudiant = $etudiantRepository->find($request->request->get('etudiant'));
        if (null !== $etudiant) {
            $matiere = $matiereRepository->find($request->request->get('matiere'));
            if (null !== $matiere) {
                $etudiantAbsences->setEtudiant($etudiant);
                $absence = $etudiantAbsences->addAbsence(
                    Tools::convertDateHeureToObject($request->request->get('date'), $request->request->get('heure')),
                    $matiere,
                    $this->getConnectedUser(),
                    Tools::convertToBool($request->request->get('justif'))
                );
            } else {
                return $this->json('false', Response::HTTP_INTERNAL_SERVER_ERROR);
            }

            return $this->json($absence->getJson(), Response::HTTP_OK);
        }

        return $this->json('false', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}", name="administration_absence_delete", methods="DELETE", options={"expose":true})
     */
    public function delete(Request $request, Absence $absence): Response
    {
        $id = $absence->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($absence);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'absence.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'absence.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
