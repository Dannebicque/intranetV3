<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/AbsencesEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2022 14:21
 */

namespace App\DTO;

use App\Entity\Etudiant;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\Collection;

class AbsencesEtudiant
{
    public Etudiant $etudiant;
    public int $nbJustifie;
    public int $nbNonJustifie;
    public int $nbDemiJournee;
    public CarbonInterface $dureeCoursManques;
    public int $nbCoursManques;

    public function etudiantGroupes(): Collection
    {
        return $this->etudiant->getGroupes();
    }

    public function setStatisques(StatisquesAbsences $stats): void
    {
        $this->nbJustifie = $stats->nbJustifie;
        $this->nbNonJustifie = $stats->nbNonJustifie;
        $this->nbDemiJournee = $stats->nbDemiJournee;
        $this->dureeCoursManques = $stats->dureeCoursManques;
        $this->nbCoursManques = $stats->nbCoursManques;
    }
}
