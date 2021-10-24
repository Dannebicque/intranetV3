<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Questionnaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/10/2021 18:17
 */

namespace App\Components\Questionnaire;

use App\Components\Questionnaire\DTO\AbstractQuestionnaire;
use App\Components\Questionnaire\Section\AbstractSection;
use Symfony\Component\OptionsResolver\OptionsResolver;

class Questionnaire
{
    private const DEFAULT_TEMPLATE = 'components/questionnaire/questionnaire.html.twig';
    protected Sections $sections;
    private AbstractQuestionnaire $questionnaire;
    private array $options = [];
    private QuestionnaireRegistry $questionnaireRegistry;
    private OptionsResolver $resolver;
    private string $typeQuestionnaire;

    public function __construct(QuestionnaireRegistry $questionnaireRegistry)
    {
        $this->sections = new Sections();
        $this->questionnaireRegistry = $questionnaireRegistry;
    }

    public function createQuestionnaire(string $type, AbstractQuestionnaire $abstractQuestionnaire, array $options = [])
    {
        $this->resolver = new OptionsResolver();
        $this->configureOptions($this->resolver);
        $this->options = $this->resolver->resolve($options);
        $this->typeQuestionnaire = $type;
        $this->questionnaire = $abstractQuestionnaire;

        return $this;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'template' => self::DEFAULT_TEMPLATE,
            'mode' => AbstractQuestionnaire::MODE_APERCU,
        ]);
    }

    public function addSection(AbstractSection $abstractSection)
    {
        $section = new Section($abstractSection, []);
        $this->sections->addSection($section);

        return $this;
    }

    public function getOptions(): array
    {
        return $this->options;
    }

    public function getOption(string $name): string
    {
        return $this->options[$name];
    }

    public function getQuestionnaire(): AbstractQuestionnaire
    {
        return $this->questionnaire;
    }

    public function createView()
    {
        return $this;
    }

    public function getSections(): array
    {
        return $this->sections->getSections();
    }

    public function addQuestionSection(TypeQuestion\AbstractQuestion $question, int $ordreSection)
    {
        //ajouter dans la section concernée...
        $this->sections->getSection($ordreSection)->addQuestions($question);
    }
}
