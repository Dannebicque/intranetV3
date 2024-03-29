<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/unifolio/EnseignantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\DepartementRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

class EnseignantController extends BaseController
{
    #[Route(path: '/api/unifolio/enseignant', name: 'api_enseignant_liste')]
    public function listeEnseignant(
        Request               $request,
        PersonnelRepository   $personnelRepository,
        DepartementRepository $departementRepository
    ): JsonResponse
    {
        $this->checkAccessApi($request);

        $username = $request->query->get('username');

        $enseignant = $personnelRepository->findOneBy(['username' => $username]);

        $tabEnseignant = [];

    if($enseignant) {

        $departements = [];
        foreach ($departementRepository->findDepartementPersonnel($enseignant) as $departement) {
            $departements[] = [
                'id' => $departement->getId(),
                'libelle' => $departement->getLibelle(),
            ];
        }

        $tabEnseignant[$enseignant->getId()] = [
            'id' => $enseignant->getId(),
            'nom' => $enseignant->getNom(),
            'prenom' => $enseignant->getPrenom(),
            'username' => $enseignant->getUsername(),
            'mail_perso' => $enseignant->getMailPerso(),
            'mail_univ' => $enseignant->getMailUniv(),
            'telephone' => $enseignant->getTel1(),
            'departements' => $departements,
        ];
    }
        return $this->json($tabEnseignant);
    }
}
