<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Components/Exporter/SourceIterator/SourceInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/10/2021 12:23
 */

namespace App\Components\Exporter\SourceIterator;

interface SourceInterface
{
    public function toArray(): array;
}
