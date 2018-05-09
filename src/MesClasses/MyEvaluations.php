<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 02/04/2018
 * Time: 17:24
 */

namespace App\MesClasses;


use App\Entity\Semestre;

class MyEvaluations
{
    /**
     * @var Semestre
     */
    private $semestre;

    /**
     * @param $semestre
     */
    public function setSemestre($semestre): void
    {
        $this->semestre = $semestre;
    }

    public function getMatieresSemestre()
    {
        return null;
    }

    public function getEvaluationsSemestre()
    {
        return null;
    }

}