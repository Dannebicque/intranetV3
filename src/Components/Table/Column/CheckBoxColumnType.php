<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/CheckBoxColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/07/2021 18:38
 */

namespace App\Components\Table\Column;

use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class CheckBoxColumnType extends ColumnType
{
    protected TranslatorInterface $translator;

    /**
     * CheckBoxColumnType constructor.
     */
    public function __construct(TranslatorInterface $translator)
    {
        $this->translator = $translator;
    }

    /**
     * {@inheritdoc}
     */
    public function render($rowData, array $options): string
    {
        return '<input class="form-check-input" type="checkbox">';
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('order', false)
            ->setDefault('class', 'text-center row-selector')
            ->setDefault('label', $this->labelTemplate())
            ->setDefault('translation_domain', null)
            ->setDefault('width', '80px')
            ->setDefault('is_safe_html', true);
    }

    private function labelTemplate(): string
    {
        return '<div class="dropdown">'
            . '<button class="btn btn-sm p-0 w-100" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'
            . '<i class="mdi mdi-dots-vertical"></i>'
            . '</button>'
            . '<div class="dropdown-menu">'
            . '<a class="dropdown-item" href data-tag="dt:selectpage">' . $this->translator->trans('All') . '</a>'
            . '<a class="dropdown-item" href data-tag="dt:unselectpage">' . $this->translator->trans('None') . '</a>'
            . '</div>';
    }
}
