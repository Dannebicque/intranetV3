<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/MccTypeEpreuveType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/12/2022 12:43
 */

namespace App\Form;

use App\Entity\MccTypeEpreuve;
use App\Entity\TypeDiplome;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MccTypeEpreuveType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, [
                'label' => 'Libellé',
            ])
            ->add('typeDiplome', EntityType::class, [
                'class' => TypeDiplome::class,
                'choice_label' => 'libelle',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => MccTypeEpreuve::class,
            'translation_domain' => 'form',
        ]);
    }
}
