<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/AdministrationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller;

use App\Repository\ProjetPeriodeRepository;
use App\Repository\StagePeriodeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AdministrationController.
 *
 * @Route("/administration")
 */
class AdministrationController extends BaseController
{
    /**
     * @Route("/", name="administration_index")
     */
    public function index(
        StagePeriodeRepository $stagePeriodeRepository,
        ProjetPeriodeRepository $projetPeriodeRepository
    ): Response {
        $tperiodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $periodes = $stagePeriodeRepository->findByDiplome($diplome, $diplome->getAnneeUniversitaire());
            foreach ($periodes as $periode) {
                $tperiodes[] = $periode;
            }
        }

        $projetPeriodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $periodes = $projetPeriodeRepository->findByDiplome($diplome, $diplome->getAnneeUniversitaire());
            foreach ($periodes as $periode) {
                $projetPeriodes[] = $periode;
            }
        }

        return $this->render(
            'administration/index.html.twig',
            [
                'stagePeriodes' => $tperiodes,
                'projetPeriodes' => $projetPeriodes,
            ]
        );
    }
}
