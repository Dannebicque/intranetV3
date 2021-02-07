<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyMaterielCommun.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:17
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Constantes;
use App\Repository\MaterielCommunPretRepository;
use App\Repository\MaterielCommunRepository;

class MyMaterielCommun
{
    private MaterielCommunRepository $materielCommunRepository;
    private MaterielCommunPretRepository $materielCommunPretRepository;
    private int $nbjouremprunt;

    /**
     * MyMaterielCommun constructor.
     */
    public function __construct(
        MaterielCommunRepository $materielCommunRepository,
        MaterielCommunPretRepository $materielCommunPretRepository
    ) {
        $this->materielCommunRepository = $materielCommunRepository;
        $this->materielCommunPretRepository = $materielCommunPretRepository;
    }

    public function getJours(): array
    {
        $jours = [];
        $this->nbjouremprunt = 28;
        $j = -2;

        for ($i = 0; $i < $this->nbjouremprunt; ++$i) {
            $d = mktime(0, 0, 0, date('m'), date('d') + $j, date('Y'));
            $jour = date('N', $d);
            if (6 !== $jour && 7 !== $jour) {
                $jours[$i]['jour'] = Constantes::TAB_JOURS[date('N', $d)];
                $jours[$i]['texte'] = date('d/m/Y', $d);
                $jours[$i]['date'] = date('Y-m-d', $d);
                $jours[$i]['objDate'] = $d;
                $jours[$i]['i'] = $i;
            }
            ++$j;
        }

        return $jours;
    }

    /**
     * @param array $jours
     */
    public function obtainDispoMateriel($jours): array
    {
        $prets = $this->materielCommunPretRepository->findAll();
        $t = [];

        foreach ($jours as $j) {
            $t[$j['date']]['0800'] = [];
            $t[$j['date']]['0930'] = [];
            $t[$j['date']]['1100'] = [];
            $t[$j['date']]['1400'] = [];
            $t[$j['date']]['1530'] = [];
            $t[$j['date']]['1700'] = [];
        }

        foreach ($prets as $p) {
            $t[$p->getDateEmprunt()->format('Y-m-d')][$p->getCreneau()][$p->getMaterielCommun()->getId()] = $p;
        }

        return $t;
    }
}
