<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Components/Graphs/Type/BarGraph.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/12/2022 10:36
 */

namespace App\Components\Graphs\Type;

use Symfony\UX\Chartjs\Model\Chart;

class BarGraph extends AbstractGraph
{
    public const SOURCE = 'bar';
    public const TYPE_CHAR = Chart::TYPE_BAR;

    public function genereGraph($data)
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
                    'backgroundColor' => '#bb1e10',
                    'borderColor' => '#bb1e10',
                    'data' => $tabData,
                ],
            ],
        ]);

        return $chart;
    }
}
