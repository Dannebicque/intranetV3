<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/StageEtudiantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/10/2023 15:08
 */

namespace App\Form;

use App\Entity\StageEtudiant;
use App\Form\Type\DateRangeType;
use App\Form\Type\FloatType;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StageEtudiantType extends AbstractType
{
    // formuliare Administrateur.
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('entreprise', EntrepriseType::class, ['label' => 'label.entreprise'])
            ->add('tuteur', ContactType::class, ['label' => 'label.tuteurEntreprise'])
            ->add('adresseStage', AdresseType::class, [
                'label' => 'Adresse du lieu où le stage sera effectué',
                'help' => 'Cette adresse peut être différente du siège de l\'entreprise.',
                'required' => false,
            ])
            ->add('serviceStageEntreprise', TextType::class,
                ['label' => 'label.serviceStageEntreprise', 'required' => false])
            ->add('sujetStage', TextareaType::class, ['label' => 'label.sujetStage'])
            ->add('activites', TextareaType::class, ['label' => 'label.activites'])
            ->add('dateRange', DateRangeType::class,
                ['label' => 'label.dateRange.periode.stage.etudiant', 'mapped' => false, 'required' => true])
            ->add('periodesInterruptions', TextareaType::class,
                ['label' => 'label.periodesInterruptions', 'required' => false])
            ->add('dureeHebdomadaire', TextType::class, [
                'label' => 'label.dureeHebdomadaire',
                'required' => false,
                'input_suffix' => '<span class="input-group-text">Heure(s)</span>',
            ])
            ->add(
                'commentaireDureeHebdomadaire',
                TextareaType::class,
                [
                    'label' => 'label.commentaireDureeHebdomadaire',
                    'help' => 'help.commentaireDureeHebdomadaire',
                    'required' => false,
                ]
            )
            ->add('dureeJoursStage', IntegerType::class, [
                'label' => 'label.dureeJoursStage',
                'help' => 'En nombre de jours entier.',
                'input_suffix' => '<span class="input-group-text">Jour(s)</span>',
            ])
            ->add('amenagementStage', TextareaType::class, ['label' => 'label.amenagementStage', 'required' => false])
            ->add('gratification', YesNoType::class, ['label' => 'label.gratification'])
            ->add('gratificationMontant', FloatType::class, [
                'label' => 'label.gratificationMontant',
                'help' => 'En montant (pas de texte)',
                'input_suffix' => '<span class="input-group-text">€</span>',
            ])
            ->add('gratificationPeriode', ChoiceType::class, [
                'label' => 'label.gratificationPeriode',
                'help' => 'help.gratificationPeriode',
                'choices' => [
                    'Heure' => StageEtudiant::PERIODE_GRATIFICATION_HEURE,
                    'Jour' => StageEtudiant::PERIODE_GRATIFICATION_JOUR,
                    'Mois' => StageEtudiant::PERIODE_GRATIFICATION_MOIS,
                ],
            ])
            ->add('avantages', TextareaType::class, ['label' => 'label.avantages', 'required' => false])
            ->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $event) {
                /** @var StageEtudiant $stageEtudiant */
                $stageEtudiant = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $stageEtudiant->setDateDebutStage($dateRange['from_date']);
                $stageEtudiant->setDateFinStage($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function (FormEvent $event) {
                /** @var StageEtudiant $stageEtudiant */
                $stageEtudiant = $event->getData();
                $form = $event->getForm();
                $form->add('dateRange', DateRangeType::class, [
                    'label' => 'label.dateRange.periode',
                    'mapped' => false,
                    'date_data' => [
                        'from' => $stageEtudiant->getDateDebutStage(),
                        'to' => $stageEtudiant->getDateFinStage(),
                    ],
                ]);
            })
            ->add('dateRange', DateRangeType::class,
                ['label' => 'label.dateRange.periode.stage.etudiant', 'mapped' => false, 'required' => true])
            ->add(
                'dureeJoursStage',
                IntegerType::class,
                ['label' => 'label.dureeJoursStage', 'help' => 'help.dureeJoursStage']
            )
            ->addEventListener(FormEvents::POST_SUBMIT, static function (FormEvent $event) {
                /** @var StageEtudiant $stageEtudiant */
                $stageEtudiant = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $stageEtudiant->setDateDebutStage($dateRange['from_date']);
                $stageEtudiant->setDateFinStage($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function (FormEvent $event) {
                /** @var StageEtudiant $stageEtudiant */
                $stageEtudiant = $event->getData();
                $form = $event->getForm();
                $form->add('dateRange', DateRangeType::class, [
                    'label' => 'label.dateRange.periode',
                    'mapped' => false,
                    'date_data' => [
                        'from' => $stageEtudiant->getDateDebutStage(),
                        'to' => $stageEtudiant->getDateFinStage(),
                    ],
                ]);
            });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StageEtudiant::class,
            'translation_domain' => 'form',
        ]);
    }
}
