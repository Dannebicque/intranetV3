<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/StatsAbsences.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/07/2020 08:41

namespace App\Classes;


use App\DTO\StatisquesAbsences;
use App\Entity\Absence;
use Exception;

class StatsAbsences
{

    /**
     * @param               $absences
     *
     * @return mixed
     * @throws Exception
     */
    public function calculStatistiquesAbsencesEtudiant($absences)
    {
        $statisquesAbsences = new StatisquesAbsences();

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            $statisquesAbsences->nbCoursManques++;

            if ($absence->getDuree() !== null) {
                $statisquesAbsences->addDuree($absence->getDuree());
            }
            $statisquesAbsences->incJustifieOrNotJutifie($absence->isJustifie());

        }


        return $statisquesAbsences;
    }
}
