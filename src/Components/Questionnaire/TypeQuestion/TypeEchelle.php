<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Questionnaire/TypeQuestion/TypeEchelle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2021 15:32
 */

namespace App\Components\Questionnaire\TypeQuestion;


use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeEchelle extends TypeQcu
{
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);
        $resolver
            ->setDefault('block_name', 'type_qcu');
    }

    public function getOrGenereReponses()
    {

    }
}
