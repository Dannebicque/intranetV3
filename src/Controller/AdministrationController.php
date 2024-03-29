<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/AdministrationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 17/02/2024 07:21
 */

namespace App\Controller;

use App\Repository\ProjetPeriodeRepository;
use App\Repository\StagePeriodeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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

        $tperiodes = $stagePeriodeRepository->findByDepartementAndAnneeUniversitaire($this->dataUserSession->getDepartement(), $this->getAnneeUniversitaire());
        $projetPeriodes = $projetPeriodeRepository->findByDepartementAndAnneeUniversitaire($this->dataUserSession->getDepartement(), $this->getAnneeUniversitaire());


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
