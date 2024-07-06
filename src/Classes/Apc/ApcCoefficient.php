<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Apc/ApcCoefficient.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/06/2024 11:18
 */

namespace App\Classes\Apc;

use App\Entity\ApcRessource;
use App\Entity\ApcRessourceCompetence;
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
                if (null !== $competence->getCompetence()) {
                    $idCompetence = $competence->getCompetence()->getId();
                    $tabs['saes'][$sae->getid()][$idCompetence] = $competence->getCoefficient();
                    $tabs['saes'][$sae->getid()]['total'] += $competence->getCoefficient();
                    $tabs = $this->initIfNotExist($competence, $tabs);
                    $tabs['competences'][$idCompetence]['total'] += $competence->getCoefficient();
                    $tabs['competences'][$idCompetence]['totalSaes'] += $competence->getCoefficient();
                }
            }
        }

        $tabs['ressources'] = [];
        /** @var ApcRessource $ressource */
        foreach ($ressources as $ressource) {
            $tabs['ressources'][$ressource->getId()] = [];
            $tabs['ressources'][$ressource->getId()]['total'] = 0;
            if ($ressource->hasCoefficientDifferent()) {
                foreach ($ressource->getSemestres() as $semestre) {
                    $idParcours = $semestre->getDiplome()?->getApcParcours()?->getId();
                    $tabs['ressources'][$ressource->getId()][$competence->getCompetence()->getId()][$idParcours] = 0;
                    $tabs['ressources'][$ressource->getId()][$idParcours]['total'] = 0;
                }
            }
            foreach ($ressource->getApcRessourceCompetences() as $competence) {
                if (null !== $competence->getCompetence()) {
                    if ($ressource->hasCoefficientDifferent()) {
                        if ($competence->getParcours() !== null) {
                            $tabs['ressources'][$ressource->getId()][$competence->getCompetence()->getId()][$competence->getParcours()->getId()] = $competence->getCoefficient();
                            $tabs['ressources'][$ressource->getId()][$competence->getParcours()?->getId()]['total'] += $competence->getCoefficient();
                        }

                        $tabs['competences'][$competence->getCompetence()->getId()]['total'] += $competence->getCoefficient();
                        $tabs['competences'][$competence->getCompetence()->getId()]['totalRessources'] += $competence->getCoefficient();
                    } else {
                        $tabs['ressources'][$ressource->getId()][$competence->getCompetence()->getId()] = $competence->getCoefficient();
                        $tabs['ressources'][$ressource->getId()]['total'] += $competence->getCoefficient();

                        $tabs = $this->initIfNotExist($competence, $tabs);
                        $tabs['competences'][$competence->getCompetence()->getId()]['total'] += $competence->getCoefficient();
                        $tabs['competences'][$competence->getCompetence()->getId()]['totalRessources'] += $competence->getCoefficient();
                    }

                }
            }
        }

        return $tabs;
    }

    private function initIfNotExist(mixed $competence, array $tabs): array
    {
        $idComp = $competence->getCompetence()->getId();
        if (!array_key_exists($idComp, $tabs['competences'])) {
            $tabs['competences'][$idComp]['total'] = 0;
            $tabs['competences'][$idComp]['totalSaes'] = 0;
            $tabs['competences'][$idComp]['totalRessources'] = 0;
        }

        return $tabs;
    }

    private function initIfNotExistParcours(ApcRessourceCompetence $competence, array $tabs)
    {
        $idComp = $competence->getCompetence()?->getId();
        foreach ($this->parcours as $parcours) {

            if (!array_key_exists($idComp, $tabs['competences'])) {
                $tabs['competences'][$idComp]['total'] = 0;
                $tabs['competences'][$idComp]['totalSaes'] = 0;
                $tabs['competences'][$idComp]['totalRessources'] = 0;
            }
        }

        return $tabs;
    }
}
