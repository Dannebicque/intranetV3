<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/DateRangeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/05/2021 20:11
 */

namespace App\Form\Type;

use DateTime;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
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
        $builder->add('from_date', DateType::class,
            array_merge($options['from_date_options'], ['data' => $options['date_data']['from']]));
        $builder->add('to_date', DateType::class,
            array_merge($options['from_date_options'], ['data' => $options['date_data']['to']]));
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'required'          => true,
                'from_date_options' => ['widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'],
                'to_date_options'   => ['widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'],
                'date_data'         => ['from' => new DateTime('now'), 'to' => new DateTime('now')],
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
