<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/AnneeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:25
 */

namespace App\Form;

use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Form\Type\YesNoType;
use App\Repository\DiplomeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\Exception\AccessException;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class AnneeType.
 */
class AnneeType extends AbstractType
{
    protected ?Departement $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'libelle'
            ])
            ->add('libelle_long', TextType::class, [
                'label' => 'libelle_long'
            ])
            ->add('diplome', EntityType::class, [
                'class' => Diplome::class,
                'required' => true,
                'choice_label' => 'displayCourt',
                'expanded' => true,
                'query_builder' => function(DiplomeRepository $diplomeRepository) {
                    return $diplomeRepository->findByDepartementBuilder($this->departement);
                },
                'label' => 'diplome'
            ])
            ->add('codeEtape', TextType::class, [
                'label' => 'code_etape'
            ])
            ->add('codeVersion', TextType::class, [
                'label' => 'code_version'
            ])
            ->add('ordre', TextType::class, [
                'label' => 'ordre'
            ])
            ->add('couleur', ChoiceType::class, [
                'label' => 'couleur',
                'required' => true,
                'choices' => Constantes::COULEURS
            ])
            ->add('optAlternance', YesNoType::class, [
                'label' => 'opt_alternance'
            ])
            ->add('actif', YesNoType::class, [
                'label' => 'annee_active'
            ]);
    }

    /**
     * @throws AccessException
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Annee::class,
            'translation_domain' => 'form',
            'departement' => null,
        ]);
    }
}
