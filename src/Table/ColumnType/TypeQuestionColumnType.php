<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/TypeQuestionColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:08
 */

namespace App\Table\ColumnType;

use App\Components\Questionnaire\QuestionnaireRegistry;
use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class TypeQuestionColumnType extends PropertyColumnType
{
    public function __construct(
        private readonly QuestionnaireRegistry $questionnaireRegistry,
        private readonly TranslatorInterface $translator
    ) {
        parent::__construct();
    }

    /**
     * @throws \App\Components\Questionnaire\Exceptions\TypeQuestionNotFoundException
     */
    public function renderProperty(mixed $value, array $options): string
    {
        if (array_key_exists($value, $this->questionnaireRegistry->getTypeQuestions())) {
            $obj = $this->questionnaireRegistry->getTypeQuestion($value);

            return '<span class="badge '.$obj::BADGE.'">'.$this->translator->trans('label.'.$obj::LABEL).'</span>';
        }

        return '<span class="badge bg-primary">'.$value.'</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
