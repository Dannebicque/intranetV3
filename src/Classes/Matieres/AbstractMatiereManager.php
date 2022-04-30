<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Matieres/AbstractMatiereManager.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 08:57
 */

namespace App\Classes\Matieres;

use App\DTO\Matiere;

abstract class AbstractMatiereManager
{
    public function findFromSelect(string $data): ?Matiere
    {
        $id = $this->getIdFromString($data);

        return null !== $id ? $this->find($id) : null;
    }

    public function getIdFromString(string $data): ?string
    {
        $d = explode('_', $data);
        if (2 === count($d)) {
            return $d[1];
        }

        return null;
    }

    public function find(int|string $id): ?Matiere
    {
        return null;
    }
}
