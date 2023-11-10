<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/GetSemestreFromGroupe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/11/2023 17:01
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

        foreach ($semestres as $semestre) {
            if ($groupe->getApcParcours()?->getDiplomes()->contains($semestre->getDiplome())) {
                return $semestre;
            }
        }

        return null;
    }
}
