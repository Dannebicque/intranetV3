<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyMaterielCommun.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Constantes;
use App\Repository\MaterielCommunPretRepository;

readonly class MyMaterielCommun
{
    /**
     * MyMaterielCommun constructor.
     */
    public function __construct(
        private MaterielCommunPretRepository $materielCommunPretRepository
    ) {
    }

    public function getJours(): array
    {
        $jours = [];
        $nbjouremprunt = 28;
        $j = -2;

        for ($i = 0; $i < $nbjouremprunt; ++$i) {
            $d = mktime(0, 0, 0, date('m'), (int) date('d') + $j, (int) date('Y'));
            $jour = (int) date('N', $d);
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

    public function obtainDispoMateriel(array $jours): array
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
