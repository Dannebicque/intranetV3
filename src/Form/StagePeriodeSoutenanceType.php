<?php

namespace App\Form;

use App\Entity\StagePeriodeSoutenance;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Form\Type\DateRangeType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class StagePeriodeSoutenanceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateRange', DateRangeType::class,
                ['label' => 'dateRange.soutenance', 'mapped' => false, 'required' => true])
            ->add('dateRenduRapport', DateTimeType::class,
                ['widget' => 'single_text', 'label' => 'label.dateRenduRapport'])
            ->addEventListener(FormEvents::POST_SUBMIT, function(FormEvent $event) {
                $stagePeriodeSoutenance = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $stagePeriodeSoutenance->setDateDebut($dateRange['from_date']);
                $stagePeriodeSoutenance->setDateFin($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, function(FormEvent $event) {
                $stagePeriodeSoutenance = $event->getData();
                $form = $event->getForm();
                if ($stagePeriodeSoutenance !== null) {
                    $form->add('dateRange', DateRangeType::class, [
                        'label'     => 'dateRange.soutenance',
                        'mapped'    => false,
                        'date_data' => [
                            'from' => $stagePeriodeSoutenance->getDateDebut(),
                            'to'   => $stagePeriodeSoutenance->getDateFin()
                        ]
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
