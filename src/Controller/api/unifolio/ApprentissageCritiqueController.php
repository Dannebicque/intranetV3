<?php

namespace App\Controller\api\unifolio;

use App\Controller\BaseController;
use App\Repository\ApcApprentissageCritiqueRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApprentissageCritiqueController extends BaseController
{
    #[Route(path: '/api/unifolio/apprentissage_critique', name: 'api_apprentissage_critique_liste')]
    public function listeApprentissageCritique(
        Request $request,
        ApcApprentissageCritiqueRepository $apprentissageCritiqueRepository
    )
    {
        $this->checkAccessApi($request);

        $apprentissageCritiques = $apprentissageCritiqueRepository->findAll();

        $tabApcApprentissageCritique = [];

        foreach ($apprentissageCritiques as $apprentissageCritique) {
            $tabApcApprentissageCritique[$apprentissageCritique->getId()] = [
                'id' => $apprentissageCritique->getId(),
                'libelle' => $apprentissageCritique->getLibelle(),
                'code' => $apprentissageCritique->getCode(),
                'niveau' => $apprentissageCritique->getNiveau()->getLibelle(),
            ];
        }
        return $this->json($tabApcApprentissageCritique);
    }

}