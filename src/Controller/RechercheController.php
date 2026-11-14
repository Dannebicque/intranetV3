<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/RechercheController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/11/2026 21:42
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
        $rawKeyword = (string)$request->query->get('q', '');
        $keyword = trim(strip_tags($rawKeyword));
        $keyword = mb_substr($keyword, 0, 100);

        if (mb_strlen($keyword) < 3) {
            return $this->render('recherche/_reponses.html.twig', [
                'etudiants' => [],
                'personnels' => [],
                'documents' => [],
                'q' => $keyword,
            ]);
        }

        $etudiants = $etudiantRepository->search($keyword, $this->getDepartement(), $this->getAnneeUniversitaire());
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
