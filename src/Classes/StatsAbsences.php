<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/StatsAbsences.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:26
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\DTO\StatisquesAbsences;
use App\Entity\Absence;
use Exception;

class StatsAbsences
{
    /**
     * @param $absences
     *
     * @throws Exception
     */
    public function calculStatistiquesAbsencesEtudiant($absences)
    {
        $statisquesAbsences = new StatisquesAbsences();

        /** @var Absence $absence */
        foreach ($absences as $absence) {
            ++$statisquesAbsences->nbCoursManques;

            if (null !== $absence->getDuree()) {
                $statisquesAbsences->addDuree($absence->getDuree());
            }
            $statisquesAbsences->incJustifieOrNotJutifie($absence->isJustifie());
        }

        return $statisquesAbsences;
    }
}
