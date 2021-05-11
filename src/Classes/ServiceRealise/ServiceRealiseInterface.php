<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealiseInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/05/2021 14:16
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\ServiceRealise;

use App\DTO\EvenementEdt;
use App\Entity\Matiere;
use App\Entity\Personnel;

interface ServiceRealiseInterface
{
    public function getServiceRealiseParMatiere(int $idMatiere, string $type): array;

    public function getServiceRealiseParPersonnelMatiere(Personnel $personnel, int $idMatiere, string $type): array;

    public function getServiceRealiserParEnseignant(
        Personnel $personnel
    ): array;

    public function convertToEvenementEdt($event): EvenementEdt;
}
