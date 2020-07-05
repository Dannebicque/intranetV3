<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/MesClasses/StatsAbsences.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\MesClasses;


use App\Entity\Absence;
use App\Entity\Etudiant;
use DateInterval;
use DateTime;
use Exception;

abstract class StatsAbsences
{

    /**
     * @param               $absences
     *
     * @param Etudiant|null $etudiant
     *
     * @return mixed
     * @throws Exception
     */
    public static function calculsStatsSemestre($absences, ?Etudiant $etudiant = null)
    {
        $statistiques['nbCoursManques'] = 0;
        $statistiques['totalDuree'] = new DateTime('00:00');
        $statistiques['nbNonJustifie'] = 0;
        $statistiques['nbDemiJournee'] = 0; //todo: a gérer dans le calcul
        $statistiques['nbJustifie'] = 0;


        /** @var Absence $absence */
        foreach ($absences as $absence) {
            if ($etudiant === null || ($etudiant !== null && $absence->getEtudiant() !== null && $absence->getEtudiant()->getId() === $etudiant->getId())) {
                $statistiques['nbCoursManques']++;

                if ($absence->getDuree() !== null) {
                    $statistiques['totalDuree']->add(new DateInterval('PT' . $absence->getDuree()->format('G') . 'H' . $absence->getDuree()->format('i') . 'M'));
                }

                $absence->isJustifie() ? $statistiques['nbJustifie']++ : $statistiques['nbNonJustifie']++;
            }
        }

        return $statistiques;
    }
}
