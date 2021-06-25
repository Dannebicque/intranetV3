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
    public const SEND_RELANCE = 'sendRelance';
    public const SEND_SYNTHESE = 'sendSynthese';

    protected ?Etudiant $etudiant = null;
    protected array $etudiants;
    protected ?QuestionnaireQualite $questionnaireQualite;

    public function __construct(QuestionnaireQualite $questionnaireQualite)
    {
        $this->questionnaireQualite = $questionnaireQualite;
    }


    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(Etudiant $etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    /**
     * @return \App\Entity\QuestionnaireQualite
     */
    public function getQuestionnaireQualite(): QuestionnaireQualite
    {
        return $this->questionnaireQualite;
    }

    /**
     * @return array
     */
    public function getEtudiants(): array
    {
        return $this->etudiants;
    }

    public function setEtudiants($etudiants)
    {
        $this->etudiants = $etudiants;
    }


}
