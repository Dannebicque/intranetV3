<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelSaeManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Classes\Previsionnel;


use App\Adapter\PrevisionnelSaeAdapter;
use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\PrevisionnelSaeRepository;

class PrevisionnelSaeManager extends AbstractPrevisionnelManager implements PrevisionnelManagerInterface
{
    public const TYPE = 'sae';
    private PrevisionnelSaeRepository $previsionnelRepository;
    private PrevisionnelSaeAdapter $previsionnelSaeAdapter;

    public function __construct(
        PrevisionnelSaeRepository $previsionnelRepository,
        PrevisionnelSaeAdapter $previsionnelSaeAdapter
    ) {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->previsionnelSaeAdapter = $previsionnelSaeAdapter;
    }

    public function getPrevisionnelPersonnelAnnee(Personnel $personnel, int $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($personnel, $annee);

        return $this->previsionnelSaeAdapter->collection($data); //l'adapter peut prendre un objet unique ou une collection et retourner un objet touijours identique pour le traitement dans MyPrevisionnel.
    }

    public function getPrevisionnelPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee = 0
    ): PrevisionnelCollection {
        $previs = $this->previsionnelRepository->findPrevisionnelEnseignantDepartementAnnee($personnel, $departement,
            $annee);

        return $this->previsionnelSaeAdapter->collection($previs);
    }
}
