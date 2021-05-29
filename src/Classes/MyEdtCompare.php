<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyEdtCompare.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/05/2021 08:40
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\DTO\Matiere;
use App\DTO\PrevisionnelCollection;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Repository\EdtPlanningRepository;

class MyEdtCompare
{
    /** @var EdtPlanningRepository */
    private $edtPlanningRepository;

    /**
     * @var Previsionnel[]
     */
    private $planning;

    private PrevisionnelCollection $previsionnel;

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
    {
        $this->planning = $this->edtPlanningRepository->findBy([
            'typeMatiere' => $matiere->typeMatiere,
            'idMatiere' => $matiere->id,
            'intervenant' => $personnel->getId(),
        ],
            [
                'semaine' => 'ASC',
                'jour' => 'ASC',
                'debut' => 'ASC',
            ]);

        $this->previsionnel = $this->previsionnelManager->getPrevisionnelMatierePersonnel(
            $personnel,
            $matiere->id,
            $matiere->typeMatiere, $anneePrevi
        );

        $t = [];
        $t['cm']['previ'] = 0;
        $t['td']['previ'] = 0;
        $t['tp']['previ'] = 0;
        $t['cm']['real'] = 0;
        $t['td']['real'] = 0;
        $t['tp']['real'] = 0;

        foreach ($this->previsionnel as $ppr) {
            foreach ($ppr as $pr) {
                $t['cm']['previ'] += $pr->getTotalHCm();
                $t['td']['previ'] += $pr->getTotalHTd();
                $t['tp']['previ'] += $pr->getTotalHTp();
            }
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
