<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyEdtCompare.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 09/07/2020 11:21

namespace App\Classes;


use App\Entity\EdtPlanning;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Repository\EdtPlanningRepository;
use App\Repository\PrevisionnelRepository;

class MyEdtCompare
{

    /** @var EdtPlanningRepository */
    private $edtPlanningRepository;

    /** @var PrevisionnelRepository */
    private $previsionnelRepository;
    /**
     * @var Previsionnel[]
     */
    private $planning;

    /**
     * MyEdtCompare constructor.
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param PrevisionnelRepository $previsionnelRepository
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        PrevisionnelRepository $previsionnelRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->previsionnelRepository = $previsionnelRepository;
    }


    /**
     * @param Matiere   $matiere
     * @param Personnel $personnel
     * @param int       $anneePrevi
     *
     * @return array
     */
    public function realise(Matiere $matiere, Personnel $personnel, int $anneePrevi): array
    {
        $m = $this->edtPlanningRepository->findBy([
            'matiere'     => $matiere->getId(),
            'intervenant' => $personnel->getId()
        ],
            [
                'semaine' => 'ASC',
                'jour'    => 'ASC',
                'debut'   => 'ASC'
            ]);

        $this->planning = $this->previsionnelRepository->findBy([
            'personnel' => $personnel->getId(),
            'matiere'   => $matiere->getId(),
            'annee'     => $anneePrevi
        ]);

        $t = [];
        $t['cm']['previ'] = 0;
        $t['td']['previ'] = 0;
        $t['tp']['previ'] = 0;
        $t['cm']['real'] = 0;
        $t['td']['real'] = 0;
        $t['tp']['real'] = 0;

        foreach ($p as $pr) {
            $t['cm']['previ'] += $pr->getNbHCM();
            $t['td']['previ'] += $pr->getNbHTD() * $pr->getNbGrTD();
            $t['tp']['previ'] += $pr->getNbHTP() * $pr->getNbGrTP();
        }

        foreach ($m as $ma) {
            switch ($ma->getType()) {
                case 'CM':
                case 'cm':
                    $t['cm']['real'] += $ma->getDureeInt();
                    break;
                case 'TD':
                case 'td':
                    $t['td']['real'] += $ma->getDureeInt();
                    break;
                case 'TP':
                case 'tp':
                    $t['tp']['real'] += $ma->getDureeInt();
                    break;
            }
        }

        return $t;
    }

    /**
     * @return Previsionnel[]
     */
    public function getPlanning(): array
    {
        return $this->planning;
    }


}
