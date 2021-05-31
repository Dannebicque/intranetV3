<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Exporter/SourceIterator/SourceInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/05/2021 20:35
 */

namespace App\Classes\Exporter\SourceIterator;


interface SourceInterface
{

    public function toArray(): array;
}
