<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Etudiant/EtudiantUpdate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/09/2022 14:42
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Etudiant;

use App\Entity\Etudiant;
use App\Repository\BacRepository;
use App\Repository\DepartementRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\EntityManagerInterface;

class EtudiantUpdate
{
    /**
     * EtudiantUpdate constructor.
     */
    public function __construct(private readonly BacRepository $bacRepository, private readonly DepartementRepository $departementRepository, private readonly SemestreRepository $semestreRepository, private readonly EntityManagerInterface $entityManager, private readonly EtudiantGroupes $etudiantGroupes)
    {
    }

    public function update(Etudiant $etudiant, string $field, mixed $value): bool
    {
        switch ($field) {
            case 'semestre':
                if ('null' === $value) {
                    $etudiant->setSemestre(null);
                } else {
                    $semestre = $this->semestreRepository->find($value);
                    if (null !== $semestre) {
                        $etudiant->setSemestre($semestre);
                        $etudiant->setAnneeSortie(0);
                        $etudiant->setDepartement($semestre->getDiplome()?->getDepartement());
                    }
                }
                $this->entityManager->flush();
                $this->etudiantGroupes->setEtudiant($etudiant);
                $this->etudiantGroupes->suppressionGroupes();
                break;
            case 'departement':
                $etudiant->setSemestre(null);
                if ('null' === $value) {
                    $etudiant->setDepartement(null);
                } else {
                    $departement = $this->departementRepository->find($value);
                    if (null !== $departement && (null === $etudiant->getDepartement() || $etudiant->getDepartement()->getId() !== $departement->getId())) {
                        $etudiant->setDepartement($departement);
                        $etudiant->setSemestre(null);
                    }
                }
                $this->entityManager->flush();
                $this->etudiantGroupes->setEtudiant($etudiant);
                $this->etudiantGroupes->suppressionGroupes();
                break;

            case 'bac':
                $semestre = $this->bacRepository->find($value);
                $etudiant->setBac($semestre);
                $this->entityManager->flush();
                break;
            default:
                $method = 'set'.$field;
                if (method_exists($etudiant, $method)) {
                    $etudiant->$method($value);
                    $this->entityManager->flush();
                }
                break;
        }

        return true;
    }
}
