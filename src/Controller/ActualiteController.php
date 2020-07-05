<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ActualiteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

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
            'actualites' => $actualiteRepository->getByDepartement($this->dataUserSession->getDepartement(), 0)
        ]);
    }
}
