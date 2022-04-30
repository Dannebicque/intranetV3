<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Form/Type/ChoiceCompleteType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:34
 */

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class ChoiceCompleteType extends AbstractType
{
    public function __construct(protected TranslatorInterface $translator)
    {
    }

    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['attr']['is'] = 'select-complete';
        $view->vars['attr']['placeholder'] = $options['placeholder'];
        $view->vars['attr']['autocomplete'] = 'off';

        // never expand
        $view->vars['expanded'] = false;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'min_search_length' => 0,
            'width' => 'auto',
            'placeholder' => 'Veuillez choisir...',
        ]);

        $resolver->setAllowedTypes('min_search_length', 'int');
        $resolver->setAllowedTypes('width', ['null', 'string']);
        $resolver->setAllowedTypes('placeholder', 'string');
    }

    public function getParent(): ?string
    {
        return ChoiceType::class;
    }
}
