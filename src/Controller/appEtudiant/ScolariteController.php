<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/appEtudiant/ScolariteController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:44 PM
 *  *
 *
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Scolarite;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
     *
     * @param Scolarite $scolarite
     *
     * @return Response
     * @Route("/details/{id}", name="app_etudiant_scolarite_detail")
     */
    public function details(Scolarite $scolarite): Response
    {
        return $this->render('appEtudiant/scolarite/detail.html.twig', [
            'scolarite' => $scolarite,
        ]);
    }
}
