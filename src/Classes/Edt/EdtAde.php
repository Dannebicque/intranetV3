<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/EdtAde.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/05/2022 10:32
 */

namespace App\Classes\Edt;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;

class EdtAde extends AbstractEdt implements EdtInterface
{
    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        return new EvenementEdtCollection();
    }

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt
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
