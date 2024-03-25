<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/CohorteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Scolarite;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\ScolariteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function array_key_exists;

/**
 * Class CohorteController.
 */
#[Route(path: '/administration/cohorte')]
class CohorteController extends BaseController
{
    #[Route(path: '/{annee}', name: 'administration_cohorte_index')]
    public function index(AnneeUniversitaireRepository $anneeUniversitaireRepository, ScolariteRepository $scolariteRepository, int $annee = 0): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        if (0 === $annee) {
            $annee = (int) date('Y') - 1;
        }
        // on ne récupère la cohorte que de la departement.
        $parcours = $scolariteRepository->findEtudiantsDepartement($annee, $this->dataUserSession->getDepartement());
        $etudiants = [];
        /** @var Scolarite $parcour */
        foreach ($parcours as $parcour) {
            if (null !== $parcour->getEtudiant() && !array_key_exists($parcour->getEtudiant()->getId(), $etudiants)) {
                $etudiants[$parcour->getEtudiant()->getId()] = $parcour->getEtudiant();
            }
        }

        return $this->render('administration/cohorte/index.html.twig', [
            'parcours' => $parcours,
            'etudiants' => $etudiants,
            'annee' => $annee,
            'anneesUniversitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    #[Route(path: '/export.{_format}', name: 'administration_cohorte_export', requirements: ['_format' => 'csv|xlsx|pdf'])]
    public function export(): void
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        // todo: a faire
    }
}
