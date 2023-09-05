<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ScolariteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2023 19:32
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Enums\DecisionSemestreEnum;
use App\Repository\SemestreRepository;
use BackedEnum;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EnumType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ScolariteType extends AbstractType
{
    private Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $isApc = $options['isApc'];

        $builder
            ->add('ordre', ChoiceType::class, [
                'choices' => [
                    1 => 1,
                    2 => 2,
                    3 => 3,
                    4 => 4,
                    5 => 5,
                    6 => 6,
                    7 => 7,
                    8 => 8,
                    9 => 9,
                    10 => 10,
                ],
                'label' => 'label.ordre',
            ])
            ->add('semestre', EntityType::class, [
                'label' => 'label.semestre',
                'placeholder' => 'Choisir le semestre',
                'class' => Semestre::class,
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
                'choice_label' => 'libelle',
            ])
            ->add('anneeUniversitaire', EntityType::class, [
                'label' => 'label.anneeUniversitaire',
                'class' => AnneeUniversitaire::class,
                'choice_label' => 'libelle',
            ])
            ->add('decision', EnumType::class, [
                'class' => DecisionSemestreEnum::class,
                'choice_label' => static fn(BackedEnum $choice): string => $choice->value,
                'label' => 'label.decision.semestre',
                'translation_domain' => 'messages',
            ])
            ->add('proposition', TextType::class, [
                'label' => 'label.proposition',
                'required' => false,
                'help' => 'Sn+1, DUT, ...',
            ])
            ->add('nbAbsences', TextType::class, [
                'label' => 'label.nbAbsences',
            ])
            ->add('commentaire', TextareaType::class, [
                'label' => 'label.commentaire',
                'help' => 'Commentaire libre sur le semestre, non diffusé aux étudiants.',
                'required' => false,
            ])
           ;

        if (false === $isApc) {
            $builder->add('moyenne', TextType::class, [
                'label' => 'moyenne',
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Scolarite::class,
            'translation_domain' => 'form',
            'departement' => null,
            'isApc' => false
        ]);
    }
}
