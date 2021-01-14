<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/Scolarite.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/01/2021 15:09

namespace App\DTO;


use App\Entity\Constantes;

class Scolarite
{
    public ?string $decision;
    public array $parcoursUe = [];
    public ?string $styleDecision;
    public ?float $moyenne;
    public ?string $styleMoyenne;

    public function __construct(\App\Entity\Scolarite $scolarite)
    {
        $this->decision = $scolarite->getDecision();
        $this->styleDecision = $this->getStyle($scolarite->getDecision());
        $this->moyenne = $scolarite->getMoyenne();
        $this->styleMoyenne = $this->getStyleNote($scolarite->getMoyenne());

        foreach ($scolarite->getSemestre()->getUes() as $ue) {
            $this->parcoursUe[$ue->getId()] = $scolarite->getMoyennesUeSousComm($ue->getId());
        }
    }

    private function getStyle($decision): string
    {
        switch ($decision) {
            case Constantes::SEMESTRE_VALIDE:
                return 'badge badge-success';
            case Constantes::SEMESTRE_NON_VALIDE:
                return 'badge badge-danger';
            case Constantes::SEMESTRE_VCA:
            case Constantes::SEMESTRE_VCJ:
                return 'badge badge-warning';
            default:
                return '';
        }
    }

    public function getStyleNote($note)
    {

        if ($note < 10) {
            return 'badge badge-danger';
        }

        return 'notenormale';

    }

}
