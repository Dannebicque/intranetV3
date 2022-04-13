<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelRessourceManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2021 22:50
 */

namespace App\Classes\Previsionnel;

use App\Adapter\PrevisionnelRessourceAdapter;
use App\DTO\PrevisionnelCollection;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Personnel;
use App\Entity\Semestre;
use App\Repository\PrevisionnelRessourceRepository;

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

    public function getPrevisionnelPersonnelAnnee(Personnel $personnel, int $annee): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($personnel, $annee);

        return $this->previsionnelRessourceAdapter->collection($data);
    }

    public function getPrevisionnelPersonnelDepartementAnnee(
        Personnel $personnel,
        Departement $departement,
        int $annee
    ): PrevisionnelCollection {
        $data = $this->previsionnelRepository->findPrevisionnelEnseignantDepartementAnnee($personnel, $departement,
            $annee);

        return $this->previsionnelRessourceAdapter->collection($data);
    }

    public function findPrevisionnelMatiere(string | int $matiere, int $anneePrevisionnel): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelMatiere($matiere, $anneePrevisionnel);

        return $this->previsionnelRessourceAdapter->collection($data);
    }

    public function findPrevisionnelMatierePersonnelAnnee(
        string | int $matiere,
        Personnel $personnel,
        int $anneePrevisionnel
    ): PrevisionnelCollection {
        $data = $this->previsionnelRepository->findPrevisionnelMatierePersonnelAnnee($matiere, $personnel,
            $anneePrevisionnel);

        return $this->previsionnelRessourceAdapter->collection($data);
    }

    public function getPrevisionnelSemestre(Semestre $semestre, int $annee): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelSemestre($semestre, $annee);

        return $this->previsionnelRessourceAdapter->collection($data);
    }

    public function findByDepartement(Departement $departement, int $annee): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDepartement($departement, $annee);

        return $this->previsionnelRessourceAdapter->collection($data);
    }

    public function findByDiplome(Diplome $diplome, int $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDiplome($diplome, $annee);

        return $this->previsionnelRessourceAdapter->collection($data);
    }

    public function findByDiplomeToDelete(Diplome $diplome, int $annee): array
    {
        return $this->previsionnelRepository->findByDiplomeToDelete($diplome, $annee);
    }
}
