<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/SaeManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Classes\Matieres;

use App\Adapter\MatiereSaeAdapter;
use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcSaeRepository;

class SaeManager extends AbstractMatiereManager implements MatiereInterface
{
    private ApcSaeRepository $apcSaeRepository;
    private MatiereSaeAdapter $saeAdapter;

    public function __construct(ApcSaeRepository $apcSaeRepository, MatiereSaeAdapter $saeAdapter)
    {
        $this->apcSaeRepository = $apcSaeRepository;
        $this->saeAdapter = $saeAdapter;
    }

    public function find($id): Matiere
    {
        $matiere = $this->apcSaeRepository->find($id);

        return $this->saeAdapter->single($matiere);
    }

    public function findBySemestre(Semestre $semestre): MatiereCollection
    {
        $data = $this->apcSaeRepository->findBySemestre($semestre);

        return $this->saeAdapter->collection($data);
    }

    public function findByDepartement(Departement $departement): MatiereCollection
    {
        $data = $this->apcSaeRepository->findByDepartement($departement);

        return $this->saeAdapter->collection($data);
    }


    public function findByDiplome(Diplome $diplome): MatiereCollection
    {
        $data = $this->apcSaeRepository->findByDiplome($diplome);

        return $this->saeAdapter->collection($data);
    }

    public function findByCodeApogee(string $code): ?Matiere
    {
        $matiere = $this->apcSaeRepository->findBy(['codeElement' => $code]);

        return $this->saeAdapter->single($matiere);
    }
}
