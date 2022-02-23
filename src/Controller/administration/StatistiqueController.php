<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/StatistiqueController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Classes\StatsSemestre;
use App\Controller\BaseController;
use App\Repository\BacRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StatistiqueController.
 */
#[Route(path: '/administration/statistique')]
class StatistiqueController extends BaseController
{
    #[Route(path: '/', name: 'administration_statistique_index')]
    public function index(BacRepository $bacRepository, StatsSemestre $statsSemestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        $bacs = $bacRepository->findAll();
        $tabSemestres = [];
        foreach ($this->dataUserSession->getSemestres() as $semestre) {
            $tabSemestres[$semestre->getId()] = $statsSemestre->calculStatistiquesSemestre($semestre, $bacs);
        }

        return $this->render('administration/statistique/index.html.twig', [
            'statistiques' => $tabSemestres,
            'bacs' => $bacs,
        ]);
    }
}
