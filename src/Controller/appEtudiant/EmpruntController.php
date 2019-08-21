<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/EmpruntController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/08/2019 12:29
 * @lastUpdate 21/08/2019 12:21
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
        return $this->render('appEtudiant/emprunt/index.html.twig');
    }
}
