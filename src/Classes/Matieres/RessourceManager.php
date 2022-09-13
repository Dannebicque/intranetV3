<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Matieres/RessourceManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/09/2022 11:43
 */

namespace App\Classes\Matieres;

use App\Adapter\MatiereRessourceAdapter;
use App\DTO\Matiere;
use App\DTO\MatiereCollection;
use App\Entity\ApcReferentiel;
use App\Entity\ApcRessource;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcRessourceRepository;
use App\Utils\Tools;
use Doctrine\ORM\EntityManagerInterface;

class RessourceManager extends AbstractMatiereManager implements MatiereInterface
{
    public function __construct(private readonly EntityManagerInterface $entityManager, private readonly ApcRessourceRepository $apcRessourceRepository, private readonly MatiereRessourceAdapter $ressourceAdapter)
    {
    }

    public function find(int|string $id): ?Matiere
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

    public function findByReferentiel(ApcReferentiel $referentiel): MatiereCollection
    {
        $data = $this->apcRessourceRepository->findByReferentiel($referentiel);

        return $this->ressourceAdapter->collection($data);
    }

    public function findBySemestreAndReferentiel(Semestre $semestre, ApcReferentiel $referentiel): MatiereCollection
    {
        $data = $this->apcRessourceRepository->findBySemestreReferentiel($semestre, $referentiel);

        return $this->ressourceAdapter->collection($data);
    }

    public function findByCodeApogee(string $code): ?Matiere
    {
        $matiere = $this->apcRessourceRepository->findOneBy(['codeElement' => $code]);

        return $this->ressourceAdapter->single($matiere);
    }

    public function update(string $name, mixed $value, ApcRessource $apcRessource): bool
    {
        $method = 'set'.$name;
        if (method_exists($apcRessource, $method)) {
            $apcRessource->$method(Tools::convertToFloat($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
