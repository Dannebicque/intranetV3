<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/07/2023 12:29
 */

namespace App\Controller\appPersonnel;

use App\Classes\Hrs\HrsManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Classes\ServiceRealise\ServiceRealiseCelcat;
use App\Classes\ServiceRealise\ServiceRealiseIntranet;
use App\Controller\BaseController;
use App\Exception\DepartementNotFoundException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController.
 */
#[Route(path: '/application/personnel/previsionnel')]
#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_PERMANENT')]
class PrevisionnelController extends BaseController
{
    #[Route(path: '/', name: 'previsionnel_index')]
    public function index(PrevisionnelManager $myPrevisionnel, PrevisionnelSynthese $previsionnelSynthese, HrsManager $hrsManager): Response
    {
        $anneePrevisionnel = $this->dataUserSession->getAnneePrevisionnel();
        $personnel = $this->getUser();
        $departement = $this->getDepartement();
        $previsionnels = $myPrevisionnel->getPrevisionnelPersonnelDepartementAnneeArray($personnel, $departement,
            $anneePrevisionnel);
        $hrs = $hrsManager->getHrsPersonnelDepartementAnnee($personnel, $departement, $anneePrevisionnel);
        $synthsePrevisionnel = $previsionnelSynthese->getSynthese($previsionnels, $personnel)
            ->getHrsEnseignant($hrs);

        return $this->render('appPersonnel/previsionnel/index.html.twig', [
            'previsionnels' => $previsionnels,
            'synthsePrevisionnel' => $synthsePrevisionnel,
            'anneePrevisionnel' => $anneePrevisionnel,
            'semestres' => $this->dataUserSession->getSemestres(),
            'hrs' => $hrs,
            'personnel' => $personnel,
        ]);
    }

    /**
     * @throws \App\Exception\DepartementNotFoundException
     */
    #[Route(path: '/chronologique', name: 'previsionnel_chronologique')]
    public function chronologique(TypeMatiereManager $typeMatiereManager, ServiceRealiseIntranet $serviceRealiseIntranet, ServiceRealiseCelcat $serviceRealiseCelcat): Response
    {
        if (null === $this->getDepartement()) {
            throw new DepartementNotFoundException();
        }
        $matieres = $typeMatiereManager->findByDepartementArray($this->getDepartement());
        if (true === $this->getDepartement()->getOptUpdateCelcat()) {
            $chronologique = $serviceRealiseCelcat;
        } else {
            $chronologique = $serviceRealiseIntranet;
        }

        return $this->render('appPersonnel/previsionnel/chronologique.html.twig', [
            'chronologique' => $chronologique->getServiceRealiserParEnseignant($this->getUser(), $this->getAnneeUniversitaire()),
            'matieres' => $matieres,
        ]);
    }

    #[Route(path: '/export.{_format}', name: 'application_personnel_previsionnel_export', methods: 'GET')]
    public function export(): Response
    {
        // save en csv
        return new Response('', Response::HTTP_OK);
    }
}
