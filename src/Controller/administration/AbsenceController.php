<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AbsenceController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/10/2020 15:10

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
 * Class AbsenceController
 * @package App\Controller\administration
 * @Route("/administration/absence")
 */
class AbsenceController extends BaseController
{
    /**
     * @Route("/semestre/etudiant/{etudiant}", name="administration_absences_liste_absence_etudiant",
     *                                         options={"expose":true})
     * @param EtudiantAbsences $etudiantAbsences
     * @param StatsAbsences    $statsAbsences
     * @param Etudiant         $etudiant
     *
     * @return Response
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
            'statistiquesAbsences' => $statistiquesAbsences
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/liste", name="administration_absences_semestre_liste")
     * @param MyAbsences $myAbsences
     * @param Semestre   $semestre
     *
     * @return Response
     * @throws Exception
     */
    public function liste(MyAbsences $myAbsences, Semestre $semestre): Response
    {
        $myAbsences->getAbsencesSemestre($semestre);

        return $this->render('administration/absence/liste.html.twig', [
            'semestre' => $semestre,
            'absences' => $myAbsences
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/justifier", name="administration_absences_semestre_justifier")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function justifier(Semestre $semestre): Response
    {
        return $this->render('administration/absence/justifier.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/saisie", name="administration_absences_semestre_saisie")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function saisie(Semestre $semestre): Response
    {
        return $this->render('administration/absence/saisie.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/justificatif/export.{_format}", name="administration_absences_semestre_justificatif_export",
     *                                                              requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport                      $myExport
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     * @param Semestre                      $semestre
     *
     * @param                               $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
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
     * @param MyExport   $myExport
     * @param MyAbsences $myAbsences
     * @param Semestre   $semestre
     *
     * @param            $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
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
     * @param MyExport          $myExport
     * @param AbsenceRepository $absenceRepository
     * @param Semestre          $semestre
     *
     * @param                   $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
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
                'personnel' => ['nom', 'prenom']
            ]
        );
    }

    /**
     * @param EventDispatcherInterface $eventDispatcher
     * @param Absence                  $absence
     * @param bool                     $etat
     *
     * @return JsonResponse
     * @Route("/ajax/justifie/{absence}/{etat}", name="administration_absences_justifie", options={"expose":true})
     *
     */
    public function justifie(
        EventDispatcherInterface $eventDispatcher,
        Absence $absence,
        bool $etat
    ): JsonResponse {
        $absence->setJustifie($etat);
        $this->entityManager->flush();

        if ($etat === true) {
            $event = new AbsenceEvent($absence);
            $eventDispatcher->dispatch($event, AbsenceEvent::JUSTIFIED);
        }

        return $this->json($etat);
    }

    /**
     * @param MatiereRepository  $matiereRepository
     * @param Request            $request
     *
     *
     * @param EtudiantRepository $etudiantRepository
     * @param EtudiantAbsences   $etudiantAbsences
     *
     * @return JsonResponse
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
        if ($etudiant !== null) {
            $matiere = $matiereRepository->find($request->request->get('matiere'));
            if ($matiere !== null) {
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
     * @param Request $request
     * @param Absence $absence
     *
     * @return Response
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
