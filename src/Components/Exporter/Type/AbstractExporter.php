<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/Type/AbstractExporter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 12:23
 */

namespace App\Components\Exporter\Type;

class AbstractExporter
{
    protected function checkNomFichier(string $nomFichier, string $format)
    {
        if ('.' !== $format[0]) {
            $format = '.' . $format;
        }
        if (!str_contains($nomFichier, $format)) {
            $nomFichier .= $format;
        }

        return $nomFichier;
    }
}
