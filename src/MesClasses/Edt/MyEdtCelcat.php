<?php
/**
 * Copyright (C) 2013 - 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 *
 * @file /Users/davidannebicque/htdocs/intranetv3/src/MesClasses/Edt/MyEdtCelcat.php
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

class MyEdtCelcat extends BaseEdt
{
    protected $celcatEvents;

    /**
     * MyEdt constructor.
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param CalendrierRepository  $celcatCalendrierRepository
     */
    public function __construct(
        CalendrierRepository $celcatCalendrierRepository
    ) {
        parent::__construct($celcatCalendrierRepository);
        // $this->celcatEvents = $celcatEvents;
    }

    /**
     * @param Personnel $personnel
     */
    public function initPersonnel(Personnel $personnel, $semaine = 0): void
    {

    }

    public function initEtudiant(Etudiant $etudiant, $semaine = 0): void
    {
    }

    public function initAdministration()
    {
    }
}
