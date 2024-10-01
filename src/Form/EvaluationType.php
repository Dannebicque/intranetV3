<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/EvaluationType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/10/2024 20:59
 */

namespace App\Form;

use App\Classes\Matieres\TypeMatiereManager;
use App\Entity\Departement;
use App\Entity\Evaluation;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Form\Type\DatePickerType;
use App\Form\Type\FloatType;
use App\Form\Type\YesNoType;
use App\Repository\PersonnelRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
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

    public function __construct(private readonly TypeMatiereManager $typeMatiereManager)
    {
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
                    'label' => 'label.personnelAuteur',
                    'help' => 'help.personnelAuteur',
                    'required' => true,
                    'disabled' => $personnelDisabled,
                    'class' => Personnel::class,
                    'choice_label' => 'displayPr',
                    'query_builder' => fn(PersonnelRepository $personnelRepository
                    ) => $personnelRepository->findByDepartementBuilder($this->semestre->getAnnee()->getDiplome()->getDepartement()),
                ])
            ->add('libelle', TextType::class,
                [
                    'label' => 'label.libelle_evaluation',
                    'help' => 'help.libelle_evaluation',
                    'required' => false,
                    'disabled' => $autorise,
                    'attr' => ['maxlength' => 100],
                ])
            ->add('dateEvaluation', DatePickerType::class, [
                'label' => 'label.date_evaluation',
                'disabled' => $autorise,
                'attr' => ['data-options' => ['locale' => $locale]],
            ])
            ->add('coefficient', FloatType::class,
                [
                    'label' => 'label.coefficient',
                    'help' => 'help.coefficient',
                    'disabled' => $autorise,
                    'constraints' => new Positive(),
                ])
            ->add('commentaire', TextType::class,
                [
                    'label' => 'label.commentaire',
                    'help' => 'help.commentaire_evaluation',
                    'disabled' => $autorise,
                    'required' => false,
                    'attr' => ['maxlength' => 255],
                ])
            ->add('visible', YesNoType::class,
                ['label' => 'label.evaluation.visible', 'help' => 'help.evaluation.visible'])
            ->add('typeGroupe', EntityType::class, [
                // 'data' => true === $options['enfant'] ? ($options['groupeEnfant']?->first()->getTypeGroupe()) : null,
                // todo: en attendant mieux. Car peut y avoir plusieurs groupes, et donc plusieurs types groupes.)
                'class' => TypeGroupe::class,
                'label' => 'label.evaluation_type_groupe',
                'choice_label' => 'libelle',
                'disabled' => $autorise || ($options['enfant'] && null !== $options['groupeEnfant']),
                'query_builder' => function (TypeGroupeRepository $typeGroupeRepository) {
                    $queryBuilder = $this->semestre->getDiplome()?->isApc()
                        ? $typeGroupeRepository->findByDiplomeAndOrdreSemestreBuilder($this->semestre->getDiplome(), $this->semestre->getOrdreLmd())
                        : $typeGroupeRepository->findBySemestreBuilder($this->semestre);

                    if ($this->semestre->getDiplome()?->getSaisieCmAutorise() === false) {
                        $queryBuilder->andWhere('t.libelle NOT LIKE :cm')
                            ->setParameter('cm', '%CM%');
                    }

                    return $queryBuilder;
                },
                'required' => true,
                'expanded' => true,
                'multiple' => false,
            ])
            ->add('personnelAutorise', EntityType::class, [
                'class' => Personnel::class,
                'help' => 'help.personnelAutorise',
                'label' => 'label.evaluation_personnelAutorise',
                'disabled' => $autorise,
                'choice_label' => 'display',
                'attr' => ['class' => ''],
                'query_builder' => fn(PersonnelRepository $personnelRepository
                ) => $personnelRepository->findByDepartementBuilder($this->departement),
                'required' => true,
                'expanded' => true,
                'multiple' => true,
            ]);

        if (($matiereDisabled && $autorise)) {
            $builder->add('matiere', ChoiceType::class, [
                'choices' => $this->typeMatiereManager->findBySemestreChoiceType($this->semestre),
                'label' => 'label.evaluation_matiere',
                'required' => true,
                'data' => $options['data']->getTypeIdMatiere(),
                'expanded' => false,
                'multiple' => false,
                'mapped' => false,
            ]);
        } else {
            $matiere = $this->typeMatiereManager->getMatiereFromSelect($options['data']->getTypeIdMatiere());
            $builder->add('matiere', HiddenType::class, [
                'label' => 'label.evaluation_matiere',
                'required' => true,
                'data' => $options['data']->getTypeIdMatiere(),
                'mapped' => false,
                'disabled' => true,
            ]);
            $builder->add('matiereDisplay', TextType::class, [
                'label' => 'label.evaluation_matiere',
                'required' => true,
                'data' => $matiere->display,
                'mapped' => false,
                'disabled' => true,
            ]);
        }

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
            'enfant' => false,
            'groupeEnfant' => null,
            'translation_domain' => 'form',
            'locale' => 'fr',
        ]);
    }
}
