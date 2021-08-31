<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelMatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2021 22:50
 */

namespace App\Classes\Previsionnel;


use App\Adapter\PrevisionnelMatiereAdapter;
use App\DTO\PrevisionnelCollection;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\PrevisionnelMatiereRepository;

class PrevisionnelMatiereManager extends AbstractPrevisionnelManager implements PrevisionnelManagerInterface
{
    public const TYPE = 'matiere';
    private PrevisionnelMatiereRepository $previsionnelRepository;
    private PrevisionnelMatiereAdapter $previsionnelMatiereAdapter;

    public function __construct(
        PrevisionnelMatiereRepository $previsionnelRepository,
        PrevisionnelMatiereAdapter $previsionnelMatiereAdapter
    ) {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->previsionnelMatiereAdapter = $previsionnelMatiereAdapter;
    }

    public function getPrevisionnelPersonnelAnnee(Personnel $personnel, int $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($personnel, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function getPrevisionnelPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee = 0
    ): PrevisionnelCollection {
        $data = $this->previsionnelRepository->findPrevisionnelEnseignantDepartementAnnee($personnel, $departement,
            $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findPrevisionnelMatiere($matiere, $anneePrevisionnel): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelMatiere($matiere, $anneePrevisionnel);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findPrevisionnelMatierePersonnelAnnee(
        $matiere,
        $personnel,
        $anneePrevisionnel
    ): PrevisionnelCollection {
        $data = $this->previsionnelRepository->findPrevisionnelMatierePersonnelAnnee($matiere, $personnel,
            $anneePrevisionnel);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function getPrevisionnelSemestre(Semestre $semestre, $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelSemestre($semestre, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findByDepartement(Departement $departement, $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDepartement($departement, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findByDiplome(Diplome $diplome, $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDiplome($diplome, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findByDiplomeToDelete(Diplome $diplome, $annee = 0)
    {
        return $this->previsionnelRepository->findByDiplomeToDelete($diplome, $annee);
    }
}
