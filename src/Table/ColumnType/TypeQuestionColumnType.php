<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/TypeQuestionColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:38
 */

namespace App\Table\ColumnType;

use App\Components\Questionnaire\QuestionnaireRegistry;
use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class TypeQuestionColumnType extends PropertyColumnType
{
    private QuestionnaireRegistry $questionnaireRegistry;
    private TranslatorInterface $translator;

    public function __construct(
        QuestionnaireRegistry $questionnaireRegistry,
        TranslatorInterface $translator
    ) {
        parent::__construct();
        $this->questionnaireRegistry = $questionnaireRegistry;
        $this->translator = $translator;
    }

    public function renderProperty($value, array $options): string
    {
        if (array_key_exists($value, $this->questionnaireRegistry->getTypeQuestions())) {
            $obj = $this->questionnaireRegistry->getTypeQuestion($value);

            return '<span class="badge ' . $obj::BADGE . '">' . $this->translator->trans('label.' . $obj::LABEL) . '</span>';
        }

        return '<span class="badge bg-primary">' . $value . '</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
    }
}
