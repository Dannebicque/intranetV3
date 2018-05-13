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
    private $totalEtuCm = 0.0;
    private $totalEtuTd = 0.0;
    private $totalEtuTp = 0.0;
    private $totalHrs = 0.0;

    /** @var Matiere */
    private $matiere;

    /** @var Semestre */
    private $semestre;

    /** @var Previsionnel[] */
    private $previsionnels;

    public function __construct(PrevisionnelRepository $previsionnelRepository, HrsRepository $hrsRepository)
    {
        $this->previsionnelRepository = $previsionnelRepository;
        $this->hrsRepository = $hrsRepository;
    }

    /**
     * @return Semestre
     */
    public function getSemestre(): Semestre
    {
        return $this->semestre;
    }



    /**
     * @return Matiere
     */
    public function getMatiere(): Matiere
    {
        return $this->matiere;
    }

    /**
     * @return Previsionnel[]
     */
    public function getPrevisionnels(): array
    {
        return $this->previsionnels;
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

    public function getTotalEtu(): float
    {
        return $this->totalEtuCm + $this->totalEtuTd + $this->totalEtuTp;
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
    public function getTotalEtuCm(): float
    {
        return $this->totalEtuCm;
    }

    /**
     * @return float
     */
    public function getTotalEtuTd(): float
    {
        return $this->totalEtuTd;
    }

    /**
     * @return float
     */
    public function getTotalEtuTp(): float
    {
        return $this->totalEtuTp;
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
    )
    {

        return $this->previsionnelRepository->findPrevisionnelEnseignantFormation($personnel, $formation);
    }

    public function getPrevisionnelEnseignantComplet(Personnel $personnel, $annee) :array
    {

        return $this->previsionnelRepository->findPrevisionnelEnseignantComplet($personnel, $annee);
    }

    /**
     * @param $annee
     *
     */
    public function getPrevisionnelEnseignantBySemestre($annee) :void
    {
        $previsionnels = $this->previsionnelRepository->findPrevisionnelEnseignantComplet($this->personnel, $annee);

        $tprev = array();
        /** @var Previsionnel $pr */
        foreach ($previsionnels as $pr) {
            $sem = $pr->getSemestre() ? $pr->getSemestre()->getId() : null;

            if ($sem !== null) {

                if (!array_key_exists($sem, $tprev)) {
                    $tprev[$sem] = array();
                    $this->semestres[] = $pr->getSemestre();
                }
                $tprev[$sem][] = $pr;
                $this->totalCm += $pr->getTotalHCm();
                $this->totalTd += $pr->getTotalHTd();
                $this->totalTp += $pr->getTotalHTp();
            }
        }

        $this->servicePrevisionnelBySemestre = $tprev;
    }

    /**
     * @param $annee
     */
    public function getHrsEnseignant($annee): void
    {
        $this->hrs = $this->hrsRepository->findHrsEnseignant($this->personnel, $annee);

        foreach ($this->hrs as $hr) {
            $this->totalHrs += $hr->getNbHeuresTd();
        }
    }

    /**
     * @param Matiere $matiere
     * @param         $annee
     */
    public function getPrevisionnelMatiere(Matiere $matiere, $annee) :void
    {
        $this->matiere = $matiere;
        $this->previsionnels = $this->previsionnelRepository->findPrevisionnelMatiere($matiere, $annee);

        /** @var Previsionnel $previ */
        foreach ($this->previsionnels as $previ) {
            $this->totalCm += $previ->getTotalHCm();
            $this->totalTp += $previ->getTotalHTp();
            $this->totalTd += $previ->getTotalHTd();

            $this->totalEtuCm += $previ->getNbHCm();
            $this->totalEtuTd += $previ->getNbHTd();
            $this->totalEtuTp += $previ->getNbHTp();
        }

    }

    public function getPrevisionnelSemestre(Semestre $semestre, $annee)
    {
        $this->semestre = $semestre;
        $this->previsionnels = $this->previsionnelRepository->findPrevisionnelSemestre($semestre, $annee);

        /** @var Previsionnel $previ */
        foreach ($this->previsionnels as $previ) {
            $this->totalCm += $previ->getTotalHCm();
            $this->totalTp += $previ->getTotalHTp();
            $this->totalTd += $previ->getTotalHTd();

            $this->totalEtuCm += $previ->getNbHCm();
            $this->totalEtuTd += $previ->getNbHTd();
            $this->totalEtuTp += $previ->getNbHTp();
        }
    }
}