<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/stage/FormTypeStage.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/01/2023 11:19
 */

namespace App\Form\stage;

use App\Entity\StageEtudiant;
use App\Form\Type\DatePickerType;
use App\Form\Type\FloatType;
use App\Form\Type\YesNoType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FormTypeStage extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->flexible = $options['flexible'];

        if (true === $this->flexible) {
            $builder->
            add('date_debut_stage', DatePickerType::class, ['label' => 'Date de début :'])
                ->add('date_fin_stage', DatePickerType::class, ['label' => 'Date de fin  :'])
                ->add('duree_jours_stage', IntegerType::class, [
                    'label' => 'Nombre de jours de stage :',
                    'help' => 'En jours ouvrés (hors week-end et jours fériés)',
                ]);
        }
        $builder
            ->add('service_stage_entreprise', TextType::class, [
                'label' => 'Service dans l\'entreprise :',
                'help' => 'Service dans lequel vous effectuerez votre stage',
                'required' => false,
            ])
            ->add('sujet_stage', TextareaType::class, [
                'label' => 'Mission principale :',
            ])
            ->add('activites', TextareaType::class,
                ['label' => 'Activités à réaliser :', 'help' => 'Décrivez les missions qui vous seront confiées'])
            ->add('periodes_interruptions', TextType::class, [
                'label' => 'Périodes d\'interruptions :',
                'help' => 'En complément des périodes déjà prévues',
                'required' => false,
            ])
            ->add('duree_hebdomadaire', FloatType::class, [
                'label' => 'Durée de travail hebdomadaire :',
                'input_suffix' => '<span class="input-group-text"> heures</span>',
                'attr' => ['placeholder' => '35'],
            ])
            ->add('commentaire_duree_hebdomadaire', TextareaType::class, [
                'label' => 'Commentaires sur la durée du travail :',
                'help' => 'Toutes précisions nécessaires sur la durée de travail',
                'required' => false,
            ])
            ->add('amenagement_stage', TextareaType::class, [
                'label' => 'Aménagement du stage :',
                'help' => 'Aménagement du temps de travail par exemple (travail de nuit, déplacements, télétravail...)',
                'required' => false,
            ])
            ->add('gratification', YesNoType::class, [
                'label' => 'Gratification :',
                'help' => 'Le stage sera-t-il rémunéré ? La rémunération est obligatoire au dela de 40 jours.',
            ])
            ->add('gratification_periode', ChoiceType::class, [
                'label' => 'Période de gratification :',
                'required' => false,
                'choices' => [
                    'Heure' => StageEtudiant::PERIODE_GRATIFICATION_HEURE,
                    'Jour' => StageEtudiant::PERIODE_GRATIFICATION_JOUR,
                    'Mois' => StageEtudiant::PERIODE_GRATIFICATION_MOIS,
                ],
                'empty_data' => StageEtudiant::PERIODE_GRATIFICATION_HEURE,
                'expanded' => true,
                'help' => 'Choisissez la période de calcul de la gratification',
            ])
            ->add('gratification_montant', FloatType::class, [
                'label' => 'Montant de la gratification :',
                'input_suffix' => '<span class="input-group-text"> €</span>',
                'help' => 'En fonction de la période sélectionnée',
                'attr' => ['placeholder' => '3.9'],
                //todo: mettre en place la récupération depuis le contrôler et la config
            ])
            ->add('avantages', TextareaType::class, [
                'label' => 'Avantages :',
                'help' => 'Autres avantages (frais de transports, ...)',
                'required' => false,
            ])
            ->add('retour', SubmitType::class,
                ['label' => 'Etape précédente', 'attr' => ['class' => 'btn-precedent']])
            ->add('suivant', SubmitType::class,
                ['label' => 'Etape suivante', 'attr' => ['class' => 'btn-success']]);
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
