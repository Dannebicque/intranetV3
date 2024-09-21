<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/05/2024 19:45
 */

namespace App\Controller\administration\apc;

use App\Classes\Apc\ApcExport;
use App\Classes\Apc\ApcStructure;
use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Repository\ApcComptenceRepository;
use App\Repository\ApcRessourceRepository;
use App\Repository\ApcSaeRepository;
use App\Repository\PpnRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/apc')]
class ApcController extends BaseController
{
    #[Route(path: '/referentiel/{diplome}', name: 'administration_apc_referentiel_index', options: ['expose' => true], methods: ['GET'])]
    public function referentiel(
        Request       $request,
        PpnRepository $ppnRepository,
        ApcComptenceRepository $apcComptenceRepository,
        ApcStructure  $apcStructure, Diplome $diplome): Response
    {
        if (null === $request->query->get('ppn')) {
            $ppn = $diplome->getPpns()->first();
        } else {
            $ppn = $ppnRepository->find($request->query->get('ppn'));
        }
        $tParcours = $apcStructure->parcoursNiveaux($diplome->getReferentiel()->getApcParcours());
        $competences = $apcComptenceRepository->findByDiplome($diplome);

        return $this->render('apc/referentiel.html.twig', [
            'diplome' => $diplome,
            'ppns' => $diplome->getPpns(),
            'competences' => $competences,
            'parcours' => $diplome->getReferentiel()?->getApcParcours(),
            'parcoursNiveaux' => $tParcours,
            'ppn' => $ppn,
        ]);
    }

    #[Route(path: '/export/{diplome}', name: 'administration_apc_export', options: ['expose' => true], methods: ['GET'])]
    public function export(
        ApcExport              $apcExport,
        ApcRessourceRepository $apcRessourceRepository,
        ApcSaeRepository       $apcSaeRepository,
        Diplome                $diplome): Response
    {

        $ressources = $apcRessourceRepository->findByReferentiel($diplome->getReferentiel());
        $saes = $apcSaeRepository->findByReferentiel($diplome->getReferentiel());

        return $apcExport->exportProgramme($ressources, $saes, $diplome);
    }
}
