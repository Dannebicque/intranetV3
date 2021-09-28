<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/BCCentreFinancierType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2021 17:44
 */

namespace App\Form;

use App\Entity\BCCentreFinancier;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BCCentreFinancierType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('code', TextType::class, ['label' => 'label.code']);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => BCCentreFinancier::class,
            'translation_domain' => 'form',
        ]);
    }
}
