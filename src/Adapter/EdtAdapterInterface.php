<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Adapter/EdtAdapterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/05/2022 21:35
 */

namespace App\Adapter;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;

interface EdtAdapterInterface
{
    public function collection(array $events, array $matieres, array $groupes): EvenementEdtCollection;

    public function single(mixed $event, array $matieres, array $groupes): ?EvenementEdt;
}
