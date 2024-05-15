<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/GetSemestreFromGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/05/2024 19:42
 */

namespace App\Classes;

use App\Entity\Groupe;
use App\Entity\Semestre;

abstract class GetSemestreFromGroupe
{
    public static function getSemestreFromGroupe(Groupe $groupe): ?Semestre
    {
        if ($groupe->getApcParcours() === null && $groupe->getParcours() === null && $groupe->getTypeGroupe()?->getSemestres()->count() === 1) {
            return $groupe->getTypeGroupe()?->getSemestres()->first();
        }

        $semestres = $groupe->getTypeGroupe()?->getSemestres();

        if (null === $semestres) {
            return null;
        }

        foreach ($semestres as $semestre) {
            if ($groupe->getApcParcours()?->getDiplomes()->contains($semestre->getDiplome())) {
                return $semestre;
            }
        }

        return null;
    }
}
