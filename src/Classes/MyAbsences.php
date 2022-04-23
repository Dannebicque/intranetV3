<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAbsences.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 21:29
 */

namespace App\Classes;

use App\Classes\Etudiant\EtudiantAbsences;
use App\Classes\Excel\MyExcelMultiExport;
use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use Exception;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Class MyAbsences.
 */
class MyAbsences
{
    private array $statistiques = [];

    /**
     * @var Etudiant[]
     */
    private array $etudiants;


    /**
     * MyAbsences constructor.
     */
    public function __construct(
        private AbsenceRepository $absenceRepository,
        private EtudiantRepository $etudiantRepository,
        private MyExcelMultiExport $myExcelMultiExport,
        private EtudiantAbsences $etudiantAbsences
    ) {
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

    public function getAbsencesMatiere(\App\DTO\Matiere $matiere, AnneeUniversitaire $anneeCourante, ?Semestre $semestre = null): array
    {
        return $this->absenceRepository->getByMatiere($matiere, $anneeCourante, $semestre);
    }

    /**
     * @throws Exception
     */
    public function getAbsencesSemestre(array $matieres, Semestre $semestre): void
    {
        $this->etudiants = $this->etudiantRepository->findBySemestre($semestre);

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
        \App\DTO\Matiere $matiere,
        AnneeUniversitaire $anneeUniversitaire,
        Semestre $semestre,
        string $_format
    ): bool | StreamedResponse {
        $absences = $this->getAbsencesMatiere($matiere, $anneeUniversitaire, $semestre);
        $name = 'absences-'.$matiere->codeMatiere;
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

    public function getAbsencesTempsReel(?Departement $departement): array
    {
        return $this->absenceRepository->getAbsencesTempsReel($departement);
    }
}
