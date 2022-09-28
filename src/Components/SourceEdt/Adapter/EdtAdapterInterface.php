<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Adapter/EdtAdapterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/09/2022 18:31
 */

namespace App\Components\SourceEdt\Adapter;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;

interface EdtAdapterInterface
{
    public function collection(array $events, array $matieres, array $groupes): EvenementEdtCollection;

    public function single(mixed $event, array $matieres, array $groupes): ?EvenementEdt;
}
