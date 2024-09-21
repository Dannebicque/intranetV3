<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/AdministrationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/06/2024 21:40
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

        $this->breadcrumbHelper->addItem('administration', 'administration_index');

        $tperiodes = $stagePeriodeRepository->findByDepartementAndAnneeUniversitaire($this->getDepartement(), $this->getAnneeUniversitaire());
        $projetPeriodes = $projetPeriodeRepository->findByDepartementAndAnneeUniversitaire($this->getDepartement(), $this->getAnneeUniversitaire());


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
