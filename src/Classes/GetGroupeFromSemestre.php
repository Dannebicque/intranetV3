<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/GetGroupeFromSemestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/11/2023 15:34
 */

namespace App\Classes;

use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use Doctrine\Common\Collections\Collection;

abstract class GetGroupeFromSemestre
{
    public static function GetGroupeFromSemestre(Semestre $semestre, TypeGroupe $typeGroupe): array|Collection
    {
        if ($typeGroupe->getSemestres()->first()->getDiplome()?->isApc() === false) {
            return $typeGroupe->getGroupes();
        }

        if ($semestre->getDiplome()?->getApcParcours() === null) {
            return $typeGroupe->getGroupes();
        }

        $t = [];
        foreach ($typeGroupe->getGroupes() as $groupe) {
            if ($groupe->getApcParcours()?->getDiplomes()->contains($semestre->getDiplome())) {
                $t[] = $groupe;
            }
        }

        return $t;
    }
}
