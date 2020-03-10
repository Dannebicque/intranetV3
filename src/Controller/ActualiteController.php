<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/ActualiteController.php
// @author David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
            'actualites' => $actualiteRepository->findByDepartement($this->dataUserSession->getDepartement(), 0)
        ]);
    }
}
