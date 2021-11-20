<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/TypeHrsType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 10:56
 */

namespace App\Form;

use App\Entity\TypeCours;
use App\Form\Type\FloatType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class TypeCoursType.
 */
class TypeCoursType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle', 'attr' => ['maxlength' => 150]])
            ->add('libelle_court', TextType::class, ['label' => 'label.libelle_court', 'attr' => ['maxlength' => 5]])
            ->add('ratioEqTd', FloatType::class, [
                'label' => 'label.ratioEqTd',
            ])
            ->add('commentaire', TextareaType::class, ['label' => 'label.commentaire']);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TypeCours::class,
            'translation_domain' => 'form',
        ]);
    }
}
