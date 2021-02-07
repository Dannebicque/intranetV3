<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyConfiguration.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:10
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\AnneeUniversitaire;
use App\Entity\Personnel;
use App\Repository\AnneeRepository;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DepartementRepository;
use App\Repository\DiplomeRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Class MyConfiguration.
 */
class MyConfiguration
{
    private DepartementRepository $departementRepository;

    private DiplomeRepository $diplomeRepository;

    private AnneeRepository $anneeRepository;

    private SemestreRepository $semestreRepository;

    private AnneeUniversitaireRepository $anneeUniversitaireRepository;

    private PersonnelRepository $personnelRepository;

    private EntityManagerInterface $entityManager;

    /**
     * MyConfiguration constructor.
     */
    public function __construct(
        DepartementRepository $departementRepository,
        DiplomeRepository $diplomeRepository,
        AnneeRepository $anneeRepository,
        SemestreRepository $semestreRepository,
        PersonnelRepository $personnelRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->departementRepository = $departementRepository;
        $this->diplomeRepository = $diplomeRepository;
        $this->anneeRepository = $anneeRepository;
        $this->semestreRepository = $semestreRepository;
        $this->personnelRepository = $personnelRepository;
        $this->anneeUniversitaireRepository = $anneeUniversitaireRepository;
        $this->entityManager = $entityManager;
    }

    /**
     * @param $type
     * @param $id
     * @param $name
     * @param $value
     */
    public function updateOption($type, $id, $name, $value): bool
    {
        switch ($type) {
            case 'departement':
                return $this->updateDepartement($id, $name, $value);
            case 'diplome':
                return $this->updateDiplome($id, $name, $value);
            case 'annee':
                return $this->updateAnnee($id, $name, $value);
            case 'semestre':
                return $this->updateSemestre($id, $name, $value);
        }

        return false;
    }

    /**
     * @param $id
     * @param $name
     * @param $value
     */
    private function updateDepartement($id, $name, $value): bool
    {
        $departement = $this->departementRepository->find($id);
        if ($departement) {
            $departement->update($name, $this->transformeValue($value));
            $this->entityManager->persist($departement);
            $this->entityManager->flush();

            return true;
        }

        return false;
    }

    /**
     * @param $value
     *
     * @return Personnel|bool|AnneeUniversitaire|null
     */
    private function transformeValue($value)
    {
        if ('false' === $value) {
            return false;
        }

        if ('true' === $value) {
            return true;
        }

        if (0 === mb_strpos($value, 'pers')) {
            return $this->personnelRepository->find(mb_substr($value, 4, mb_strlen($value)));
        }

        if (0 === mb_strpos($value, 'anneeuniv')) {
            return $this->anneeUniversitaireRepository->find(mb_substr($value, 9, mb_strlen($value)));
        }

        if (empty($value) && '0' !== $value) {
            return null;
        }

        return $value;
    }

    /**
     * @param $id
     * @param $name
     * @param $value
     */
    private function updateDiplome($id, $name, $value): bool
    {
        $diplome = $this->diplomeRepository->find($id);
        if ($diplome) {
            $diplome->update($name, $this->transformeValue($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }

    /**
     * @param $id
     * @param $name
     * @param $value
     */
    private function updateAnnee($id, $name, $value): bool
    {
        $annee = $this->anneeRepository->find($id);
        if ($annee) {
            $annee->update($name, $this->transformeValue($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }

    /**
     * @param $id
     * @param $name
     * @param $value
     */
    private function updateSemestre($id, $name, $value): bool
    {
        $semestre = $this->semestreRepository->find($id);
        if ($semestre) {
            $semestre->update($name, $this->transformeValue($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }
}
