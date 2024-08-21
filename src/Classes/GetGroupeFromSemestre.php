<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/GetGroupeFromSemestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2024 16:29
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

    public static function GetGroupeFromSemestreToArray(Semestre $semestre, TypeGroupe $typeGroupe): array
    {
        $t = self::GetGroupeFromSemestre($semestre, $typeGroupe);
        $tab = [];
        foreach ($t as $groupe) {
            $tab[] = ['id' => $groupe->getId(), 'libelle' => $groupe->getLibelle()];
        }

        return $tab;
    }
}
