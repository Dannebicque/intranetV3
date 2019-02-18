<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Entity\Previsionnel;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
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
    /**
     *
     * @param PersonnelRepository $personnelRepository
     * @param                     $source
     *
     * @return Response
     * @Route("/{source}", name="administration_edt_service_realise", methods={"GET"},
     *                     requirements={"source"="intranet|celcat"})
     */
    public function index(PersonnelRepository $personnelRepository, $source)
    {
        $personnels = $personnelRepository->findByFormation($this->dataUserSession->getFormation());

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
     * @return Response
     * @Route("/affiche/{source}", name="administration_edt_service_realise_affiche", methods={"POST"},
     *                             requirements={"source"="intranet|celcat"})
     */
    public function detailPersonnelMatiere(Request $request, $source)
    {
        $matiere = $this->getDoctrine()->getRepository('DAKernelBundle:Matieres')->find($request->request->get('matiere'));
        $personnel = $this->getDoctrine()->getRepository('DAKernelBundle:Personnels')->find($request->request->get('personnel'));

        if ($matiere && $personnel) {
            //todo: mettre dans un service MyEDT ?
            $m = $this->getDoctrine()->getRepository('DAKernelBundle:Planning')->findBy(array(
                'matiere'     => $matiere->getId(),
                'intervenant' => $personnel->getId()
            ),
                array(
                    'semaine' => 'ASC',
                    'jour'    => 'ASC',
                    'debut'   => 'ASC'
                ));

            $calendrier = $this->getDoctrine()->getRepository('DAKernelBundle:Calendrier')->findCalendrier();

            $p = $this->getDoctrine()->getRepository('DAKernelBundle:PersonnelMatiere')->findBy(array(
                'personnel' => $personnel->getId(),
                'matiere'   => $matiere->getId(),
                'annee'     => $connect->getFormation()->getAnneeprevi()
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
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     * @Route("/ajax/enseignant/modules", name="administration_edt_realise_ajax_modules", options={"expose"=true},
     *                                    methods={"POST"})
     */
    public function modulesEnseignantAction(Request $request)
    {
        $semestre = $this->getDoctrine()->getRepository('DAKernelBundle:Semestre')->find($request->request->get('semestre'));
        $personnel = $this->getDoctrine()->getRepository('DAKernelBundle:Personnels')->find($request->request->get('personnel'));

        if ($semestre !== null && $personnel !== null) {
            $matieres = $this->getDoctrine()->getRepository('DAKernelBundle:PersonnelMatiere')->findServiceSemestre($personnel->getId(),
                $semestre->getId(), $semestre->getAnnee()->getDiplome()->getFormation()->getAnneeprevi());

            $array = array();
            $i = 1;

            /** @var Previsionnel $m */
            foreach ($matieres as $m) {
                if ($m->getMatiere() !== null) {
                    $array['matiere' . $i]['id'] = $m->getMatiere()->getId();
                    $array['matiere' . $i]['nom'] = $m->getMatiere()->getCodeMatiere() . ' | ' . $m->getMatiere()->getLibelle();
                    $array['matiere' . $i]['ue'] = $m->getMatiere()->getUE()->getNumeroue();
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
