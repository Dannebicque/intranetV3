<?php

namespace App\Controller;

use App\Repository\EtudiantRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RechercheController
 * @package App\Controller
 */
class RechercheController extends BaseController
{
    /**
     * @Route("/recherche/{keyword}", name="recherche", options={"expose":true})
     */
    public function index(EtudiantRepository $etudiantRepository, PersonnelRepository $personnelRepository, $keyword)
    {
        $t['etudiants'] = $etudiantRepository->search($keyword);
        $t['personnels'] = $personnelRepository->search($keyword);
        $t['autres'] = array();

        return $this->json($t);
    }
}
