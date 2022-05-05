<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/Edt/EdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/05/2022 18:12
 */

namespace App\Classes\Edt;

use App\Adapter\EdtCelcatAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\CelcatEventsRepository;
use Carbon\Carbon;

class EdtCelcat extends AbstractEdt implements EdtInterface
{
    public function __construct(
        private readonly CelcatEventsRepository $celcatEventsRepository,
        private readonly EdtCelcatAdapter $edtCelcatAdapter)
    {
    }

    public function getPlanningSemestre(Semestre $semestre, array $matieres, AnneeUniversitaire $anneeUniversitaire, array $groupes): EvenementEdtCollection
    {
        return new EvenementEdtCollection();
    }

    public function find(int $event, array $matieres = [], array $groupes = []): EvenementEdt
    {
        $evt = $this->celcatEventsRepository->find($event);

        return $this->edtCelcatAdapter->single($evt);
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

    public function getPlanningSemestreSemaine(
        Semestre $semestre,
        int $semaine,
        array $matieres,
        array $groupes,
        AnneeUniversitaire $anneeUniversitaire
    ): EvenementEdtCollection {
        $evts = $this->celcatEventsRepository->findEdtSemestreSemaine($semestre, $semaine, $anneeUniversitaire);

        $tGroupes = [];
        foreach ($groupes as $groupe) {
            $tGroupes[$groupe->getCodeApogee()] = $groupe;
        }

        $tMatieres = [];
        foreach ($matieres as $matiere) {
            $tMatieres[$matiere->codeElement] = $matiere;
        }

        return $this->edtCelcatAdapter->collection($evts, $tMatieres, $tGroupes);
    }
}
