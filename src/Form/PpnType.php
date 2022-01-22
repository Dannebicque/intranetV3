<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/PpnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/05/2021 14:21
 */

namespace App\Form;

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
    protected $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, ['label' => 'libelle'])
            ->add('annee', TextType::class, ['label' => 'annee_sortie'])
            ->add(
                'diplome',
                EntityType::class,
                [
                    'class' => Diplome::class,
                    'choice_label' => 'display',
                    'query_builder' => function (DiplomeRepository $diplomeRepository) {
                        return $diplomeRepository->findByDepartementBuilder($this->departement);
                    },
                    'label' => 'diplome',
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
