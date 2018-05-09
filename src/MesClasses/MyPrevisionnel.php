<?php
/**
 * Created by PhpStorm.
 * User: davidannebicque
 * Date: 18/04/2018
 * Time: 08:15
 */

namespace App\MesClasses;


use App\Entity\Formation;
use App\Entity\Hrs;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Repository\HrsRepository;
use App\Repository\PrevisionnelRepository;

class MyPrevisionnel
{
    /** @var Personnel */
    private $personnel;

    private $previsionnelRepository;

    /** @var HrsRepository */
    private $hrsRepository;

    /**
     * @var Previsionnel[]
     */
    private $servicePrevisionnelBySemestre;

    /** @var Hrs[] */
    private $hrs;

    /**
     * @var Semestre[]
     */
    private $semestres = array();

    private $totalCm = 0.0;
    private $totalTd = 0.0;
    private $totalTp = 0.0;
    private $totalHrs = 0.0;

    /** @var Matiere */
    private $matiere;

    /** @var Previsionnel[] */
    private $previsionnels;

    public function __construct(PrevisionnelRepository $previsionnelRepository, HrsRepository $hrsRepository)
    {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->hrsRepository = $hrsRepository;
    }

    /**
     * @return Semestre[]
     */
    public function getSemestres(): array
    {
        return $this->semestres;
    }

    /**
     * @return Previsionnel[]
     */
    public function getServicePrevisionnelBySemestre(): array
    {
        return $this->servicePrevisionnelBySemestre;
    }

    /**
     * @return float
     */
    public function getTotalCm(): float
    {
        return $this->totalCm;
    }

    /**
     * @return float
     */
    public function getTotalTd(): float
    {
        return $this->totalTd;
    }

    /**
     * @return float
     */
    public function getTotalTp(): float
    {
        return $this->totalTp;
    }

    public function getTotalService(): float
    {
        return $this->totalCm + $this->totalTd + $this->totalTp;
    }

    /**
     * @return Hrs[]
     */
    public function getHrs(): array
    {
        return $this->hrs;
    }

    /**
     * @return Personnel
     */
    public function getPersonnel(): Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel $personnel
     */
    public function setPersonnel(Personnel $personnel): void
    {
        $this->personnel = $personnel;
    }



    /**
     * @return float
     */
    public function getTotalHrs(): float
    {
        return $this->totalHrs;
    }

    /**
     * @return float
     */
    public function getNbHeuresComplementaires(): float
    {
        $tot = $this->getTotalService() - $this->personnel->getNbHeuresService();

        return $tot < 0 ? 0 : $tot;
    }



    public function getTotalHrsService() :float
    {
        return $this->totalHrs + $this->getTotalService();
    }

    public function getPrevisionnelEnseignantFormation(
        Personnel $personnel,
        Formation $formation
    )//todo: param sur Personnel
    {

        return $this->previsionnelRepository->findPrevisionnelEnseignantFormation($personnel, $formation);
    }

    public function getPrevisionnelEnseignantComplet(Personnel $personnel, $annee)//todo: param sur Personnel
    {

        return $this->previsionnelRepository->findPrevisionnelEnseignantComplet($personnel, $annee);
    }

    public function getPrevisionnelEnseignant($getId)
    {
    }

    /**
     * @param $getUser
     * @param $annee
     *
     */
    public function getPrevisionnelEnseignantBySemestre($annee) :void
    {
        $previsionnels = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($this->personnel, $annee);

        $t = array();
        /** @var Previsionnel $pr */
        foreach ($previsionnels as $pr) {
            $sem = $pr->getSemestre() ? $pr->getSemestre()->getId() : null;

            if ($sem !== null) {

                if (!array_key_exists($sem, $t)) {
                    $t[$sem] = array();
                    $this->semestres[] = $pr->getSemestre();
                }
                $t[$sem][] = $pr;
                $this->totalCm += $pr->getTotalHCm();
                $this->totalTd += $pr->getTotalHTd();
                $this->totalTp += $pr->getTotalHTp();
            }
        }

        $this->servicePrevisionnelBySemestre = $t;
    }

    /**
     * @param $getUser
     * @param $annee
     */
    public function getHrsEnseignant($annee): void
    {
        $this->hrs = $this->hrsRepository->findHrsEnseignant($this->personnel, $annee);

        foreach ($this->hrs as $h) {
            $this->totalHrs += $h->getNbHeuresTd();
        }
    }

    public function getPrevisionnelMatiere(Matiere $matiere, $annee)
    {
        $this->matiere = $matiere;
        $this->previsionnels = $this->previsionnelRepository->findPrevisionnelMatiere($matiere, $annee);

    }
}