<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/stage/EntrepriseType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/12/2022 21:40
 */

namespace App\Form\stage;

use App\Entity\Entreprise;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;

class EntrepriseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('siret', NumberType::class, ['label' => 'N° SIRET :', 'help' => 'Le siret est obligatoire pour toutes les entreprises, sauf pour les organismes publics.', 'required' => false])
            ->add('raisonSociale', TextType::class, ['label' => 'Raison Sociale :', 'help' => 'La raison sociale est le nom de l’entreprise ou de l’organisme',
                'constraints' => [new NotBlank(message: 'Veuillez renseigner ce champ')], ])
            ->add('adresse', AdresseType::class, ['label' => 'Récapitulatif', 'required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Entreprise::class,
            'translation_domain' => 'form',
        ]);
    }
}
