<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/StageOffreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:38
 */

namespace App\Controller;

use App\Repository\StagePeriodeOffreRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageOffreController.
 *
 * @Route("/application/stage/offres")
 */
class StageOffreController extends BaseController
{
    /**
     * @Route("/", name="stage_offre_stage_index")
     */
    public function index(StagePeriodeOffreRepository $stagePeriodeOffreRepository): Response
    {
        return $this->render('stage_offre/index.html.twig', [
            'offres' => $stagePeriodeOffreRepository->findOffreDepartement($this->dataUserSession->getDepartement()),
        ]);
    }
}
