<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administratif/enquete/EnqueteController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administratif\enquete;

use App\Entity\Semestre;
use App\Repository\DiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/enquete")
 */
class EnqueteController extends AbstractController
{
    /**
     * @Route("/", name="administratif_enquete_index")
     * @param DiplomeRepository $diplomeRepository
     *
     * @return Response
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('administratif/enquete/index.html.twig', [
            'diplomes' => $diplomeRepository->findActifs()
        ]);
    }

    /**
     * @Route("/questionnaire/semestre/{semestre}", name="administratif_enquete_semestre")
     *
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function semestre(Semestre $semestre): Response
    {
        return $this->render('administratif/enquete/semestre.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @Route("/questionnaire/create/{semestre}", name="administratif_enquete_semestre_new")
     *
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function create(Semestre $semestre): Response
    {
        return $this->render('administratif/enquete/create.html.twig', [
            'semestre' => $semestre
        ]);
    }
}
