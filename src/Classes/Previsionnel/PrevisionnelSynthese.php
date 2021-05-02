<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/Previsionnel/PrevisionnelSynthese.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:44
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes\Previsionnel;

use App\Classes\Excel\MyExcelWriter;
use App\Entity\AnneeUniversitaire;
use App\Entity\Departement;
use App\Entity\Diplome;
use App\Entity\Hrs;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Repository\CelcatEventsRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\HrsRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\PrevisionnelSaeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

/**
 * Class MyPrevisionnel.
 */
class PrevisionnelSynthese
{


    private $totalCm = 0.0;
    private $totalTd = 0.0;
    private $totalTp = 0.0;
    private $totalEtuCm = 0.0;
    private $totalEtuTd = 0.0;
    private $totalEtuTp = 0.0;
    private $totalHrs = 0.0;
    /**
     * @var \App\Entity\Personnel
     */
    private Personnel $personnel;

    public function getTotalCm(): float
    {
        return $this->totalCm;
    }

    public function getTotalTd(): float
    {
        return $this->totalTd;
    }

    public function getTotalTp(): float
    {
        return $this->totalTp;
    }

    public function getTotalEtu(): float
    {
        return $this->totalEtuCm + $this->totalEtuTd + $this->totalEtuTp;
    }

    public function getTotalEtuCm(): float
    {
        return $this->totalEtuCm;
    }

    public function getTotalEtuTd(): float
    {
        return $this->totalEtuTd;
    }

    public function getTotalEtuTp(): float
    {
        return $this->totalEtuTp;
    }

    public function getTotalHrs(): float
    {
        return $this->totalHrs;
    }

    public function getNbHeuresComplementaires(): float
    {
        $tot = $this->getTotalService() - $this->personnel->getNbHeuresService();

        return $tot < 0 ? 0 : $tot;
    }

    public function getTotalService(): float
    {
        return $this->totalCm + $this->totalTd + $this->totalTp;
    }

    public function getTotalHrsService(): float
    {
        return $this->totalHrs + $this->getTotalService();
    }

    /**
     * @param $annee
     */
    public function getHrsEnseignant(array $hrs): void
    {

        foreach ($hrs as $hr) {
            $this->totalHrs += $hr->getNbHeuresTd();
        }
    }

    public function getSynthese(array $previsionnels, $hrs, Personnel $personnel)
    {
        $this->personnel = $personnel;

        foreach ($previsionnels as $pr) {
            //   $sem = $pr->getSemestre() ? $pr->getSemestre()->getId() : null;

            //  if (null !== $sem) {
//                if (!\array_key_exists($sem, $tprev)) {
//                    $tprev[$sem] = [];
//                    $this->semestres[] = $pr->getSemestre();
//                }
            //  $tprev[$sem][] = $pr;
            $this->totalCm += $pr->getTotalHCm();
            $this->totalTd += $pr->getTotalHTd();
            $this->totalTp += $pr->getTotalHTp();
            // }
        }

        return $this;
    }
}
