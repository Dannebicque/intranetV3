<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ScolariteController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 18/01/2021 16:45

namespace App\Controller\superAdministration;

use App\Classes\MyUpload;
use App\Classes\SousCommission\SousCommissionExport;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Classes\Excel\MyExcelRead;
use App\Repository\AnneeUniversitaireRepository;
use App\Repository\DiplomeRepository;
use App\Repository\SemestreRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ScolariteController
 * @package App\Controller\administratif\scolarite
 * @Route("/administratif/scolarite")
 */
class ScolariteController extends AbstractController
{
    /**
     * @Route("/", name="sa_scolarite_index")
     * @param DiplomeRepository $diplomeRepository
     *
     * @return Response
     */
    public function index(DiplomeRepository $diplomeRepository): Response
    {
        return $this->render('super-administration/scolarite/index.html.twig', [
            'diplomes' => $diplomeRepository->findAll()
        ]);
    }

    /**
     * @Route("/diplome/{diplome}", name="sa_scolarite_diplome")
     * @param SemestreRepository $semestreRepository
     * @param Diplome            $diplome
     *
     * @return Response
     */
    public function diplomeShow(SemestreRepository $semestreRepository, Diplome $diplome): Response
    {
        return $this->render('super-administration/scolarite/diplome.html.twig', [
            'diplome'   => $diplome,
            'semestres' => $semestreRepository->findByDiplome($diplome)
        ]);
    }

    /**
     * @Route("/semestre/{semestre}", name="sa_scolarite_semestre")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function semestreShow(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/semestre.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @Route("/export-apogee/{semestre}", name="sa_scolarite_semestre_export_apogee")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function exportApogee(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/export-apogee.html.twig', [
            'semestre' => $semestre
        ]);
    }

    /**
     * @param AnneeUniversitaireRepository $anneeUniversitaireRepository
     * @param SousCommissionExport         $sousCommissionExport
     * @param Request                      $request
     * @param Semestre                     $semestre
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
        if ($resultat === Constantes::PAS_DE_SOUS_COMM) {
            $this->addFlash(Constantes::FLASHBAG_ERROR, 'Pas de sous commission validée');

            return $this->redirectToRoute('sa_scolarite_semestre_export_apogee', ['semestre' => $semestre->getId()]);
        }

        return $resultat;
    }
}
