<?php

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AbsenceApiController
 * @package App\Controller
 * @Route("/api/absence")
 */
class AbsenceApiController extends BaseController
{
    /**
     * @Route("/liste/etudiant/{typegroupe}", name="api_absence_liste_etudiant", requirements={"typegroupe"="\d+"},
     *                                        options={"expose":true})
     *
     * @return Response
     */
    public function listeEtudiant(TypeGroupe $typegroupe): Response
    {
        return $this->render('api/absence/listeEtudiant.html.twig', [
            'selectedTypeGroupe' => $typegroupe
        ]);

    }
}
