<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/QuestionnaireRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/08/2021 08:00
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;

class QuestionnaireRegistry
{
    //todo: utilisé ?
    public const TAG_TYPE_QUESTION = 'da.questionnaire.typequestion';
    public const TAG_TYPE_SECTION = 'da.questionnaire.typesection';
    private array $typeQuestions = [];
    private array $typeSections = [];

    public function registerTypeQuestion(string $name, AbstractQuestion $abstractQuestion)
    {
        $this->typeQuestions[$name] = $abstractQuestion;
    }

    public function registerTypeSection(string $name, AbstractSection $abstractSection)
    {
        $this->typeSections[$name] = $abstractSection;
    }

    public function getTypeQuestion(string $name)
    {
        if (!array_key_exists($name, $this->typeQuestions)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->typeQuestions[$name];
    }

    public function getTypeSection(string $name)
    {
        if (!array_key_exists($name, $this->typeSections)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->typeSections[$name];
    }
}
