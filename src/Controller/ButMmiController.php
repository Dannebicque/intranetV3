<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ButMmiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/03/2021 19:20
 */

namespace App\Controller;

use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Semestre;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ButMmiController
 * @package App\Controller
 * @Route("/but")
 */
class ButMmiController extends AbstractController
{

    /**
     * @Route("/", name="but_homepage")
     */
    public function homePage(): Response
    {
        return $this->render('but_mmi/home.html.twig', [

        ]);
    }

    /**
     * @Route("/recherche", name="but_recherche")
     */
    public function recherche(
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        Request $request
    ): Response {
        $search = $request->query->get('s');
        $saes = $apcSaeRepository->search($search);
        $ressources = $apcRessourceRepository->search($search);

        return $this->render('but_mmi/resultats.html.twig', [
            'saes' => $saes,
            'ressources' => $ressources
        ]);
    }

    /**
     * @Route("/fiche-sae/{apcSae}", name="but_fiche_sae")
     */
    public function ficheSae(
        ApcSae $apcSae
    ): Response {
        return $this->render('but_mmi/ficheSae.html.twig', [
            'apc_sae' => $apcSae
        ]);
    }

    /**
     * @Route("/sae/{diplome}", name="but_sae")
     */
    public function sae(
        ApcSaeRepository $apcSaeRepository,
        $diplome = 'mmi'
    ): Response {
        return $this->render('but_mmi/index.html.twig', [
            'saes' => $apcSaeRepository->findAll()
        ]);
    }

    /**
     * @Route("/fiche-ressource/{apcRessource}", name="but_fiche_ressource")
     */
    public function ficheRessource(
        ApcRessource $apcRessource
    ): Response {
        return $this->render('but_mmi/ficheRessource.html.twig', [
            'apc_ressource' => $apcRessource
        ]);
    }

    /**
     * @Route("/ressource/{semestre}", name="but_ressource")
     */
    public function ressource(
        ApcRessourceRepository $apcRessourceRepository,
        Semestre $semestre
    ): Response {
        return $this->render('but_mmi/ressources.html.twig', [
            'ressources' => $apcRessourceRepository->findBySemestre($semestre),
            'semestre' => $semestre
        ]);
    }


}
