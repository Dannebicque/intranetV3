<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Adapter/QuestionnaireQualiteAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/12/2022 12:49
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Questionnaire\DTO\Qualite;
use App\Entity\QuestQuestionnaire;

class QuestionnaireQualiteAdapter implements QuestionnaireAdapterInterface
{
    protected Qualite $questionnaire;

    public function __construct(QuestQuestionnaire $questionnaire)
    {
        $this->questionnaire = new Qualite();
        $this->questionnaire->titre = $questionnaire->getTitre();
        $this->questionnaire->id = $questionnaire->getId();
        $this->questionnaire->uuidString = $questionnaire->getUuidString();
        $this->questionnaire->dateFermeture = $questionnaire->getDateFermeture();
        $this->questionnaire->dateOuverture = $questionnaire->getDateOuverture();
        $this->questionnaire->texteExplication = $questionnaire->getTexteExplication();
        $this->questionnaire->texteDebut = $questionnaire->getTexteDebut();
        $this->questionnaire->texteFin = $questionnaire->getTextFin();
        $this->questionnaire->semestre = $questionnaire->getSemestre();
    }

    public function getQuestionnaire(): Qualite
    {
        return $this->questionnaire;
    }
}
