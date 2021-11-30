<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/Form/QuestionnaireQuestionTypeLibre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:35
 */

namespace App\Components\Questionnaire\Form;

use App\Entity\QuestionnaireQuestion;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireQuestionTypeLibre extends QuestionnaireQuestionType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => QuestionnaireQuestion::class,
        ]);
    }
}
