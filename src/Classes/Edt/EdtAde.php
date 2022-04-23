<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtAde.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/09/2021 19:11
 */

namespace App\Classes\Edt;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Semestre;

class EdtAde extends AbstractEdt implements EdtInterface
{
    public function getPlanningSemestre(Semestre $semestre): EvenementEdtCollection
    {
        return new EvenementEdtCollection();
    }

    public function find(int $event): EvenementEdt
    {
        return new EvenementEdt();
    }

    public function recupereEdtJourBorne(
        Semestre $semestre,
        array $matieres,
        int $jourSemaine,
        int $semaineFormation
    ): EvenementEdtCollection {
        // TODO: Implement recupereEdtJourBorne() method.
        return new EvenementEdtCollection();
    }
}
