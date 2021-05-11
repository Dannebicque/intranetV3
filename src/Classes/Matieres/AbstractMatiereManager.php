<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/AbstractMatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 08:57
 */

namespace App\Classes\Matieres;

abstract class AbstractMatiereManager
{
    public function findFromSelect($data)
    {
        $id = $this->getIdFromString($data);

        return null !== $id ? $this->find($id) : null;
    }

    public function getIdFromString($data)
    {
        $d = explode('_', $data);
        if (2 === count($d)) {
            return $d[1];
        }

        return null;
    }

    public function find($id)
    {
        return null;
    }
}
