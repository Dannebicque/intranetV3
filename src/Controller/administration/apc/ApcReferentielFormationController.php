<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcReferentielFormationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/05/2021 18:52
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcNiveauRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/referentiel-formation", name="administration_")
 */
class ApcReferentielFormationController extends BaseController
{
    /**
     * @Route("/grille/{diplome}", name="apc_referentiel_formation_grille", methods="GET")
     */
    public function grille(Diplome $diplome)
    {
        return $this->render('apc/referentiel-formation/grille.html.twig',
            [
                'diplome' => $diplome,
            ]);
    }

    public function grilleSemestre(
        ApcNiveauRepository $apcNiveauRepository,
        ApcSaeRepository $apcSaeRepository,
        ApcRessourceRepository $apcRessourceRepository,
        Semestre $semestre)
    {
        //todo: pour le moment pas utilisé...
        return $this->render('apc/referentiel-formation/_grilleSemestre.html.twig',
            [
                'semestre' => $semestre,
                'niveaux' => $apcNiveauRepository->findBySemestre($semestre),
                'saes' => $apcSaeRepository->findBySemestre($semestre),
                'ressources' => $apcRessourceRepository->findBySemestre($semestre),
            ]);
    }

    public function grilleCoefficientsSemestre(
        ApcNiveauRepository $apcNiveauRepository,
        ApcSaeRepository $apcSaeRepository,
        ApcRessourceRepository $apcRessourceRepository,
        Semestre $semestre
    ) {
        $saes = $apcSaeRepository->findBySemestre($semestre);
        $ressources = $apcRessourceRepository->findBySemestre($semestre);

        return $this->render('apc/referentiel-formation/_grilleCoefficientsSemestre.html.twig',
            [
                'semestre' => $semestre,
                'niveaux' => $apcNiveauRepository->findBySemestre($semestre),
                'saes' => $saes,
                'ressources' => $ressources,
                'coefficients' => $this->calculsCoefficients($saes, $ressources),
            ]);
    }

    private function calculsCoefficients(mixed $saes, mixed $ressources)
    {
        $tabs = [];
        $tabs['saes'] = [];
        /** @var ApcSae $sae */
        foreach ($saes as $sae) {
            $tabs['saes'][$sae->getid()] = [];
            foreach ($sae->getApcSaeCompetences() as $competence) {
                $tabs['saes'][$sae->getid()][$competence->getCompetence()->getId()] = $competence->getCoefficient();
            }
        }

        $tabs['ressources'] = [];
        /** @var \App\Entity\ApcRessource $ressource */
        foreach ($ressources as $ressource) {
            $tabs['ressources'][$ressource->getid()] = [];
            foreach ($ressource->getApcRessourceCompetences() as $competence) {
                $tabs['ressources'][$ressource->getid()][$competence->getCompetence()->getId()] = $competence->getCoefficient();
            }
        }

        return $tabs;
    }
}
