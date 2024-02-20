<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/ScolariteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Classes\SousCommission\SousCommissionExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Semestre;
use App\Exception\AnneeUniversitaireNotFoundException;
use App\Repository\SemestreRepository;
use App\Table\ScolariteDiplomesTableType;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class ScolariteController.
 */
#[Route(path: '/administratif/scolarite')]
class ScolariteController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route(path: '/', name: 'sa_scolarite_index')]
    public function index(
        Request $request): Response
    {
        $table = $this->createTable(ScolariteDiplomesTableType::class);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/scolarite/index.html.twig', [
            'table' => $table,
        ]);
    }

    #[Route(path: '/diplome/{diplome}', name: 'sa_scolarite_diplome')]
    public function diplomeShow(SemestreRepository $semestreRepository, Diplome $diplome): Response
    {
        return $this->render('super-administration/scolarite/diplome.html.twig', [
            'diplome' => $diplome,
            'semestres' => $semestreRepository->findByDiplome($diplome),
        ]);
    }

    #[Route(path: '/semestre/{semestre}', name: 'sa_scolarite_semestre')]
    public function semestreShow(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/semestre.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    #[Route(path: '/export-apogee/{semestre}', name: 'sa_scolarite_semestre_export_apogee')]
    public function exportApogee(Semestre $semestre): Response
    {
        return $this->render('super-administration/scolarite/export-apogee.html.twig', [
            'semestre' => $semestre,
        ]);
    }

    /**
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     * @throws \App\Exception\AnneeUniversitaireNotFoundException
     * @throws \PhpOffice\PhpSpreadsheet\Writer\Exception
     * @throws \PhpOffice\PhpSpreadsheet\Reader\Exception
     */
    #[Route(path: '/genere-apogee/{semestre}', name: 'sa_scolarite_semestre_genere_apogee', requirements: ['semestre' => '\d+'], methods: ['POST'])]
    public function genereFichierApogee(SousCommissionExport $sousCommissionExport, Request $request, Semestre $semestre): RedirectResponse|StreamedResponse
    {
        $anneeUniersitaire = $this->getUser()->getAnneeUniversitaire();
        if (null === $anneeUniersitaire) {
            throw new AnneeUniversitaireNotFoundException();
        }

        $resultat = $sousCommissionExport->exportApogee($semestre, $request->files->get('fichier'), $anneeUniersitaire);
        if (Constantes::PAS_DE_SOUS_COMM === $resultat) {
            $this->addFlash(Constantes::FLASHBAG_ERROR, 'Pas de sous commission validée');

            return $this->redirectToRoute('sa_scolarite_semestre_export_apogee', ['semestre' => $semestre->getId()]);
        }

        return $resultat;
    }
}
