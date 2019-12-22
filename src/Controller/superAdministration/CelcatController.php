<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/CelcatController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Diplome;
use App\MesClasses\Celcat\MyCelcat;
use App\Repository\CelcatEventsRepository;
use App\Repository\DiplomeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/super-administration/celcat")
 */
class CelcatController extends BaseController
{
    /**
     * @Route("/index", methods={"GET"}, name="sa_celcat_index")
     * @IsGranted("ROLE_SUPER_ADMIN")
     * @param DiplomeRepository $diplomeRepository
     *
     * @return Response
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/celcat/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll()
        ]);
    }

    /**
     * @Route("/extraction", methods={"GET"}, name="sa_celcat_extraction_code")
     * @IsGranted("ROLE_SUPER_ADMIN")
     *
     */
    public function extraction(): Response
    {
        return $this->render('super-administration/celcat/extraction.html.twig', [
            'diplomes' => MyCelcat::getDiplomes()
        ]);
    }

    /**
     * @Route("/update/{id}", methods={"GET"}, name="sa_celcat_update_events")
     * @IsGranted("ROLE_SUPER_ADMIN")
     * @param CelcatEventsRepository $celcatEventsRepository
     * @param Diplome                $diplome
     *
     * @return RedirectResponse
     * @throws \Exception
     */
    public function update(CelcatEventsRepository $celcatEventsRepository, Diplome $diplome): RedirectResponse
    {
        //suppression des events existants pour le département
        $celcatEventsRepository->deleteDepartement($diplome->getCodeCelcatDepartement(),
            $diplome->getAnneeUniversitaire());

        //récupération et ajouts des events.
        MyCelcat::getEvents($diplome->getCodeCelcatDepartement(), $diplome->getAnneeUniversitaire());

        return $this->redirectToRoute('sa_celcat_index');
    }
}
