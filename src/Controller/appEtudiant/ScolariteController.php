<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Scolarite;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @IsGranted("ROLE_ETUDIANT")
 * @package App\Controller
 * @Route("/application/etudiant/scolarite")
 */
class ScolariteController extends BaseController
{
    /**
     *
     * @param Scolarite $scolarite
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/details/{id}", name="app_etudiant_scolarite_detail")
     */
    public function details(Scolarite $scolarite): Response
    {
        return $this->render('appEtudiant/scolarite/detail.html.twig', [
            'scolarite' => $scolarite,
        ]);
    }
}
