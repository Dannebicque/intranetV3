<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Form/AdresseType.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:46 PM
 */

namespace App\Form;

use App\Entity\Adresse;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class AdresseType
 * @package App\Form
 */
class AdresseType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('adresse1', TextType::class, ['label' => 'label.adresse1'])
            ->add('adresse2', TextType::class, ['label' => 'label.adresse2', 'required' => false])
            ->add('adresse3', TextType::class, ['label' => 'label.adresse3', 'required' => false])
            ->add('code_postal', TextType::class, ['label' => 'label.code_postal'])
            ->add('ville', TextType::class, ['label' => 'label.ville'])
            ->add('pays', TextType::class, ['label' => 'label.pays', 'required' => false, 'data' => 'France']);
    }

    /**
     * @param OptionsResolver $resolver
     *
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Adresse::class,
            'translation_domain' => 'form'
        ]);
    }
}
