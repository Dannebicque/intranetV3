<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/MyMatiere.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Classes\Matieres;


use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Departement;
use App\Entity\Matiere;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\MatiereRepository;

class MyMatiere
{
    private MatiereRepository $matiereRepository;
    private ApcRessourceRepository $apcRessourceRepository;
    private ApcSaeRepository $apcSaeRepository;

    /**
     * Matiere constructor.
     *
     * @param MatiereRepository      $matiereRepository
     * @param ApcRessourceRepository $apcRessourceRepository
     * @param ApcSaeRepository       $apcSaeRepository
     */
    public function __construct(
        MatiereRepository $matiereRepository,
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository
    ) {
        $this->matiereRepository = $matiereRepository;
        $this->apcRessourceRepository = $apcRessourceRepository;
        $this->apcSaeRepository = $apcSaeRepository;
    }

    public function getAllMatieres(Departement $departement)
    {
        $matieres = $this->matiereRepository->findByDepartement($departement);
        $ressrouces = $this->apcRessourceRepository->findByDepartement($departement);
        $saes = $this->apcSaeRepository->findByDepartement($departement);

        return array_merge($matieres, $ressrouces, $saes);
    }

    public function find($data)
    {
        $d = explode('_', $data);

        if (count($d) === 2) {
            switch ($d[0]) {
                case Matiere::SOURCE:
                    return $this->matiereRepository->find($d[1]);
                case ApcSae::SOURCE:
                    return $this->apcSaeRepository->find($d[1]);
                case ApcRessource::SOURCE:
                    return $this->apcRessourceRepository->find($d[1]);
            }
        }

        return null;
    }

}
