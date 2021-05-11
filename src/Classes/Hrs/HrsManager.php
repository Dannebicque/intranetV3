<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Hrs/HrsManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/05/2021 09:28
 */

namespace App\Classes\Hrs;


use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\HrsRepository;

class HrsManager
{
    protected HrsRepository $hrsRepository;

    public function __construct(HrsRepository $hrsRepository)
    {
        $this->hrsRepository = $hrsRepository;
    }

    public function getHrsPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee
    ) {
        return $this->hrsRepository->getPersonnelDepartementAnnee($personnel, $departement, $annee);
    }

    public function getPersonnelAnnee(Personnel $personnel, ?int $annee)
    {
        return $this->hrsRepository->getPersonnelAnnee($personnel, $annee);
    }
}
