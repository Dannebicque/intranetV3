<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyEvaluations.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:10
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\AnneeUniversitaire;
use App\Entity\Evaluation;
use App\Entity\Matiere;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
use App\Repository\MatiereRepository;

/**
 * Class MyEvaluations.
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
    public function setSemestre($semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

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

    public function getEvaluationsSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        $evaluations = $this->evaluationRespository->findBySemestre($semestre,
            $anneeUniversitaire);
        $tab = [];
        /** @var Evaluation $eval */
        foreach ($evaluations as $eval) {
            if (null !== $eval->getMatiere()) {
                $matiereId = $eval->getMatiere()->getId();
                if (!\array_key_exists($matiereId, $tab)) {
                    $tab[$matiereId] = [];
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
    }

    /**
     * @return Evaluation[]
     */
    public function getEvaluations(): array
    {
        return $this->evaluations;
    }

    public function getStatistiques(): array
    {
        return $this->statistiques;
    }
}
