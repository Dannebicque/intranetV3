<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Questions.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 10:04
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;

class Questions
{
    private array $questions = [];

    public function addQuestion(AbstractQuestion $question): void
    {
        $this->questions[] = $question;
    }

    public function getQuestions(): array
    {
        return $this->questions;
    }
}
