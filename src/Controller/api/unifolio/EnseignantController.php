<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class EnseignantController extends BaseController
{
    #[Route(path: '/api/unifolio/enseignant', name: 'api_enseignant_liste')]
    public function listeEnseignant(
        Request $request,
        PersonnelRepository $personnelRepository
    )
    {
        $this->checkAccessApi($request);

        $enseignants = $personnelRepository->findAll();

        $tabEnseignant = [];

        foreach ($enseignants as $enseignant) {
            $tabEnseignant[$enseignant->getId()] = [
                'id' => $enseignant->getId(),
                'nom' => $enseignant->getNom(),
                'prenom' => $enseignant->getPrenom(),
                'mail_perso' => $enseignant->getMailPerso(),
                'mail_univ' => $enseignant->getMailUniv(),
                'telephone' => $enseignant->getTel1(),
            ];
        }

        return $this->json($tabEnseignant);
    }
}