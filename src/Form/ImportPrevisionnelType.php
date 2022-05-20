<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/ImportPrevisionnelType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/05/2022 14:42
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class ImportPrevisionnelType.
 */
class ImportPrevisionnelType extends AbstractType
{
    private ?Departement $departement = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add(
                'diplome',
                EntityType::class,
                [
                    'class' => Diplome::class,
                    'choice_label' => 'display',
                    'query_builder' => fn (DiplomeRepository $diplomeRepository) => $diplomeRepository->findByDepartementBuilder($this->departement),
                    'label' => 'diplome',
                ]
            )
            ->add('annee', ChoiceType::class, [
                'label' => 'opt_annee_previsionnel',
                'choices' => array_combine(
                    range((int) date('Y') - 2, (int) date('Y') + 4),
                    range((int) date('Y') - 2, (int) date('Y') + 4)
                ),
                'data' => date('Y'),
            ])
            ->add('fichier', FileType::class, [
                'label' => 'fichier',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
            'translation_domain' => 'form',
            'departement' => null,
        ]);
    }
}
