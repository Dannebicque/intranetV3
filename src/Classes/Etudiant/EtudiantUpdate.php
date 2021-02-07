<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantUpdate.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
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
    private BacRepository $bacRepository;
    private DepartementRepository $departementRepository;
    private SemestreRepository $semestreRepository;
    private EntityManagerInterface $entityManager;
    private EtudiantGroupes $etudiantGroupes;

    /**
     * EtudiantUpdate constructor.
     */
    public function __construct(
        BacRepository $bacRepository,
        DepartementRepository $departementRepository,
        SemestreRepository $semestreRepository,
        EntityManagerInterface $entityManager,
        EtudiantGroupes $etudiantGroupes
    ) {
        $this->bacRepository = $bacRepository;
        $this->departementRepository = $departementRepository;
        $this->semestreRepository = $semestreRepository;
        $this->entityManager = $entityManager;
        $this->etudiantGroupes = $etudiantGroupes;
    }

    public function update(Etudiant $etudiant, $field, $value)
    {
        switch ($field) {
            case 'semestre':
                if ('null' === $value) {
                    $etudiant->setSemestre(null);
                } else {
                    $semestre = $this->semestreRepository->find($value);
                    $etudiant->setSemestre($semestre);
                }
                $this->etudiantGroupes->setEtudiant($etudiant);
                $this->etudiantGroupes->suppressionGroupes();
                break;
            case 'departement':
                $etudiant->setSemestre(null);
                if ('null' === $value) {
                    $etudiant->setDepartement(null);
                } else {
                    $departement = $this->departementRepository->find($value);
                    $etudiant->setDepartement($departement);
                }

                $this->etudiantGroupes->setEtudiant($etudiant);
                $this->etudiantGroupes->suppressionGroupes();
                break;

            case 'bac':
                $semestre = $this->bacRepository->find($value);
                $etudiant->setBac($semestre);
                $this->entityManager->flush();
                break;
            default:
                $method = 'set' . $field;
                if (method_exists($etudiant, $method)) {
                    $etudiant->$method($value);
                    $this->entityManager->flush();
                }
                break;
        }

        return true;
    }
}
