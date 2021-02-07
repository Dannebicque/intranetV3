<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ApcComposanteEssentielleType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:59
 */

namespace App\Form;

use App\Entity\ApcComposanteEssentielle;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ApcComposanteEssentielleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ApcComposanteEssentielle::class,
        ]);
    }
}
