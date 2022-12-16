<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/CelcatController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\superAdministration;

use App\Classes\Celcat\MyCelcat;
use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Repository\DiplomeRepository;
use App\Repository\EdtCelcatRepository;
use Exception;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/celcat')]
class CelcatController extends BaseController
{
    /**
     * CelcatController constructor.
     */
    public function __construct(private readonly MyCelcat $myCelcat)
    {
    }

    #[Route(path: '/', name: 'sa_celcat_index', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/celcat/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll(),
        ]);
    }

    #[Route(path: '/extraction', name: 'sa_celcat_extraction_code', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function extraction(): Response
    {
        return $this->render('super-administration/celcat/extraction.html.twig', [
            'diplomes' => $this->myCelcat->getDiplomes(),
        ]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/update/{id}', name: 'sa_celcat_update_events', methods: ['GET'])]
    #[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_SUPER_ADMIN')]
    public function update(EdtCelcatRepository $celcatEventsRepository, Diplome $diplome): RedirectResponse
    {
        // suppression des events existants pour le département
        $celcatEventsRepository->deleteDepartement($diplome->getCodeCelcatDepartement(),
            $this->getAnneeUniversitaire());
        // récupération et ajouts des events.
        $this->myCelcat->getEvents($diplome->getCodeCelcatDepartement(), $this->getAnneeUniversitaire());

        return $this->redirectToRoute('sa_celcat_index');
    }
}
