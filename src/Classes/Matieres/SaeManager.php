<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/SaeManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/10/2021 11:36
 */

namespace App\Classes\Matieres;

use App\Adapter\MatiereSaeAdapter;
use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\ApcSae;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcSaeRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;

class SaeManager extends AbstractMatiereManager implements MatiereInterface
{
    private ApcSaeRepository $apcSaeRepository;
    private MatiereSaeAdapter $saeAdapter;
    private EntityManagerInterface $entityManager;

    public function __construct(
        EntityManagerInterface $entityManager,
        ApcSaeRepository $apcSaeRepository,
        MatiereSaeAdapter $saeAdapter
    ) {
        $this->entityManager = $entityManager;
        $this->apcSaeRepository = $apcSaeRepository;
        $this->saeAdapter = $saeAdapter;
    }

    public function find($id): ?Matiere
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
        $matiere = $this->apcSaeRepository->findOneBy(['codeElement' => $code]);

        return $this->saeAdapter->single($matiere);
    }

    public function update($name, $value, ApcSae $apcSae): bool
    {
        $method = 'set' . $name;
        if (method_exists($apcSae, $method)) {
            $apcSae->$method(Tools::convertToFloat($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
