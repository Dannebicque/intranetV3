<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/DTO/StatisquesAbsences.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\DTO;

use DateInterval;
use DateTime;
use Exception;

class StatisquesAbsences
{
    public int $nbCoursManques = 0;
    public int $nbNonJustifie = 0;
    public int $nbDemiJournee = 0;
    public int $nbJustifie = 0;
    public DateTime $totalDuree;

    /**
     * StatisquesAbsences constructor.
     */
    public function __construct()
    {
        $this->totalDuree = new DateTime('00:00');
    }

    /**
     * @throws Exception
     */
    public function addDuree(DateTime $duree): void
    {
        $this->totalDuree->add(new DateInterval('PT'.$duree->format('G').'H'.$duree->format('i').'M'));
    }

    public function incJustifieOrNotJutifie(bool $isJustifie)
    {
        $isJustifie ? $this->nbJustifie++ : $this->nbNonJustifie++;
    }
}
