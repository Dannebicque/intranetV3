<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/SourceEdt/Source/EdtInterface.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 19/04/2024 18:06
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Components\SourceEdt\Source;

use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\DTO\Matiere;
use App\Entity\Personnel;
use App\Entity\Semestre;

interface EdtInterface
{
    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection;

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt;

    public function findOne(int $eventId, Matiere $matiere, Groupe $groupe): EvenementEdt;

    public function recupereEdtJourBorne(Semestre $semestre, array $matieres, int $jourSemaine, int $semaineFormation, array $groupes, AnneeUniversitaire $anneeUniversitaire): EvenementEdtCollection;

    public function getCurrentEventEtudiant(Etudiant $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt;

    public function getNextEventEtudiant(Etudiant $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt;

    public function getCurrentEventPersonnel(Personnel $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt;

    public function getNextEventPersonnel(Personnel $user, AnneeUniversitaire $anneeUniversitaire): ?EvenementEdt;

    public function getPlanningPersonnelSemaine(
        Personnel          $personnel,
        int                $semaine,
        AnneeUniversitaire $anneeUniversitaire,
        array              $matieres,
        array              $groupes
    ): EvenementEdtCollection;
}
