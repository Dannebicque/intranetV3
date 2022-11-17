<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/StagePeriodeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 10:37
 */

namespace App\Form;

use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Entity\StagePeriode;
use App\Form\Type\DateRangeType;
use App\Form\Type\YesNoType;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichFileType;

class StagePeriodeType extends AbstractType
{
    private ?Departement $departement = null;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];
        $builder
            ->add('libelle', TextType::class, ['label' => 'label.libelle', 'help' => 'help.libelleStagePeriode'])
            ->add('numeroPeriode', ChoiceType::class, [
                'label' => 'label.ordre_annee',
                'choices' => [1 => 1, 2 => 2, 3 => 3, 4 => 4, 5 => 5, 6 => 6],
                'translation_domain' => 'form',
            ])
            ->add('semestre', EntityType::class, [
                'class' => Semestre::class,
                'label' => 'label.semestre_stage_periode',
                'choice_label' => 'libelle',
                'query_builder' => fn (SemestreRepository $semestreRepository) => $semestreRepository->findByDepartementBuilder($this->departement),
                'required' => true,
                'expanded' => true,
                'multiple' => false,
            ])
            ->add('responsables', EntityType::class, [
                'label' => 'label.responsables',
                'expanded' => true,
                'multiple' => true,
                'class' => Personnel::class,
                'help' => 'help.responsables',
                'choice_label' => 'display',
                'query_builder' => fn (PersonnelRepository $personnelRepository) => $personnelRepository->findByDepartementBuilder($this->departement),
            ])
            ->add('anneeUniversitaire', EntityType::class, [
                'label' => 'label.anneeUniversitaire',
                'choice_label' => 'displayAnneeUniversitaire',
                'class' => AnneeUniversitaire::class,
            ])
            ->add('dateRange', DateRangeType::class,
                ['label' => 'label.dateRange.periode', 'mapped' => false, 'required' => true])
            ->add('nbSemaines', TextType::class, ['label' => 'label.nbSemaines', 'help' => 'help.nbSemaines'])
            ->add('nbJours', TextType::class, ['label' => 'label.nbJours', 'help' => 'help.nbJours'])
            ->add('datesFlexibles', YesNoType::class,
                ['label' => 'label.datesFlexibles', 'help' => 'help.datesFlexibles'])
            ->add('stagePeriodeInterruptions', CollectionType::class, [
                'entry_type' => StagePeriodeInterruptionType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'attr' => [
                    'class' => 'selector-stagePeriodeInterruptions',
                ],
                'help' => 'Vous pouvez indiquer une ou plusieurs périodes d\'interruption pendant la durée du stage',
            ])
            ->add('stagePeriodeSoutenances', CollectionType::class, [
                'entry_type' => StagePeriodeSoutenanceType::class,
                'entry_options' => ['label' => false],
                'allow_add' => true,
                'prototype' => true,
                'allow_delete' => true,
                'by_reference' => false,
                'attr' => [
                    'class' => 'selector-stagePeriodeSoutenances',
                ],
                'help' => 'Veuillez indiquer au moins une période de soutenances.',
            ])
            ->add('copieAssistant', YesNoType::class,
                ['label' => 'label.copieAssistant', 'help' => 'help.copieAssistant'])
            ->add('documentFile', VichFileType::class, [
                'required' => false,
                'label' => 'label.fichier',
                'download_label' => 'apercu',
                'allow_delete' => true,
                'help' => 'help.ficheRenseignement',
            ])
            ->add('texteLibre', TextareaType::class, ['label' => 'label.texteLibre', 'help' => 'help.texteLibre'])
            ->add('competencesVisees', TextareaType::class,
                ['label' => 'label.competencesVisees', 'help' => 'help.competencesVisees'])
            ->add('modaliteEvaluation', TextareaType::class,
                ['label' => 'label.modaliteEvaluation', 'help' => 'help.modaliteEvaluation'])
            ->add('modaliteEvaluationPedagogique', TextareaType::class,
                ['label' => 'label.modaliteEvaluationPedagogique', 'help' => 'help.modaliteEvaluationPedagogique'])
            ->add('modaliteEncadrement', TextareaType::class,
                ['label' => 'label.modaliteEncadrement', 'help' => 'help.modaliteEncadrement'])
            ->add('documentRendre', TextareaType::class,
                ['label' => 'label.documentRendre', 'help' => 'help.documentRendre'])
            ->add('nbEcts', TextType::class, ['label' => 'label.nbEcts', 'help' => 'help.nbEcts'])
            ->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $event) {
                $stagePeriode = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $stagePeriode->setDateDebut($dateRange['from_date']);
                $stagePeriode->setDateFin($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function (FormEvent $event) {
                $stagePeriode = $event->getData();
                $form = $event->getForm();
                $form->add('dateRange', DateRangeType::class, [
                    'label' => 'label.dateRange.periode',
                    'mapped' => false,
                    'date_data' => ['from' => $stagePeriode->getDateDebut(), 'to' => $stagePeriode->getDateFin()],
                ]);
            });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StagePeriode::class,
            'departement' => null,
            'translation_domain' => 'form',
        ]);
    }
}
