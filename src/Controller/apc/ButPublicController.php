<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/apc/ButPublicController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\apc;

use App\Classes\Apc\ApcCoefficient;
use App\Classes\Apc\ApcStructure;
use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Semestre;
use App\Exception\DiplomeNotFoundException;
use App\Repository\ApcNiveauRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\DiplomeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ButMmiController.
 */
#[Route(path: '/but')]
class ButPublicController extends AbstractController
{
    public function __construct(private readonly DiplomeRepository $diplomeRepository)
    {
    }

    #[Route(path: '/', name: 'but_homepage')]
    public function homePage(): Response
    {
        return $this->render('apc/public/index.html.twig', [
            'diplomes' => $this->diplomeRepository->findBy(['typeDiplome' => 4, 'parent' => null]),
        ]);
    }

    #[Route(path: '/{diplome}/referentiel-comptences', name: 'but_referentiel_competences')]
    public function referentielCompetences(ApcStructure $apcStructure, string $diplome): Response
    {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        $referentiel = $dip->getReferentiel();

        if (null === $referentiel) {
            throw new DiplomeNotFoundException();
        }

        $tParcours = $apcStructure->parcoursNiveaux($referentiel->getApcParcours());

        return $this->render('apc/public/referentielCompetences.html.twig', [
            'diplome' => $dip,
            'referentiel' => $referentiel,
            'competences' => $referentiel->getApcComptences(),
            'parcours' => $referentiel->getApcParcours(),
            'parcoursNiveaux' => $tParcours,
        ]);
    }

    #[Route(path: '/{diplome}/recherche', name: 'but_recherche')]
    public function recherche(
        Request $request,
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        string $diplome
    ): Response {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        $search = $request->query->get('s');
        $saes = $apcSaeRepository->search($search, $dip);
        $ressources = $apcRessourceRepository->search($search, $dip);

        return $this->render('apc/public/resultats.html.twig', [
            'saes' => $saes,
            'ressources' => $ressources,
            'diplome' => $dip,
        ]);
    }

    #[Route(path: '/{diplome}/fiche-sae/{apcSae}', name: 'but_fiche_sae')]
    public function ficheSae(ApcSae $apcSae, string $diplome): Response
    {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        return $this->render('apc/public/ficheSae.html.twig', [
            'apc_sae' => $apcSae,
            'diplome' => $dip,
        ]);
    }

    #[Route(path: '/{diplome}/semestre-{semestre}', name: 'but_ressources_saes')]
    public function ressourcesSaes(
        ApcSaeRepository $apcSaeRepository,
        ApcRessourceRepository $apcRessourceRepository,
        string $diplome,
        int $semestre
    ): Response {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip || null === $dip->getReferentiel()) {
            throw new DiplomeNotFoundException();
        }

        return $this->render('apc/public/ressources_sae.html.twig', [
            'saes' => $apcSaeRepository->findByReferentielOrdreSemestre($dip->getReferentiel(), $semestre),
            'ressources' => $apcRessourceRepository->findByReferentielOrdreSemestre($dip->getReferentiel(), $semestre),
            'diplome' => $dip,
        ]);
    }

    #[Route(path: '/{diplome}/sae', name: 'but_sae')]
    public function sae(ApcSaeRepository $apcSaeRepository, string $diplome): Response
    {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        return $this->render('apc/public/sae.html.twig', [
            'saes' => $apcSaeRepository->findByDiplome($dip),
            'diplome' => $dip,
        ]);
    }

    #[Route(path: '/{diplome}/fiche-ressource/{apcRessource}', name: 'but_fiche_ressource')]
    public function ficheRessource(string $diplome, ApcRessource $apcRessource): Response
    {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        return $this->render('apc/public/ficheRessource.html.twig', [
            'apc_ressource' => $apcRessource,
            'diplome' => $dip,
        ]);
    }

    #[Route(path: '/{diplome}/repartition-horaire', name: 'but_repartition_horaire')]
    public function repartitionHoraire(
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        string $diplome
    ): Response
    {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        $ressources = $apcRessourceRepository->findByDiplomeToSemestreArray($dip);
        $saes = $apcSaeRepository->findByDiplomeToSemestreArray($dip);

        return $this->render('apc/public/preconisations.html.twig', [
            'ressources' => $ressources,
            'saes' => $saes,
            'diplome' => $dip,
        ]);
    }

    #[Route(path: '/{diplome}/coefficients', name: 'but_coefficients')]
    public function coefficients(
        ApcCoefficient $apcCoefficient,
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository $apcSaeRepository,
        ApcNiveauRepository $apcNiveauRepository,
        string $diplome
    ): Response
    {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        $ressources = $apcRessourceRepository->findByDiplomeToSemestreArray($dip);
        $saes = $apcSaeRepository->findByDiplomeToSemestreArray($dip);
        $tab = [];
        foreach ($dip->getSemestres() as $semestre) {
            $semestreid = $semestre->getId();
            $tab[$semestre->getId()] = [];
            $tab[$semestre->getId()]['niveaux'] = $apcNiveauRepository->findBySemestre($semestre);
            $tab[$semestre->getId()]['ressources'] = $ressources[$semestreid];
            $tab[$semestre->getId()]['saes'] = $saes[$semestreid];
            $tab[$semestre->getId()]['coefficients'] = $apcCoefficient->calculsCoefficients($tab[$semestreid]['saes'],
                $tab[$semestreid]['ressources']);
        }

        return $this->render('apc/public/coefficients.html.twig', [
            'tab' => $tab,
            'diplome' => $dip,
        ]);
    }

    #[Route(path: '/{diplome}/ressource/{semestre}', name: 'but_ressource')]
    public function ressource(ApcRessourceRepository $apcRessourceRepository, string $diplome, Semestre $semestre): Response
    {
        $dip = $this->diplomeRepository->findOneBy(['typeDiplome' => 4, 'sigle' => strtoupper($diplome)]);

        if (null === $dip) {
            throw new DiplomeNotFoundException();
        }

        return $this->render('apc/public/ressources.html.twig', [
            'ressources' => $apcRessourceRepository->findBySemestre($semestre),
            'semestre' => $semestre,
            'diplome' => $dip,
        ]);
    }
}
