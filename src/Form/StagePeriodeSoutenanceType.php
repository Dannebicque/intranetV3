<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/StagePeriodeSoutenanceType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:37
 */

namespace App\Form;

use App\Entity\StagePeriodeSoutenance;
use App\Form\Type\DatePickerType;
use App\Form\Type\DateRangeType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StagePeriodeSoutenanceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateRange', DateRangeType::class,
                ['label' => 'label.dateRange.soutenance', 'mapped' => false, 'required' => true])
            ->add('dateRenduRapport', DatePickerType::class,
                ['label' => 'label.dateRenduRapport', 'required' => false])
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $stagePeriodeSoutenance = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $stagePeriodeSoutenance->setDateDebut($dateRange['from_date']);
                $stagePeriodeSoutenance->setDateFin($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $stagePeriodeSoutenance = $event->getData();
                $form = $event->getForm();
                if (null !== $stagePeriodeSoutenance) {
                    $form->add('dateRange', DateRangeType::class, [
                        'label' => 'label.dateRange.soutenance',
                        'mapped' => false,
                        'date_data' => [
                            'from' => $stagePeriodeSoutenance->getDateDebut(),
                            'to' => $stagePeriodeSoutenance->getDateFin(),
                        ],
                    ]);
                }
            });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StagePeriodeSoutenance::class,
        ]);
    }
}
