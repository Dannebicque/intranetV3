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
use App\Entity\QuestionnaireQuestion;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeQcm extends AbstractQuestion
{
    final public const LABEL = 'type_qcm';
    final public const BADGE = 'bg-cyan';
    final public const ICON = 'fas fa-ballot-check';
    final public const FORM = QuestionnaireQuestionTypeQcm::class;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcm')
            ->setDefault('type_question', 'checkbox');
    }

    public function getOrGenereReponses(QuestionnaireQuestion $question): void
    {
        $reponses = $question->getReponses();
        foreach ($reponses as $reponse) {
            $this->addReponse((new ReponseEntityAdapter($reponse))->getReponse());
        }
    }
}
