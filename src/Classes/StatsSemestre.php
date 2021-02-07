<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/StatsSemestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:26
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\DTO\StatistiquesSemestre;
use App\Entity\Etudiant;
use App\Entity\Semestre;

class StatsSemestre
{
    public function calculStatistiquesSemestre(Semestre $semestre, $bacs): StatistiquesSemestre
    {
        $stats = new StatistiquesSemestre();
        $stats->effectif = \count($semestre->getEtudiants());

        foreach ($bacs as $bac) {
            $stats->addBac($bac->getId());
        }

        /** @var Etudiant $etudiant */
        foreach ($semestre->getEtudiants() as $etudiant) {
            //Homme/femme
            if (Etudiant::HOMME === $etudiant->getCivilite()) {
                ++$stats->hommes;
            } elseif (Etudiant::FEMME === $etudiant->getCivilite()) {
                ++$stats->femmes;
            }

            //bac
            if ((null !== $etudiant->getBac()) &&
                \array_key_exists($etudiant->getBac()->getId(), $stats->repartitionBacEffectif)) {
                ++$stats->repartitionBacEffectif[$etudiant->getBac()->getId()];
            }
            $stats->calculPourcentageRepartitionBac();

            //origine géographique
            if (null !== $etudiant->getAdresseParentale()) {
                $departement = mb_substr($etudiant->getAdresseParentale()->getCodePostal(), 0, 2);
                if (!\array_key_exists($departement, $stats->repartitionGeographiqueEffectif)) {
                    $stats->repartitionGeographiqueEffectif[$departement] = 1;
                } else {
                    ++$stats->repartitionGeographiqueEffectif[$departement];
                }
            }
            $stats->calculPourcentageRepartitionGeographique();
        }

        return $stats;
    }
}
