<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/Type/ExporterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 12:23
 */

namespace App\Components\Exporter\Type;


interface ExporterInterface
{
    public function export(SourceIterator\SourceInterface $datas, string $nomFichier);
}
