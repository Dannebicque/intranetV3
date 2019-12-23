<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyAbsences.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 02/04/2018
 * Time: 17:03
 */

namespace App\MesClasses;

use App\Entity\Absence;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\AbsenceRepository;
use App\Repository\EtudiantRepository;
use DateInterval;
use DateTime;
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
        $this->absences = $this->absenceRepository->findBySemestre($semestre, $semestre->getAnneeUniversitaire());


        /** @var Etudiant $etudiant */
        foreach ($this->etudiants as $etudiant) {
            $this->statistiques[$etudiant->getId()] = StatsAbsences::calculsStatsSemestre($this->absences, $etudiant);
        }
    }
}
