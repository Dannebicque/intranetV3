<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAbsences.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/08/2020 10:27

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 02/04/2018
 * Time: 17:03
 */

namespace App\Classes;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Excel\MyExcelMultiExport;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
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
    private AbsenceRepository $absenceRepository;

    private EtudiantRepository $etudiantRepository;

    private array $statistiques = [];

    /**
     * @var Etudiant[]
     */
    private $etudiants;

    /**
     * @var MyExcelMultiExport
     */
    private MyExcelMultiExport $myExcelMultiExport;
    /**
     * @var EtudiantAbsences
     */
    private EtudiantAbsences $etudiantAbsences;

    /**
     * MyAbsences constructor.
     *
     * @param AbsenceRepository  $absenceRepository
     * @param EtudiantRepository $etudiantRepository
     * @param MyExcelMultiExport $myExcelMultiExport
     * @param EtudiantAbsences   $etudiantAbsences
     */
    public function __construct(
        AbsenceRepository $absenceRepository,
        EtudiantRepository $etudiantRepository,
        MyExcelMultiExport $myExcelMultiExport,
        EtudiantAbsences $etudiantAbsences
    ) {
        $this->absenceRepository = $absenceRepository;
        $this->etudiantRepository = $etudiantRepository;
        $this->myExcelMultiExport = $myExcelMultiExport;
        $this->etudiantAbsences = $etudiantAbsences;
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

        /** @var Etudiant $etudiant */
        foreach ($this->etudiants as $etudiant) {
            $this->etudiantAbsences->setEtudiant($etudiant);
            $absencesEtudiant = $this->etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($semestre,
                $semestre->getAnneeUniversitaire());
            $statistiques = new StatsAbsences();
            $this->statistiques[$etudiant->getId()] = $statistiques->calculStatistiquesAbsencesEtudiant($absencesEtudiant);
        }
    }

    public function export(
        Matiere $matiere,
        AnneeUniversitaire $anneeUniversitaire,
        $_format
    ) {
        $absences = $this->getAbsencesMatiere($matiere, $anneeUniversitaire);
        $name = 'absences-' . $matiere->getCodeMatiere();
        switch ($_format) {
            case Constantes::FORMAT_PDF:
                $this->myExcelMultiExport->genereReleveAbsencesMatiereExcel(
                    $absences
                );

                return $this->myExcelMultiExport->savePdf($name);
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
