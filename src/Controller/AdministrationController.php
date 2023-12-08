<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/AdministrationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/09/2022 09:06
 */

namespace App\Controller;

use App\Repository\ProjetPeriodeRepository;
use App\Repository\StagePeriodeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AdministrationController.
 */
#[Route(path: '/administration')]
class AdministrationController extends BaseController
{
    #[Route(path: '/', name: 'administration_index')]
    public function index(
        StagePeriodeRepository $stagePeriodeRepository,
        ProjetPeriodeRepository $projetPeriodeRepository
    ): Response {
        $tperiodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $periodes = $stagePeriodeRepository->findByDiplome($diplome, $this->getAnneeUniversitaire());
            foreach ($periodes as $periode) {
                $tperiodes[] = $periode;
            }
        }
        $projetPeriodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $periodes = $projetPeriodeRepository->findByDiplome($diplome, $this->getAnneeUniversitaire());
            foreach ($periodes as $periode) {
                $projetPeriodes[$periode->getId()] = $periode;
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

    #[Route(path: '/_etudiant', name: 'administration_bloc_etudiant')]
    public function blocEtudiant(): Response
    {
        return $this->render('administration/block_admin/_etudiant.html.twig');
    }
}
