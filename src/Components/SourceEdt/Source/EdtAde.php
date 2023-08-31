<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Source/EdtAde.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/08/2023 11:23
 */

namespace App\Components\SourceEdt\Source;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;

class EdtAde extends AbstractEdt implements EdtInterface
{
    public const SOURCE = 'ade';

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
        int $semaineFormation,
        array $groupes
    ): EvenementEdtCollection {
        // TODO: Implement recupereEdtJourBorne() method.
        return new EvenementEdtCollection();
    }

    public function getNextEvent(): ?EvenementEdt
    {
        // TODO: Implement getNextEvent() method.
    }

    public function getCurrentEvent(): ?EvenementEdt
    {
        // TODO: Implement getCurrentEvent() method.
    }
}
