<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/QualiteRelanceEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use Symfony\Contracts\EventDispatcher\Event;

class QualiteRelanceEvent extends Event
{
    final public const SEND_RELANCE = 'sendRelance';
    final public const SEND_SYNTHESE = 'sendSynthese';

    protected array $etudiants;

    public function __construct(protected ?QuestChoixInterface $questionnaireQualite)
    {
    }

    public function getQuestionnaireQualite(): QuestChoixInterface
    {
        return $this->questionnaireQualite;
    }

    public function getDestinataire(): array
    {
        return $this->etudiants;
    }

    public function setEtudiants(array $etudiants): void
    {
        $this->etudiants = $etudiants;
    }
}
