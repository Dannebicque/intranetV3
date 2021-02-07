<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtRealiseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration;

use App\Classes\MyEdtCompare;
use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use App\Repository\MatiereRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtRealiseController.
 *
 * @Route("/administration/emploi-du-temps/realise")
 */
class EdtRealiseController extends BaseController
{
    /** @var EdtPlanningRepository */
    protected $edtPlanningRepository;

    /** @var CalendrierRepository */
    protected $calendrierRepository;

    /**
     * EdtRealiseController constructor.
     */
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
    public function index(MatiereRepository $matiereRepository, PersonnelRepository $personnelRepository): Response
    {
        $personnels = $personnelRepository->findByDepartement($this->dataUserSession->getDepartement());

        return $this->render('administration/edtRealise/index.html.twig', [
            'personnels' => $personnels,
            'matieres'   => $matiereRepository->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @Route("/service-realise/{matiere}/{personnel}", name="administration_edt_service_realise_affiche",
     *                                                             options={"expose"=true}, methods={"POST","GET"})
     */
    public function serviceRealisePersonnelMatiere(
        MyEdtCompare $myEdtCompare,
        Matiere $matiere,
        Personnel $personnel
    ): Response {
        if ($matiere && $personnel) {
            $t = $myEdtCompare->realise($matiere, $personnel, $this->dataUserSession->getAnneePrevisionnel());

            return $this->render('administration/edtRealise/_detailPersonnelMatiere.html.twig', [
                'planning'   => $myEdtCompare->getPlanning(),
                'matiere'    => $matiere,
                'calendrier' => $this->calendrierRepository->findByAnneeUniversitaire($this->dataUserSession->getAnneeUniversitaire()),
                'personnel'  => $personnel,
                't'          => $t,
            ]);
        }

        return $this->redirect($this->generateUrl('erreur_666'));
    }

    /**
     * @return JsonResponse|RedirectResponse
     * @Route("/ajax/enseignant/modules", name="administration_edt_realise_ajax_modules", options={"expose"=true},
     *                                    methods={"POST"})
     */
    public function modulesEnseignantAction(
        SemestreRepository $semestreRepository,
        PersonnelRepository $personnelRepository,
        PrevisionnelRepository $previsionnelRepository,
        Request $request
    ) {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $personnel = $personnelRepository->find($request->request->get('personnel'));

        if (null !== $semestre && null !== $personnel) {
            $matieres = $previsionnelRepository->findServiceSemestre($personnel,
                $semestre, $this->dataUserSession->getAnneePrevisionnel());

            $array = [];
            $i = 1;

            /** @var Previsionnel $m */
            foreach ($matieres as $m) {
                if (null !== $m->getMatiere()) {
                    $array['matiere' . $i]['id'] = $m->getMatiere()->getId();
                    $array['matiere' . $i]['nom'] = $m->getMatiere()->getCodeMatiere() . ' | ' . $m->getMatiere()->getLibelle();
                    $array['matiere' . $i]['ue'] = null !== $m->getMatiere()->getUe() ? $m->getMatiere()->getUe()->getNumeroUe() : 0;
                    ++$i;
                }
            }

            $response = new JsonResponse();
            $response->setData($array);

            return $response;
        }

        return $this->redirect($this->generateUrl('erreur_666'));
    }
}
