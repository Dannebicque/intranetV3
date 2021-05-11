<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAbsences.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
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
 * Class MyAbsences.
 */
class MyAbsences
{
    private AbsenceRepository $absenceRepository;

    private EtudiantRepository $etudiantRepository;

    private array $statistiques = [];

    /**
     * @var Etudiant[]
     */
    private array $etudiants;

    private MyExcelMultiExport $myExcelMultiExport;

    private EtudiantAbsences $etudiantAbsences;

    /**
     * MyAbsences constructor.
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

    public function getAbsencesMatiere(Matiere $matiere, AnneeUniversitaire $anneeCourante)
    {
        return $this->absenceRepository->getByMatiere($matiere, $anneeCourante);
    }

    /**
     * @throws Exception
     */
    public function getAbsencesSemestre(array $matieres, Semestre $semestre): void
    {
        $this->etudiants = $this->etudiantRepository->findBySemestre($semestre->getId());

        /** @var Etudiant $etudiant */
        foreach ($this->etudiants as $etudiant) {
            $this->etudiantAbsences->setEtudiant($etudiant);
            $absencesEtudiant = $this->etudiantAbsences->getAbsencesParSemestresEtAnneeUniversitaire($matieres,
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
            case Constantes::FORMAT_EXCEL:
                $this->myExcelMultiExport->genereReleveAbsencesMatiereExcel(
                    $absences
                );

                return $this->myExcelMultiExport->saveXlsx($name);
            case Constantes::FORMAT_CSV_POINT_VIRGULE:
                $this->myExcelMultiExport->genereReleveAbsencesMatiereExcel(
                    $absences
                );

                return $this->myExcelMultiExport->saveCsv($name);
        }

        return false;
    }
}
