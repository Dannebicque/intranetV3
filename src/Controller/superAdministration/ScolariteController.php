<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\superAdministration
 */
class ScolariteController extends BaseController
{
    /**
     * @Route("/scolarite", name="sa_scolarite_index")
     */
    public function index(): Response
    {
        return $this->render('super-administration/scolarite/index.html.twig', [

        ]);
    }

    /**
     * @Route("/scolarite/ajouter", name="sa_scolarite_ajouter")
     */
    public function addEtudiants()
    {
        return $this->render('super-administration/scolarite/ajouter.html.twig', [

        ]);
    }

    /**
     * @Route("/scolarite/recherche", name="sa_scolarite_recherche", options={"expose"=true})
     */
    public function rechercheEtudiants()
    {
        $etudiants = null;
        return $this->render('super-administration/scolarite/recherche.html.twig', ['etudiants' => $etudiants]);
    }
}
