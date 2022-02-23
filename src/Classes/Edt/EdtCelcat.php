<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/EdtCelcat.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/09/2021 18:46
 */

namespace App\Classes\Edt;

use App\Adapter\EdtCelcatAdapter;
use App\DTO\EvenementEdt;
use App\DTO\EvenementEdtCollection;
use App\Entity\Semestre;
use App\Repository\CelcatEventsRepository;

class EdtCelcat extends AbstractEdt implements EdtInterface
{
    private CelcatEventsRepository $celcatEventsRepository;
    private EdtCelcatAdapter $edtCelcatAdapter;

    public function __construct(CelcatEventsRepository $celcatEventsRepository, EdtCelcatAdapter $edtCelcatAdapter)
    {
        $this->celcatEventsRepository = $celcatEventsRepository;
        $this->edtCelcatAdapter = $edtCelcatAdapter;
    }

    public function getPlanningSemestre(Semestre $semestre): EvenementEdtCollection
    {
        return new EvenementEdtCollection();
    }

    public function find(int $event): EvenementEdt
    {
        $evt = $this->celcatEventsRepository->find($event);

        return $this->edtCelcatAdapter->single($evt);
    }

    public function recupereEdtJourBorne(
        Semestre $semestre,
        array $matieres,
        int $jourSemaine,
        int $semaineFormation
    ): EvenementEdtCollection {
        // TODO: Implement recupereEdtJourBorne() method.
    }
}
