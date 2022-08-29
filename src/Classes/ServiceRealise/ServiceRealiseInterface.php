<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/ServiceRealise/ServiceRealiseInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/08/2022 08:47
 */

namespace App\Classes\ServiceRealise;

use App\DTO\EvenementEdt;
use App\Entity\AnneeUniversitaire;
use App\Entity\Personnel;

interface ServiceRealiseInterface
{
    public function getServiceRealiseParMatiere(int $idMatiere, string $type, AnneeUniversitaire $anneeUniversitaire): array;

    public function getServiceRealiseParPersonnelMatiere(Personnel $personnel, int $idMatiere, string $type, AnneeUniversitaire $anneeUniversitaire): array;

    public function getServiceRealiserParEnseignant(
        Personnel $personnel,
        AnneeUniversitaire $anneeUniversitaire
    ): array;

    public function convertToEvenementEdt($event): EvenementEdt;
}
