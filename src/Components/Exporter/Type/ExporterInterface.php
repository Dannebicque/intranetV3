<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/Type/ExporterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 10:41
 */

namespace App\Components\Exporter\Type;

use App\Components\Exporter\SourceIterator\SourceInterface;

interface ExporterInterface
{
    public function export(SourceInterface $datas, string $nomFichier);
}
