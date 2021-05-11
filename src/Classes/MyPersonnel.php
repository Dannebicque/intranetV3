<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Personnel;
use App\Repository\PersonnelRepository;

/**
 * Class MyPersonnel.
 */
class MyPersonnel
{
    /** @var PersonnelRepository */
    private $personnelRepository;

    /**
     * MyPersonnel constructor.
     */
    public function __construct(PersonnelRepository $personnelRepository)
    {
        $this->personnelRepository = $personnelRepository;
    }

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
            $t['login'] = $personnel->getUsername();
            $t['deleted'] = $personnel->getDeleted() ? 'Désactivé' : 'Actif';

            $tab[] = $t;
        }

        return $tab;
    }
}
