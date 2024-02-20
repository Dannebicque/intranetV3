<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ActualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller;

use App\Repository\ActualiteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ActualiteController.
 */
#[Route(path: '/actualites')]
class ActualiteController extends BaseController
{
    #[Route(path: '/anciennes', name: 'actualite_liste')]
    public function liste(ActualiteRepository $actualiteRepository): Response
    {
        return $this->render('actualite/liste.html.twig', [
            'actualites' => $actualiteRepository->getByDepartement($this->getDepartement()),
        ]);
    }
}
