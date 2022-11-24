<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/GroupeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/11/2022 10:26
 */

namespace App\Form;

use App\Entity\ApcParcours;
use App\Entity\Groupe;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\ApcParcoursRepository;
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
    private ?Semestre $semestre = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $diplome = $this->semestre->getDiplome();
        if (null !== $diplome && null !== $diplome->getParent()) {
            $diplome = $diplome->getParent();
        }

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle', 'help' => 'Libellé du groupe. Obligatoire.'])
            ->add('ordre', TextType::class,
                ['label' => 'label.ordre', 'help' => 'Ordre dans la liste des groupes. Obligatoire'])
            ->add('codeApogee', TextType::class, [
                'label' => 'label.codeApogee',
                'help' => 'Nécessaire pour synchroniser les groupes depuis Apogée.',
                'required' => false,
            ])
            ->add('typeGroupe', EntityType::class, [
                'class' => TypeGroupe::class,
                'label' => 'label.typeGroupe',
                'choice_label' => 'libelle',
                'query_builder' => fn (TypeGroupeRepository $typeGroupeRepository) => $typeGroupeRepository->findByDiplomeAndOrdreSemestreBuilder($diplome, $this->semestre->getOrdreLmd()),
                'required' => true,
                'expanded' => false,
                'multiple' => false,
            ])
            ->add('parent', EntityType::class, [
                'class' => Groupe::class,
                'label' => 'label.groupe_parent',
                'choice_label' => 'libelle',
                'query_builder' => fn (GroupeRepository $groupeRepository) => $groupeRepository->findByDiplomeAndOrdreSemestreBuilder($this->semestre->getDiplome(), $this->semestre->getOrdreLmd()),
                'required' => false,
                'expanded' => false,
                'multiple' => false,
            ]);

        if (null !== $diplome && $diplome->isApc()) {
            $builder->add('apcParcours', EntityType::class, [
                'class' => ApcParcours::class,
                'label' => 'label.parcours.but',
                'choice_label' => 'display',
                'query_builder' => fn (ApcParcoursRepository $parcourRepository
                ) => $parcourRepository->findByDiplomeBuilder($diplome),
                'required' => false,
                'expanded' => false,
                'multiple' => false,
            ]);
        } else {
            $builder->add('parcours', EntityType::class, [
                'class' => Parcour::class,
                'label' => 'label.parcours',
                'choice_label' => 'display',
                'query_builder' => fn (ParcourRepository $parcourRepository
                ) => $parcourRepository->findBySemestreBuilder($this->semestre),
                'required' => false,
                'expanded' => false,
                'multiple' => false,
            ]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Groupe::class,
            'semestre' => null,
            'translation_domain' => 'form',
        ]);
    }
}
