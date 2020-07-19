<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAbsences.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 19/07/2020 08:23

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 02/04/2018
 * Time: 17:03
 */

namespace App\Classes;

use App\Classes\Excel\MyExcelMultiExport;
use App\Classes\Pdf\MyPDF;
use App\Entity\Absence;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use Exception;

/**
 * Class MyAbsences
 * @package App\Classes
 */
class MyAbsences
{
    /** @var AbsenceRepository */
    private $absenceRepository;

    /** @var EtudiantRepository */
    private $etudiantRepository;

    /** @var array */
    private $statistiques = [];

    /**
     * @var Etudiant[]
     */
    private $etudiants;

    /** @var Absence[] */
    private $absences;
    private MyPDF $myPdf;
    /**
     * @var MyExcelMultiExport
     */
    private MyExcelMultiExport $myExcelMultiExport;

    /**
     * MyAbsences constructor.
     *
     * @param AbsenceRepository $absenceRepository
     * @param EtudiantRepository $etudiantRepository
     */
    public function __construct(
        AbsenceRepository $absenceRepository,
        EtudiantRepository $etudiantRepository,
        MyPDF $myPdf,
        MyExcelMultiExport $myExcelMultiExport
    ) {
        $this->absenceRepository = $absenceRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->myPdf = $myPdf;
        $this->myExcelMultiExport = $myExcelMultiExport;
    }

    /**
     * @return array
     */
    public function getStatistiques(): array
    {
        return $this->statistiques;
    }

    /**
     * @return Etudiant[]
     */
    public function getEtudiants(): array
    {
        return $this->etudiants;
    }

    /**
     * @return Absence[]
     */
    public function getAbsences(): array
    {
        return $this->absences;
    }


    /**
     * @param $matiere
     * @param $anneeCourante
     *
     * @return mixed
     */
    public function getAbsencesMatiere(Matiere $matiere, AnneeUniversitaire $anneeCourante)
    {
        return $this->absenceRepository->getByMatiere($matiere, $anneeCourante);
    }

    /**
     * @param Semestre $semestre
     *
     * @throws Exception
     */
    public function getAbsencesSemestre(Semestre $semestre): void
    {
        $this->etudiants = $this->etudiantRepository->findBySemestre($semestre->getId());
        $this->absences = $this->absenceRepository->getBySemestre($semestre, $semestre->getAnneeUniversitaire());


        /** @var Etudiant $etudiant */
        foreach ($this->etudiants as $etudiant) {
            $this->statistiques[$etudiant->getId()] = StatsAbsences::calculsStatsSemestre($this->absences, $etudiant);
        }
    }

    public function export(
        Matiere $matiere,
        AnneeUniversitaire $anneeUniversitaire,
        $_format,
        Departement $departement
    ) {
        $absences = $this->getAbsencesMatiere($matiere, $anneeUniversitaire);
        $name = 'absences-' . $matiere->getCodeMatiere();
        switch ($_format) {
            case Constantes::FORMAT_PDF:
                $this->myPdf::generePdf('pdf/absencesMatiere.html.twig', [
                    'absences' => $absences,
                ], $name, $departement->getLibelle());
                break;
            case Constantes::FORMAT_EXCEL:
                $this->myExcelMultiExport->genereReleveAbsencesMatiereExcel(
                    $absences
                );

                return $this->myExcelMultiExport->saveXlsx($name);
                break;
            case Constantes::FORMAT_CSV_POINT_VIRGULE:
                $this->myExcelMultiExport->genereReleveAbsencesMatiereExcel(
                    $absences
                );

                return $this->myExcelMultiExport->saveCsv($name);
                break;
        }
    }

}
