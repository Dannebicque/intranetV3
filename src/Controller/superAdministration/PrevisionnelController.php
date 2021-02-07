<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\superAdministration;

use App\Classes\MyPrevisionnel;
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
     *
     * @param int $annee
     */
    public function index(PersonnelRepository $personnelRepository, $annee = 0): Response
    {
        if (0 === $annee) {
            if (date('m') >= 7 && (int)date('m') <= 12) {
                $annee = (int)date('Y');
            } else {
                $annee = date('Y') - 1;
            }
        }

        return $this->render('super-administration/previsionnel/index.html.twig', [
            'annee'      => $annee,
            'personnels' => $personnelRepository->findAll(),
        ]);
    }

    /**
     * @Route("/previsionnel/{personnel}/{annee}", name="sa_previsionnel_personnel", options={"expose":true})
     *
     * @param int $annee
     */
    public function personnel(MyPrevisionnel $myPrevisionnel, Personnel $personnel, $annee = 0): Response
    {
        if (0 === $annee && null !== $this->dataUserSession->getDepartement()) {
            $annee = $this->dataUserSession->getDepartement()->getOptAnneePrevisionnel();
        }

        $myPrevisionnel->setPersonnel($personnel);
        $myPrevisionnel->getPrevisionnelEnseignantByDepartement($annee);
        $myPrevisionnel->getHrsEnseignant($annee);

        return $this->render('super-administration/previsionnel/personnel.html.twig', [
            'previsionnel' => $myPrevisionnel,
            'annee'        => $annee,
        ]);
    }
}
