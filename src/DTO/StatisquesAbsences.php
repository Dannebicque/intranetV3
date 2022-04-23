<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/StatisquesAbsences.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\DTO;

use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateInterval;
use Exception;

class StatisquesAbsences
{
    public int $nbCoursManques = 0;
    public int $nbNonJustifie = 0;
    public int $nbDemiJournee = 0;
    public int $nbJustifie = 0;
    public CarbonInterface $dureeCoursManques;

    /**
     * StatisquesAbsences constructor.
     */
    public function __construct()
    {
        $this->dureeCoursManques = Carbon::createFromTime();
    }

    /**
     * @throws Exception
     */
    public function addDuree(CarbonInterface $duree): void
    {
        $this->dureeCoursManques->add(new DateInterval('PT'.$duree->format('G').'H'.$duree->format('i').'M'));
    }

    public function incJustifieOrNotJutifie(bool $isJustifie): void
    {
        $isJustifie ? $this->nbJustifie++ : $this->nbNonJustifie++;
    }
}
