<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/DTO/ReponsesQuestionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Components\Questionnaire\DTO;

class ReponsesQuestionnaire
{
    public array $listeQuestions = [];

    public function addReponseQuestion(ReponsesQuestion $reponsesQuestion, string $cle): void
    {
        $this->listeQuestions[$cle] = $reponsesQuestion;
    }

    public function getReponsesQuestion(string $cle): ?ReponsesQuestion
    {
        return $this->listeQuestions[$cle] ?? null;
    }
}
