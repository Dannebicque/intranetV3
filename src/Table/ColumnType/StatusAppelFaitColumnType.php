<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Table/ColumnType/StatusAppelFaitColumnType.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:08
 */

namespace App\Table\ColumnType;

use Dannebicque\TableBundle\Column\PropertyColumnType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Contracts\Translation\TranslatorInterface;

class StatusAppelFaitColumnType extends PropertyColumnType
{
    public function __construct(private readonly TranslatorInterface $translator)
    {
        parent::__construct();
    }

    public function renderProperty(mixed $value, array $options): string
    {
        $statsAppel = $options['statsAppel'];
        $elt = explode('_', (string)$value); // 'dmY_typeIdMatiere_heure_groupeId'
//        dump($elt);
//        dump($statsAppel);
//        die();
        if (count($elt) === 5) {
            $date = $elt[0];
            $heure = $elt[1];
            $groupeId = $elt[4];
            $typeIdMatiere = $elt[2].'_'.$elt[3];
            if (is_array($statsAppel) && array_key_exists($date, $statsAppel) &&
                array_key_exists($typeIdMatiere, $statsAppel[$date]) &&
                array_key_exists($heure, $statsAppel[$date][$typeIdMatiere]) &&
                array_key_exists($groupeId, $statsAppel[$date][$typeIdMatiere][$heure])) {
                return '<span class="badge bg-success">' . $this->translator->trans($statsAppel[$date][$typeIdMatiere][$heure][$groupeId],
                        ['domain' => 'messages']) . '</span>';
            }
        }

        return '<span class="badge bg-warning">' . $this->translator->trans('pas.d.absence.saisie',
                ['domain' => 'messages']) . '</span>';
    }

    public function configureOptions(
        OptionsResolver $resolver
    ): void {
        parent::configureOptions($resolver);
        $resolver->setDefault('is_safe_html', true);
        $resolver->setDefault('statsAppel', []);
        $resolver->setRequired('statsAppel');
    }
}
