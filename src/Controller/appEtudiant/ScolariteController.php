<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/ScolariteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/03/2023 06:51
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Scolarite;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController.
 */
#[Route(path: '/application/etudiant/scolarite')]
class ScolariteController extends BaseController
{
    #[Route(path: '/details/{id}', name: 'app_etudiant_scolarite_detail')]
    public function details(Scolarite $scolarite): Response
    {
        if (!($this->isGranted('ROLE_PERMANENT') or $this->getUser()->getId() === $scolarite->getEtudiant()->getId())) {
            throw $this->createAccessDeniedException('Vous n\'avez pas accès à cette page');
        }

        return $this->render('appEtudiant/scolarite/detail.html.twig', [
            'etudiant' => $scolarite->getEtudiant(),
            'scolarite' => $scolarite,
        ]);
    }
}
