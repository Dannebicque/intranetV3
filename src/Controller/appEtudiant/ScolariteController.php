<?php

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Scolarite;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller
 * @Route({"fr":"application/etudiant/scolarite",
 *         "en":"application/student/cursus"}
 *)
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
