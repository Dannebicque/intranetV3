<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcReferentielFormationController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/04/2021 21:34
 */

namespace App\Controller\administration\apc;

use App\Classes\MyExport;
use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\Actualite;
use App\Entity\ApcSae;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Form\ApcSaeType;
use App\Repository\ActualiteRepository;
use App\Repository\ApcNiveauRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/referentiel-formation", name="administration_")
 */
class ApcReferentielFormationController extends BaseController
{
    /**
     * @Route("/grille/{diplome}", name="apc_referentiel_formation_grille", methods="GET")
     *
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
        return $this->render('apc/referentiel-formation/_grilleSemestre.html.twig',
            [
                'semestre' => $semestre,
                'niveaux' => $apcNiveauRepository->findBySemestre($semestre),
                'saes' => $apcSaeRepository->findBySemestre($semestre),
                'ressources' => $apcRessourceRepository->findBySemestre($semestre),
            ]);
    }
}
