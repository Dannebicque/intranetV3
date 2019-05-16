<?php
/**
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Edt/MyEdt.php
 * @author David annebicque
 * @project intranetv3
 * @date  07/05/2019 10:42
 * @lastUpdate 07/05/2019 10:42
 *
 */

/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 05/09/2018
 * Time: 16:46
 */

namespace App\MesClasses\Edt;


use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;

class MyEdt extends BaseEdt
{
    /** @var EdtPlanningRepository */
    protected $edtPlanningRepository;

    protected $semaines;



    /**
     * MyEdt constructor.
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param CalendrierRepository  $celcatCalendrierRepository
     */
    public function __construct(
        CalendrierRepository $celcatCalendrierRepository,
        EdtPlanningRepository $edtPlanningRepository
    ) {
        parent::__construct($celcatCalendrierRepository);
        $this->edtPlanningRepository = $edtPlanningRepository;
    }


    /**
     * @param Personnel $personnel
     */
    public function initPersonnel(Personnel $personnel): void
    {
        $this->semaine = date('W');
        $this->init();
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();
    }

    /**
     * @return mixed
     */
    public function getSemaines()
    {
        return $this->semaines;
    }



    /**
     * @param Etudiant $etudiant
     */
    public function initEtudiant(Etudiant $etudiant): void
    {
        $this->semaine = date('W');
        $this->init($etudiant);
    }

    public function calculEdt()
    {

    }

    /**
     * @return array
     */
    private function calculSemaines()
    {
        $allsemaine = $this->calendrierRepository->findAll();//todo: pour une anneeuniversitaire donnée

        $t = [];
        $i = 0;
        foreach ($allsemaine as $s) {
            $t[$i]['semaineReelle'] = $s->getSemaineReelle();
            $t[$i]['semaineIUT'] = $s->getSemaineFormation();
            $t[$i]['debut'] = $s->getDatelundi();
            $date1 = strtotime($t[$i]['debut']->format('Y-m-d'));
            $fin = date('d-m-Y', mktime(12, 30, 00, date('n', $date1), date('j', $date1) + 7, date('Y', $date1)));
            $t[$i]['fin'] = $fin;
            $i++;
        }

        return $t;
    }

    public function initAdministration($semaine, $filtre, $valeur)
    {
        $this->init($semaine, $filtre, $valeur);
        $this->semaines = $this->calculSemaines();
        $this->calculEdt();
        return $this;
    }


}
