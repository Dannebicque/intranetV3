<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/CarnetController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/27/19 4:36 PM
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
 * Class CarnetController
 * @package App\Controller
 * @Route("/application/etudiant/carnet")
 * @IsGranted("ROLE_ETUDIANT")
 */
class CarnetController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_carnet_index")
     * @param CahierTexteRepository $cahierTexteRepository
     * @param MatiereRepository     $matiereRepository
     *
     * @return Response
     */
    public function index(CahierTexteRepository $cahierTexteRepository, MatiereRepository $matiereRepository): Response
    {
        return $this->render('appEtudiant/carnet/index.html.twig', [
            'carnets'    => $cahierTexteRepository->findBySemestre($this->getConnectedUser()->getSemestre()),
            'personnels' => $this->dataUserSession->getPersonnels(),
            'matieres'   => $matiereRepository->findBySemestre($this->getConnectedUser()->getSemestre())
        ]);
    }

    /**
     * @Route("/{id}", name="application_etudiant_carnet_show")
     * @param CahierTexte $carnet
     *
     * @return Response
     */
    public function show(CahierTexte $carnet): Response
    {
        return $this->render('appEtudiant/carnet/show.html.twig', [
            'carnet' => $carnet
        ]);
    }
}
