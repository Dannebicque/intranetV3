<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Etudiant/EtudiantUpdate.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/09/2020 09:36

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
    private EntityManagerInterface $entityManger;
    private EtudiantGroupes $etudiantGroupes;

    /**
     * EtudiantUpdate constructor.
     *
     * @param BacRepository          $bacRepository
     * @param DepartementRepository  $departementRepository
     * @param SemestreRepository     $semestreRepository
     * @param EntityManagerInterface $entityManger
     * @param EtudiantGroupes        $etudiantGroupes
     */
    public function __construct(
        BacRepository $bacRepository,
        DepartementRepository $departementRepository,
        SemestreRepository $semestreRepository,
        EntityManagerInterface $entityManger,
        EtudiantGroupes $etudiantGroupes
    ) {
        $this->bacRepository = $bacRepository;
        $this->departementRepository = $departementRepository;
        $this->semestreRepository = $semestreRepository;
        $this->entityManger = $entityManger;
        $this->etudiantGroupes = $etudiantGroupes;
    }


    public function update(Etudiant $etudiant, $field, $value)
    {
        switch ($field) {
            case 'semestre':
                if ($value === 'null') {
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
                if ($value === 'null') {
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
                $this->entityManger->flush();
                break;
        }

        return true;
    }
}
