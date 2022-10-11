<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/DefaultController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/10/2022 17:42
 */

namespace App\Controller;

use App\Entity\Etudiant;
use App\Repository\ActualiteRepository;
use App\Repository\DateRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DefaultController.
 */
class DefaultController extends BaseController
{
    #[Route(path: '/tableau-de-bord', name: 'default_homepage')]
    public function index(
        ActualiteRepository $actualiteRepository,
        DateRepository $dateRepository
    ): Response {
        if ($this->isGranted('ROLE_SUPER_ADMIN') || $this->isGranted('ROLE_ADMINISTRATIF')) {
            return $this->redirectToRoute('super_admin_homepage');
        }
        if (null === $this->getDepartement()) {
            return $this->redirectToRoute('security_choix_departement');
        }
        if ($this->getUser() instanceof Etudiant) {
            $dates = $dateRepository->findByDateForEtudiant($this->getUser(), 2);
        } else {
            $dates = $dateRepository->findByDateForPersonnel($this->getDepartement(), 2);
        }

        return $this->render('default/index.html.twig', [
            'actualites' => $actualiteRepository->getByDepartement($this->getDepartement(), 3),
            'dates' => $dates,
        ]);
    }
}
