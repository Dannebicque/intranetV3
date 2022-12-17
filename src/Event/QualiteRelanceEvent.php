<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Event/QualiteRelanceEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/12/2022 18:31
 */

namespace App\Event;

use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Entity\QuestQuestionnaire;
use Symfony\Contracts\EventDispatcher\Event;

class QualiteRelanceEvent extends Event
{
    final public const SEND_RELANCE = 'sendRelance';
    final public const SEND_SYNTHESE = 'sendSynthese';

    protected array $liste;

    protected QuestChoixInterface $user;

    public function __construct(protected ?QuestQuestionnaire $questionnaireQualite)
    {
    }

    public function getQuestionnaireQualite(): QuestQuestionnaire
    {
        return $this->questionnaireQualite;
    }

    public function getDestinataire(): array
    {
        return $this->liste;
    }

    public function setUsers(array $liste): void
    {
        $this->liste = $liste;
    }

    public function setUser(QuestChoixInterface $user): void
    {
        $this->user = $user;
    }

    public function getUser(): QuestChoixInterface
    {
        return $this->user;
    }


}
