<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/QuestionnaireRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:35
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\Section\AbstractSectionAdapter;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;

class QuestionnaireRegistry
{
    //todo: utilisé ?
    public const TAG_TYPE_QUESTION = 'da.questionnaire.typequestion';
    public const TAG_TYPE_SECTION = 'da.questionnaire.typesection';
    public const TAG_TYPE_SECTION_ADAPTER = 'da.questionnaire.section.adapter';
    private array $typeQuestions = [];
    private array $typeSections = [];
    private array $sectionsAdapter = [];

    public function registerTypeQuestion(string $name, AbstractQuestion $abstractQuestion)
    {
        $this->typeQuestions[$name] = $abstractQuestion;
    }

    public function registerTypeSection(string $name, AbstractSection $abstractSection)
    {
        $this->typeSections[$name] = $abstractSection;
    }

    public function registerSectionAdapter(string $name, AbstractSectionAdapter $abstractSection)
    {
        $this->sectionsAdapter[$name] = $abstractSection;
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

    public function getSectionAdapter(string $name)
    {
        if (!array_key_exists($name, $this->sectionsAdapter)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->sectionsAdapter[$name];
    }

    public function getAllTypeQuestions()
    {
        $typeQuestions = [];
        foreach ($this->typeQuestions as $typeQuestion) {
            $typeQuestions['label.' . $typeQuestion::LABEL] = $typeQuestion::class;
        }

        return $typeQuestions;
    }

    public function getAllSectionsAdapter()
    {
        $sectionsAdapter = [];
        foreach ($this->sectionsAdapter as $sectionAdapter) {
            $sectionsAdapter['label.' . $sectionAdapter::LABEL] = $sectionAdapter::class;
        }

        return $sectionsAdapter;
    }

    public function getAllTypeSections()
    {
        $typeSections = [];
        foreach ($this->typeSections as $typeSection) {
            $typeSections['label.' . $typeSection::LABEL] = $typeSection::class;
        }

        return $typeSections;
    }

    /**
     * @return array
     */
    public function getTypeQuestions(): array
    {
        return $this->typeQuestions;
    }


}
