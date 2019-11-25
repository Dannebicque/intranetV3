<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/ScolariteController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Scolarite;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller
 * @Route("/application/etudiant/scolarite")
 */
class ScolariteController extends BaseController
{
    /**
     * @Route("/details/{id}", name="app_etudiant_scolarite_detail")
     * @param Scolarite $scolarite
     *
     * @return Response
     *
     */
    public function details(Scolarite $scolarite): Response
    {
        return $this->render('appEtudiant/scolarite/detail.html.twig', [
            'scolarite' => $scolarite,
        ]);
    }
}
