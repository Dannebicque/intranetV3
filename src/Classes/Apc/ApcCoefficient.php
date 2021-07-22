<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Apc/ApcCoefficient.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 15:37
 */

namespace App\Classes\Apc;

use App\Entity\ApcSae;

class ApcCoefficient
{
    public function calculsCoefficients(mixed $saes, mixed $ressources): array
    {
        $tabs = [];
        $tabs['saes'] = [];
        $tabs['competences'] = [];
        /** @var ApcSae $sae */
        foreach ($saes as $sae) {
            $tabs['saes'][$sae->getid()] = [];
            $tabs['saes'][$sae->getid()]['total'] = 0;
            foreach ($sae->getApcSaeCompetences() as $competence) {
                $tabs['saes'][$sae->getid()][$competence->getCompetence()->getId()] = $competence->getCoefficient();
                $tabs['saes'][$sae->getid()]['total'] += $competence->getCoefficient();
                $tabs = $this->initIfNotExist($competence, $tabs);
                $tabs['competences'][$competence->getCompetence()->getId()]['total'] += $competence->getCoefficient();
                $tabs['competences'][$competence->getCompetence()->getId()]['totalSaes'] += $competence->getCoefficient();
            }
        }

        $tabs['ressources'] = [];
        /** @var \App\Entity\ApcRessource $ressource */
        foreach ($ressources as $ressource) {
            $tabs['ressources'][$ressource->getid()] = [];
            $tabs['ressources'][$ressource->getid()]['total'] = 0;
            foreach ($ressource->getApcRessourceCompetences() as $competence) {
                $tabs['ressources'][$ressource->getid()][$competence->getCompetence()->getId()] = $competence->getCoefficient();
                $tabs['ressources'][$ressource->getid()]['total'] += $competence->getCoefficient();

                $tabs = $this->initIfNotExist($competence, $tabs);
                $tabs['competences'][$competence->getCompetence()->getId()]['total'] += $competence->getCoefficient();
                $tabs['competences'][$competence->getCompetence()->getId()]['totalRessources'] += $competence->getCoefficient();
            }
        }

        return $tabs;
    }

    private function initIfNotExist(mixed $competence, array $tabs): array
    {
        if (!array_key_exists($competence->getCompetence()->getId(), $tabs['competences'])) {
            $tabs['competences'][$competence->getCompetence()->getId()]['total'] = 0;
            $tabs['competences'][$competence->getCompetence()->getId()]['totalSaes'] = 0;
            $tabs['competences'][$competence->getCompetence()->getId()]['totalRessources'] = 0;
        }

        return $tabs;
    }
}
