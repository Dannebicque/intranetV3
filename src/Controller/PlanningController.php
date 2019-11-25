<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/PlanningController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller;

use App\MesClasses\Calendrier;
use App\Repository\DateRepository;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PlanningController
 * @package App\Controller
 * @Route("/agenda")
 */
class PlanningController extends BaseController
{
    /**
     * @Route("/planning/{annee}", name="planning_index")
     * @param DateRepository $dateRepository
     * @param int            $annee
     *
     * @return Response
     * @throws Exception
     */
    public function index(DateRepository $dateRepository, int $annee = 0): Response
    {
        if ($annee === 0) {
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
            )
        ]);
    }
}
