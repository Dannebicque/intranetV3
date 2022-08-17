<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apc/ApcStructure.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/08/2022 18:42
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Apc;

use App\Entity\ApcReferentiel;
use function array_key_exists;

class ApcStructure
{
    public function parcoursNiveaux(ApcReferentiel $referentiel): array
    {
        $tParcours = [];
        foreach ($referentiel->getApcParcours() as $parcours) {
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
