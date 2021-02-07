<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcCompetenceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\ApcCompetence;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcCompetenceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom_court', TextType::class, ['help' => 'Mot désignant la compétence'])
            ->add('libelle', TextType::class, ['help' => 'Libellé long de la compétence'])
            ->add('couleur', ChoiceType::class, [
                'choices'  => [
                    'Rouge'  => 'c1',
                    'Orange' => 'c2',
                    'Jaune'  => 'c3',
                    'Vert'   => 'c4',
                    'Bleu'   => 'c5',
                    'Violet' => 'c6',
                ],
                'expanded' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcCompetence::class,
        ]);
    }
}
