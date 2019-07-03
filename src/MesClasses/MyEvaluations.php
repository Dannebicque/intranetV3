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

/**
 * Class MyEvaluations
 * @package App\MesClasses
 */
class MyEvaluations
{
    /**
     * @var Semestre
     */
    private $semestre;

    /** @var Matiere */
    private $matiere;

    /**
     * @var Evaluation[]
     */
    private $evaluations = [];

    /**
     * @var array
     */
    private $statistiques = [];

    /**
     * @var MatiereRepository
     */
    private $matiereRepository;

    /** @var MyEvaluation */
    private $myEvaluation;

    /**
     * @var EvaluationRepository
     */
    private $evaluationRespository;

    /**
     * MyEvaluations constructor.
     *
     * @param MyEvaluation         $myEvaluation
     * @param MatiereRepository    $matiereRepository
     * @param EvaluationRepository $evaluationRespository
     */
    public function __construct(
        MyEvaluation $myEvaluation,
        MatiereRepository $matiereRepository,
        EvaluationRepository $evaluationRespository
    ) {
        $this->matiereRepository = $matiereRepository;
        $this->evaluationRespository = $evaluationRespository;
        $this->myEvaluation = $myEvaluation;
    }


    /**
     * @param $semestre
     */
    public function setSemestre($semestre)
    {
        $this->semestre = $semestre;
        return $this;
    }

    /**
     * @param Matiere $matiere
     */
    public function setMatiere(Matiere $matiere): void
    {
        $this->matiere = $matiere;
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
                $this->statistiques[$eval->getId()] = $this->myEvaluation->setEvaluation($eval)->calculStatistiquesGlobales()->getStatistiques();
            }
        }

        return $tab;
    }

    /**
     * @param $annee
     */
    public function getEvaluationsMatiere($annee): void
    {
        $this->evaluations = $this->evaluationRespository->findByMatiere($this->matiere, $annee);

        foreach ($this->getEvaluations() as $evaluation) {
            $this->statistiques[$evaluation->getId()] = $this->myEvaluation->setEvaluation($evaluation)->calculStatistiquesGlobales()->getStatistiques();
        }
        //dump($this->statistiques);
    }

    /**
     * @return Evaluation[]
     */
    public function getEvaluations(): array
    {
        return $this->evaluations;
    }

    /**
     * @return array
     */
    public function getStatistiques(): array
    {
        return $this->statistiques;
    }
}
