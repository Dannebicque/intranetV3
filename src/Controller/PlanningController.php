<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/PlanningController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller;

use App\Classes\Calendrier;
use App\Repository\DateRepository;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PlanningController.
 *
 * @Route("/agenda")
 */
class PlanningController extends BaseController
{
    /**
     * @Route("/planning/{annee}", name="planning_index")
     *
     * @throws Exception
     */
    public function index(DateRepository $dateRepository, int $annee = 0): Response
    {
        if (0 === $annee) {
            if (date('m') < 7) {
                $annee = (int)date('Y') - 1;
            } else {
                $annee = (int)date('Y');
            }
        }

        Calendrier::calculPlanning($annee);

        return $this->render('planning/index.html.twig', [
            'tabPlanning' => Calendrier::getTabPlanning(),
            'tabJour'     => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'],
            'tabFerie'    => Calendrier::getTabJoursFeries(),
            'tabFinMois'  => Calendrier::getTabFinMois(),
            'annee'       => $annee,
            'events'      => $dateRepository->findByDepartementPlanning(
                $this->dataUserSession->getDepartementId(),
                $annee
            ),
        ]);
    }
}
