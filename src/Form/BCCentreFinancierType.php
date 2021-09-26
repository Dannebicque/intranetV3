<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/BCCentreFinancierType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:50
 */

namespace App\Form;

use App\Entity\BCCentreFinancier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BCCentreFinancierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle')
            ->add('code')
            ->add('created')
            ->add('updated');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => BCCentreFinancier::class,
        ]);
    }
}
