<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/PrevisionnelExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Classes\Hrs\HrsManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelExport;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelExportController.
 */
#[Route(path: '/administration/service-previsionnel/export')]
class PrevisionnelExportController extends BaseController
{
    #[Route(path: '/omega/{annee}', name: 'administration_previsionnel_export_omega', methods: 'GET')]
    public function exportOmega(PrevisionnelManager $previsionnelManager, HrsManager $hrsManager, PrevisionnelExport $myPrevisionnel, int $annee): StreamedResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        if (0 === $annee && null !== $this->getDepartement()) {
            $annee = $this->getDepartement()->getOptAnneePrevisionnel();
        }
        $previsionnels = $previsionnelManager->getPrevisionnelDepartement(
            $this->getDepartement(), $annee);
        $hrs = $hrsManager->getHrsDepartementAnnee($this->getDepartement(), $annee);

        return $myPrevisionnel->exportOmegaDepartement($previsionnels, $hrs, $this->getDepartement());
    }

    #[Route(path: '/{annee}/{data}/{type}/{_format}', name: 'administration_previsionnel_export', requirements: ['_format' => 'csv|xlsx|pdf', 'type' => 'personnel|matiere|semestre'], methods: 'GET')]
    public function export(TypeMatiereManager $typeMatiereManager, PrevisionnelExport $myPrevisionnel, int $annee, string $data, string $type, string $_format): StreamedResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        //todo: dépend du type : Personnel, Matiere, Semestre
        return $myPrevisionnel->export($this->getDepartement(), $annee, $data, $type);
    }
}
