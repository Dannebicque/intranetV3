<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/StageEtudiantEtudiantType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/12/2022 19:24
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

/** @deprecated Utiliser les formulaires dans stage */
class StageEtudiantEtudiantType extends AbstractType
{
    protected bool $flexible = false;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->flexible = $options['flexible'];

        $builder
            ->add('entreprise', EntrepriseType::class, [
                'label' => 'Contact et coordonnées du siège de l\'entreprise',
                'help' => 'Le siège de l\'entreprise n\'est pas forcément le lieu de stage',
            ])
            ->add('tuteur', ContactType::class)
            ->add('adresseStage', AdresseType::class, [
                'label' => 'Adresse du lieu où le stage sera effectué',
                'help' => 'Cette adresse peut être différente du siège de l\'entreprise.',
                'required' => false,
            ])
            ->add(
                'serviceStageEntreprise',
                TextType::class,
                [
                    'label' => 'label.serviceStageEntreprise',
                    'help' => 'help.serviceStageEntreprise',
                    'required' => false,
                ]
            )
            ->add('sujetStage', TextareaType::class,
                ['label' => 'label.sujetStage', 'help' => 'help.sujetStage', 'attr' => ['rows' => 8]])
            ->add('activites', TextareaType::class, ['label' => 'label.activites', 'help' => 'help.activites'])
            ->add(
                'dureeHebdomadaire',
                FloatType::class,
                ['label' => 'label.dureeHebdomadaire', 'help' => 'help.dureeHebdomadaire']
            )
            ->add(
                'commentaireDureeHebdomadaire',
                TextareaType::class,
                [
                    'label' => 'label.commentaireDureeHebdomadaire',
                    'help' => 'help.commentaireDureeHebdomadaire',
                    'required' => false,
                ]
            )
            ->add(
                'periodesInterruptions',
                TextareaType::class,
                ['label' => 'label.periodesInterruptions', 'help' => 'help.periodesInterruptions', 'required' => false]
            )
            ->add(
                'amenagementStage',
                TextareaType::class,
                ['label' => 'label.amenagementStage', 'help' => 'help.amenagementStage', 'required' => false]
            )
            ->add('gratification', YesNoType::class, ['label' => 'label.gratification', 'help' => 'help.gratification'])
            ->add(
                'gratificationMontant',
                FloatType::class,
                ['label' => 'label.gratificationMontant', 'help' => 'help.gratificationMontant']
            )
            ->add(
                'gratificationPeriode',
                ChoiceType::class,
                [
                    'label' => 'label.gratificationPeriode',
                    'help' => 'help.gratificationPeriode',
                    'choices' => [
                        'Heure' => StageEtudiant::PERIODE_GRATIFICATION_HEURE,
                        'Jour' => StageEtudiant::PERIODE_GRATIFICATION_JOUR,
                        'Mois' => StageEtudiant::PERIODE_GRATIFICATION_MOIS,
                    ],
                ]
            )
            ->add('avantages', TextareaType::class,
                ['label' => 'label.avantages', 'help' => 'help.avantages', 'required' => false]);

        if (true === $this->flexible) {
            $builder
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
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StageEtudiant::class,
            'flexible' => false,
            'translation_domain' => 'form',
        ]);
    }
}
