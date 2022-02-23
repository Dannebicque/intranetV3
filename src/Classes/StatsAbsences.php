<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/StatsAbsences.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\DTO\StatisquesAbsences;
use App\Entity\Absence;
use Carbon\Carbon;
use Exception;

class StatsAbsences
{
    /**
     * @throws Exception
     */
    public function calculStatistiquesAbsencesEtudiant(array $absences): StatisquesAbsences
    {
        $statisquesAbsences = new StatisquesAbsences();
        $prec = Carbon::createMidnightDate(2000, 01, 01);
        /** @var Absence $absence */
        foreach ($absences as $absence) {
            ++$statisquesAbsences->nbCoursManques;
            if (null !== $absence->getDateHeure()) {
                if ($absence->getDateHeure()->format('Y-m-d') !== $prec->format('Y-m-d')) {
                    ++$statisquesAbsences->nbDemiJournee;
                } elseif ((int) $prec->format('H') < 13 && (int) $absence->getDateHeure()->format('H') >= 13) {
                    ++$statisquesAbsences->nbDemiJournee;
                }
                $prec = $absence->getDateHeure();
            }

            if (null !== $absence->getDuree()) {
                $statisquesAbsences->addDuree($absence->getDuree());
            }
            $statisquesAbsences->incJustifieOrNotJutifie($absence->isJustifie());
        }

        return $statisquesAbsences;
    }
}
