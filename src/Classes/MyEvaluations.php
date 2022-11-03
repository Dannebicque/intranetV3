<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyEvaluations.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2022 11:06
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Matieres\TypeMatiereManager;
use App\DTO\Matiere;
use App\Entity\AnneeUniversitaire;
use App\Entity\Evaluation;
use App\Entity\Semestre;
use App\Repository\EvaluationRepository;
use function array_key_exists;

/**
 * Class MyEvaluations.
 */
class MyEvaluations
{
    private Semestre $semestre;

    private Matiere $matiere;

    /**
     * @var Evaluation[]
     */
    private array $evaluations = [];

    private array $statistiques = [];

    /**
     * MyEvaluations constructor.
     */
    public function __construct(
        private readonly MyEvaluation $myEvaluation,
        private readonly TypeMatiereManager $typeMatiereManager,
        private readonly EvaluationRepository $evaluationRespository
    ) {
    }

    public function setSemestre(Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function setMatiere(Matiere $matiere): void
    {
        $this->matiere = $matiere;
    }

    public function getMatieresSemestre(): array
    {
        if ($this->semestre->getDiplome()->isApc()) {
            return $this->typeMatiereManager->findBySemestreAndReferentiel($this->semestre,
                $this->semestre->getDiplome()->getReferentiel());
        }

        return $this->typeMatiereManager->findBySemestre($this->semestre);

    }

    public function getEvaluationsSemestre(Semestre $semestre, AnneeUniversitaire $anneeUniversitaire): array
    {
        $evaluations = $this->evaluationRespository->findByReferentielOrdreSemestre($semestre->getDiplome()?->getReferentiel(), $semestre->getOrdreLmd(),
            $anneeUniversitaire);
        $tab = [];
        /** @var Evaluation $eval */
        foreach ($evaluations as $eval) {
            if (0 !== $eval->getIdMatiere()) {
                $matiereId = $eval->getTypeIdMatiere();
                if (!array_key_exists($matiereId, $tab)) {
                    $tab[$matiereId] = [];
                }

                $tab[$matiereId][] = $eval;
                $this->statistiques[$eval->getId()] = $this->myEvaluation->setEvaluation($eval)->calculStatistiquesGlobales()->getStatistiques();
            }
        }

        return $tab;
    }

    public function getEvaluationsMatiere(?AnneeUniversitaire $anneeUniversitaire): void
    {
        $this->evaluations = $this->evaluationRespository->findByMatiere($this->matiere->id,
            $this->matiere->typeMatiere, $anneeUniversitaire);

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
