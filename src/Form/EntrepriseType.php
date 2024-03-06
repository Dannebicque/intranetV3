<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/EntrepriseType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/03/2024 11:54
 */

namespace App\Form;

use App\Entity\Entreprise;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/** @deprecated */
class EntrepriseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('raisonSociale', TextType::class,
                ['label' => 'label.raisonSociale', 'help' => 'La raison sociale est le nom de l\'entreprise'])
            ->add('siret', TextType::class, [
                'label' => 'label.siret',
                'required' => false,
                'attr' => ['maxlength' => 30],
                'help' => 'Le siret est obligatoire pour toutes les entreprise, sauf pour les organismes public.',
            ])
            ->add('adresse', AdresseType::class, ['label' => 'label.adresse'])
            ->add('responsable', ContactType::class, ['label' => 'label.responsable']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Entreprise::class,
            'translation_domain' => 'form',
        ]);
    }
}
