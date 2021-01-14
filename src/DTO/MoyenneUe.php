<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/MoyenneUe.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/01/2021 19:29

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
     * @param Ue $ue
     * @param    $penalite
     */
    public function __construct(Ue $ue, $penalite)
    {
        $this->ue = $ue;
        $this->penalite = $penalite;
    }

    public function addMatiere(MoyenneMatiere $moyenneMatiere)
    {
        if ($moyenneMatiere->optionFaite && $moyenneMatiere->matiere->isPac() === false) {
            $this->totalMatiere += $moyenneMatiere->getMoyenne() * $moyenneMatiere->matiere->getCoefficient();
            $this->totalMatierePenalisee += $moyenneMatiere->getMoyennePenalisee() * $moyenneMatiere->matiere->getCoefficient();
            $this->totalCoefficient += $moyenneMatiere->matiere->getCoefficient();
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

    /**
     *
     * @return string
     */
    public function getStyleMoyennePenalisee(): string
    {
        return $this->style($this->getMoyennePenalisee());

    }

    public function getMoyennePenalisee()
    {
        return $this->totalCoefficient > 0 ? $this->totalMatierePenalisee / $this->totalCoefficient : -0.01;
    }
}
