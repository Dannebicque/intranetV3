<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/AlternancePlanningController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\administration;

use App\Classes\Calendrier;
use App\Controller\BaseController;
use App\Entity\Annee;
use App\Repository\AlternancePlanningRepository;
use Exception;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/administration/alternance/planning')]
class AlternancePlanningController extends BaseController
{
    /**
     * @throws Exception
     */
    #[Route('/{annee}', name: 'administration_alternance_planning_index', requirements: ['annee' => "\d+"], methods: ['GET'])]
    public function index(
        AlternancePlanningRepository $alternancePlanningRepository,
        Annee $annee
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $annee);
        Calendrier::calculPlanning($this->getAnneeUniversitaire()?->getAnnee());
        // $events = $alternancePlanningRepository->getPlanning($annee, $this->getAnneeUniversitaire());

        return $this->render('alternance/administration/planning/index.html.twig',
            [
                'tabPlanning' => Calendrier::getTabPlanning(),
                'tabJour' => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'],
                'tabFerie' => Calendrier::getTabJoursFeries(),
                'tabFinMois' => Calendrier::getTabFinMois(),
                'annee' => $annee,
                // 'events' => $events
            ]);
    }
}
