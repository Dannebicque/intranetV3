<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adapter/QuestionnaireQuizzAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/11/2021 20:34
 */

namespace App\Components\Questionnaire\Adapter;

use App\Components\Questionnaire\DTO\Quizz;
use App\Entity\QuestionnaireQuizz;

class QuestionnaireQuizzAdapter implements QuestionnaireAdapterInterface
{
    protected Quizz $questionnaire;

    public function __construct(QuestionnaireQuizz $questionnaire)
    {
        $this->questionnaire = new Quizz();
        $this->questionnaire->titre = $questionnaire->getTitre();
        $this->questionnaire->id = $questionnaire->getId();
        $this->questionnaire->uuid = $questionnaire->getUuidString();
        $this->questionnaire->dateFermeture = $questionnaire->getDateFermeture();
        $this->questionnaire->dateOuverture = $questionnaire->getDateOuverture();
        $this->questionnaire->texteExplication = $questionnaire->getTexteExplication();
        $this->questionnaire->texteDebut = $questionnaire->getTexteDebut();
        $this->questionnaire->texteFin = $questionnaire->getTextFin();
    }

    public function getQuestionnaire(): Quizz
    {
        return $this->questionnaire;
    }
}
