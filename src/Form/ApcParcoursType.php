<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcParcoursType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/06/2021 16:24
 */

namespace App\Form;

use App\Entity\ApcParcours;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcParcoursType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('code', TextType::class, ['label' => 'code'])
            ->add('codeDiplome', TextType::class, ['label' => 'codeDiplome', 'required' => false])
            ->add('codeVersion', TextType::class, ['label' => 'codeVersion', 'required' => false])
            ->add('codeDepartement', TextType::class, ['label' => 'codeDepartement', 'required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcParcours::class,
        ]);
    }
}
