<?php

namespace App\Controller;

use App\Repository\ActualiteRepository;
use App\Repository\DateRepository;
use App\Repository\DepartementRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController
 * @package App\Controller
 */
class DefaultController extends BaseController
{
    /**
     * @Route("/tableau-de-bord", name="default_homepage")
     * @param ActualiteRepository $actualiteRepository
     * @param DateRepository      $dateRepository
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(ActualiteRepository $actualiteRepository, DateRepository $dateRepository): Response
    {
        return $this->render('default/index.html.twig', [
            'actualites' => $actualiteRepository->findByDepartement($this->dataUserSession->getDepartement(), 2),
            'dates'      => $dateRepository->findByDepartement($this->dataUserSession->getDepartement(), 2)
        ]);
    }

    /**
     * @Route("/super-administration/", name="super_admin_homepage")
     * @param DepartementRepository $departementRepository
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function superAdminHomepage(DepartementRepository $departementRepository): Response
    {
        return $this->render('super-administration/super_admin_homepage.html.twig', [
            'departements' => $departementRepository->findAll()
        ]);
    }

    /**
     * @Route("/administratif/", name="administratif_homepage")
     */
    public function administratifHomepage(): Response
    {
        return $this->render('default/administratif_homepage.html.twig', [

        ]);
    }
}
