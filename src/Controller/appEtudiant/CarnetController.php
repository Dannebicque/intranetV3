<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/CarnetController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\CahierTexte;
use App\Repository\CahierTexteRepository;
use App\Repository\MatiereRepository;
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
    public function index(CahierTexteRepository $cahierTexteRepository, MatiereRepository $matiereRepository): Response
    {
        return $this->render('appEtudiant/carnet/index.html.twig', [
            'carnets'    => $cahierTexteRepository->findBySemestre($this->getConnectedUser()->getSemestre()),
            'personnels' => $this->dataUserSession->getPersonnels(),
            'matieres'   => $matiereRepository->findBySemestre($this->getConnectedUser()->getSemestre()),
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
