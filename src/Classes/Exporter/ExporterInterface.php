<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Exporter/ExporterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/05/2021 18:46
 */

namespace App\Classes\Exporter;


interface ExporterInterface
{
    public function export(SourceIterator\SourceInterface $datas, string $nomFichier);
}
