<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/RattrapageType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/09/2022 09:34
 */

namespace App\Form;

use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Personnel;
use App\Entity\Rattrapage;
use App\Entity\Semestre;
use App\Form\Type\DatePickerType;
use App\Form\Type\EntityCompleteType;
use App\Form\Type\TimePickerType;
use App\Repository\PersonnelRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class RattrapageType.
 */
class RattrapageType extends AbstractType
{
    private ?Semestre $semestre = null;

    public function __construct(private readonly TypeMatiereManager $typeMatiereManager)
    {
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->semestre = $options['semestre'];
        $locale = $options['locale'];

        $builder
            ->add('dateEval', DatePickerType::class, [
                'label' => 'label.date_evaluation',
                'required' => true,
                'help' => 'Le format attendu est jj/mm/aaaa',
                'attr' => ['data-options' => ['locale' => $locale], 'placeholder' => 'jj/mm/aaaa'],
            ])
            ->add('heureEval', TimePickerType::class, ['label' => 'label.heure_evaluation', 'required' => false])
            ->add('duree', TextType::class, [
                'label' => 'label.duree_evaluation',
                'required' => false,
                'attr' => ['maxlength' => 20, 'placeholder' => 'Par ex. 1h30'],
                'help' => 'help.duree_evaluation', ])
            ->add('typeIdMatiere', ChoiceType::class, [
                'choices' => $this->typeMatiereManager->findBySemestreChoiceType($this->semestre),
                'label' => 'label.matiere',
                'required' => true,
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
                'autocomplete' => true,
                'attr' => [
                    'placeholder' => 'label.veuillez_choisir',
                ],
                'help' => 'help.matiere_rattrapage',

            ])
            ->add('personnel', EntityCompleteType::class, [
                'class' => Personnel::class,
                'label' => 'label.personnel',
                'choice_label' => 'displayPr',
                'query_builder' => fn (PersonnelRepository $personnelRepository) => $personnelRepository->findBySemestreBuilder($this->semestre),
                'required' => true,
                'data' => null,
                'expanded' => false,
                'multiple' => false,
                'help' => 'help.enseignant_rattrapage',

            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Rattrapage::class,
            'semestre' => null,
            'translation_domain' => 'form',
            'locale' => 'fr', ]);
    }
}
