<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Utils/ToolsMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 19:14
 */

namespace App\Utils;

abstract class ToolsMatiere
{
    public static function getType(string $texte): string
    {
        $d = explode('_', $texte);
        if (2 === count($d)) {
            return $d[0];
        }

        return '';
    }

    public static function getId(string $texte): int
    {
        $d = explode('_', $texte);
        if (2 === count($d)) {
            return (int)$d[1];
        }

        return 0;
    }
}
