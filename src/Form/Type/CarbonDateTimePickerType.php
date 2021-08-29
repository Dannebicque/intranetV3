<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/CarbonDateTimePickerType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2021 14:38
 */

namespace App\Form\Type;

use App\Form\Transformer\CarbonToDateTimeTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;

/**
 * Class YesNoType.
 */
class CarbonDateTimePickerType extends AbstractType
{
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        //$view->vars['attr']['is'] = 'date-picker';
        $view->vars['attr']['autocomplete'] = 'off';

        $jsOptions = [
            'dateFormat' => $options['format'],
            'enableTime' => $options['enable_time'],
            'allowInput' => $options['allow_input'],
//            'minDate' => $this->toDate($options['min'], $options['format']),
//            'maxDate' => $this->toDate($options['max'], $options['format'])
        ];

        $view->vars['attr']['data-options'] = json_encode($jsOptions);

        parent::buildView($view, $form, $options);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('data_class', null)
            ->setDefault('enable_time', false)
            ->setAllowedTypes('enable_time', 'bool')
            ->setDefault('min', null)
            ->setAllowedTypes('min', [\DateTimeInterface::class, 'string', 'null'])
            ->setDefault('max', null)
            ->setAllowedTypes('max', [\DateTimeInterface::class, 'string', 'null'])
            ->setDefault('input_prefix', null)
            ->setAllowedTypes('input_prefix', ['string', 'null'])
            ->setDefault('allow_input', true)
            ->setAllowedTypes('allow_input', 'bool')
            ->setDefault('widget', 'single_text');
//            ->setDefault('format', function (Options $options) {
//                return $options['enable_time'] ? 'd/m/Y H:i' : 'd/m/Y';
//            })
//            ->setAllowedTypes('format', 'string');
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addModelTransformer(new CarbonToDateTimeTransformer());
    }

    public function getParent(): ?string
    {
        return DateTimeType::class;
    }
}
