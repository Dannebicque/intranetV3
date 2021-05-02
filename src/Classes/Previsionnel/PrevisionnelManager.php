<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Classes\Previsionnel;


use App\Entity\Departement;
use App\Entity\Personnel;

class PrevisionnelManager
{
    protected $managers;

    public function __construct(
        PrevisionnelSaeManager $previsionnelSae,
        PrevisionnelRessourceManager $previsionnelRessource,
        PrevisionnelMatiereManager $previsionnelMatiere
    ) {
        $this->managers[PrevisionnelSaeManager::TYPE] = $previsionnelSae;
        $this->managers[PrevisionnelRessourceManager::TYPE] = $previsionnelRessource;
        $this->managers[PrevisionnelMatiereManager::TYPE] = $previsionnelMatiere;
    }

    public function getPrevisionnelPersonnelDepartementAnnee(Personnel $personnel, Departement $departement, int $annee)
    {
        $t = [];
        foreach ($this->managers as $manager) {
            $previs = $manager->getPrevisionnelPersonnelDepartementAnnee($personnel, $departement, $annee);
            $t = array_merge($t, $previs->toArray());
        }

        return $t;
    }
}
