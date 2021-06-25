<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/CahierTexteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:02
 */

namespace App\Form;

use App\Entity\CahierTexte;
use App\Entity\Semestre;
use App\Form\Type\CarbonDateTimeType;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class CahierTexteType.
 */
class CahierTexteType extends AbstractType
{
    private $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('libelle', TextType::class, [
                'label' => 'libelle',
            ])
            ->add('description', TextareaType::class, [
                'label' => 'description',
            ])
            ->add('dateRetour', CarbonDateTimeType::class, [
                'label' => 'dateRetour',
            ])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'label' => 'semestre',
                'choice_label' => 'libelle',
                'query_builder' => function(SemestreRepository $semestreRepository) {
                    return $semestreRepository->findByDepartementBuilder($this->departement);
                },
                'required' => true,
                'expanded' => true,
                'multiple' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => CahierTexte::class,
            'departement'        => null,
            'translation_domain' => 'form',
        ]);
    }
}
