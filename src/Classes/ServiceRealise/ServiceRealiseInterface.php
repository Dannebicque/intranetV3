<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/ServiceRealise/ServiceRealiseInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:10
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
    public function getServiceRealiseParMatiere(Matiere $matiere): array;

    public function getServiceRealiseParPersonnelMatiere(Personnel $personnel, Matiere $matiere): array;

    public function getServiceRealiserParEnseignant(
        Personnel $personnel
    ): array;

    public function convertToEvenementEdt($event): EvenementEdt;
}
