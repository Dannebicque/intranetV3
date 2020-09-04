<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/DefaultController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/09/2020 12:58

namespace App\Controller;

use App\Repository\ActualiteRepository;
use App\Repository\DateRepository;
use App\Repository\DepartementRepository;
use Symfony\Component\HttpFoundation\RedirectResponse;
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
     * @return Response
     */
    public function index(ActualiteRepository $actualiteRepository, DateRepository $dateRepository): Response
    {
        if ($this->isGranted('ROLE_SUPER_ADMIN') || $this->isGranted('ROLE_ADMINISTRATIF')) {
            return $this->redirectToRoute('super_admin_homepage');
        }

        return $this->render('default/index.html.twig', [
            'actualites' => $actualiteRepository->getByDepartement($this->getDepartement()),
            'dates'      => $dateRepository->findByDepartement($this->getDepartement(), 2)
        ]);
    }

    /**
     *
     * @param DepartementRepository $departementRepository
     *
     * @return Response
     *
     * @Route("/administratif/", name="super_admin_homepage")
     */
    public function superAdminHomepage(DepartementRepository $departementRepository): Response
    {
        return $this->render('super-administration/super_admin_homepage.html.twig', [
            'departements' => $departementRepository->findAll()
        ]);
    }

    /**
     *
     * @Route("/aide/{sujet}", name="help_article")
     * @param $sujet
     *
     * @return RedirectResponse
     */
    public function help($sujet): RedirectResponse
    {
        return $this->redirect('https://cours.davidannebicque.fr/intranet/' . $sujet);
    }
}
