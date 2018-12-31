<?php

namespace App\Form;

use App\Entity\Entreprise;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EntrepriseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('raisonSociale', TextType::class, ['label' => 'label.raisonSociale'])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('siret', TextType::class, ['label' => 'label.siret'])
            ->add('adresse', AdresseType::class, ['label' => 'label.adresse'])

            ->add('responsable', ContactType::class, ['label' => 'label.responsable'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Entreprise::class,
            'translation_domain' => 'form'
        ]);
    }
}
