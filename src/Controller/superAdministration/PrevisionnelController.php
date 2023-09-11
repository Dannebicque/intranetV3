<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/09/2023 19:08
 */

namespace App\Controller\superAdministration;

use App\Classes\Hrs\HrsManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Controller\BaseController;
use App\Entity\Personnel;
use App\Exception\AnneeUniversitaireNotFoundException;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DepartementRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelController.
 */
#[Route(path: '/administratif')]
class PrevisionnelController extends BaseController
{
    #[Route(path: '/previsionnel', name: 'sa_previsionnel_index')]
    public function index(
        DepartementRepository        $departementRepository,
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        PersonnelRepository          $personnelRepository): Response
    {


        $anneeU = $anneeUniversitaireRepository->findOneBy(['active' => true]);
        if (null !== $anneeU) {
            $annee = $anneeU;
        } else {
            throw new AnneeUniversitaireNotFoundException();
        }


        return $this->render('super-administration/previsionnel/index.html.twig', [
            'annees' => $anneeUniversitaireRepository->findAll(),
            'departements' => $departementRepository->findActifs(),
            'personnels' => $personnelRepository->findAll(),
            'annee' => $annee
        ]);
    }

    #[Route(path: '/previsionnel/affiche', name: 'sa_previsionnel_affiche')]
    public function affichePrevisionnel(
        PersonnelRepository    $personnelRepository,
        PrevisionnelManager    $previsionnelManager,
        PrevisionnelRepository $previsionnelRepository,
        Request                $request
    ): Response
    {
        $intervenant = $request->query->get('intervenant');
        $matiere = $request->query->get('matiere');
        $diplome = $request->query->get('diplome');
        $departement = $request->query->get('departement');
        $annee = $request->query->get('annee');
        $personnel = $personnelRepository->find($intervenant);


        $previsionnels = $previsionnelManager->getPrevisionnelEnseignantAnnee($personnel, $annee);
        return $this->render('super-administration/previsionnel/_affiche.html.twig', [
            'previsionnels' => $previsionnels
        ]);
    }

    #[Route(path: '/previsionnel/{personnel}/{annee}', name: 'sa_previsionnel_personnel', options: ['expose' => true])]
    public function personnel(PrevisionnelManager $previsionnelManager, PrevisionnelSynthese $previsionnelSynthese, HrsManager $hrsManager, Personnel $personnel, ?int $annee = 0): Response
    {
        if (0 === $annee && null !== $this->dataUserSession->getAnneePrevisionnel()) {
            $annee = $this->dataUserSession->getAnneePrevisionnel();
        } else {
            throw new AnneeUniversitaireNotFoundException();
        }

        $previsionnels = $previsionnelManager->getPrevisionnelEnseignantAnnee($personnel, $annee);
        $hrs = $hrsManager->getPersonnelAnnee($personnel, $annee);
        $synthse = $previsionnelSynthese->getSynthese($previsionnels, $personnel)
            ->getHrsEnseignant($hrs);

        return $this->render('super-administration/previsionnel/personnel.html.twig', [
            'previsionnels' => $previsionnels,
            'hrs' => $hrs,
            'annee' => $annee,
            'personnel' => $personnel,
            'synthse' => $synthse,
        ]);
    }
}
