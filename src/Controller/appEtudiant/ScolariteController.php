<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/ScolariteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 15/08/2020 09:06

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
            'etudiant'  => $scolarite->getEtudiant(),
            'scolarite' => $scolarite,
        ]);
    }
}
