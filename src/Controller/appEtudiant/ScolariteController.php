<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/ScolariteController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:09 AM
 */

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
