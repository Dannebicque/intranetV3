<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/PrevisionnelController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Personnel;
use App\MesClasses\MyPrevisionnel;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class PrevisionnelController
 * @package App\Controller\superAdministration
 * @Route("/super-administration")
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
