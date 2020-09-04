<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ActualiteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 04/09/2020 13:04

namespace App\Controller;

use App\Repository\ActualiteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ActualiteController
 * @package App\Controller
 * @Route("/actualites")
 */
class ActualiteController extends BaseController
{
    /**
     * @Route("/anciennes", name="actualite_liste")
     * @param ActualiteRepository $actualiteRepository
     *
     * @return Response
     */
    public function liste(ActualiteRepository $actualiteRepository): Response
    {
        return $this->render('actualite/liste.html.twig', [
            'actualites' => $actualiteRepository->getByDepartement($this->getDepartement(), 0)
        ]);
    }
}
