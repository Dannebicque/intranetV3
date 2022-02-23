<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Table/Column/CheckBoxColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 20:09
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

    public function render(mixed $rowData, array $options): string
    {
        return '<div class="form-check"><input class="form-check-input position-static" type="checkbox"></div>';
    }

    private function labelTemplate(): string
    {
        return '<div class="form-check"><input class="form-check-input position-static row-selector" type="checkbox"></div>';
    }

    /**
     * {}.
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);

        $resolver
            ->setDefault('order', false)
            ->setDefault('class', 'text-center')
            ->setDefault('label', $this->labelTemplate())
            ->setDefault('translation_domain', null)
            ->setDefault('width', '40px')
            ->setDefault('is_safe_html', true);
    }
}
