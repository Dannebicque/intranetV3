<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/MoyenneUe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 15:38
 */

namespace App\DTO;

use App\Entity\Ue;

class MoyenneUe
{
    public Ue $ue;

    public float $totalMatiere = 0;
    public float $totalMatierePenalisee = 0;
    public float $totalCoefficient = 0;
    private float $penalite;

    /**
     * MoyenneUe constructor.
     *
     */
    public function __construct(Ue $ue, $penalite)
    {
        $this->ue = $ue;
        $this->penalite = $penalite;
    }

    public function addMatiere(MoyenneMatiere $moyenneMatiere)
    {
        if ($moyenneMatiere->optionFaite && false === $moyenneMatiere->matiere->pac) {
            $this->totalMatiere += $moyenneMatiere->getMoyenne() * $moyenneMatiere->matiere->coefficient;
            $this->totalMatierePenalisee += $moyenneMatiere->getMoyennePenalisee() * $moyenneMatiere->matiere->coefficient;
            $this->totalCoefficient += $moyenneMatiere->matiere->coefficient;
        }
    }

    public function getStyleMoyenne(): string
    {
        return $this->style($this->getMoyenne());
    }

    private function style($note): string
    {
        if ($note <= 8) {
            return 'badge badge-danger';
        }

        if ($note <= 10) {
            return 'badge badge-warning';
        }

        return '';
    }

    public function getMoyenne()
    {
        return $this->totalCoefficient > 0 ? $this->totalMatiere / $this->totalCoefficient : -0.01;
    }

    public function getStyleMoyennePenalisee(): string
    {
        return $this->style($this->getMoyennePenalisee());
    }

    public function getMoyennePenalisee()
    {
        return $this->totalCoefficient > 0 ? $this->totalMatierePenalisee / $this->totalCoefficient : -0.01;
    }
}
