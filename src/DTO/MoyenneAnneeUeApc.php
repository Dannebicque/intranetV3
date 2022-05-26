<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/DTO/MoyenneAnneeUeApc.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:27
 */

namespace App\DTO;

use App\Entity\Constantes;

class MoyenneAnneeUeApc
{
    public MoyenneUeApc $moyenneSemestrePair;
    public array $moyenneSemestreImpair;
    public bool $penalisee = true;

    public function moyenneAnnee(): float
    {
        if ($this->penalisee) {
            return ($this->moyenneSemestrePair->moyennePacPenalisee + $this->moyenneSemestreImpair['moyenne']) / 2;
        }

        return ($this->moyenneSemestrePair->moyennePac + $this->moyenneSemestreImpair['moyenne']) / 2;

    }


    public function decisionAnnee(): string
    {
        return $this->moyenneAnnee() < 10 ? Constantes::UE_NON_VALIDE : Constantes::UE_VALIDE;

    }
}
