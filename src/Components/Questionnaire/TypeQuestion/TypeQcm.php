<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeQcm.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 19:08
 */

namespace App\Components\Questionnaire\TypeQuestion;


use App\Components\Questionnaire\Adapter\ReponseEntityAdapter;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeQcm;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeQcm extends AbstractQuestion
{
    public const LABEL = 'type_qcm';
    public const BADGE = 'bg-cyan';
    public const ICON = 'fas fa-ballot-check';
    public const FORM = QuestionnaireQuestionTypeQcm::class;

    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcm')
            ->setDefault('type_question', 'checkbox');
    }

    public function getOrGenereReponses($question)
    {
        $reponses = $question->getReponses();
        foreach ($reponses as $reponse) {
            $this->addReponse((new ReponseEntityAdapter($reponse))->getReponse());
        }
    }
}
