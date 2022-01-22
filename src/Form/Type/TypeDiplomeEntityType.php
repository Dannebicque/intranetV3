<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/DiplomeEntityType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/01/2022 09:51
 */

namespace App\Form\Type;

use App\Entity\TypeDiplome;
use App\Repository\TypeDiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TypeDiplomeEntityType extends EntityType
{
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefaults([
            'class' => TypeDiplome::class,
            'choice_label' => 'libelle',
            'required' => false,
            'placeholder' => 'filtre.typeDiplome',
            'query_builder' => function (TypeDiplomeRepository $er) {
                return $er->findAllBuilder();
            },
            'translation_domain' => 'table',
        ]);
    }
}
