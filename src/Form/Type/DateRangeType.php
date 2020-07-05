<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/DateRangeType.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

// src/Form/Type/ShippingType.php
namespace App\Form\Type;

use DateTime;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class YesNoType
 * @package App\Form\Type
 */
class DateRangeType extends AbstractType
{
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
            ->setDefaults(array(
                'required'          => true,
                'from_date_options' => array('widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'),
                'to_date_options'   => array('widget' => 'single_text', 'html5' => false, 'format' => 'dd/MM/yyyy'),
                'date_data'         => ['from' => new DateTime('now'), 'to' => new DateTime('now')]
            ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'my_date_range';
    }
}
