<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/DefaultController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 07:01
 */

namespace App\Controller;

use App\Repository\ActualiteRepository;
use App\Repository\DateRepository;
use App\Repository\DepartementRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController.
 */
class DefaultController extends BaseController
{
    #[Route(path: '/tableau-de-bord', name: 'default_homepage')]
    public function index(
        TypeGroupeRepository $typeGroupeRepository,
        ActualiteRepository $actualiteRepository,
        DateRepository $dateRepository
    ): Response {
        if ($this->isGranted('ROLE_SUPER_ADMIN') || $this->isGranted('ROLE_ADMINISTRATIF')) {
            return $this->redirectToRoute('super_admin_homepage');
        }
        if (null === $this->getDepartement()) {
            return $this->redirectToRoute('security_choix_departement');
        }
        if ($this->isGranted('ROLE_ETUDIANT')) {
            $dates = $dateRepository->findByDateForEtudiant($this->getConnectedUser(), 2);
            $typesGroupes = $typeGroupeRepository->findBySemestre($this->getUser()->getSemestre());
        } else {
            $dates = $dateRepository->findByDateForPersonnel($this->getDepartement(), 2);
            $typesGroupes = $typeGroupeRepository->findByDepartementSemestresActifs($this->getDepartement());
        }

        return $this->render('default/index.html.twig', [
            'actualites' => $actualiteRepository->getByDepartement($this->getDepartement(), 3),
            'dates' => $dates,
            'typegroupes' => $typesGroupes,
        ]);
    }
}
