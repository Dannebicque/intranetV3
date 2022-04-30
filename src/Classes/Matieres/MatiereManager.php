<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/MatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 11:35
 */

namespace App\Classes\Matieres;

use App\Adapter\MatiereMatiereAdapter;
use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\MatiereRepository;

class MatiereManager extends AbstractMatiereManager implements MatiereInterface
{
    public function __construct(private readonly MatiereRepository $matiereRepository, private readonly MatiereMatiereAdapter $matiereAdapter)
    {
    }

    public function find(int|string $id): ?Matiere
    {
        $matiere = $this->matiereRepository->find($id);

        return null !== $matiere ? $this->matiereAdapter->single($matiere) : null;
    }

    public function findBySemestre(Semestre $semestre): MatiereCollection
    {
        $data = $this->matiereRepository->findBySemestre($semestre);

        return $this->matiereAdapter->collection($data);
    }

    public function findByDepartement(Departement $departement): MatiereCollection
    {
        $data = $this->matiereRepository->findByDepartement($departement);

        return $this->matiereAdapter->collection($data);
    }

    public function findByDiplome(Diplome $diplome): MatiereCollection
    {
        $data = $this->matiereRepository->findByDiplome($diplome);

        return $this->matiereAdapter->collection($data);
    }

    public function findByCodeApogee(string $code): ?Matiere
    {
        $matiere = $this->matiereRepository->findOneBy(['codeElement' => $code]);

        return $this->matiereAdapter->single($matiere);
    }
}
