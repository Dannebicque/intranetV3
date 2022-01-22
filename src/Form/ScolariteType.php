<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ScolariteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Scolarite;
use App\Entity\Semestre;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
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
                'label' => 'ordre',
            ])
            ->add('semestre', EntityType::class, [
                'label' => 'semestre',
                'placeholder' => 'Choisir le semestre',
                'class' => Semestre::class,
                'query_builder' => function (SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'choice_label' => 'libelle',
            ])
            ->add('anneeUniversitaire', EntityType::class, [
                'label' => 'anneeUniversitaire',
                'class' => AnneeUniversitaire::class,
                'choice_label' => 'libelle',
            ])
            ->add('decision', ChoiceType::class, [
                'choices' => [
                    'En cours' => Constantes::SEMESTRE_EN_COURS,
                    'Validé' => Constantes::SEMESTRE_VALIDE,
                    'Non Validé' => Constantes::SEMESTRE_NON_VALIDE,
                    'Démission' => Constantes::SEMESTRE_DEMISSIONNAIRE,
                    'Réorientation' => Constantes::SEMESTRE_REORIENTE,
                    'VCJ' => Constantes::SEMESTRE_VCJ,
                    'VCA' => Constantes::SEMESTRE_VCA,
                    'Blanchimenent' => Constantes::SEMESTRE_BLANCHIMENT,
                ],
                'label' => 'decision',
            ])
            ->add('proposition', TextType::class, [
                'label' => 'proposition',
                'required' => false,
                'help' => 'Sn+1, DUT, ...',
            ])
            ->add('moyenne', TextType::class, [
                'label' => 'moyenne',
            ])
            ->add('nbAbsences', TextType::class, [
                'label' => 'nbAbsences',
            ])
            ->add('commentaire', TextareaType::class, [
                'label' => 'commentaire',
                'required' => false,
            ])
           ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Scolarite::class,
            'translation_domain' => 'form',
            'departement' => null,
        ]);
    }
}
