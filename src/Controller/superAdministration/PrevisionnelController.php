<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/PrevisionnelController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/09/2023 12:16
 */

namespace App\Controller\superAdministration;

use App\Classes\Hrs\HrsManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Classes\Previsionnel\PrevisionnelSynthese;
use App\Controller\BaseController;
use App\DTO\PrevisionnelSynthesePersonnels;
use App\Entity\Personnel;
use App\Enums\TypeHrsEnum;
use App\Exception\AnneeUniversitaireNotFoundException;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DepartementRepository;
use App\Repository\HrsRepository;
use App\Repository\PersonnelRepository;
use App\Repository\PrevisionnelRepository;
use App\Repository\TypeHrsRepository;
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
        DepartementRepository $departementRepository,
        HrsRepository         $hrsRepository,
        TypeHrsRepository     $typeHrsRepository,
        TypeMatiereManager    $typeMatiereManager,
        PrevisionnelManager   $previsionnelManager,
        PersonnelRepository   $personnelRepository,
        PrevisionnelRepository $previsionnelRepository,
        Request                $request
    ): Response
    {
        $intervenant = $request->query->get('intervenant');
        $matiere = $request->query->get('matiere');
        $diplome = $request->query->get('diplome');
        $departement = $request->query->get('departement', null);
        $annee = (int)$request->query->get('annee');
        $personnel = $personnelRepository->find($intervenant);

        $previsionnel = [];
        $hrsCollection = [];
//        if (null !== $personnel) {
//            $previsionnel = $previsionnelManager->getPrevisionnelPersonnelAnneeCollection($personnel, $annee);
//
//            $hrs = $hrsRepository->getPersonnelAnnee($personnel, $annee);
//            $hrsCollection = new HrsCollection();
//            foreach ($hrs as $hr) {
//                $hrsCollection->addHrs($hr);
//            }
//        }
        if (null !== $departement && $departement !== "") {
            $departement = $departementRepository->find($departement);
            $previsionnel = $previsionnelManager->getPrevisionnelDepartement($departement, $annee);
            $synthesePrevisionnel = new PrevisionnelSynthesePersonnels();
            foreach ($previsionnel as $previsionnelPersonnel) {
                $synthesePrevisionnel->addPrevisionnelPersonnel($previsionnelPersonnel);
            }
        } else {
            //récupérer pour tous les départements sur l'année du prévisionnel
            $previsionnel = $previsionnelManager->getPrevisionnelAllDepartementAnnee($annee);
            $synthesePrevisionnel = new PrevisionnelSynthesePersonnels();
            foreach ($previsionnel as $previsionnelPersonnel) {
                $synthesePrevisionnel->addPrevisionnelPersonnel($previsionnelPersonnel);
            }
        }

        return $this->render('super-administration/previsionnel/_affiche.html.twig', [
            'personnel' => $personnel,
            'matieres' => $typeMatiereManager->findAll(),
            'annee' => $annee,
            'previsionnel' => $previsionnel,
            'synthesePrevisionnel' => $synthesePrevisionnel,
            'primes' => $hrsCollection,
            'typesHrs' => $typeHrsRepository->findAll(),
            'categorieHrs' => TypeHrsEnum::cases()
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
