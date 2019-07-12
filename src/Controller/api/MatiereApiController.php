<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/api/MatiereApiController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Entity\Parcour;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Entity\Ue;
use App\Repository\MatiereRepository;
use App\Repository\ParcourRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\SemestreRepository;
use App\Repository\UeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MatiereApiController
 * @package App\Controller
 * @Route("/api/matiere")
 */
class MatiereApiController extends BaseController
{
    /** @var MatiereRepository */
    protected $matiereRepository;

    /**
     * MatiereApiController constructor.
     *
     * @param MatiereRepository $matiereRepository
     */
    public function __construct(MatiereRepository $matiereRepository)
    {
        $this->matiereRepository = $matiereRepository;
    }

    /**
     * @Route("/semestre/{semestre}", name="api_matieres_semestre", options={"expose":true})
     * @param Semestre $semestre
     *
     * @return JsonResponse
     */
    public function matieresSemestreAjax(Semestre $semestre): JsonResponse
    {
        $matieres = $this->matiereRepository->findBySemestre($semestre);

        $tmatieres = [];
        /** @var Matiere $m */
        foreach ($matieres as $m) {
            $t = [];
            $t['id'] = $m->getId();
            $t['libelle'] = $m->getLibelle();
            $t['display'] = $m->getDisplay();
            $tmatieres[] = $t;
        }

        return new JsonResponse($tmatieres);
    }

    /**
     * @Route("/{matiere}", name="api_matiere", options={"expose":true})
     * @param Matiere $matiere
     *
     * @return JsonResponse
     */
    public function matiereAjax(Matiere $matiere): JsonResponse
    {
        //$serializer = new Serializer([new GetSetMethodNormalizer()]);
        //dump($serializer->normalize($matiere));
        //return new Response($serializer->serialize($matiere, 'json'));

        //todo: sérializer
        $t = [];
        $t['id'] = $matiere->getId();
        $t['libelle'] = $matiere->getLibelle();
        $t['display'] = $matiere->getUe() ? $matiere->getUe()->getLibelle() : '-';
        $t['cmFormation'] = $matiere->getCmFormation();
        $t['tdFormation'] = $matiere->getTdFormation();
        $t['tpFormation'] = $matiere->getTpFormation();
        $t['cmPpn'] = $matiere->getCmPpn();
        $t['tdPpn'] = $matiere->getTdPpn();
        $t['tpPpn'] = $matiere->getTpPpn();

        return new JsonResponse($t);
    }

    /**
     * @Route("/document/export/{matiere}", name="api_export_document_matiere", options={"expose":true})
     * @param Matiere $matiere
     *
     * @return Response
     */
    public function exportDocument(Matiere $matiere): Response
    {
        return $this->render('api/matiere/document/export.html.twig', [
            'matiere'     => $matiere,
            'typeGroupes' => $matiere->getUe()->getSemestre()->getTypeGroupes()
        ]);
    }

    /**
     * Returns a JSON string with the neighborhoods of the City with the providen id.
     * @Route("/ues/listbysemestre", name="api_liste_ue_by_semestre", options={"expose":true})
     *
     * @param Request            $request
     * @param UeRepository       $ueRepository
     * @param SemestreRepository $semestreRepository
     *
     * @return JsonResponse
     */
    public function listUesOfSemestre(
        Request $request,
        UeRepository $ueRepository,
        SemestreRepository $semestreRepository
    ): JsonResponse {
        $semestre = $semestreRepository->find($request->request->get('semestreid'));
        if ($semestre !== null) {
            // Search the neighborhoods that belongs to the city with the given id as GET parameter "cityid"
            $ues = $ueRepository->findBySemestre($semestre);

            // Serialize into an array the data that we need, in this case only name and id
            // Note: you can use a serializer as well, for explanation purposes, we'll do it manually
            $responseArray = [];

            /** @var Ue $ue */
            foreach ($ues as $ue) {
                $responseArray[] = [
                    'id'       => $ue->getId(),
                    'libelle'  => $ue->getLibelle(),
                    'numeroUe' => $ue->getNumeroUe()
                ];
            }

            // Return array with structure of the neighborhoods of the providen city id
            return new JsonResponse($responseArray);
        }

        return new JsonResponse(false);
    }

    /**
     * Returns a JSON string with the neighborhoods of the City with the providen id.
     * @Route("/parcours/listbysemestre", name="api_liste_parcour_by_semestre", options={"expose":true})
     *
     * @param Request            $request
     * @param ParcourRepository  $parcourRepository
     * @param SemestreRepository $semestreRepository
     *
     * @return JsonResponse
     */
    public function listParcoursOfSemestre(
        Request $request,
        ParcourRepository $parcourRepository,
        SemestreRepository $semestreRepository
    ): JsonResponse {
        $semestre = $semestreRepository->find($request->request->get('semestreid'));
        if ($semestre !== null) {
            // Search the neighborhoods that belongs to the city with the given id as GET parameter "cityid"
            $parcours = $parcourRepository->findBySemestre($semestre);

            // Serialize into an array the data that we need, in this case only name and id
            // Note: you can use a serializer as well, for explanation purposes, we'll do it manually
            $responseArray = [];

            /** @var Parcour $parcour */
            foreach ($parcours as $parcour) {
                $responseArray[] = [
                    'id'      => $parcour->getId(),
                    'libelle' => $parcour->getLibelle()
                ];
            }

            // Return array with structure of the neighborhoods of the providen city id
            return new JsonResponse($responseArray);
        }

        return new JsonResponse(false);
    }

    /**
     * @param Semestre  $semestre
     * @param Personnel $personnel
     * @Route("/matiere/semestre/personnel/{semestre}/{personnel}", name="api_matieres_semestre_personnel",
     *                                                              options={"expose":true})
     */
    public function matiereSemestrePersonnel(
        PrevisionnelRepository $previsionnelRepository,
        Semestre $semestre,
        Personnel $personnel
    ) {

        if ($semestre !== null && $personnel !== null) {
            $matieres = $previsionnelRepository->findPrevisionnelSemestrePersonnel($semestre, $personnel,
                $this->dataUserSession->getAnneePrevisionnel());

            $array = [];
            $i = 1;

            /** @var Previsionnel $m */
            foreach ($matieres as $m) {
                if ($m->getMatiere() !== null) {
                    $array['matiere' . $i]['id'] = $m->getMatiere()->getId();
                    $array['matiere' . $i]['libelle'] = $m->getMatiere()->getDisplay();
                    $array['matiere' . $i]['ue'] = $m->getMatiere()->getUE()->getNumeroUe();
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
