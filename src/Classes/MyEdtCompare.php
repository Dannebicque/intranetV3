<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyEdtCompare.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Repository\EdtPlanningRepository;
use App\Repository\PrevisionnelRepository;

class MyEdtCompare
{
    /** @var EdtPlanningRepository */
    private $edtPlanningRepository;

    /**
     * @var Previsionnel[]
     */
    private $planning;

    /**
     * @var Previsionnel[]
     */
    private array $previsionnel;

    private PrevisionnelManager $previsionnelManager;

    /**
     * MyEdtCompare constructor.
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        PrevisionnelManager $previsionnelManager
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->previsionnelManager = $previsionnelManager;
    }

    public function realise(Matiere $matiere, Personnel $personnel, int $anneePrevi): array
    {//todo: a généraliser avec SAE, Ressources
        $this->planning = $this->edtPlanningRepository->findBy([
            'matiere' => $matiere->getId(),
            'intervenant' => $personnel->getId(),
        ],
            [
                'semaine' => 'ASC',
                'jour' => 'ASC',
                'debut' => 'ASC',
            ]);

        $this->previsionnel = $this->previsionnelManager->findBy([
            'personnel' => $personnel->getId(),
            'matiere' => $matiere->getId(),
            'annee' => $anneePrevi,
        ]);

        $t = [];
        $t['cm']['previ'] = 0;
        $t['td']['previ'] = 0;
        $t['tp']['previ'] = 0;
        $t['cm']['real'] = 0;
        $t['td']['real'] = 0;
        $t['tp']['real'] = 0;

        foreach ($this->previsionnel as $pr) {
            $t['cm']['previ'] += $pr->getNbHCM();
            $t['td']['previ'] += $pr->getNbHTD() * $pr->getNbGrTD();
            $t['tp']['previ'] += $pr->getNbHTP() * $pr->getNbGrTP();
        }

        foreach ($this->planning as $ma) {
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
