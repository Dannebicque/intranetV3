<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelSynthese.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2021 21:52
 */

namespace App\Classes\Previsionnel;

use App\Entity\Personnel;

/**
 * Class PrevisionnelSynthese.
 */
class PrevisionnelSynthese
{
    private float $totalCm = 0.0;
    private float $totalTd = 0.0;
    private float $totalTp = 0.0;
    private float $totalEtuCm = 0.0;
    private float $totalEtuTd = 0.0;
    private float $totalEtuTp = 0.0;
    private float $totalHrs = 0.0;

    private Personnel $personnel;

    public function getTotalCm(): float
    {
        return $this->totalCm;
    }

    public function getTotalTd(): float
    {
        return $this->totalTd;
    }

    public function getTotalTp(): float
    {
        return $this->totalTp;
    }

    public function getTotalEtu(): float
    {
        return $this->totalEtuCm + $this->totalEtuTd + $this->totalEtuTp;
    }

    public function getTotalEtuCm(): float
    {
        return $this->totalEtuCm;
    }

    public function getTotalEtuTd(): float
    {
        return $this->totalEtuTd;
    }

    public function getTotalEtuTp(): float
    {
        return $this->totalEtuTp;
    }

    public function getTotalHrs(): float
    {
        return $this->totalHrs;
    }

    public function getNbHeuresComplementaires(): float
    {
        $tot = $this->getTotalService() - $this->personnel->getNbHeuresService();

        return $tot < 0 ? 0 : $tot;
    }

    public function getTotalService(): float
    {
        return $this->totalCm + $this->totalTd + $this->totalTp;
    }

    public function getTotalHrsService(): float
    {
        return $this->totalHrs + $this->getTotalService();
    }

    /**
     * @param $annee
     */
    public function getHrsEnseignant(array $hrs): PrevisionnelSynthese
    {
        foreach ($hrs as $hr) {
            $this->totalHrs += $hr->getNbHeuresTd();
        }

        return $this;
    }

    public function getSynthese(array $previsionnels, Personnel $personnel): PrevisionnelSynthese
    {
        $this->personnel = $personnel;

        foreach ($previsionnels as $pr) {
            $this->totalCm += $pr->getTotalHCm();
            $this->totalTd += $pr->getTotalHTd();
            $this->totalTp += $pr->getTotalHTp();
        }


        return $this;
    }

    public function getSyntheseMatiere($previsionnel): PrevisionnelSynthese
    {
        foreach ($previsionnel->previsionnels as $pr) {
            $this->totalCm += $pr->getTotalHCm();
            $this->totalTd += $pr->getTotalHTd();
            $this->totalTp += $pr->getTotalHTp();

            $this->totalEtuCm += $pr->nbHCm;
            $this->totalEtuTd += $pr->nbHTd;
            $this->totalEtuTp += $pr->nbHTp;
        }

        return $this;
    }

    public function getSyntheseSemestre($previsionnel): PrevisionnelSynthese
    {
        foreach ($previsionnel as $pr) {
            $this->totalCm += $pr->getTotalHCm();
            $this->totalTd += $pr->getTotalHTd();
            $this->totalTp += $pr->getTotalHTp();

            $this->totalEtuCm += $pr->nbHCm;
            $this->totalEtuTd += $pr->nbHTd;
            $this->totalEtuTp += $pr->nbHTp;
        }

        return $this;
    }
}
