<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/RattrapageType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/09/2021 12:00
 */

namespace App\Form;

use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Personnel;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Form\Type\CarbonTimeType;
use App\Form\Type\ChoiceCompleteType;
use App\Form\Type\DatePickerType;
use App\Form\Type\EntityCompleteType;
use App\Repository\PersonnelRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class RattrapageType.
 */
class RattrapageType extends AbstractType
{
    private ?Semestre $semestre;

    private TypeMatiereManager $typeMatiereManager;

    public function __construct(TypeMatiereManager $typeMatiereManager)
    {
        $this->typeMatiereManager = $typeMatiereManager;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $locale = $options['locale'];

        $builder
            ->add('dateEval', DatePickerType::class, [
                'label' => 'date_evaluation',
                'required' => true,
                'attr' => ['data-options' => ['locale' => $locale]],
            ])
            ->add('heureEval', CarbonTimeType::class, ['label' => 'heure_evaluation', 'required' => false])
            ->add('duree', TextType::class, ['label' => 'duree_evaluation', 'required' => false])
            ->add('typeIdMatiere', ChoiceCompleteType::class, [
                'choices' => $this->typeMatiereManager->findBySemestreChoiceType($this->semestre),
                'label' => 'matiere',
                'required' => true,
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
            ])
            ->add('personnel', EntityCompleteType::class, [
                'class' => Personnel::class,
                'label' => 'personnel',
                'choice_label' => 'displayPr',
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findBySemestreBuilder($this->semestre);
                },
                'required' => true,
                'expanded' => false,
                'multiple' => false,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Rattrapage::class,
            'semestre' => null,
            'locale' => 'fr',
        ]);
    }
}
