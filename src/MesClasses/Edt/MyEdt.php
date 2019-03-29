<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 05/09/2018
 * Time: 16:46
 */

namespace App\MesClasses\Edt;


use App\Entity\Calendrier;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;

class MyEdt
{

    protected $semaine;

    /** @var Calendrier */
    protected $calendrier;

    protected $semaineFormation;

    /** @var EdtPlanningRepository */
    protected $edtPlanningRepository;

    /** @var CalendrierRepository */
    protected $celcatCalendrierRepository;

    /**
     * MyEdt constructor.
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param CalendrierRepository  $celcatCalendrierRepository
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CalendrierRepository $celcatCalendrierRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->celcatCalendrierRepository = $celcatCalendrierRepository;
    }


    /**
     * @param Personnel $personnel
     */
    public function initPersonnel(Personnel $personnel): void
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
    public function initEtudiant(Etudiant $etudiant): void
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
