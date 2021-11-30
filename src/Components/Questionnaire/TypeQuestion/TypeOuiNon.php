<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeOuiNon.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 19:08
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Questionnaire\DTO\Reponse;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeYesNo;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeOuiNon extends TypeQcu
{
    public const LABEL = 'type_oui_non';
    public const BADGE = 'bg-purple';
    public const ICON = 'fas fa-toggle-on';
    public const FORM = QuestionnaireQuestionTypeYesNo::class;

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcu')
            ->setDefault('type_question', 'radio')
            ->setDefault('libelle_1', 'Oui')
            ->setDefault('valeur_1', '1')
            ->setDefault('libelle_2', 'Non')
            ->setDefault('valeur_2', '0');
    }

    public function getOrGenereReponses($question)
    {
        $reponse1 = new Reponse(1, $this->options['libelle_1'], $this->options['valeur_1'], 1);
        $this->addReponse($reponse1);

        $reponse2 = new Reponse(2, $this->options['libelle_2'], $this->options['valeur_2'], 2);
        $this->addReponse($reponse2);
    }
}
