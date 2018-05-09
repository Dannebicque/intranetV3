<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 02/04/2018
 * Time: 17:03
 */

namespace App\MesClasses;


use App\Repository\AbsenceRepository;

class MyAbsences
{
    private $absenceRepository;

    /**
     * MyAbsences constructor.
     *
     * @param $absenceRepository
     */
    public function __construct(AbsenceRepository $absenceRepository)
    {
        $this->absenceRepository = $absenceRepository;
    }


    public function getAbsencesMatiere($matiere, $anneeCourante)
    {
        return $this->absenceRepository->getAbsencesMatiere($matiere, $anneeCourante);
    }
}