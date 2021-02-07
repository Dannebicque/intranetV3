<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/CohorteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */


namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Scolarite;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\ScolariteRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CohorteController.
 *
 * @Route("/administration/cohorte")
 */
class CohorteController extends BaseController
{
    /**
     * @Route("/{annee}", name="administration_cohorte_index")
     *
     * @param int $annee
     */
    public function index(
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        ScolariteRepository $scolariteRepository,
        $annee = 0
    ): Response {
        if (0 === $annee) {
            $annee = date('Y') - 1;
        }
        //on ne récupère la cohorte que de la departement.
        $parcours = $scolariteRepository->findEtudiantsDepartement($annee, $this->dataUserSession->getDepartement());
        $etudiants = [];

        /** @var Scolarite $parcour */
        foreach ($parcours as $parcour) {
            if (null !== $parcour->getEtudiant() && !\array_key_exists($parcour->getEtudiant()->getId(), $etudiants)) {
                $etudiants[$parcour->getEtudiant()->getId()] = $parcour->getEtudiant();
            }
        }

        return $this->render('administration/cohorte/index.html.twig', [
            'parcours'             => $parcours,
            'etudiants'            => $etudiants,
            'annee'                => $annee,
            'anneesUniversitaires' => $anneeUniversitaireRepository->findAll(),
        ]);
    }

    /**
     * @Route("/export.{_format}", name="administration_cohorte_export", requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): void
    {
        //todo: a faire
    }
}
