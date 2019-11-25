<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Form/StagePeriodeInterruptionType.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Form;

use App\Entity\StagePeriodeInterruption;
use App\Form\Type\DateRangeType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class StagePeriodeInterruptionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('dateRange', DateRangeType::class,
                ['label' => 'dateRange.interruption', 'mapped' => false, 'required' => true])
            ->add('motif', TextType::class, ['label' => 'label.motif'])
            ->addEventListener(FormEvents::POST_SUBMIT, static function(FormEvent $event) {
                $stagePeriodeInterruption = $event->getData();
                $form = $event->getForm();
                $dateRange = $form->get('dateRange')->getData();
                $stagePeriodeInterruption->setDateDebut($dateRange['from_date']);
                $stagePeriodeInterruption->setDateFin($dateRange['to_date']);
            })
            ->addEventListener(FormEvents::PRE_SET_DATA, static function(FormEvent $event) {
                $stagePeriodeInterruption = $event->getData();
                if ($stagePeriodeInterruption !== null) {
                    $form = $event->getForm();
                    $form->add('dateRange', DateRangeType::class, [
                        'label'     => 'dateRange.interruption',
                        'mapped'    => false,
                        'date_data' => [
                            'from' => $stagePeriodeInterruption->getDateDebut(),
                            'to'   => $stagePeriodeInterruption->getDateFin()
                        ]
                    ]);
                }
            });
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => StagePeriodeInterruption::class,
        ]);
    }
}
