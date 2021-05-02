<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/SaeManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/04/2021 16:37
 */

namespace App\Classes\Matieres;


use App\Repository\ApcSaeRepository;

class SaeManager extends AbstractMatiereManager implements MatiereInterface
{
    private ApcSaeRepository $apcSaeRepository;

    /**
     * MatiereManager constructor.
     *
     * @param \App\Repository\ApcRessourceRepository $matiereRepository
     */
    public function __construct(ApcSaeRepository $apcSaeRepository)
    {
        $this->apcSaeRepository = $apcSaeRepository;
    }

    public function find($id)
    {
        return $this->apcSaeRepository->find($id);
    }
}
