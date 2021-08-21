<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/CarbonDateTimePickerType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:20
 */

namespace App\Form\Type;

use App\Form\Transformer\CarbonToDateTimeTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;

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

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->addModelTransformer(new CarbonToDateTimeTransformer());
    }

    public function getParent(): ?string
    {
        return CarbonDateTimeType::class;
    }
}
