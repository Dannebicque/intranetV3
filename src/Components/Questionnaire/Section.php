<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Section.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 10:04
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\Section\AbstractSection;
use App\Components\Questionnaire\TypeQuestion\AbstractQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Section
{
    public const DEFAULT_TEMPLATE = 'components/questionnaire/section.html.twig';
    private AbstractSection $section;
    private array $options = [];
    private Questions $questions;

    public function __construct(AbstractSection $abstractSection, array $options = [])
    {
        $this->questions = new Questions();
        $resolver = new OptionsResolver();
        $this->configureOptions($resolver);
        $this->options = $resolver->resolve($options);

        $this->section = $abstractSection;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
        ]);
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name): string
    {
        return $this->options[$name];
    }

    public function getSection(): AbstractSection
    {
        return $this->section;
    }

    public function addQuestions(AbstractQuestion $abstractQuestion)
    {
        $this->questions->addQuestion($abstractQuestion);
    }

    public function getQuestions(): array
    {
        return $this->questions->getQuestions();
    }


}
