<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/GraphiqueController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 17:31
 */

namespace App\Controller;

use App\Classes\Matieres\TypeMatiereManager;
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
        TypeMatiereManager $typeMatiereManager,
        MyEvaluations $myEvaluations,
        ChartBuilderInterface $chartBuilder,
        Evaluation $evaluation,
        $repartition = null
    ) {
        $matiere = $typeMatiereManager->getMatiere($evaluation->getIdMatiere(), $evaluation->getTypeMatiere());
        if (null !== $matiere && null === $repartition) {
            $myEvaluations->setMatiere($matiere);
            $myEvaluations->getEvaluationsMatiere($this->dataUserSession->getAnneeUniversitaire());
            $repartition = $myEvaluations->getStatistiques()[$evaluation->getId()];
        }

        $labels = [];
        for ($i = 0; $i <= 20; ++$i) {
            $labels[] = $i;
        }

        $chart = $chartBuilder->createChart(Chart::TYPE_BAR);
        $chart->setData([
            'labels' => $labels,
            'datasets' => [
                [
                    'label' => $evaluation->getLibelle(),
                    'backgroundColor' => 'rgb(255, 99, 132)',
                    'borderColor' => 'rgb(255, 99, 132)',
                    'data' => $repartition['repartition'],
                ],
            ],
        ]);

        return $this->render('graphique/evaluation.html.twig', [
            'chart' => $chart,
        ]);
    }
}
