<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Adpapter/QuestionnaireQualiteAdapter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 11:54
 */

namespace App\Components\Questionnaire\Adpapter;


use App\Components\Questionnaire\DTO\Qualite;

class QuestionnaireQualiteAdapter implements QuestionnaireAdapterInterface
{
    protected Qualite $questionnaire;

    public function __construct($questionnaire)
    {
        $this->questionnaire = new Qualite();
        $this->questionnaire->titre = $questionnaire->getTitre();
        $this->questionnaire->id = $questionnaire->getId();
        $this->questionnaire->dateFermture = $questionnaire->getDateFermeture();
        $this->questionnaire->dateOuverture = $questionnaire->getDateOuverture();
    }

    public function getQuestionnaire(): Qualite
    {
        return $this->questionnaire;
    }
}
