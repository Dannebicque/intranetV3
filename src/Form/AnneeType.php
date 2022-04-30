<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/AnneeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/09/2021 21:20
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
    protected ?Departement $departement = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'label.libelle',
            ])
            ->add('libelle_long', TextType::class, [
                'label' => 'label.libelle_long',
            ])
            ->add('diplome', EntityType::class, [
                'class' => Diplome::class,
                'required' => true,
                'choice_label' => 'displayCourt',
                'expanded' => true,
                'query_builder' => fn (DiplomeRepository $diplomeRepository) => $diplomeRepository->findByDepartementBuilder($this->departement),
                'label' => 'label.diplome',
            ])
            ->add('codeEtape', TextType::class, [
                'label' => 'label.code_etape',
            ])
            ->add('codeVersion', TextType::class, [
                'label' => 'label.code_version',
            ])
            ->add('ordre', TextType::class, [
                'label' => 'label.ordre',
            ])
            ->add('couleur', ChoiceType::class, [
                'label' => 'label.couleur',
                'required' => true,
                'choices' => Constantes::COULEURS,
            ])
            ->add('optAlternance', YesNoType::class, [
                'label' => 'label.opt_alternance',
            ])
            ->add('actif', YesNoType::class, [
                'label' => 'label.annee_active',
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
