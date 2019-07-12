<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/EmpruntController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/10/19 5:18 PM
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EmpruntController
 * @package App\Controller
 * @Route("/application/etudiant/emprunt")
 * @IsGranted("ROLE_ETUDIANT")
 */
class EmpruntController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_emprunt_index")
     */
    public function index(): Response
    {
        return $this->render('appEtudiant/emprunt/index.html.twig', []);
    }
}
