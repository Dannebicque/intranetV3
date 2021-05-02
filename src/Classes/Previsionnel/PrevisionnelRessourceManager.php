<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelRessourceManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Classes\Previsionnel;


use App\Adapter\PrevisionnelRessourceAdapter;
use App\DTO\Previsionnel;
use App\DTO\PrevisionnelCollection;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Repository\PrevisionnelRessourceRepository;
use App\Repository\PrevisionnelSaeRepository;

class PrevisionnelRessourceManager extends AbstractPrevisionnelManager implements PrevisionnelManagerInterface
{
    public const TYPE = 'ressource';
    private PrevisionnelRessourceRepository $previsionnelRepository;
    private PrevisionnelRessourceAdapter $previsionnelRessourceAdapter;

    public function __construct(
        PrevisionnelRessourceRepository $previsionnelRepository,
        PrevisionnelRessourceAdapter $previsionnelRessourceAdapter
    ) {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->previsionnelRessourceAdapter = $previsionnelRessourceAdapter;
    }

    public function getPrevisionnelPersonnelAnnee(Personnel $personnel, int $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($personnel, $annee);

        return $this->previsionnelRessourceAdapter->collection($data); //l'adapter peut prendre un objet unique ou une collection et retourner un objet touijours identique pour le traitement dans MyPrevisionnel.
    }

    public function getPrevisionnelPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee = 0
    ): PrevisionnelCollection {
        $data = $this->previsionnelRepository->findPrevisionnelEnseignantDepartementAnnee($personnel, $departement,
            $annee);

        return $this->previsionnelRessourceAdapter->collection($data);
    }
}
