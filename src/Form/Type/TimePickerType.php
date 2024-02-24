<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Form/Type/TimePickerType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 08:37
 */

namespace App\Form\Type;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateTime;
use DateTimeInterface;
use Exception;
use JsonException;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use function is_a;

class TimePickerType extends AbstractType
{
    /**
     * @throws JsonException
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['attr']['autocomplete'] = 'off';
        $view->vars['attr']['class'] = ' flatdatepicker';

        $jsOptions = [
            'dateFormat' => 'H:i',
            'enableTime' => true,
            'noCalendar' => true,
            'time_24hr' => true,
            'allowInput' => $options['allow_input'],
            'minDate' => $this->toDate($options['min'], $options['format']),
            'maxDate' => $this->toDate($options['max'], $options['format']),
        ];

        $view->vars['attr']['data-options'] = json_encode($jsOptions, JSON_THROW_ON_ERROR);
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addModelTransformer(new CallbackTransformer(
            function ($value) use ($options) {
                if (is_a($value, CarbonInterface::class)) {
                    return $value->format($options['format']);
                }

                return '';
            },

            function ($value) use ($options) {
                if ('' !== $value && null !== $value) {
                    return Carbon::createFromFormat($options['format'], $value);
                }

                return null;
            }
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefault('data_class', null)
            ->setDefault('enable_time', true)
            ->setAllowedTypes('enable_time', 'bool')
            ->setDefault('min', null)
            ->setAllowedTypes('min', [CarbonInterface::class, 'string', 'null'])
            ->setDefault('max', null)
            ->setAllowedTypes('max', [CarbonInterface::class, 'string', 'null'])
            ->setDefault('allow_input', true)
            ->setDefault('input_prefix_text', '<i class="fas fa-clock"></i>')
            ->setAllowedTypes('allow_input', 'bool')
            ->setDefault('format', 'H:i')
            ->setAllowedTypes('format', 'string');
    }

    /**
     * {@inheritdoc}
     */
    public function getParent(): ?string
    {
        return TextType::class;
    }

    /**
     * @throws Exception
     */
    private function toDate(mixed $value, string $outputFormat = 'H:i'): ?string
    {
        if (is_string($value)) {
            $value = new DateTime($value);
        }

        if (!is_a($value, DateTimeInterface::class)) {
            return null;
        }

        return $value->format($outputFormat);
    }
}
