<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CreneauCoursType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:59
 */

namespace App\Form;

use App\Entity\CreneauCours;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CreneauCoursType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('jour')
            ->add('debut')
            ->add('fin')
            ->add('anneeUniversitaire')
            ->add('departement')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => CreneauCours::class,
        ]);
    }
}
