<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/RessourceManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/04/2021 11:55
 */

namespace App\Classes\Matieres;

use App\Repository\ApcRessourceRepository;

class RessourceManager extends AbstractMatiereManager implements MatiereInterface
{
    private ApcRessourceRepository $apcRessourceRepository;

    /**
     * MatiereManager constructor.
     *
     * @param \App\Repository\ApcRessourceRepository $matiereRepository
     */
    public function __construct(ApcRessourceRepository $apcRessourceRepository)
    {
        $this->apcRessourceRepository = $apcRessourceRepository;
    }

    public function find($id)
    {
        return $this->apcRessourceRepository->find($id);
    }
}
