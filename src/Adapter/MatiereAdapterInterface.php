<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Adapter/MatiereAdapterInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 08:58
 */

namespace App\Adapter;

use App\DTO\Matiere;
use App\DTO\MatiereCollection;

interface MatiereAdapterInterface
{
    public function collection(array $matieres): MatiereCollection;

    public function single($matiere): ?Matiere;
}
