<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2021 15:24
 */

namespace App\Controller\appPersonnel;

use App\Classes\Hrs\HrsManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Classes\ServiceRealise\ServiceRealiseCelcat;
use App\Classes\ServiceRealise\ServiceRealiseIntranet;
use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController.
 *
 * @IsGranted("ROLE_PERMANENT")
 * @Route("/application/personnel/previsionnel")
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/", name="previsionnel_index")
     */
    public function index(
        PrevisionnelManager $myPrevisionnel,
        PrevisionnelSynthese $previsionnelSynthese,
        HrsManager $hrsManager
    ): Response {
        $anneePrevisionnel = $this->dataUserSession->getAnneePrevisionnel();
        $personnel = $this->getConnectedUser();
        $departement = $this->getDepartement();
        $previsionnels = $myPrevisionnel->getPrevisionnelPersonnelDepartementAnnee($personnel, $departement,
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
     * @Route("/chronologique", name="previsionnel_chronologique")
     */
    public function chronologique(
        TypeMatiereManager $typeMatiereManager,
        ServiceRealiseIntranet $serviceRealiseIntranet,
        ServiceRealiseCelcat $serviceRealiseCelcat
    ): Response {
        if (null !== $this->getDepartement()) {
            $matieres = $typeMatiereManager->findByDepartementArray($this->getDepartement());
            if (true === $this->getDepartement()->getOptUpdateCelcat()) {
                $chronologique = $serviceRealiseCelcat;
            } else {
                $chronologique = $serviceRealiseIntranet;
            }

            return $this->render('appPersonnel/previsionnel/chronologique.html.twig', [
                'chronologique' => $chronologique->getServiceRealiserParEnseignant($this->getConnectedUser()),
                'matieres' => $matieres,
            ]);
        }
    }

    /**
     * @Route("/export.{_format}", name="application_personnel_previsionnel_export", methods="GET")
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }
}
