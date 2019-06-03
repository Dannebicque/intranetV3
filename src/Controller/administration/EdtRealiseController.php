<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EdtRealiseController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:46 PM
 *  *
 *
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
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
 * Class EdtRealiseController
 * @package App\Controller\administration
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
     *
     * @param EdtPlanningRepository $edtPlanningRepository
     * @param CalendrierRepository  $calendrierRepository
     */
    public function __construct(
        EdtPlanningRepository $edtPlanningRepository,
        CalendrierRepository $calendrierRepository
    ) {
        $this->edtPlanningRepository = $edtPlanningRepository;
        $this->calendrierRepository = $calendrierRepository;
    }


    /**
     *
     * @param PersonnelRepository $personnelRepository
     * @param                     $source
     *
     * @return Response
     * @Route("/{source}", name="administration_edt_service_realise", methods={"GET"},
     *                     requirements={"source"="intranet|celcat"})
     */
    public function index(PersonnelRepository $personnelRepository, $source): Response
    {
        //todo: a refaire
        $personnels = $personnelRepository->findByDepartement($this->dataUserSession->getDepartement());

        return $this->render('administration/edtRealise/index.html.twig', array(
            'personnels' => $personnels,
            'semestres'   => $this->dataUserSession->getSemestres(),
            'source' => $source //Todo: utile ?
        ));
    }

    /**
     * @param Request $request
     *
     *
     * @param         $source
     *
     * @return Response
     * @Route("/affiche/{source}", name="administration_edt_service_realise_affiche", methods={"POST"},
     *                             requirements={"source"="intranet|celcat"})
     */
    public function detailPersonnelMatiere(MatiereRepository $matiereRepository,
        PersonnelRepository $personnelRepository,
        PrevisionnelRepository $previsionnelRepository,
        Request $request, $source): Response
    {
        $matiere = $matiereRepository->find($request->request->get('matiere'));
        $personnel = $personnelRepository->find($request->request->get('personnel'));

        if ($matiere && $personnel) {
            //todo: mettre dans un service MyEDT ?
            $m = $this->edtPlanningRepository->findBy(array(
                'matiere'     => $matiere->getId(),
                'intervenant' => $personnel->getId()
            ),
                array(
                    'semaine' => 'ASC',
                    'jour'    => 'ASC',
                    'debut'   => 'ASC'
                ));

            $calendrier = $this->calendrierRepository->findCalendrier();

            $p = $previsionnelRepository->findBy(array(
                'personnel' => $personnel->getId(),
                'matiere'   => $matiere->getId(),
                'annee'     => $this->dataUserSession->getDepartement()->getOptAnneePrevisionnel()
            ));

            $t = array();
            $t['cm']['previ'] = 0;
            $t['td']['previ'] = 0;
            $t['tp']['previ'] = 0;
            $t['cm']['real'] = 0;
            $t['td']['real'] = 0;
            $t['tp']['real'] = 0;

            foreach ($p as $pr) {
                $t['cm']['previ'] += $pr->getNbHCM();
                $t['td']['previ'] += $pr->getNbHTD() * $pr->getNbGrTD();
                $t['tp']['previ'] += $pr->getNbHTP() * $pr->getNbGrTP();
            }

            foreach ($m as $ma) {
                switch ($ma->getType()) {
                    case 'CM':
                    case 'cm':
                        $t['cm']['real'] += $ma->getDuree2();
                        break;
                    case 'TD':
                    case 'td':
                        $t['td']['real'] += $ma->getDuree2();
                        break;
                    case 'TP':
                    case 'tp':
                        $t['tp']['real'] += $ma->getDuree2();
                        break;
                }
            }


            return $this->render('administration/edtRealise/detailPersonnelMatiere.html.twig', array(
                'planning'   => $m,
                'matiere'    => $matiere,
                'calendrier' => $calendrier,
                'personnel'  => $personnel,
                't'          => $t
            ));
        }
        return $this->redirect($this->generateUrl('erreur_666'));
    }

    /**
     * @param Request $request
     *
     * @return JsonResponse|RedirectResponse
     * @Route("/ajax/enseignant/modules", name="administration_edt_realise_ajax_modules", options={"expose"=true},
     *                                    methods={"POST"})
     */
    public function modulesEnseignantAction(
        SemestreRepository $semestreRepository,
        PersonnelRepository $personnelRepository,
        PrevisionnelRepository $previsionnelRepository,
        Request $request)
    {
        $semestre = $semestreRepository->find($request->request->get('semestre'));
        $personnel = $personnelRepository->find($request->request->get('personnel'));

        if ($semestre !== null && $personnel !== null) {
            $matieres = $previsionnelRepository->findServiceSemestre($personnel->getId(),
                $semestre->getId(), $semestre->getAnnee()->getDiplome()->getDepartement()->getAnneeprevi());

            $array = array();
            $i = 1;

            /** @var Previsionnel $m */
            foreach ($matieres as $m) {
                if ($m->getMatiere() !== null) {
                    $array['matiere' . $i]['id'] = $m->getMatiere()->getId();
                    $array['matiere' . $i]['nom'] = $m->getMatiere()->getCodeMatiere() . ' | ' . $m->getMatiere()->getLibelle();
                    $array['matiere' . $i]['ue'] = $m->getMatiere()->getUe() !== null ? $m->getMatiere()->getUe()->getNumeroUe() : 0;
                    $i++;
                }
            }

            $response = new JsonResponse();
            $response->setData($array);

            return $response;
        }
        return $this->redirect($this->generateUrl('erreur_666'));
    }

}
