<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/GraphiqueController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller;

use App\Classes\MyEvaluations;
use App\Entity\Evaluation;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\UX\Chartjs\Builder\ChartBuilderInterface;
use Symfony\UX\Chartjs\Model\Chart;

/**
 * Class ActualiteController.
 *
 * @Route("/graphiques")
 */
class GraphiqueController extends BaseController
{
    public function evaluation(
        MyEvaluations $myEvaluations,
        ChartBuilderInterface $chartBuilder,
        Evaluation $evaluation,
        $repartition = null
    ) {
        if (null === $repartition) {
            $myEvaluations->setMatiere($evaluation->getMatiere());
            $myEvaluations->getEvaluationsMatiere($this->dataUserSession->getAnneeUniversitaire());
            $repartition = $myEvaluations->getStatistiques()[$evaluation->getId()];
        }

        $labels = [];
        for ($i = 0; $i <= 20; ++$i) {
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
