<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/DatePickerType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2021 18:51
 */

namespace App\Form\Type;

use App\Form\Transformer\CarbonToDateTimeTransformer;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DatePickerType extends AbstractType
{
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['attr']['is'] = 'my-datepicker';
        $view->vars['attr']['autocomplete'] = 'off';

        $jsOptions = [
            'dateFormat' => $options['format'],
            'enableTime' => $options['enable_time'],
            'allowInput' => $options['allow_input'],
            'minDate' => $this->toDate($options['min'], $options['format']),
            'maxDate' => $this->toDate($options['max'], $options['format'])
        ];

        $view->vars['attr']['data-options'] = json_encode($jsOptions);

        parent::buildView($view, $form, $options);
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->addModelTransformer(new CallbackTransformer(
            function($value) use ($options) {
                if (\is_a($value, CarbonInterface::class)) {
                    return $value->format($options['format']);
                }

                return '';
            },

            function($value) use ($options) {
                $date = Carbon::createFromFormat($options['format'], $value);

                return false === $date ? null : $date;
            }
        ));
    }

    /**
     * {@inheritdoc}
     */
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
            ->setDefault('allow_input', true)
            ->setAllowedTypes('allow_input', 'bool')
            ->setDefault('format', function(Options $options) {
                return $options['enable_time'] ? 'd/m/Y H:i' : 'd/m/Y';
            })
            ->setAllowedTypes('format', 'string');
    }

    /**
     * {@inheritdoc}
     */
    public function getParent()
    {
        return TextType::class;
    }

    private function toDate($value, string $outputFormat = 'Y-m-d')
    {
        if (is_string($value)) {
            $value = new \DateTime($value);
        }

        if (!\is_a($value, \DateTimeInterface::class)) {
            return null;
        }

        return $value->format($outputFormat);
    }
}
