<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/BooleanColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2021 10:55
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class BooleanColumnType extends PropertyColumnType
{
    protected TranslatorInterface $translator;

    public function __construct(TranslatorInterface $translator)
    {
        parent::__construct();
        $this->translator = $translator;
    }

    public function renderProperty($value, array $options): string
    {
        if ($options['strict_comparison'] && !is_bool($value)) {
            return '';
        }

        switch ($value) {
            case true:
                return sprintf(
                    '<span class="badge bg-success"><i class="%s"></i> %s</span>',
                    $options['yes_icon'],
                    $this->translator->trans($options['yes_value'])
                );

            case false:
                return sprintf(
                    '<span class="badge bg-danger"><i class="%s"></i> %s</span>',
                    $options['no_icon'],
                    $this->translator->trans($options['no_value'])
                );
            default:
                return '';
        }
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('strict_comparison', false)
            ->setAllowedTypes('strict_comparison', 'bool')
            ->setDefault('yes_value', 'Yes')
            ->setAllowedTypes('yes_value', 'string')
            ->setDefault('no_value', 'No')
            ->setAllowedTypes('no_value', 'string')
            ->setDefault('yes_icon', 'mdi mdi-check me-1')
            ->setAllowedTypes('yes_icon', 'string')
            ->setDefault('no_icon', 'mdi mdi-cancel me-1')
            ->setAllowedTypes('no_icon', 'string')
            ->setDefault('is_safe_html', true);
    }
}