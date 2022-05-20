<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/AnneeUniversitaireType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/05/2022 14:40
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnneeUniversitaireType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
            ])
            ->add('annee', ChoiceType::class, [
                'label' => 'label.annee_courante',
                'choices' => array_combine(range((int) date('Y') - 2, (int) date('Y') + 4),
                    range((int) date('Y') - 2, (int) date('Y') + 4)),
            ])
            ->add('active', YesNoType::class, [
                'label' => 'label.annee.par.defaut',
            ])
            ->add('commentaire', TextareaType::class, ['label' => 'label.commentaire', 'required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => AnneeUniversitaire::class,
            'translation_domain' => 'form',
        ]);
    }
}
