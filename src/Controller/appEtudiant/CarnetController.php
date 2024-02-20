<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/CarnetController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\appEtudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\CahierTexte;
use App\Repository\CahierTexteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class CarnetController.
 */
#[Route(path: '/application/etudiant/carnet')]
#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_ETUDIANT')]
class CarnetController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_carnet_index')]
    public function index(CahierTexteRepository $cahierTexteRepository, TypeMatiereManager $typeMatiereManager): Response
    {
        return $this->render('appEtudiant/carnet/index.html.twig', [
            'carnets' => $cahierTexteRepository->findBySemestre($this->getUser()->getSemestre()),
            'personnels' => $this->dataUserSession->getPersonnels(),
            'matieres' => $typeMatiereManager->findBySemestre($this->getUser()->getSemestre()),
        ]);
    }

    #[Route(path: '/{id}', name: 'application_etudiant_carnet_show')]
    public function show(CahierTexte $carnet): Response
    {
        return $this->render('appEtudiant/carnet/show.html.twig', [
            'carnet' => $carnet,
        ]);
    }
}
