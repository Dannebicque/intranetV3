<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/MyPersonnel.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/24/19 9:38 AM
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 16/06/2018
 * Time: 09:05
 */

namespace App\MesClasses;

use App\Entity\Personnel;
use App\Repository\PersonnelRepository;
use Symfony\Component\Routing\RouterInterface;

/**
 * Class MyPersonnel
 * @package App\MesClasses
 */
class MyPersonnel
{
    /** @var PersonnelRepository */
    private $personnelRepository;

    /** @var RouterInterface */
    private $router;

    /**
     * MyPersonnel constructor.
     *
     * @param PersonnelRepository $personnelRepository
     * @param RouterInterface     $router
     */
    public function __construct(PersonnelRepository $personnelRepository, RouterInterface $router)
    {
        $this->personnelRepository = $personnelRepository;
        $this->router = $router;
    }


    /**
     * @param $filters
     * @param $start
     * @param $length
     *
     * @return array
     */
    public function getArrayAllPersonnel($filters, $start, $length): array
    {
        $personnels = $this->personnelRepository->getAllPersonnel($filters, $start, $length);
        $tab = [];
        /** @var Personnel $personnel */
        foreach ($personnels as $personnel) {
            $t = [];

            $departements = '';

            foreach ($personnel->getPersonnelDepartements() as $departement) {
                $departements .= $departement->getDepartement() ? $departement->getDepartement()->getLibelle() . ', ' : '';
            }
            $t['id'] = $personnel->getId();
            $t['departements'] = $departements;
            $t['numero_harpege'] = $personnel->getNumeroHarpege();
            $t['nom'] = $personnel->getNom();
            $t['prenom'] = $personnel->getPrenom();
            $t['deleted'] = $personnel->getDeleted() ? 'Désactivé' : 'Actif';

            $tab[] = $t;
        }

        return $tab;
    }
}
