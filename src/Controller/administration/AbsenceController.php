<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\MesClasses\MyAbsences;
use App\MesClasses\MyExport;
use App\Repository\AbsenceJustificatifRepository;
use App\Repository\AbsenceRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

//todo: utiliser les voters : https://medium.com/@galopintitouan/using-symfony-security-voters-to-check-user-permissions-with-ease-9a48e2d45540

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
     * @param Etudiant $etudiant
     *
     * @return Response
     */
    public function listeAbsenceEtudiant(Etudiant $etudiant): Response
    {
        $tAbs = array();
        foreach ($etudiant->getAbsences() as $abs) {
            $t = array();
            $t['date'] = $abs->getDate() !== null ? $abs->getDate()->format('d/m/Y') : '';
            $t['id'] = $abs->getId();
            $t['heure'] = $abs->getHeure() !== null ? $abs->getHeure()->format('H:i') : '';
            $t['matiere'] = $abs->getMatiere() !== null ? $abs->getMatiere()->getLibelle() : '';
            $t['justifie'] = $abs->isJustifie();
            $tAbs[] = $t;
        }

        return $this->json($tAbs);
    }

    /**
     * @Route("/semestre/{semestre}/liste", name="administration_absences_semestre_liste")
     * @param MyAbsences $myAbsences
     * @param Semestre   $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \Exception
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
     * @return \Symfony\Component\HttpFoundation\Response
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
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function saisie(Semestre $semestre): Response
    {
        return $this->render('administration/absence/saisie.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/semestre/{semestre}/justificatif/export.{_format}", name="administration_absences_semestre_justificatif_export", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport                      $myExport
     * @param AbsenceJustificatifRepository $absenceJustificatifRepository
     * @param Semestre                      $semestre
     *
     * @param                               $_format
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exportJustificatif(MyExport $myExport, AbsenceJustificatifRepository $absenceJustificatifRepository, Semestre $semestre, $_format): Response
    {
        $justificatifs = $absenceJustificatifRepository->findBySemestre($semestre);
        $response = $myExport->genereFichierAbsence($_format, $justificatifs, 'absences_' . $semestre->getLibelle());

        return $response;
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
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     * @throws \Exception
     */
    public function export(MyExport $myExport, MyAbsences $myAbsences, Semestre $semestre, $_format): Response
    {
        $myAbsences->getAbsencesSemestre($semestre);
        $response = $myExport->genereFichierAbsence($_format, $myAbsences, 'absences_' . $semestre->getLibelle());

        return $response;
    }

    /**
     * @Route("/all/semestre/{semestre}/export.{_format}", name="administration_all_absences_semestre_export", requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport          $myExport
     * @param AbsenceRepository $absenceRepository
     * @param Semestre          $semestre
     *
     * @param                   $_format
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exportAllAbsences(
        MyExport $myExport,
        AbsenceRepository $absenceRepository,
        Semestre $semestre,
        $_format
    ): Response {
        $absences = $absenceRepository->findBySemestre($semestre, $semestre->getAnneeUniversitaire());
        $response = $myExport->genereFichierGenerique(
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

        return $response;
    }

    /**
     * @param Absence $absence
     * @param         $etat
     * @Route("/ajax/justifie/{absence}/{etat}", name="administration_absences_justifie", options={"expose":true})
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function justifie(Absence $absence, bool $etat): \Symfony\Component\HttpFoundation\JsonResponse
    {
        $absence->setJustifie($etat);
        $this->entityManager->flush();
        return $this->json($etat);
    }
}
