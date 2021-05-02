<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/MatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/04/2021 18:31
 */

namespace App\Classes\Matieres;


use App\Repository\MatiereRepository;

class MatiereManager extends AbstractMatiereManager implements MatiereInterface
{

    private MatiereRepository $matiereRepository;

    /**
     * MatiereManager constructor.
     *
     * @param \App\Repository\MatiereRepository $matiereRepository
     */
    public function __construct(MatiereRepository $matiereRepository)
    {
        $this->matiereRepository = $matiereRepository;
    }

    public function find($id)
    {
        return $this->matiereRepository->find($id);
    }
}
