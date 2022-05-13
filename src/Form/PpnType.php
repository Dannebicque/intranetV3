<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/PpnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/05/2022 21:53
 */

namespace App\Form;

use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Ppn;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class PpnType.
 */
class PpnType extends AbstractType
{
    protected Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle'])
            ->add('annee', TextType::class, ['label' => 'label.annee_sortie'])
            ->add(
                'diplome',
                EntityType::class,
                [
                    'class' => Diplome::class,
                    'choice_label' => 'display',
                    'query_builder' => fn (DiplomeRepository $diplomeRepository) => $diplomeRepository->findByDepartementBuilder($this->departement),
                    'label' => 'label.diplome',
                ]
            );
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Ppn::class,
            'departement' => null,
            'translation_domain' => 'form',
        ]);
    }
}
