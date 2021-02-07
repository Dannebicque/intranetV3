<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/AlternanceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Form;

use App\Entity\Alternance;
use App\Entity\Personnel;
use App\Form\Type\DateRangeType;
use App\Repository\PersonnelRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AlternanceType extends AbstractType
{
    private $departement;

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $this->departement = $options['departement'];

        $builder
            ->add('typeContrat', ChoiceType::class, [
                'choices'  => [
                    Alternance::ALTERNANCE_APPRENTISSAGE       => Alternance::ALTERNANCE_APPRENTISSAGE,
                    Alternance::ALTERNANCE_PROFESSIONALISATION => Alternance::ALTERNANCE_PROFESSIONALISATION,
                ],
                'expanded' => true,
                'label'    => 'label.contrat_alternance',
            ])
            ->add('etat', ChoiceType::class, [
                'choices'  => [
                    Alternance::ALTERNANCE_ETAT_INITIALISE => Alternance::ALTERNANCE_ETAT_INITIALISE,
                    Alternance::ALTERNANCE_ETAT_COMPLETE   => Alternance::ALTERNANCE_ETAT_COMPLETE,
                    Alternance::ALTERNANCE_ETAT_VALIDE     => Alternance::ALTERNANCE_ETAT_VALIDE,
                ],
                'expanded' => true,
                'label'    => 'label.etat_alternance',
            ])
            ->add('dateRange', DateRangeType::class, ['label' => 'dateRange.periode.alternance', 'mapped' => false, 'required' => true])
            ->add('entreprise', EntrepriseType::class, ['label' => 'label.entreprise'])
            ->add('tuteur', ContactType::class, ['label' => 'label.tuteur'])
            ->add('tuteurUniversitaire', EntityType::class, [
                'label'         => 'label.tuteur_universitaire',
                'expanded'      => false,
                'multiple'      => false,
                'class'         => Personnel::class,
                'help'          => 'help.tuteur_universitaire',
                'choice_label'  => 'display',
                'query_builder' => function(PersonnelRepository $personnelRepository) {
                    return $personnelRepository->findByDepartementBuilder($this->departement);
                },
                'attr'          => ['class' => 'form-control selectpicker'],
            ])
            ->add('sujet', TextareaType::class, ['label' => 'label.sujet_altenance'])
            ->add('adresseAlternance', AdresseType::class,
                ['label' => 'label.adresse_lieu_alternance', 'help' => 'help.complete.meme.si.identique'])
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $alternance = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $alternance->setDateDebut($dateRange['from_date']);
                $alternance->setDateFin($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $alternance = $event->getData();
                $form = $event->getForm();
                $form->add('dateRange', DateRangeType::class, [
                    'label'     => 'dateRange',
                    'mapped'    => false,
                    'date_data' => [
                        'from' => $alternance->getDateDebut(),
                        'to'   => $alternance->getDateFin(),
                    ],
                ]);
            });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class'         => Alternance::class,
            'translation_domain' => 'form',
            'departement'        => null,
        ]);
    }
}
