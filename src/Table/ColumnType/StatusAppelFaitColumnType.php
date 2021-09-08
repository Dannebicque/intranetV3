<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Table/ColumnType/StatusAppelFaitColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2021 07:39
 */

namespace App\Table\ColumnType;

use App\Components\Table\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class StatusAppelFaitColumnType extends PropertyColumnType
{
    private TranslatorInterface $translator;

    public function __construct(TranslatorInterface $translator)
    {
        parent::__construct();
        $this->translator = $translator;
    }

    public function renderProperty($value, array $options): string
    {
        $statsAppel = $options['statsAppel'];
        $elt = explode('_', $value); //'dmY_typeIdMatiere_heure_groupeId'

        if (array_key_exists($elt[0], $statsAppel) &&
            array_key_exists($elt[1], $statsAppel[0]) &&
            array_key_exists($elt[2], $statsAppel[0][1]) &&
            array_key_exists($elt[3], $statsAppel[0][1][2])) {
                    return '<span class="badge badge-success">'.$this->translator->trans($statsAppel[0][1][2][3],
                                    'messages').'</span>';
                }

        return '<span class="badge badge-warning">'.$this->translator->trans('pas.d.absence.saisie',
                'messages').'</span>';
    }

    public function configureOptions(
        OptionsResolver $resolver
    ) {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('statsAppel', []);
        $resolver->setRequired('statsAppel');
    }
}
