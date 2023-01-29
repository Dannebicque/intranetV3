<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Questionnaire/Section/AbstractSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2023 18:08
 */

namespace App\Components\Questionnaire\Section;

use App\Components\Graphs\GraphRegistry;
use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Questionnaire\Questions;
use Symfony\Component\OptionsResolver\OptionsResolver;

abstract class AbstractSection
{
    public const DEFAULT_TEMPLATE = 'components/questionnaire/sections/section.html.twig';
    public const INTRODUCTION = 'introduction';
    public const END = 'end';
    public const AFFICHE_GROUPE = 'GROUPE';
    public const AFFICHE_DETAIL = 'DETAIL';

    public ?int $arrayKey = 0;
    public ?int $id = null;
    public ?int $questionnaire_section_id = null;
    public int|string $ordre = 1;
    public ?string $titre = null;
    public ?string $text_explicatif = null;

    public int $nbParties = 1;
    public array $params = [];
    public bool $configurable = false;
    public AbstractSectionAdapter $abstractSectionAdapter;
    public \App\Components\Questionnaire\DTO\Section $section;

    protected Questions $questions;

    public array $options = [];
    public ?string $questionnaireUuid = null;
    public ?string $choixUserUuid = null;
    public ?string $typeSection;

    public function __construct(
        public QuestionnaireRegistry $questionnaireRegistry,
        public GraphRegistry $graphRegistry,
    ) {
        $this->questions = new Questions();
    }

    public function setSection(\App\Components\Questionnaire\DTO\Section $section, array $options = []): void
    {
        $this->setOptions($options);
        $this->questionnaireUuid = $options['questionnaireUuid'];
        $this->choixUserUuid = $options['choixUserUuid'];
        $this->ordre = $section->ordre;
        $this->titre = $section->titre;
        $this->text_explicatif = $section->texte_explicatif;
        $this->section = $section;
    }

    public function setOptions(array $options): void
    {
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $this->options = $resolver->resolve($options);
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    protected function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
            'mode' => AbstractQuestionnaire::MODE_APERCU,
            'questionnaireUuid' => null,
            'choixUserUuid' => null,
            'type_calcul' => AbstractSection::AFFICHE_DETAIL,
        ]);
    }

    public function getTemplate(): string
    {
        return $this->options['template'];
    }

    public function getOption(string $name): string
    {
        return $this->options[$name];
    }

    public function getVars(): array
    {
        return [
            'id' => null,
            'questionnaire_section_id' => null,
            'ordre' => 1,
            'titre' => null,
            'text_explicatif' => null,
        ];
    }

    public function hasQuestions(): bool
    {
        return StartSection::class !== $this->typeSection && EndSection::class !== $this->typeSection;
    }
}
