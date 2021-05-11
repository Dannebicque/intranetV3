<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/CarnetController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Controller\appEtudiant;

use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Entity\CahierTexte;
use App\Repository\CahierTexteRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CarnetController.
 *
 * @Route("/application/etudiant/carnet")
 * @IsGranted("ROLE_ETUDIANT")
 */
class CarnetController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_carnet_index")
     */
    public function index(
        CahierTexteRepository $cahierTexteRepository,
        TypeMatiereManager $typeMatiereManager
    ): Response {
        return $this->render('appEtudiant/carnet/index.html.twig', [
            'carnets' => $cahierTexteRepository->findBySemestre($this->getConnectedUser()->getSemestre()),
            'personnels' => $this->dataUserSession->getPersonnels(),
            'matieres' => $typeMatiereManager->findBySemestre($this->getConnectedUser()->getSemestre()),
        ]);
    }

    /**
     * @Route("/{id}", name="application_etudiant_carnet_show")
     */
    public function show(CahierTexte $carnet): Response
    {
        return $this->render('appEtudiant/carnet/show.html.twig', [
            'carnet' => $carnet,
        ]);
    }
}
