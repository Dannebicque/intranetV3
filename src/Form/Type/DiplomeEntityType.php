<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/DiplomeEntityType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/01/2022 09:51
 */

namespace App\Form\Type;

use App\Entity\Diplome;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DiplomeEntityType extends EntityType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'class' => Diplome::class,
            'choice_label' => 'displayCourt',
            'required' => false,
            'placeholder' => 'filtre.diplome',
            'query_builder' => function (DiplomeRepository $er) {
                return $er->findAllBuilder();
            },
            'translation_domain' => 'table',
        ]);
    }
}
