<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/GroupeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 22:29
 */

namespace App\Form;

use App\Entity\Groupe;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\GroupeRepository;
use App\Repository\ParcourRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class GroupeType.
 */
class GroupeType extends AbstractType
{
    private ?Semestre $semestre;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle', 'help' => 'Libellé du groupe. Obligatoire.'])
            ->add('ordre', TextType::class,
                ['label' => 'label.ordre', 'help' => 'Ordre dans la liste des groupes. Obligatoire'])
            ->add('codeApogee', TextType::class, [
                'label' => 'label.codeApogee',
                'help' => 'Nécessaire pour synchroniser les groupes depuis Apogée.',
                'required' => false
            ])
            ->add('typeGroupe', EntityType::class, [
                'class' => TypeGroupe::class,
                'label' => 'label.typeGroupe',
                'choice_label' => 'libelle',
                'query_builder' => function(TypeGroupeRepository $typeGroupeRepository) {
                    return $typeGroupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required' => true,
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('parent', EntityType::class, [
                'class' => Groupe::class,
                'label' => 'label.groupe_parent',
                'choice_label' => 'libelle',
                'query_builder' => function(GroupeRepository $groupeRepository) {
                    return $groupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required' => false,
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('parcours', EntityType::class, [
                'class' => Parcour::class,
                'label' => 'label.parcours',
                'choice_label' => 'libelle',
                'query_builder' => function(ParcourRepository $parcourRepository) {
                    return $parcourRepository->findBySemestreBuilder($this->semestre);
                },
                'required' => false,
                'expanded' => false,
                'multiple' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Groupe::class,
            'semestre'   => null,
            'translation_domain' => 'form'
        ]);
    }
}
