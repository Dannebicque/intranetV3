<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apc/ApcStructure.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/01/2021 15:38

namespace App\Classes\Apc;


use App\Entity\Diplome;

class ApcStructure
{
    /**
     * @param Diplome $diplome
     *
     * @return array
     */
    public function parcoursNiveaux(Diplome $diplome): array
    {
        $tParcours = [];
        foreach ($diplome->getApcParcours() as $parcours) {
            $tParcours[$parcours->getId()] = [];
            foreach ($parcours->getApcParcoursNiveaux() as $niveau) {

                if ($niveau !== null && $niveau->getNiveau() !== null) {
                    $niv = $niveau->getNiveau();
                    if (!array_key_exists($niv->getCompetence()->getId(), $tParcours[$parcours->getId()])) {
                        $tParcours[$parcours->getId()][$niv->getCompetence()->getId()] = [];
                    }
                    $tParcours[$parcours->getId()][$niv->getCompetence()->getId()][$niv->getOrdre()] = $niv;
                }
            }
        }

        return $tParcours;
    }
}
