<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/Type/PieGraph.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/12/2022 10:33
 */

namespace App\Components\Graphs\Type;

use Symfony\UX\Chartjs\Model\Chart;

class PieGraph extends AbstractGraph
{
    public const SOURCE = 'pie';
    public const TYPE_CHAR = Chart::TYPE_PIE;

    public function genereGraph($data): Chart
    {
        $labels = [];
        $tabData = [];
        foreach ($data->getReponses() as $reponse) {
            $labels[] = $reponse->libelle;
            $tabData[] = $data->choix?->totalReponses[$reponse->valeur] ?? 0;
        }

        $chart = $this->chartBuilder->createChart(self::TYPE_CHAR);
        $chart->setOptions([
            'responsive' => true,
            'maintainAspectRatio' => false,
            'plugins' => [
                'title' => [
                    'display' => true,
                    'text' => $data->libelle,
                ],
                'legend' => [
                    'position' => 'right',
                ],
            ]
        ]);
        $chart->setData([
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => 'Réponses',
                    'backgroundColor' => ['#F7B000', '#bb1e10'],
                    'data' => $tabData,
                ],
            ],
        ]);

        return $chart;
    }
}
