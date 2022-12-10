<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/QuestionnaireReponseType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/11/2021 17:36
 */

namespace App\Form;

use App\Entity\QuestReponse;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class QuestionnaireReponseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('ordre', IntegerType::class, [
                'label' => 'Ordre',
                'attr' => ['class' => 'form-control-sm', 'size' => 2],
            ])
            ->add('libelle', TextType::class, [
                'label' => 'Libellé',
                'attr' => ['class' => 'form-control-sm', 'size' => 5],
            ])
            ->add('valeur', TextType::class, [
                'label' => 'Valeur',
                'attr' => ['class' => 'form-control-sm', 'size' => 3],
            ]);// ->add('alignement')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => QuestReponse::class,
        ]);
    }
}
