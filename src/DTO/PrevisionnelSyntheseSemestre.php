<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/PrevisionnelSyntheseSemestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/07/2024 16:10
 */

namespace App\DTO;

use App\Entity\Semestre;

/**
 * Class PrevisionnelSynthesePersonnel.
 */
class PrevisionnelSyntheseSemestre
{
    public array $matieres = [];

    public float $totalPreviCM = 0;
    public float $totalPreviTD = 0;
    public float $totalPreviTP = 0;

    public int $nbGrCm = 0;
    public int $nbGrTd = 0;
    public int $nbGrTp = 0;

    public function __construct(
        private Semestre $semestre)
    {
        $this->nbGrCm = $semestre->getNbGroupesCm();
        $this->nbGrTd = $semestre->getNbGroupesTd();
        $this->nbGrTp = $semestre->getNbGroupesTp();
    }


    public function addPrevisionnelSemestre(Previsionnel $previsionnelMatiere, Matiere $matiere): void
    {
        if (!array_key_exists($previsionnelMatiere->getTypeIdMatiere(), $this->matieres)) {
            $this->matieres[$previsionnelMatiere->getTypeIdMatiere()] = new PrevisionnelSyntheseMatiere($previsionnelMatiere, $matiere, $this->semestre);
        }

        $this->matieres[$previsionnelMatiere->getTypeIdMatiere()]->addPrevisionnelMatiere($previsionnelMatiere);
        $this->addPrevisionnel($previsionnelMatiere);
    }

    private function addPrevisionnel(Previsionnel $previsionnelMatiere): void
    {
        $this->totalPreviCM += $previsionnelMatiere->getTotalHCm();
        $this->totalPreviTD += $previsionnelMatiere->getTotalHTd();
        $this->totalPreviTP += $previsionnelMatiere->getTotalHTp();
    }

    public function totalPrevi(): float
    {
        return $this->totalPreviCM + $this->totalPreviTD + $this->totalPreviTP;
    }

    public function matieresTries(): array
    {
        usort($this->matieres, static function ($a, $b) {
            return $a->display <=> $b->display;
        });

        return $this->matieres;
    }
}
