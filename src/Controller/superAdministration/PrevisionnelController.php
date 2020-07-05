<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/PrevisionnelController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:33

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Classes\MyPrevisionnel;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class PrevisionnelController
 * @package App\Controller\superAdministration
 * @Route("/administratif")
 */
class PrevisionnelController extends BaseController
{
    /**
     * @Route("/previsionnel/{annee}", name="sa_previsionnel_index")
     * @param PersonnelRepository $personnelRepository
     * @param int                 $annee
     *
     * @return Response
     */
    public function index(PersonnelRepository $personnelRepository, $annee = 0): Response
    {
        if ($annee === 0) {
            if (date('m') >= 7 && (int)date('m') <= 12) {
                $annee = (int)date('Y');
            } else {
                $annee = date('Y') - 1;
            }
        }

        return $this->render('super-administration/previsionnel/index.html.twig', [
            'annee'      => $annee,
            'personnels' => $personnelRepository->findAll()
        ]);
    }

    /**
     * @Route("/previsionnel/{personnel}/{annee}", name="sa_previsionnel_personnel", options={"expose":true})
     * @param MyPrevisionnel $myPrevisionnel
     * @param Personnel      $personnel
     *
     * @param int            $annee
     *
     * @return Response
     */
    public function personnel(MyPrevisionnel $myPrevisionnel, Personnel $personnel, $annee = 0): Response
    {
        if ($annee === 0 && $this->dataUserSession->getDepartement() !== null) {
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
