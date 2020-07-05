<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/StageEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Event;

use App\Entity\StageEtudiant;
use Symfony\Contracts\EventDispatcher\Event;

class StageEvent extends Event
{
    public const CHGT_ETAT_STAGE_AUTORISE = 'chgt.etat_stage.autorise';
    public const CHGT_ETAT_STAGE_DEPOSE = 'chgt.etat_stage.depose';
    public const CHGT_ETAT_STAGE_VALIDE = 'chgt.etat_stage.valide';
    public const CHGT_ETAT_STAGE_IMPRIME = 'chgt.etat_stage.imprime';
    public const CHGT_ETAT_STAGE_CONVENTION_ENVOYEE = 'chgt.etat_stage.convention_envoyee';
    public const CHGT_ETAT_CONVENTION_RECUE = 'chgt.etat_stage.convention_recue';

    /** @var StageEtudiant */
    protected $stageEtudiant;

    public function __construct(StageEtudiant $stageEtudiant)
    {
        $this->stageEtudiant = $stageEtudiant;
    }

    public function getStageEtudiant(): StageEtudiant
    {
        return $this->stageEtudiant;
    }
}
