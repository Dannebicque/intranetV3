<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Personnels/GetPersonnels.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2024 17:26
 */

namespace App\Classes\Personnels;

use App\Classes\Configuration;
use App\Entity\Departement;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\InputBag;

class GetPersonnels
{

    public function __construct(
        private PersonnelRepository $personnelRepository,
        private Configuration       $configuration
    )
    {
    }

    public function getPersonnels(InputBag $request, string $type, Departement $departement)
    {
        if ($request->get('recherche', null) !== null && trim($request->get('recherche', null)) !== '') {
            return $this->personnelRepository->searchPersonnelTrombinoscope(
                $request->get('recherche'),
                $type,
                $departement,
                $this->configuration->get('AFFICHAGE_TROMBI')
            );
        }

        return $this->personnelRepository->findByType(
            $type,
            $departement,
            $this->configuration->get('AFFICHAGE_TROMBI')
        );


    }
}
