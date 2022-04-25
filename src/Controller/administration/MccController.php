<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/MccController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2022 22:29
 */

namespace App\Controller\administration;

use App\Classes\Apc\ApcCoefficient;
use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\ApcNiveauRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/mcc', name: 'administration_mcc_')]
class MccController extends BaseController
{
    #[Route('/but/{diplome}', name: 'but')]
    public function index(Diplome $diplome): Response
    {
        return $this->render('administration/mcc/index.html.twig', [
            'diplome' => $diplome,
        ]);
    }

    public function mccSemestre(
        ApcCoefficient $apcCoefficient,
        ApcNiveauRepository $apcNiveauRepository,
        ApcSaeRepository $apcSaeRepository,
        ApcRessourceRepository $apcRessourceRepository,
        Semestre $semestre
    ): Response {
        $saes = $apcSaeRepository->findBySemestre($semestre);
        $ressources = $apcRessourceRepository->findBySemestre($semestre);

        return $this->render('administration/mcc/_mccApcSemestre.html.twig',
            [
                'semestre' => $semestre,
                'niveaux' => $apcNiveauRepository->findBySemestre($semestre),
                'saes' => $saes,
                'ressources' => $ressources,
                'coefficients' => $apcCoefficient->calculsCoefficients($saes, $ressources),
            ]);
    }
}
