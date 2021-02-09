<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Edt/MyEdtBorne.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/02/2021 09:40
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Edt;

use App\Entity\AnneeUniversitaire;
use App\Entity\Semestre;
use App\Repository\CalendrierRepository;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\GroupeRepository;

class MyEdtBorne
{
    public $data = [];

    /** @var CalendrierRepository */
    private $calendrierRepository;

    /** @var EdtPlanningRepository */
    private $edtPlanningRepository;

    /** @var CelcatEventsRepository */
    private $celcatEventRepository;

    /** @var GroupeRepository */
    private $groupeRepository;

    /**
     * MyEdtBorne constructor.
     */
    public function __construct(
        CalendrierRepository $calendrierRepository,
        EdtPlanningRepository $edtPlanningRepository,
        CelcatEventsRepository $celcatEventRepository,
        GroupeRepository $groupeRepository
    ) {
        $this->calendrierRepository = $calendrierRepository;
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatEventRepository = $celcatEventRepository;
        $this->groupeRepository = $groupeRepository;
    }

    public function init(): void
    {
        $this->data['semaine'] = date('W');
        $this->data['njour'] = date('d');
        $this->data['jsem'] = date('N');
    }

    public function calculSemestre(
        Semestre $semestre1,
        Semestre $semestre2,
        AnneeUniversitaire $anneeUniversitaire
    ): void {
        $semaine = $this->calendrierRepository->findOneBy([
            'semaineReelle' => $this->data['semaine'],
            'anneeUniversitaire' => $anneeUniversitaire->getId()
        ]);

        $this->data['semestre1'] = $semestre1;
        $this->data['semestre2'] = $semestre2;
        if (null !== $semaine) {
            if (null !== $semestre1->getDiplome() && null !== $semestre1->getDiplome()->getDepartement() && $semestre1->getDiplome()->getDepartement()->isOptUpdateCelcat()) {
                $this->data['p1']['planning'] = $this->celcatEventRepository->recupereEDTBornes($semaine->getSemaineFormation(),
                    $semestre1, $this->data['jsem']);
                $this->data['p2']['planning'] = $this->celcatEventRepository->recupereEDTBornes($semaine->getSemaineFormation(),
                    $semestre2, $this->data['jsem']);
            } else {
                $this->data['p1']['planning'] = $this->edtPlanningRepository->recupereEDTBornes($semaine->getSemaineFormation(),
                    $semestre1, $this->data['jsem']);
                $this->data['p2']['planning'] = $this->edtPlanningRepository->recupereEDTBornes($semaine->getSemaineFormation(),
                    $semestre2, $this->data['jsem']);
            }

            $this->data['p1']['groupes'] = $this->groupeRepository->findAllGroupes($semestre1);
            $this->data['p2']['groupes'] = $this->groupeRepository->findAllGroupes($semestre2);
            $this->data['jours'] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
            $this->data['j1'] = $this->data['jours'][$this->data['jsem']] . ' ' . date('d/m/Y',
                    mktime(12, 30, 00, date('n'), $this->data['njour'], date('Y')));
        }
    }

    public function getData(): array
    {
        return $this->data;
    }
}
