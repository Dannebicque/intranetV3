<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/StageEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Entity\StageEtudiant;
use Symfony\Contracts\EventDispatcher\Event;

class StageEvent extends Event
{
    public final const CHGT_ETAT_STAGE_AUTORISE = 'chgt.etat_stage_autorise';
    public final const CHGT_ETAT_STAGE_DEPOSE = 'chgt.etat_stage_depose';
    public final const CHGT_ETAT_STAGE_VALIDE = 'chgt.etat_stage_valide';
    public final const CHGT_ETAT_STAGE_CONVENTION_IMPRIMEE = 'chgt.etat_stage_convention_imprimee';
    public final const CHGT_ETAT_STAGE_CONVENTION_ENVOYEE = 'chgt.etat_stage_convention_envoyee';
    public final const CHGT_ETAT_CONVENTION_RECUE = 'chgt.etat_stage_convention_recue';
    public final const CHGT_ETAT_STAGE_INCOMPLET = 'chgt.etat_stage_incomplet';
    public final const CHGT_ETAT_STAGE_REFUS = 'chgt.etat_stage_refuse';
    public final const CONVENTION_STAGE_ENVOYEE = 'envoyer.convention';

    public final const EQ_ETATS = [
        self::CHGT_ETAT_STAGE_AUTORISE => StageEtudiant::ETAT_STAGE_AUTORISE,
        self::CHGT_ETAT_STAGE_DEPOSE => StageEtudiant::ETAT_STAGE_DEPOSE,
        self::CHGT_ETAT_STAGE_VALIDE => StageEtudiant::ETAT_STAGE_VALIDE,
        self::CHGT_ETAT_STAGE_CONVENTION_IMPRIMEE => StageEtudiant::ETAT_STAGE_CONVENTION_IMPRIMEE,
        self::CHGT_ETAT_STAGE_CONVENTION_ENVOYEE => StageEtudiant::ETAT_STAGE_CONVENTION_ENVOYEE,
        self::CHGT_ETAT_CONVENTION_RECUE => StageEtudiant::ETAT_STAGE_CONVENTION_RECUE,
        self::CHGT_ETAT_STAGE_INCOMPLET => StageEtudiant::ETAT_STAGE_INCOMPLET,
        self::CHGT_ETAT_STAGE_REFUS => StageEtudiant::ETAT_STAGE_REFUS,
    ];

    public function __construct(protected StageEtudiant $stageEtudiant)
    {
    }

    public function getStageEtudiant(): StageEtudiant
    {
        return $this->stageEtudiant;
    }
}
