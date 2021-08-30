<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelSaeManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2021 19:30
 */

namespace App\Classes\Previsionnel;

use App\Adapter\PrevisionnelSaeAdapter;
use App\DTO\PrevisionnelCollection;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Semestre;
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

        return $this->previsionnelSaeAdapter->collection($data);
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

    public function findPrevisionnelMatiere($matiere, $anneePrevisionnel): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelMatiere($matiere, $anneePrevisionnel);

        return $this->previsionnelSaeAdapter->collection($data);
    }

    public function findPrevisionnelMatierePersonnelAnnee(
        $matiere,
        $personnel,
        $anneePrevisionnel
    ): PrevisionnelCollection {
        $data = $this->previsionnelRepository->findPrevisionnelMatierePersonnelAnnee($matiere, $personnel,
            $anneePrevisionnel);

        return $this->previsionnelSaeAdapter->collection($data);
    }

    public function getPrevisionnelSemestre(Semestre $semestre, $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelSemestre($semestre, $annee);

        return $this->previsionnelSaeAdapter->collection($data);
    }

    public function findByDepartement(Departement $departement, $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDepartement($departement, $annee);

        return $this->previsionnelSaeAdapter->collection($data);
    }

    public function findByDiplome(Diplome $diplome, $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDiplome($diplome, $annee);

        return $this->previsionnelSaeAdapter->collection($data);
    }
}
