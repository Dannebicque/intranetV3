<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Event/QualiteRelanceEvent.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:46
 */

namespace App\Event;

use App\Entity\Etudiant;
use App\Entity\QuestionnaireQualite;
use Symfony\Contracts\EventDispatcher\Event;

class QualiteRelanceEvent extends Event
{
    final public const SEND_RELANCE = 'sendRelance';
    final public const SEND_SYNTHESE = 'sendSynthese';

    protected ?Etudiant $etudiant = null;
    protected array $etudiants;

    public function __construct(protected ?QuestionnaireQualite $questionnaireQualite)
    {
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    public function getQuestionnaireQualite(): QuestionnaireQualite
    {
        return $this->questionnaireQualite;
    }

    public function getEtudiants(): array
    {
        return $this->etudiants;
    }

    public function setEtudiants(array $etudiants): void
    {
        $this->etudiants = $etudiants;
    }
}
