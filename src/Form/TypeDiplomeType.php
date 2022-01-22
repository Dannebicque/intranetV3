<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/TypeDiplomeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/06/2021 11:58
 */

namespace App\Form;

use App\Entity\TypeDiplome;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class TypeDiplomeType.
 */
class TypeDiplomeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('sigle', TextType::class, ['label' => 'sigle'])
            ->add('nb_semestres', TextType::class, ['label' => 'nb_semestres'])
            ->add('niveau_entree', TextType::class, ['label' => 'niveau_entree'])
            ->add('niveau_sortie', TextType::class, ['label' => 'niveau_sortie'])
            ->add('apc', YesNoType::class, ['label' => 'approche_competence']);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TypeDiplome::class,
            'translation_domain' => 'form',
        ]);
    }
}
