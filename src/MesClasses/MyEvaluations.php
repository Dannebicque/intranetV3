<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 02/04/2018
 * Time: 17:24
 */

namespace App\MesClasses;


use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
use App\Repository\MatiereRepository;

class MyEvaluations
{
    /**
     * @var Semestre
     */
    private $semestre;

    /**
     * @var MatiereRepository
     */
    private $matiereRepository;

    /**
     * @var EvaluationRepository
     */
    private $evaluationRespository;

    /**
     * MyEvaluations constructor.
     *
     * @param MatiereRepository    $matiereRepository
     * @param EvaluationRepository $evaluationRespository
     */
    public function __construct(MatiereRepository $matiereRepository, EvaluationRepository $evaluationRespository)
    {
        $this->matiereRepository = $matiereRepository;
        $this->evaluationRespository = $evaluationRespository;
    }


    /**
     * @param $semestre
     */
    public function setSemestre($semestre): void
    {
        $this->semestre = $semestre;
    }

    /**
     * @return Matiere[]
     */
    public function getMatieresSemestre(): array
    {
        return $this->matiereRepository->findBySemestre($this->semestre);
    }

    /**
     * @return array
     */
    public function getEvaluationsSemestre(): array
    {
        $evaluations = $this->evaluationRespository->findBySemestre($this->semestre);
        $tab = array();
        /** @var Evaluation $eval */
        foreach ($evaluations as $eval) {
            if ($eval->getMatiere() !== null) {
                $matiereId = $eval->getMatiere()->getId();
                if (!array_key_exists($matiereId, $tab)) {
                    $tab[$matiereId] = array();
                }

                $tab[$matiereId][] = $eval;
            }
        }

        return $tab;
    }

}