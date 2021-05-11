<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/RessourceManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Classes\Matieres;

use App\Adapter\MatiereRessourceAdapter;
use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcRessourceRepository;

class RessourceManager extends AbstractMatiereManager implements MatiereInterface
{
    private ApcRessourceRepository $apcRessourceRepository;
    private MatiereRessourceAdapter $ressourceAdapter;

    public function __construct(
        ApcRessourceRepository $apcRessourceRepository,
        MatiereRessourceAdapter $ressourceAdapter
    ) {
        $this->apcRessourceRepository = $apcRessourceRepository;
        $this->ressourceAdapter = $ressourceAdapter;
    }

    public function find($id): Matiere
    {
        $matiere = $this->apcRessourceRepository->find($id);

        return $this->ressourceAdapter->single($matiere);
    }

    public function findBySemestre(Semestre $semestre): MatiereCollection
    {
        $data = $this->apcRessourceRepository->findBySemestre($semestre);

        return $this->ressourceAdapter->collection($data);
    }

    public function findByDepartement(Departement $departement): MatiereCollection
    {
        $data = $this->apcRessourceRepository->findByDepartement($departement);

        return $this->ressourceAdapter->collection($data);
    }

    public function findByDiplome(Diplome $diplome): MatiereCollection
    {
        $data = $this->apcRessourceRepository->findByDiplome($diplome);

        return $this->ressourceAdapter->collection($data);
    }

    public function findByCodeApogee(string $code): ?Matiere
    {
        $matiere = $this->apcRessourceRepository->findBy(['codeElement' => $code]);

        return $this->ressourceAdapter->single($matiere);
    }
}
