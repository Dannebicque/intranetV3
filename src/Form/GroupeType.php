<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/GroupeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Form;

use App\Entity\Groupe;
use App\Entity\Parcour;
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
    private $semestre;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('ordre', TextType::class, ['label' => 'label.ordre'])
            ->add('codeApogee', TextType::class, ['label' => 'label.codeApogee'])
            ->add('typeGroupe', EntityType::class, [
                'class'         => TypeGroupe::class,
                'label'         => 'label.typeGroupe',
                'choice_label'  => 'libelle',
                'query_builder' => function(TypeGroupeRepository $typeGroupeRepository) {
                    return $typeGroupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => true,
                'expanded'      => false,
                'multiple'      => false,
            ])
            ->add('parent', EntityType::class, [
                'class'         => Groupe::class,
                'label'         => 'label.groupe_parent',
                'choice_label'  => 'libelle',
                'query_builder' => function(GroupeRepository $groupeRepository) {
                    return $groupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => false,
                'expanded'      => false,
                'multiple'      => false,
            ])
            ->add('parcours', EntityType::class, [
                'class'         => Parcour::class,
                'label'         => 'label.parcours',
                'choice_label'  => 'libelle',
                'query_builder' => function(ParcourRepository $parcourRepository) {
                    return $parcourRepository->findBySemestreBuilder($this->semestre);
                },
                'required'      => false,
                'expanded'      => false,
                'multiple'      => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Groupe::class,
            'semestre'   => null,
        ]);
    }
}
