<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apc/ApcStructure.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/01/2023 20:52
 */

namespace App\Classes\Apc;

use Doctrine\Common\Collections\Collection;
use function array_key_exists;

class ApcStructure
{
    public function parcoursNiveaux(array|Collection $apcParcours): array
    {
        $tParcours = [];
        foreach ($apcParcours as $parcours) {
            $tParcours[$parcours->getId()] = [];
            foreach ($parcours->getApcParcoursNiveaux() as $niveau) {
                if (null !== $niveau && null !== $niv = $niveau->getNiveau()) {
                    if (null !== $niv->getCompetence() && !array_key_exists($niv->getCompetence()->getId(),
                            $tParcours[$parcours->getId()])) {
                        $tParcours[$parcours->getId()][$niv->getCompetence()->getId()] = [];
                    }
                    $tParcours[$parcours->getId()][$niv->getCompetence()->getId()][$niv->getOrdreAnnee()] = $niv;
                }
            }
        }

        return $tParcours;
    }
}
