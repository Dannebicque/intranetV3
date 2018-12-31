<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 05/09/2018
 * Time: 16:46
 */

namespace App\MesClasses\Edt;


use App\Entity\CelcatCalendrier;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Repository\CelcatCalendrierRepository;
use App\Repository\EdtPlanningRepository;

class MyEdt
{

    protected $semaine;

    /** @var CelcatCalendrier */
    protected $calendrier;

    protected $semaineFormation;

    /** @var EdtPlanningRepository */
    protected $edtPlanningRepository;

    /** @var CelcatCalendrierRepository */
    protected $celcatCalendrierRepository;

    /**
     * MyEdt constructor.
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param CelcatCalendrierRepository $celcatCalendrier
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CelcatCalendrierRepository $celcatCalendrierRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatCalendrierRepository = $celcatCalendrierRepository;
    }


    /**
     * @param Personnel $personnel
     */
    public function initPersonnel(Personnel $personnel)
    {
        $this->semaine = date('W');
        $calendrier = $this->celcatCalendrierRepository->findOneBy(['semaineReelle' => $this->semaine]);

        if ($calendrier !== null) {
            $this->calendrier = $calendrier;
        }
    }

    /**
     * @param Etudiant $etudiant
     */
    public function initEtudiant(Etudiant $etudiant)
    {

    }

    /**
     * @return mixed
     */
    public function getSemaineFormation()
    {
        return $this->calendrier ? $this->calendrier->getSemaineFormation() : 0;
    }

    /**
     * @return mixed
     */
    public function getSemaine()
    {
        return $this->semaine;
    }


}