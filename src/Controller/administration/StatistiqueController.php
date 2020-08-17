<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/StatistiqueController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 16/08/2020 09:48

namespace App\Controller\administration;

use App\Classes\StatsSemestre;
use App\Controller\BaseController;
use App\Repository\BacRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StatistiqueController
 * @package App\Controller\administration
 * @Route("/administration/statistique")
 */
class StatistiqueController extends BaseController
{
    /**
     * @Route("/", name="administration_statistique_index")
     * @param BacRepository $bacRepository
     * @param StatsSemestre $statsSemestre
     *
     * @return Response
     */
    public function index(BacRepository $bacRepository, StatsSemestre $statsSemestre): Response
    {
        $bacs = $bacRepository->findAll();
        $tabSemestres = [];
        foreach ($this->dataUserSession->getSemestres() as $semestre) {
            $tabSemestres[$semestre->getId()] = $statsSemestre->calculStatistiquesSemestre($semestre, $bacs);
        }

        return $this->render('administration/statistique/index.html.twig', [
            'statistiques' => $tabSemestres,
            'bacs'         => $bacs
        ]);
    }
}
