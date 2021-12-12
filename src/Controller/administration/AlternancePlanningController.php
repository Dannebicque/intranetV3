<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/AlternanceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 19:11
 */

namespace App\Controller\administration;

use App\Classes\Calendrier;
use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\Annee;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Form\AlternanceType;
use App\Repository\AlternancePlanningRepository;
use App\Repository\AlternanceRepository;
use App\Repository\EtudiantRepository;
use function count;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route("/administration/alternance/planning")]
class AlternancePlanningController extends BaseController
{
    #[Route("/{annee}", name: "administration_alternance_planning_index", requirements: ["annee"=>"\d+"], methods: ["GET"])]
    public function index(
        AlternancePlanningRepository $alternancePlanningRepository,
        Annee $annee
    ): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $annee);
        Calendrier::calculPlanning($this->getAnneeUniversitaire()->getAnnee());
       // $events = $alternancePlanningRepository->getPlanning($annee, $this->getAnneeUniversitaire());

        return $this->render('alternance/administration/planning/index.html.twig',
            [
                'tabPlanning' => Calendrier::getTabPlanning(),
                'tabJour'     => ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D'],
                'tabFerie'    => Calendrier::getTabJoursFeries(),
                'tabFinMois'  => Calendrier::getTabFinMois(),
                'annee' => $annee,
                //'events' => $events
            ]);
    }
}
