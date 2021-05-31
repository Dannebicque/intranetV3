<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Exporter/AbstractExporter.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/05/2021 20:35
 */

namespace App\Classes\Exporter;

class AbstractExporter
{
    protected function checkNomFichier(string $nomFichier, string $format)
    {
        if ('.' !== $format[0]) {
            $format = '.' . $format;
        }
        if (false === strpos($nomFichier, $format)) {
            $nomFichier .= $format;
        }

        return $nomFichier;
    }
}
