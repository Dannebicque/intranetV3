<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/EdtAdapterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/09/2021 19:11
 */

namespace App\Adapter;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;

interface EdtAdapterInterface
{
    public function collection(array $events): EvenementEdtCollection;

    public function single(mixed $event): ?EvenementEdt;
}
