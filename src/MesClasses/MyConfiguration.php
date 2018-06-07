<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 19/05/2018
 * Time: 18:48
 */

namespace App\MesClasses;


use App\Entity\Formation;
use App\Repository\AnneeRepository;
use App\Repository\DiplomeRepository;
use App\Repository\FormationRepository;
use App\Repository\PersonnelRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\EntityManagerInterface;

class MyConfiguration
{
    /**
     * @var FormationRepository
     */
    private $formationRepository;

    /**
     * @var DiplomeRepository
     */
    private $diplomeRepository;

    /**
     * @var AnneeRepository
     */
    private $anneeRepository;

    /**
     * @var SemestreRepository
     */
    private $semestreRepository;

    /**
     * @var PersonnelRepository
     */
    private $personnelRepository;

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * MyConfiguration constructor.
     *
     * @param FormationRepository $formationRepository
     * @param DiplomeRepository   $diplomeRepository
     * @param AnneeRepository     $anneeRepository
     * @param SemestreRepository  $semestreRepository
     */
    public function __construct(
        FormationRepository $formationRepository,
        DiplomeRepository $diplomeRepository,
        AnneeRepository $anneeRepository,
        SemestreRepository $semestreRepository,
        PersonnelRepository $personnelRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->formationRepository = $formationRepository;
        $this->diplomeRepository = $diplomeRepository;
        $this->anneeRepository = $anneeRepository;
        $this->semestreRepository = $semestreRepository;
        $this->personnelRepository = $personnelRepository;
        $this->entityManager = $entityManager;

    }

    /**
     * @param $type
     * @param $id
     * @param $name
     * @param $value
     *
     * @return boolean
     */
    public function updateOption($type, $id, $name, $value): bool
    {
        switch ($type) {
            case 'formation':
                return $this->updateFormation($id, $name, $value);
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
     *
     * @return bool
     */
    private function updateFormation($id, $name, $value): bool
    {
        $formation = $this->formationRepository->find($id);
        if ($formation) {
            $formation->update($name, $this->transformeValue($value));
            $this->entityManager->persist($formation);
            $this->entityManager->flush();
            echo 'update';

            return true;
        }

        return false;
    }

    private function transformeValue($value)
    {
        if ($value === 'false') {
            return false;
        } elseif ($value === 'true') {
            return true;
        } elseif (0 === strpos($value, 'pers')) {
            return $this->personnelRepository->find(substr($value, 4, strlen($value)));
        } elseif (empty($value)) {
            return null;
        } else {
            return $value;
        }
    }

    private function updateDiplome($id, $name, $value)
    {
        $diplome = $this->diplomeRepository->find($id);
        if ($diplome) {
            $diplome->update($name, $this->transformeValue($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }

    private function updateAnnee($id, $name, $value)
    {
        $annee = $this->anneeRepository->find($id);
        if ($annee) {
            $annee->update($name, $this->transformeValue($value));
            $this->entityManager->flush();

            return true;
        }

        return false;
    }

    private function updateSemestre($id, $name, $value)
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