<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/DateRangeType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/09/2021 21:28
 */

namespace App\Form\Type;

use Carbon\Carbon;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class YesNoType.
 */
class DateRangeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->add('from_date', DatePickerType::class,
            array_merge($options['from_date_options'], ['data' => $options['date_data']['from']]));
        $builder->add('to_date', DatePickerType::class,
            array_merge($options['to_date_options'], ['data' => $options['date_data']['to']]));
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'compound' => true,
                'required' => true,
                'from_date_options' => ['format' => 'd/m/Y', 'input_prefix_text' => 'A partir du'],
                'to_date_options' => ['format' => 'd/m/Y', 'input_prefix_text' => 'Jusqu\'au'],
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

    public function getParent(): ?string
    {
        return TextType::class;
    }
}
