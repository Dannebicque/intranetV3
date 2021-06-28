<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ScolariteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 11:04
 */

namespace App\Controller\superAdministration;

use App\Classes\SousCommission\SousCommissionExport;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DiplomeRepository;
use App\Repository\SemestreRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController.
 *
 * @Route("/administratif/scolarite")
 */
class ScolariteController extends AbstractController
{
    /**
     * @Route("/", name="sa_scolarite_index")
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/scolarite/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll(),
        ]);
    }

    /**
     * @Route("/diplome/{diplome}", name="sa_scolarite_diplome")
     */
    public function diplomeShow(SemestreRepository $semestreRepository, Diplome $diplome): Response
    {
        return $this->render('super-administration/scolarite/diplome.html.twig', [
            'diplome'   => $diplome,
            'semestres' => $semestreRepository->findByDiplome($diplome),
        ]);
    }

    /**
     * @Route("/semestre/{semestre}", name="sa_scolarite_semestre")
     */
    public function semestreShow(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/semestre.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/export-apogee/{semestre}", name="sa_scolarite_semestre_export_apogee")
     */
    public function exportApogee(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/export-apogee.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/genere-apogee/{semestre}",
     *     name="sa_scolarite_semestre_genere_apogee",
     *     methods={"POST"},
     *     requirements={"semestre":"\d+"})
     */
    public function genereFichierApogee(
        AnneeUniversitaireRepository $anneeUniversitaireRepository,
        SousCommissionExport $sousCommissionExport,
        Request $request,
        Semestre $semestre
    ) {
        $anneeUniersitaire = $anneeUniversitaireRepository->findOneBy(['active' => true]);
        $resultat = $sousCommissionExport->exportApogee($semestre, $request->files->get('fichier'), $anneeUniersitaire);
        if (Constantes::PAS_DE_SOUS_COMM === $resultat) {
            $this->addFlash(Constantes::FLASHBAG_ERROR, 'Pas de sous commission validée');

            return $this->redirectToRoute('sa_scolarite_semestre_export_apogee', ['semestre' => $semestre->getId()]);
        }
        return $resultat;
    }
}
