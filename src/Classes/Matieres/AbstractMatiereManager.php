<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/AbstractMatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

namespace App\Classes\Matieres;


abstract class AbstractMatiereManager
{
    public function findFromSelect($data)
    {
        $id = $this->getIdFromString($data);

        return $id !== null ? $this->find($id) : null;
    }

    public function getIdFromString($data)
    {
        $d = explode('_', $data);
        if (count($d) === 2) {
            return $d[1];
        }

        return null;
    }

    public function find($id)
    {
        return null;
    }

}
