<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/GraphiqueController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/12/2020 13:43

namespace App\Controller;


use App\Entity\Evaluation;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

/**
 * Class ActualiteController
 * @package App\Controller
 * @Route("/graphiques")
 */
class GraphiqueController extends BaseController
{
    public function evaluation(ChartBuilderInterface $chartBuilder, $repartition, Evaluation $evaluation)
    {
        $labels = [];
        for ($i = 0; $i <= 20; $i++) {
            $labels[] = $i;
        }

        $chart = $chartBuilder->createChart(Chart::TYPE_BAR);
        $chart->setData([
            'labels'   => $labels,
            'datasets' => [
                [
                    'label'           => $evaluation->getLibelle(),
                    'backgroundColor' => 'rgb(255, 99, 132)',
                    'borderColor'     => 'rgb(255, 99, 132)',
                    'data'            => $repartition['repartition'],
                ],
            ],
        ]);

        return $this->render('graphique/evaluation.html.twig', [
            'chart' => $chart,
        ]);

    }
}
