<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/StageOffreController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller;

use App\Repository\StagePeriodeOffreRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class StageOffreController.
 */
#[Route(path: '/application/stage/offres')]
class StageOffreController extends BaseController
{
    #[Route(path: '/', name: 'stage_offre_stage_index')]
    public function index(StagePeriodeOffreRepository $stagePeriodeOffreRepository): Response
    {
        return $this->render('stage_offre/index.html.twig', [
            'offres' => $stagePeriodeOffreRepository->findOffreDepartement($this->dataUserSession->getDepartement()),
        ]);
    }
}
