<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyAbsences.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:36

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 02/04/2018
 * Time: 17:03
 */

namespace App\Classes;

use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use Exception;

/**
 * Class MyAbsences
 * @package App\MesClasses
 */
class MyAbsences
{
    /** @var AbsenceRepository */
    private $absenceRepository;

    /** @var EtudiantRepository */
    private $etudiantRepository;

    /** @var array */
    private $statistiques = array();

    /**
     * @var Etudiant[]
     */
    private $etudiants;

    /** @var Absence[] */
    private $absences;

    /**
     * MyAbsences constructor.
     *
     * @param AbsenceRepository  $absenceRepository
     * @param EtudiantRepository $etudiantRepository
     */
    public function __construct(AbsenceRepository $absenceRepository, EtudiantRepository $etudiantRepository)
    {
        $this->absenceRepository = $absenceRepository;
        $this->etudiantRepository = $etudiantRepository;
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
    public function getAbsencesMatiere($matiere, $anneeCourante)
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
}
