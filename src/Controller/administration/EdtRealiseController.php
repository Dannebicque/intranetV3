<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtRealiseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 10:37
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyEdtCompare;
use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtRealiseController.
 *
 * @Route("/administration/emploi-du-temps/realise")
 */
class EdtRealiseController extends BaseController
{
    protected EdtPlanningRepository $edtPlanningRepository;

    protected CalendrierRepository $calendrierRepository;

    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CalendrierRepository $calendrierRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->calendrierRepository = $calendrierRepository;
    }

    /**
     * @Route("", name="administration_edt_service_realise", methods={"GET"})
     */
    public function index(TypeMatiereManager $typeMatiereManager, PersonnelRepository $personnelRepository): Response
    {
        $personnels = $personnelRepository->findByDepartement($this->dataUserSession->getDepartement());

        return $this->render('administration/edtRealise/index.html.twig', [
            'personnels' => $personnels,
            'matieres' => $typeMatiereManager->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @Route("/service-realise/{matiere}/{personnel}", name="administration_edt_service_realise_affiche",
     *                                                             options={"expose"=true}, methods={"POST","GET"})
     */
    public function serviceRealisePersonnelMatiere(
        MyEdtCompare $myEdtCompare,
        $matiere,
        Personnel $personnel
    ): Response {
        if ($matiere && $personnel) {
            $t = $myEdtCompare->realise($matiere, $personnel, $this->dataUserSession->getAnneePrevisionnel());

            return $this->render('administration/edtRealise/_detailPersonnelMatiere.html.twig', [
                'planning' => $myEdtCompare->getPlanning(),
                'matiere' => $matiere,
                'calendrier' => $this->calendrierRepository->findByAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire()),
                'personnel' => $personnel,
                't' => $t,
            ]);
        }

        return $this->redirect($this->generateUrl('erreur_666'));
    }
}
