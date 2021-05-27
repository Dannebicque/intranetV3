<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ButMmiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/05/2021 06:38
 */

namespace App\Controller;

use App\Classes\Apc\ApcStructure;
use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Semestre;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\DiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ButMmiController.
 *
 * @Route("/but")
 */
class ButMmiController extends AbstractController
{
    private $diplomeRepository;

    public function __construct(DiplomeRepository $diplomeRepository)
    {
        $this->diplomeRepository = $diplomeRepository;
    }

    /**
     * @Route("/", name="but_homepage")
     */
    public function homePage(): Response
    {
        return $this->render('but_mmi/index.html.twig', [
            'diplomes' => $this->diplomeRepository->findBy(['typeDiplome' => 4]),
        ]);
    }

    /**
     * @Route("/{diplome}/referentiel-comptences", name="but_referentiel_competences")
     */
    public function referentielCompetences(ApcStructure $apcStructure, $diplome): Response
    {
        $diplome = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);
        $tParcours = $apcStructure->parcoursNiveaux($diplome);

        return $this->render('but_mmi/referentielCompetences.html.twig', [
            'diplome' => $diplome,
            'competences' => $diplome->getApcComptences(),
            'parcours' => $diplome->getApcParcours(),
            'parcoursNiveaux' => $tParcours,
        ]);
    }

    /**
     * @Route("/{diplome}/recherche", name="but_recherche")
     */
    public function recherche(
        Request $request,
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        $diplome
    ): Response {
        $diplome = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);
        $search = $request->query->get('s');
        $saes = $apcSaeRepository->search($search);
        $ressources = $apcRessourceRepository->search($search, $diplome);

        return $this->render('but_mmi/resultats.html.twig', [
            'saes' => $saes,
            'ressources' => $ressources,
            'diplome' => $diplome,
        ]);
    }

    /**
     * @Route("/{diplome}/fiche-sae/{apcSae}", name="but_fiche_sae")
     */
    public function ficheSae(
        ApcSae $apcSae,
        $diplome
    ): Response {
        $diplome = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        return $this->render('but_mmi/ficheSae.html.twig', [
            'apc_sae' => $apcSae,
            'diplome' => $diplome,
        ]);
    }

    /**
     * @Route("/{diplome}/sae", name="but_sae")
     */
    public function sae(
        ApcSaeRepository $apcSaeRepository,
        $diplome
    ): Response {
        $diplome = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        return $this->render('but_mmi/sae.html.twig', [
            'saes' => $apcSaeRepository->findByDiplome($diplome),
            'diplome' => $diplome,
        ]);
    }

    /**
     * @Route("/{diplome}/fiche-ressource/{apcRessource}", name="but_fiche_ressource")
     */
    public function ficheRessource(
        $diplome,
        ApcRessource $apcRessource
    ): Response {
        $diplome = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        return $this->render('but_mmi/ficheRessource.html.twig', [
            'apc_ressource' => $apcRessource,
            'diplome' => $diplome,
        ]);
    }

    /**
     * @Route("/{diplome}/repartition-horaire", name="but_repartition_horaire")
     */
    public function repartitionHoraire(
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        $diplome
    ): Response {
        $diplome = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);
        $ressources = $apcRessourceRepository->findByDiplomeToSemestreArray($diplome);
        $saes = $apcSaeRepository->findByDiplomeToSemestreArray($diplome);

        return $this->render('but_mmi/preconisations.html.twig', [
            'ressources' => $ressources,
            'saes' => $saes,
            'diplome' => $diplome,
        ]);
    }

    /**
     * @Route("/{diplome}/ressource/{semestre}", name="but_ressource")
     */
    public function ressource(
        ApcRessourceRepository $apcRessourceRepository,
        $diplome,
        Semestre $semestre
    ): Response {
        $diplome = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        return $this->render('but_mmi/ressources.html.twig', [
            'ressources' => $apcRessourceRepository->findBySemestre($semestre),
            'semestre' => $semestre,
            'diplome' => $diplome,
        ]);
    }
}
