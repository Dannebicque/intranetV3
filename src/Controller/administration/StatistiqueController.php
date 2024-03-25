<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/StatistiqueController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\StatsSemestre;
use App\Controller\BaseController;
use App\Repository\BacRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
