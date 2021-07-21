<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 09:03
 */

namespace App\Controller\superAdministration;

use App\Classes\Hrs\HrsManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController.
 *
 * @Route("/administratif")
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/previsionnel/{annee}", name="sa_previsionnel_index")
     */
    public function index(PersonnelRepository $personnelRepository, int $annee = 0): Response
    {
        if (0 === $annee) {
            if (date('m') >= 7 && (int)date('m') <= 12) {
                $annee = (int)date('Y');
            } else {
                $annee = date('Y') - 1;
            }
        }

        return $this->render('super-administration/previsionnel/index.html.twig', [
            'annee' => $annee,
            'personnels' => $personnelRepository->findAll(),
        ]);
    }

    /**
     * @Route("/previsionnel/{personnel}/{annee}", name="sa_previsionnel_personnel", options={"expose":true})
     */
    public function personnel(
        PrevisionnelManager $previsionnelManager,
        PrevisionnelSynthese $previsionnelSynthese,
        HrsManager $hrsManager,
        Personnel $personnel,
        int $annee = 0
    ): Response
    {
        if (0 === $annee && null !== $this->dataUserSession->getDepartement()) {
            $annee = $this->dataUserSession->getDepartement()->getOptAnneePrevisionnel();
        }

        $previsionnels = $previsionnelManager->getPrevisionnelEnseignantAnnee($personnel, $annee);
        $hrs = $hrsManager->getPersonnelAnnee($personnel, $annee);
        $synthse = $previsionnelSynthese->getSynthese($previsionnels, $personnel)
            ->getHrsEnseignant($hrs);

        return $this->render('super-administration/previsionnel/personnel.html.twig', [
            'previsionnels' => $previsionnels,
            'hrs' => $hrs,
            'annee' => $annee,
            'personnel' => $personnel,
            'synthse' => $synthse,
        ]);
    }
}
