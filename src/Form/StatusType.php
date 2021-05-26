<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/StatusType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2021 23:16
 */

namespace App\Form;

use App\Entity\Status;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StatusType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle')
            ->add('sigle')
            ->add('serviceStatus')
            ->add('tauxTd')
            ->add('tauxTp')
            ->add('tauxTdHC')
            ->add('tauxTpHC');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Status::class,
            'translation_domain' => 'form'
        ]);
    }
}
