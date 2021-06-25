<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/DefaultController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 12:48
 */

namespace App\Controller;

use App\Repository\ActualiteRepository;
use App\Repository\DateRepository;
use App\Repository\DepartementRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController.
 */
class DefaultController extends BaseController
{
    /**
     * @Route("/tableau-de-bord", name="default_homepage")
     */
    public function index(ActualiteRepository $actualiteRepository, DateRepository $dateRepository): Response
    {
        if ($this->isGranted('ROLE_SUPER_ADMIN') || $this->isGranted('ROLE_ADMINISTRATIF')) {
            return $this->redirectToRoute('super_admin_homepage');
        }

        if (null === $this->getDepartement()) {
            return $this->redirectToRoute('security_choix_departement');
        }

        if ($this->isGranted('ROLE_ETUDIANT')) {
            $dates = $dateRepository->findByDateForEtudiant($this->getConnectedUser(), 2);
        } else {
            $dates = $dateRepository->findByDateForPersonnel($this->getDepartement(), 2);
        }

        return $this->render('default/index.html.twig', [
            'actualites' => $actualiteRepository->getByDepartement($this->getDepartement(), 3),
            'dates' => $dates
        ]);
    }

    /**
     * @Route("/administratif/", name="super_admin_homepage")
     */
    public function superAdminHomepage(DepartementRepository $departementRepository): Response
    {
        return $this->render('super-administration/super_admin_homepage.html.twig', [
            'departements' => $departementRepository->findAll(),
        ]);
    }
}
