<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/RattrapageType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/05/2021 16:35
 */

namespace App\Form;

use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Personnel;
use App\Entity\Rattrapage;
use App\Repository\PersonnelRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Umbrella\CoreBundle\Form\Choice2Type;
use Umbrella\CoreBundle\Form\DatepickerType;
use Umbrella\CoreBundle\Form\Entity2Type;

/**
 * Class RattrapageType.
 */
class RattrapageType extends AbstractType
{
    private $semestre;

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
            ->add('dateEval', DatepickerType::class, [
                'label' => 'date_evaluation',
                'required' => true,
                'attr' => ['data-options' => ['locale' => $locale]],
            ])
            ->add('heureEval', TimeType::class, ['label' => 'heure_evaluation', 'required' => false])
            ->add('duree', TextType::class, ['label' => 'duree_evaluation', 'required' => false])
            ->add('typeIdMatiere', Choice2Type::class, [
                'choices' => $this->typeMatiereManager->findBySemestreChoiceType($this->semestre),
                'label' => 'matiere',
                'required' => true,
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
            ])
            ->add('personnel', Entity2Type::class, [
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
