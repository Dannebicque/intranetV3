<?php
/**
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Edt/MyEdtBorne.php
 * @author David annebicque
 * @project intranetv3
 * @date  13/05/2019 15:14
 * @lastUpdate 13/05/2019 15:14
 *
 */

namespace App\MesClasses\Edt;


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


    public function init()
    {
        $this->data['semaine'] = date('W');
        $this->data['njour'] = date('d');
        $this->data['jsem'] = date('N');
    }

    public function calculSemestre(Semestre $semestre1, Semestre $semestre2) {
        $t['semaine'] = $this->calendrierRepository->findOneBy(array('semaineReelle' => $this->data['semaine']));



        $this->data['semestre1'] = $semestre1;
        $this->data['semestre2'] = $semestre2;


        if ($semestre1->getDiplome() !== null && $semestre1->getDiplome()->getDepartement() !== null && $semestre1->getDiplome()->getDepartement()->isOptUpdateCelcat()) {
            $this->data['p1']['planning'] = $this->celcatEventRepository->recupereEDTBornesNew($this->data['semaine']->getSemaineRelle(),
                $semestre1,  $this->data['jsem']);
            $this->data['p2']['planning'] = $this->celcatEventRepository->recupereEDTBornesNew($this->data['semaine']->getSemaineRelle(),
                $semestre2,  $this->data['jsem']);
        } else {
            $this->data['p1']['planning'] = $this->edtPlanningRepository->recupereEDTBornesNew($this->data['semaine']->getSemaine(),
                $semestre1,  $this->data['jsem'] + 1);
            $this->data['p2']['planning'] = $this->edtPlanningRepository->recupereEDTBornesNew($this->data['semaine']->getSemaineIUT(),
                $semestre2,  $this->data['jsem'] + 1);
        }

        $this->data['p1']['groupes'] = $this->groupeRepository->findAllGroupes($semestre1);
        $this->data['p2']['groupes'] = $this->groupeRepository->findAllGroupes($semestre2);

        $this->data['jours'] = array('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi');
        $this->data['j1'] = $this->data['jours'][$this->data['jsem']] . ' ' . date('d/m/Y', mktime(12, 30, 00, date('n'), $t['njour'], date('Y')));

    }
}
