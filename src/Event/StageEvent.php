<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Event/StageEvent.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 17:18

namespace App\Event;

use App\Entity\StageEtudiant;
use Symfony\Contracts\EventDispatcher\Event;

class StageEvent extends Event
{
    public const CHGT_ETAT_STAGE_AUTORISE = 'chgt.etat_stage_autorise';
    public const CHGT_ETAT_STAGE_DEPOSE = 'chgt.etat_stage_depose';
    public const CHGT_ETAT_STAGE_VALIDE = 'chgt.etat_stage_valide';
    public const CHGT_ETAT_STAGE_CONVENTION_IMPRIME = 'chgt.etat_stage_convention_imprimee';
    public const CHGT_ETAT_STAGE_CONVENTION_ENVOYEE = 'chgt.etat_stage_convention_envoyee';
    public const CHGT_ETAT_CONVENTION_RECUE = 'chgt.etat_stage_convention_recue';

    public const EQ_ETATS = [
        self::CHGT_ETAT_STAGE_AUTORISE           => StageEtudiant::ETAT_STAGE_AUTORISE,
        self::CHGT_ETAT_STAGE_DEPOSE             => StageEtudiant::ETAT_STAGE_DEPOSE,
        self::CHGT_ETAT_STAGE_VALIDE             => StageEtudiant::ETAT_STAGE_VALIDE,
        self::CHGT_ETAT_STAGE_CONVENTION_IMPRIME => StageEtudiant::ETAT_STAGE_CONVENTION_IMPRIME,
        self::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE => StageEtudiant::ETAT_STAGE_CONVENTION_ENVOYEE,
        self::CHGT_ETAT_CONVENTION_RECUE         => StageEtudiant::ETAT_STAGE_CONVENTION_RECUE
    ];

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
