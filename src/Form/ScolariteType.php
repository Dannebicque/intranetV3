<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/ScolariteType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Form;

use App\Entity\AnneeUniversitaire;
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
    private $departement;

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
                    10 => 10
                    ],
                'label'         => 'label.ordre',
            ])
            ->add('semestre', EntityType::class, [
                'label'         => 'label.semestre',
                'placeholder' => 'Choisir le semestre',
                'class'         => Semestre::class,
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'choice_label'  => 'libelle'
            ])
            ->add('anneeUniversitaire', EntityType::class, [
                'label'         => 'label.anneeUniversitaire',
                'class'        => AnneeUniversitaire::class,
                'choice_label' => 'libelle'
            ])
            ->add('decision', ChoiceType::class, [
                'choices' => [
                    'E.C.'  => 'En cours',
                    'V'   => 'Validé',
                    'NV'  => 'Non Validé',
                    'DEM' => 'Démission',
                    'REO' => 'Réorientation',
                    'VCJ' => 'VCJ'
                ],
                'label'         => 'label.decision',
            ])
            ->add('proposition', TextType::class, [
                'label'         => 'label.proposition',
            ])
            ->add('moyenne', TextType::class, [
                'label'         => 'label.moyenne',
            ])
            ->add('nbAbsences', TextType::class, [
                'label'         => 'label.nbAbsences',
            ])
            ->add('commentaire', TextareaType::class, [
                'label'         => 'label.commentaire',
                'required' => false
            ])
           ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Scolarite::class,
            'translation_domain' => 'form',
            'departement'        => null,
        ]);
    }
}
