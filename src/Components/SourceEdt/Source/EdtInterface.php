<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Source/EdtInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/10/2023 07:42
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Components\SourceEdt\Source;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;

interface EdtInterface
{
    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection;

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt;

    public function recupereEdtJourBorne(Semestre $semestre, array $matieres, int $jourSemaine, int $semaineFormation, array $groupes, AnneeUniversitaire $anneeUniversitaire): EvenementEdtCollection;

    public function getNextEvent(): ?EvenementEdt;

    public function getCurrentEvent(): ?EvenementEdt;
}
