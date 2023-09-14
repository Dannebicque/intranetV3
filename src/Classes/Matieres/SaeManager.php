<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Matieres/SaeManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/09/2023 23:05
 */

namespace App\Classes\Matieres;

use App\Adapter\MatiereSaeAdapter;
use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\ApcReferentiel;
use App\Entity\ApcSae;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcSaeRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;

class SaeManager extends AbstractMatiereManager implements MatiereInterface
{
    public function __construct(private readonly EntityManagerInterface $entityManager, private readonly ApcSaeRepository $apcSaeRepository, private readonly MatiereSaeAdapter $saeAdapter)
    {
    }

    public function find(int|string $id): ?Matiere
    {
        $matiere = $this->apcSaeRepository->find($id);

        return $this->saeAdapter->single($matiere);
    }

    public function findAll(): MatiereCollection
    {
        $matieres = $this->apcSaeRepository->findAll();

        return $this->saeAdapter->collection($matieres);
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

    public function findByReferentiel(ApcReferentiel $referentiel): MatiereCollection
    {
        $data = $this->apcSaeRepository->findByReferentiel($referentiel);

        return $this->saeAdapter->collection($data);
    }

    public function findBySemestreAndReferentiel(Semestre $semestre, ApcReferentiel $referentiel): MatiereCollection
    {
        $data = $this->apcSaeRepository->findBySemestreReferentiel($semestre, $referentiel);

        return $this->saeAdapter->collection($data);
    }

    public function findByReferentielOrdreSemestre(ApcReferentiel $referentiel, int $semestre): MatiereCollection
    {
        $data = $this->apcSaeRepository->findByReferentielOrdreSemestre($referentiel, $semestre);

        return $this->saeAdapter->collection($data);
    }

    public function findByCodeApogee(string $code): ?Matiere
    {
        $matiere = $this->apcSaeRepository->findOneBy(['codeElement' => $code]);

        return $this->saeAdapter->single($matiere);
    }

    public function update(string $name, mixed $value, ApcSae $apcSae): bool
    {
        $method = 'set'.$name;
        if (method_exists($apcSae, $method)) {
            $apcSae->$method(Tools::convertToFloat($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
