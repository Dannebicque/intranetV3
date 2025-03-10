<?php
/*
 * Copyright (c) 2025. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/EdtApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 10/03/2025 10:30
 */

namespace App\Controller\api;

use App\Classes\Matieres\TypeMatiereManager;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DepartementRepository;
use App\Repository\EdtPlanningRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class EdtApiController extends AbstractController
{
    #[Route(path: '/api/export-chronologique/{annee}/{departement}', name: 'administration_edt_api_chronologique', options: ['expose' => true])]
    public function apiChronologique(
        TypeMatiereManager           $typeMatiereManager,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        DepartementRepository        $departementRepository,
        EdtPlanningRepository        $edtPlanningRepository,
        mixed                        $annee,
        mixed                        $departement
    ): Response
    {
        $annee = $anneeUniversitaireRepository->findOneBy(['annee' => $annee]);
        $departement = $departementRepository->findOneBy(['libelle' => $departement]);
        if (null === $annee || null === $departement) {
            return $this->json([]);
        }

        $edts = $edtPlanningRepository->findByDepartementAndAnneeUniversitaire($departement, $annee);
        $listeMatieres = $typeMatiereManager->findByDepartementArray($departement);

        $tabEdts = [];

        foreach ($edts as $edt) {
            $tabEdts[] = [
                'heureDebut' => $edt->getHeureDebut()?->format('H:i'),
                'heureFin' => $edt->getHeureFin()?->format('H:i'),
                'date' => $edt->getDate()->format('d/m/Y'),
                'jour' => $edt->getJour(),
                'salle' => $edt->getSalle(),
                'matiere' => $listeMatieres[$edt->getTypeIdMatiere()] ? $listeMatieres[$edt->getTypeIdMatiere()]->display : '',
                'personnel' => $edt->getIntervenant()?->getDisplay() ?? '',
                'groupe' => $edt->getDisplayGroupe(),
            ];
        }

        return $this->json($tabEdts);
    }
}
