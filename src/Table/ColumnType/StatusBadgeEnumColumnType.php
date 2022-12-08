<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/StatusBadgeEnumColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Table\ColumnType;

use DavidAnnebicque\TableBundle\Column\PropertyColumnType;
use App\Enums\BadgeEnumInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class StatusBadgeEnumColumnType extends PropertyColumnType
{
    public function __construct(private readonly TranslatorInterface $translator)
    {
        parent::__construct();
    }

    public function renderProperty(mixed $value, array $options): string
    {
        if (!$value instanceof BadgeEnumInterface) {
            $value = $options['enumClass']::tryFrom($value);
        }

        if (null !== $value) {
            return '<span class="badge bg-'.$value->badge().'">'.$this->translator->trans($options['prefix_trans'].'.'.$value->value).'</span>';
        }

        return '<span class="badge">'.$this->translator->trans('enum.error').'</span>';
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('enumClass', null);
        $resolver->setDefault('prefix_trans', 'enum');
    }
}
