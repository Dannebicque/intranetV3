<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apc/ApcStructure.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/05/2021 21:39
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Apc;

use App\Entity\Diplome;

class ApcStructure
{
    public function parcoursNiveaux(Diplome $diplome): array
    {
        $tParcours = [];
        foreach ($diplome->getApcParcours() as $parcours) {
            $tParcours[$parcours->getId()] = [];
            foreach ($parcours->getApcParcoursNiveaux() as $niveau) {
                if (null !== $niveau && null !== $niveau->getNiveau()) {
                    $niv = $niveau->getNiveau();
                    if (null !== $niv && null !== $niv->getCompetence() && !\array_key_exists($niv->getCompetence()->getId(),
                            $tParcours[$parcours->getId()])) {
                        $tParcours[$parcours->getId()][$niv->getCompetence()->getId()] = [];
                    }
                    if (null !== $niv->getAnnee()) {
                        $tParcours[$parcours->getId()][$niv->getCompetence()->getId()][$niv->getAnnee()->getOrdre()] = $niv;
                    }
                }
            }
        }

        return $tParcours;
    }
}
