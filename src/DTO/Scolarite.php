<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/Scolarite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 17:46
 */

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
        $this->decision = $scolarite->getDecision()->value;
        $this->styleDecision = $this->getStyle($scolarite->getDecision());
        $this->moyenne = $scolarite->getMoyenne();
        $this->styleMoyenne = $this->getStyleNote($scolarite->getMoyenne());

        foreach ($scolarite->getSemestre()->getUes() as $ue) {
            $this->parcoursUe[$ue->getNumeroUe()] = $scolarite->getMoyennesUeSousComm($ue->getId());
        }
    }

    private function getStyle(string $decision): string
    {
        return match ($decision) {
            Constantes::SEMESTRE_VALIDE => 'badge bg-success',
            Constantes::SEMESTRE_NON_VALIDE => 'badge bg-danger',
            Constantes::SEMESTRE_VCA, Constantes::SEMESTRE_VCJ => 'badge bg-warning',
            default => '',
        };
    }

    public function getStyleNote(float $note): string
    {
        if ($note < 10) {
            return 'badge bg-danger';
        }

        return 'notenormale';
    }
}
