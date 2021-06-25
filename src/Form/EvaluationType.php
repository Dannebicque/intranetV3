<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/EvaluationType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Form;

use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Departement;
use App\Entity\Evaluation;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Form\Type\CarbonDateTimePickerType;
use App\Form\Type\FloatType;
use App\Form\Type\YesNoType;
use App\Repository\PersonnelRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Positive;

/**
 * Class EvaluationType.
 */
class EvaluationType extends AbstractType
{
    private Departement $departement;
    private Semestre $semestre;
    private TypeMatiereManager $typeMatiereManager;

    public function __construct(TypeMatiereManager $typeMatiereManager)
    {
        $this->typeMatiereManager = $typeMatiereManager;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $locale = $options['locale'];
        $autorise = !$options['autorise'];
        $this->semestre = $options['semestre'];
        $import = $options['import'];
        $matiereDisabled = $options['matiereDisabled'];
        $personnelDisabled = $options['personnelDisabled'] ?? true;

        $builder
            ->add('personnelAuteur', EntityType::class,
                [
                    'label' => 'personnelAuteur',
                    'help' => 'help.personnelAuteur',
                    'required' => true,
                    'disabled' => $personnelDisabled,
                    'class' => Personnel::class,
                    'choice_label' => 'displayPr',
                    'query_builder' => function(PersonnelRepository $personnelRepository) {
                        return $personnelRepository->findByDepartementBuilder($this->semestre->getAnnee()->getDiplome()->getDepartement());
                    },
                ])
            ->add('libelle', TextType::class,
                [
                    'label' => 'libelle_evaluation',
                    'help' => 'help.libelle_evaluation',
                    'required' => false,
                    'disabled' => $autorise,
                ])
            ->add('dateEvaluation', CarbonDateTimePickerType::class, [
                'label' => 'date_evaluation',
                'disabled' => $autorise,
                'attr' => ['data-options' => ['locale' => $locale]],
            ])
            ->add('coefficient', FloatType::class,
                [
                    'label' => 'coefficient',
                    'help' => 'help.coefficient',
                    'disabled' => $autorise,
                    'constraints' => new Positive()
                ])
            ->add('commentaire', TextType::class,
                ['label' => 'commentaire', 'help' => 'help.commentaire_evaluation', 'disabled' => $autorise])
            ->add('visible', YesNoType::class,
                ['label' => 'evaluation.visible', 'help' => 'help.evaluation.visible'])
            ->add('matiere', ChoiceType::class, [
                'choices' => $this->typeMatiereManager->findBySemestreChoiceType($this->semestre),
                'label' => 'evaluation_matiere',
                'required' => true,
                'data' => $options['data']->getTypeIdMatiere(),
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
                'disabled' => !($matiereDisabled && $autorise),
            ])
            ->add('typeGroupe', EntityType::class, [
                'class' => TypeGroupe::class,
                'label' => 'evaluation_type_groupe',
                'choice_label' => 'libelle',
                'disabled' => $autorise,
                'query_builder' => function(TypeGroupeRepository $typeGroupeRepository) {
                    return $typeGroupeRepository->findBySemestreBuilder($this->semestre);
                },
                'required' => true,
                'expanded' => true,
                'multiple' => false,
            ])
            ->add('personnelAutorise', EntityType::class, [
                'class' => Personnel::class,
                'help' => 'help.personnelAutorise',
                'label' => 'evaluation_personnelAutorise',
                'disabled' => $autorise,
                'choice_label' => 'display',
                'attr' => ['class' => ''],
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findByDepartementBuilder($this->departement);
                },
                'required' => true,
                'expanded' => true,
                'multiple' => true,
            ])//->add('parent')
        ;

        if (true === $import) {
            $builder->add('fichier_import', FileType::class, ['mapped' => false]);
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Evaluation::class,
            'departement' => null,
            'semestre' => null,
            'import' => null,
            'matiereDisabled' => null,
            'personnelDisabled' => null,
            'autorise' => null,
            'translation_domain' => 'form',
            'locale' => 'fr',
        ]);
    }
}
