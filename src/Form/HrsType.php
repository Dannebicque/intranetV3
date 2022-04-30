<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/HrsType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/09/2021 18:25
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Hrs;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\TypeHrs;
use App\Form\Type\EntityCompleteType;
use App\Repository\DiplomeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class HrsType.
 */
class HrsType extends AbstractType
{
    protected ?Departement $departement = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('personnel', EntityCompleteType::class, [
                'class' => Personnel::class,
                'required' => true,
                'choice_label' => 'display',
                'query_builder' => fn(PersonnelRepository $personnelRepository) => $personnelRepository->findByDepartementBuilder($this->departement),
                'label' => 'label.personnel',
            ])
            ->add('typeHrs', EntityCompleteType::class, [
                'class' => TypeHrs::class,
                'required' => true,
                'choice_label' => 'libelle',
                'label' => 'label.typehrs',
            ])
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('nbHeuresTd', TextType::class, ['label' => 'label.nbHeuresTd'])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'required' => false,
                'choice_label' => 'display',
                'query_builder' => fn(SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
                'label' => 'label.semestre',
            ])
            ->add('diplome', EntityType::class, [
                'class' => Diplome::class,
                'required' => false,
                'choice_label' => 'libelle',
                'query_builder' => fn(DiplomeRepository $diplomeRepository) => $diplomeRepository->findByDepartementBuilder($this->departement),
                'label' => 'label.diplome',
            ])
            ->add('commentaire', TextareaType::class, ['label' => 'label.commentaire', 'required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Hrs::class,
            'departement' => null,
            'translation_domain' => 'form',
        ]);
    }
}
