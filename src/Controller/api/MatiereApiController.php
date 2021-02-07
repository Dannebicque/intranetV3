<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/MatiereApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Entity\Parcour;
use App\Entity\Personnel;
use App\Entity\Previsionnel;
use App\Entity\Semestre;
use App\Repository\MatiereRepository;
use App\Repository\ParcourRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\SemestreRepository;
use App\Repository\UeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MatiereApiController.
 *
 * @Route("/api/matiere")
 */
class MatiereApiController extends BaseController
{
    /** @var MatiereRepository */
    protected $matiereRepository;

    /**
     * MatiereApiController constructor.
     */
    public function __construct(MatiereRepository $matiereRepository)
    {
        $this->matiereRepository = $matiereRepository;
    }

    /**
     * @Route("/semestre/{semestre}", name="api_matieres_semestre", options={"expose":true})
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
     */
    public function matiereAjax(Matiere $matiere): JsonResponse
    {
        return new JsonResponse($matiere->getJson());
    }

    /**
     * @Route("/document/export/{matiere}", name="api_export_document_matiere", options={"expose":true})
     */
    public function exportDocument(Matiere $matiere): Response
    {
        return $this->render('api/matiere/document/export.html.twig', [
            'matiere'     => $matiere,
            'typeGroupes' => $matiere->getUe()->getSemestre()->getTypeGroupes(),
        ]);
    }

    /**
     * Returns a JSON string with the neighborhoods of the City with the providen id.
     *
     * @Route("/ues/listbysemestre", name="api_liste_ue_by_semestre", options={"expose":true})
     */
    public function listUesOfSemestre(
        Request $request,
        UeRepository $ueRepository,
        SemestreRepository $semestreRepository
    ): JsonResponse {
        $semestre = $semestreRepository->find($request->request->get('semestreid'));
        if (null !== $semestre) {
            // Search the neighborhoods that belongs to the city with the given id as GET parameter "cityid"
            $ues = $ueRepository->findBySemestre($semestre);

            // Serialize into an array the data that we need, in this case only name and id
            // Note: you can use a serializer as well, for explanation purposes, we'll do it manually
            $responseArray = [];

            foreach ($ues as $ue) {
                $responseArray[] = [
                    'id'       => $ue->getId(),
                    'libelle'  => $ue->getLibelle(),
                    'numeroUe' => $ue->getNumeroUe(),
                ];
            }

            // Return array with structure of the neighborhoods of the providen city id
            return new JsonResponse($responseArray);
        }

        return new JsonResponse(false);
    }

    /**
     * Returns a JSON string with the neighborhoods of the City with the providen id.
     *
     * @Route("/parcours/listbysemestre", name="api_liste_parcour_by_semestre", options={"expose":true})
     */
    public function listParcoursOfSemestre(
        Request $request,
        ParcourRepository $parcourRepository,
        SemestreRepository $semestreRepository
    ): JsonResponse {
        $semestre = $semestreRepository->find($request->request->get('semestreid'));
        if (null !== $semestre) {
            // Search the neighborhoods that belongs to the city with the given id as GET parameter "cityid"
            $parcours = $parcourRepository->findBySemestre($semestre);

            // Serialize into an array the data that we need, in this case only name and id
            // Note: you can use a serializer as well, for explanation purposes, we'll do it manually
            $responseArray = [];

            /** @var Parcour $parcour */
            foreach ($parcours as $parcour) {
                $responseArray[] = [
                    'id'      => $parcour->getId(),
                    'libelle' => $parcour->getLibelle(),
                ];
            }

            // Return array with structure of the neighborhoods of the providen city id
            return new JsonResponse($responseArray);
        }

        return new JsonResponse(false);
    }

    /**
     * @return JsonResponse|RedirectResponse
     * @Route("/matiere/semestre/personnel/{semestre}/{personnel}", name="api_matieres_semestre_personnel",
     *                                                              options={"expose":true})
     */
    public function matiereSemestrePersonnel(
        PrevisionnelRepository $previsionnelRepository,
        Semestre $semestre,
        Personnel $personnel
    ) {
        if (null !== $semestre && null !== $personnel) {
            $matieres = $previsionnelRepository->findPrevisionnelSemestrePersonnel($semestre, $personnel,
                $this->dataUserSession->getAnneePrevisionnel());

            $array = [];
            $i = 1;

            /** @var Previsionnel $m */
            foreach ($matieres as $m) {
                if (null !== $m->getMatiere()) {
                    $array['matiere' . $i]['id'] = $m->getMatiere()->getId();
                    $array['matiere' . $i]['libelle'] = $m->getMatiere()->getDisplay();
                    $array['matiere' . $i]['ue'] = $m->getMatiere()->getUE()->getNumeroUe();
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
