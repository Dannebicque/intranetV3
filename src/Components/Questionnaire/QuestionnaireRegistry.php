<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/QuestionnaireRegistry.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException;
use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\Section\AbstractSectionAdapter;
use App\Components\Questionnaire\TypeDestinataire\AbstractTypeDestinataire;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;

class QuestionnaireRegistry
{
    // todo: utilisé ?
    final public const TAG_TYPE_QUESTION = 'da.questionnaire.typequestion';
    final public const TAG_TYPE_SECTION = 'da.questionnaire.typesection';
    final public const TAG_TYPE_SECTION_ADAPTER = 'da.questionnaire.section.adapter';
    final public const TAG_TYPE_DESTINATAIRE_ADAPTER = 'da.questionnaire.type_destinataire.adapter';

    private array $typeQuestions = [];
    private array $typeSections = [];
    private array $typeDestinataires = [];
    private array $sectionsAdapter = [];

    public function registerTypeQuestion(string $name, AbstractQuestion $abstractQuestion): void
    {
        $this->typeQuestions[$name] = $abstractQuestion;
    }

    public function registerTypeSection(string $name, AbstractSection $abstractSection): void
    {
        $this->typeSections[$name] = $abstractSection;
    }

    public function registerTypeDestinataire(string $name, AbstractTypeDestinataire $abstractTypeDestinataire): void
    {
        $this->typeDestinataires[$name] = $abstractTypeDestinataire;
    }

    public function registerSectionAdapter(string $name, AbstractSectionAdapter $abstractSection): void
    {
        $this->sectionsAdapter[$name] = $abstractSection;
    }

    /**
     * @throws TypeQuestionNotFoundException
     */
    public function getTypeQuestion(string $name): mixed
    {
        if (!array_key_exists($name, $this->typeQuestions)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->typeQuestions[$name];
    }

    /**
     * @throws TypeQuestionNotFoundException
     */
    public function getTypeSection(string $name): mixed
    {
        if (!array_key_exists($name, $this->typeSections)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->typeSections[$name];
    }

    public function getTypeDestinataire(string $name): mixed
    {
        if (!array_key_exists($name, $this->typeDestinataires)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->typeDestinataires[$name];
    }

    /**
     * @throws TypeQuestionNotFoundException
     */
    public function getSectionAdapter(string $name): mixed
    {
        if (!array_key_exists($name, $this->sectionsAdapter)) {
            throw new TypeQuestionNotFoundException();
        }

        return $this->sectionsAdapter[$name];
    }

    public function getAllTypeQuestions(): array
    {
        $typeQuestions = [];
        foreach ($this->typeQuestions as $typeQuestion) {
            $typeQuestions['label.'.$typeQuestion::LABEL] = $typeQuestion::class;
        }

        return $typeQuestions;
    }

    public function getAllSectionsAdapter(): array
    {
        $sectionsAdapter = [];
        foreach ($this->sectionsAdapter as $sectionAdapter) {
            $sectionsAdapter['label.'.$sectionAdapter::LABEL] = $sectionAdapter::class;
        }

        return $sectionsAdapter;
    }

    public function getAllTypeSections(): array
    {
        $typeSections = [];
        foreach ($this->typeSections as $typeSection) {
            $typeSections['label.' . $typeSection::LABEL] = $typeSection::class;
        }

        return $typeSections;
    }

    public function getAllTypeDestinataires(): array
    {
        $typeDestinataires = [];
        foreach ($this->typeDestinataires as $typeDestinataire) {
            $typeDestinataires['label.' . $typeDestinataire::LABEL] = $typeDestinataire::class;
        }

        return $typeDestinataires;
    }

    public function getTypeQuestions(): array
    {
        return $this->typeQuestions;
    }


}
