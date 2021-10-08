<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ActualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 06:57
 */

namespace App\Controller;

use App\Repository\ActualiteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
