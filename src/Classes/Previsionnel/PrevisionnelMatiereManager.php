<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Previsionnel/PrevisionnelMatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2023 11:18
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
    final public const TYPE = 'matiere';

    public function __construct(private readonly PrevisionnelMatiereRepository $previsionnelRepository, private readonly PrevisionnelMatiereAdapter $previsionnelMatiereAdapter)
    {
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

    public function findPrevisionnelMatiere(string|int $matiere, int $anneePrevisionnel): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelMatiere($matiere, $anneePrevisionnel);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findPrevisionnelMatierePersonnelAnnee(
        string|int $matiere,
        Personnel $personnel,
        int $anneePrevisionnel
    ): PrevisionnelCollection {
        $data = $this->previsionnelRepository->findPrevisionnelMatierePersonnelAnnee($matiere, $personnel,
            $anneePrevisionnel);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function getPrevisionnelSemestre(Semestre $semestre, int $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelSemestre($semestre, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function getPrevisionnelPersonnelSemestre(Personnel $personnel, Semestre $semestre, int $annee): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findPrevisionnelPersonnelSemestre($personnel, $semestre, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findByDepartement(Departement $departement, int $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDepartement($departement, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findByDiplome(Diplome $diplome, int $annee): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByDiplome($diplome, $annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }

    public function findByDiplomeToDelete(Diplome $diplome, int $annee): array
    {
        return $this->previsionnelRepository->findByDiplomeToDelete($diplome, $annee);
    }

    public function findByAnneeUniversitaire(int $annee = 0): PrevisionnelCollection
    {
        $data = $this->previsionnelRepository->findByAnneeUniversitaire($annee);

        return $this->previsionnelMatiereAdapter->collection($data);
    }
}
