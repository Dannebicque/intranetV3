<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Hrs/HrsManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/08/2021 09:35
 */

namespace App\Classes\Hrs;

use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\HrsRepository;

class HrsManager
{
    public function __construct(protected HrsRepository $hrsRepository)
    {
    }

    public function getHrsPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee
    ): array {
        return $this->hrsRepository->getPersonnelDepartementAnnee($personnel, $departement, $annee);
    }

    public function getPersonnelAnnee(Personnel $personnel, ?int $annee): array
    {
        return $this->hrsRepository->getPersonnelAnnee($personnel, $annee);
    }

    public function getHrsDepartementAnnee(Departement $departement, ?int $annee): array
    {
        return $this->hrsRepository->findByDepartement($departement, $annee);
    }
}
