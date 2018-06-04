<?php

namespace App\Controller;

use App\MesClasses\Calendrier;
use App\Repository\DateRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PlanningController extends BaseController
{
    /**
     * @Route("/planning/{annee}", name="planning")
     */
    public function index(DateRepository $dateRepository, int $annee)
    {
        Calendrier::calculPlanning($annee);

        return $this->render('planning/index.html.twig', [
            'tabPlanning' => Calendrier::getTabPlanning(),
            'tabJour'     => array('', 'L', 'M', 'M', 'J', 'V', 'S', 'D'),
            'tabFerie'    => Calendrier::getTabJoursFeries(),
            'tabFinMois'  => Calendrier::getTabFinMois(),
            'annee'       => $annee,
            'events'      => $dateRepository->findByFormationPlanning($this->dataUserSession->getFormation()->getId(),
                $annee)
        ]);
    }
}
