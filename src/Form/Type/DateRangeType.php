<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/DateRangeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 16:51
 */

namespace App\Form\Type;

use Carbon\Carbon;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class YesNoType.
 */
class DateRangeType extends AbstractType
{
    //todo: a faire avec la librairie de Umlbrella ?
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('from_date', CarbonDateType::class,
            array_merge($options['from_date_options'], ['data' => $options['date_data']['from']]));
        $builder->add('to_date', CarbonDateType::class,
            array_merge($options['from_date_options'], ['data' => $options['date_data']['to']]));
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'required' => true,
                'from_date_options' => ['widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'],
                'to_date_options' => ['widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'],
                'date_data' => ['from' => Carbon::now(), 'to' => Carbon::now()],
            ]);
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'my_date_range';
    }
}
