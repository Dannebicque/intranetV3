<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/CelcatController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 10:44
 */

namespace App\Controller\superAdministration;

use App\Classes\Celcat\MyCelcat;
use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Repository\CelcatEventsRepository;
use App\Repository\DiplomeRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/celcat/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll(),
        ]);
    }

    #[Route(path: '/extraction', name: 'sa_celcat_extraction_code', methods: ['GET'])]
    #[IsGranted('ROLE_SUPER_ADMIN')]
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
    #[IsGranted('ROLE_SUPER_ADMIN')]
    public function update(CelcatEventsRepository $celcatEventsRepository, Diplome $diplome): RedirectResponse
    {
        // suppression des events existants pour le département
        $celcatEventsRepository->deleteDepartement($diplome->getCodeCelcatDepartement(),
            $diplome->getAnneeUniversitaire());
        // récupération et ajouts des events.
        $this->myCelcat->getEvents($diplome->getCodeCelcatDepartement(), $diplome->getAnneeUniversitaire());

        return $this->redirectToRoute('sa_celcat_index');
    }
}
