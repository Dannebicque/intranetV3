<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/RechercheController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller;

use App\Repository\DocumentRepository;
use App\Repository\EtudiantRepository;
use App\Repository\PersonnelDepartementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class RechercheController.
 */
#[Route(path: '/recherche')]
class RechercheController extends BaseController
{
    #[Route(path: '/', name: 'recherche', options: ['expose' => true], methods: ['GET'])]
    public function index(
        Request $request,
        EtudiantRepository $etudiantRepository,
        DocumentRepository $documentRepository,
        PersonnelDepartementRepository $personnelRepository): Response
    {
        $keyword = $request->query->get('q');
        $etudiants = $etudiantRepository->search($keyword, $this->getDepartement());
        $personnels = $personnelRepository->search($keyword, $this->getDepartement());
        $documents = $documentRepository->search($keyword, $this->getDepartement());

        return $this->render('recherche/_reponses.html.twig', [
            'etudiants' => $etudiants,
            'personnels' => $personnels,
            'documents' => $documents,
            'q' => $keyword,
        ]);
    }
}
