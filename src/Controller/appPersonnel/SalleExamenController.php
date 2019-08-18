<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appPersonnel/SalleExamenController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 18/08/2019 11:48
 * @lastUpdate 16/08/2019 07:44
 */

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\MesClasses\MySalleExamen;
use App\Repository\PersonnelRepository;
use App\Repository\SalleExamenRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route("/application/personnel/salle-examen")
 * @IsGranted("ROLE_PERMANENT")
 */
class SalleExamenController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_salle_examen_index")
     * @param SalleExamenRepository $salleExamenRepository
     * @param PersonnelRepository   $personnelRepository
     *
     * @return Response
     */
    public function index(
        SalleExamenRepository $salleExamenRepository,
        PersonnelRepository $personnelRepository
    ): Response {
        return $this->render('appPersonnel/salle_examen/index.html.twig', [
            'salles'     => $salleExamenRepository->findByDepartement($this->dataUserSession->getDepartement()),
            'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement())
        ]);
    }

    /**
     * @param MySalleExamen $mySalleExamen
     * @param Request       $request
     *
     *
     * @return void
     * @Route("/application/salle-examen/genere/document",
     *     name="application_personnel_salle_examen_genere_placement",
     *     methods={"POST"})
     */
    public function generePlacement(MySalleExamen $mySalleExamen, Request $request): void
    {
        $mySalleExamen->genereDocument(
            $request->request->get('dateeval'),
            $request->request->get('salle'),
            $request->request->get('selectmatiere'),
            $request->request->get('selectgroupes'),
            $request->request->get('detail_groupes'),
            $request->request->get('enseignant1'),
            $request->request->get('enseignant2'),
            $this->dataUserSession->getDepartement()
        );
    }
}
