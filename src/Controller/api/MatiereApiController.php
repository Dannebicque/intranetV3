<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/MatiereApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\api;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\Parcour;
use App\Entity\Semestre;
use App\Repository\ParcourRepository;
use App\Repository\SemestreRepository;
use App\Repository\UeRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class MatiereApiController.
 */
#[Route(path: '/api/matiere')]
class MatiereApiController extends BaseController
{
    /**
     * MatiereApiController constructor.
     */
    public function __construct(protected TypeMatiereManager $typeMatiereManager)
    {
    }

    #[Route(path: '/semestre/{semestre}', name: 'api_matieres_semestre', options: ['expose' => true])]
    public function matieresSemestreAjax(Semestre $semestre): JsonResponse
    {
        if ($semestre->getDiplome()->isApc()) {
            $matieres = $this->typeMatiereManager->findBySemestreAndReferentiel($semestre, $semestre->getDiplome()->getReferentiel());
        } else {
            $matieres = $this->typeMatiereManager->findBySemestre($semestre);
        }

        $tmatieres = [];
        foreach ($matieres as $m) {
            $t = [];
            $t['id'] = $m->id;
            $t['typeMatiere'] = $m->typeMatiere;
            $t['libelle'] = $m->libelle;
            $t['display'] = $m->display;
            $tmatieres[] = $t;
        }

        return new JsonResponse($tmatieres);
    }

    #[Route(path: '/{matiere}', name: 'api_matiere', options: ['expose' => true])]
    public function matiereAjax(string $matiere): JsonResponse
    {
        $mat = $this->typeMatiereManager->getMatiereFromSelect($matiere);

        return new JsonResponse($mat ? $mat->getJson() : false);
    }

    #[Route(path: '/document/export/personnalise/{semestre}', name: 'api_export_document_personnalise', options: ['expose' => true])]
    public function exportDocumentPersonnalise(
        Semestre $semestre): Response
    {
        $typeGroupes = $semestre->getTypeGroupess();

        return $this->render('api/matiere/document/export.html.twig', [
            'typeGroupes' => $typeGroupes,
        ]);
    }

    #[Route(path: '/document/export/{matiere}/{typeMatiere}/{semestre}', name: 'api_export_document_matiere', options: ['expose' => true])]
    public function exportDocument(int $matiere, string $typeMatiere, Semestre $semestre): Response
    {
        //todo: fusionne ? TypeGroupe pas nécessaire si table avec semestres
        $mat = $this->typeMatiereManager->getMatiere($matiere, $typeMatiere);

        $typeGroupes = $semestre->getTypeGroupess();

        return $this->render('api/matiere/document/export.html.twig', [
            'matiere' => $mat,
            'typeGroupes' => $typeGroupes,
        ]);
    }

    /**
     * Returns a JSON string with the neighborhoods of the City with the providen id.
     */
    #[Route(path: '/ues/listbysemestre', name: 'api_liste_ue_by_semestre', options: ['expose' => true])]
    public function listUesOfSemestre(Request $request, UeRepository $ueRepository, SemestreRepository $semestreRepository): JsonResponse
    {
        $semestre = $semestreRepository->find($request->request->get('semestreid'));
        if (null !== $semestre) {
            // Search the neighborhoods that belongs to the city with the given id as GET parameter "cityid"
            $ues = $ueRepository->findBySemestre($semestre);

            // Serialize into an array the data that we need, in this case only name and id
            // Note: you can use a serializer as well, for explanation purposes, we'll do it manually
            $responseArray = [];

            foreach ($ues as $ue) {
                $responseArray[] = [
                    'id' => $ue->getId(),
                    'libelle' => $ue->getLibelle(),
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
     */
    #[Route(path: '/parcours/listbysemestre', name: 'api_liste_parcour_by_semestre', options: ['expose' => true])]
    public function listParcoursOfSemestre(Request $request, ParcourRepository $parcourRepository, SemestreRepository $semestreRepository): JsonResponse
    {
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
                    'id' => $parcour->getId(),
                    'libelle' => $parcour->getLibelle(),
                ];
            }

            // Return array with structure of the neighborhoods of the providen city id
            return new JsonResponse($responseArray);
        }

        return new JsonResponse(false);
    }
}
