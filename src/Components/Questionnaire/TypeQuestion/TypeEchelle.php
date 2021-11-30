<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeEchelle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/10/2021 19:08
 */

namespace App\Components\Questionnaire\TypeQuestion;

use App\Components\Questionnaire\DTO\Reponse;
use App\Components\Questionnaire\Form\QuestionnaireQuestionTypeEchelle;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeEchelle extends TypeQcu
{
    public const LABEL = 'type_echelle';
    public const BADGE = 'bg-yellow'; //ajouter constante de couleur et de nom de template ?
    public const ICON = 'fas fa-escalator'; //ajouter constante de couleur et de nom de template ?
    public const FORM = QuestionnaireQuestionTypeEchelle::class; //ajouter constante de couleur et de nom de template ?

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcu')
            ->setDefault('type_question', 'radio')
            ->setDefault('min', 1)
            ->setDefault('max', 10)
            ->setDefault('pas', 1);
    }

    public function getOrGenereReponses($question)
    {
        for ($i = $this->getOption('min'); $i <= $this->getOption('max'); $i += $this->getOption('pas')) {
            $this->addReponse(new Reponse(
                0, $i, $i, $i
            ));
        }
    }
}
