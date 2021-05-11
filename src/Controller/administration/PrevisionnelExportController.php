<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/PrevisionnelExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelExport;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelExportController.
 *
 * @Route("/administration/service-previsionnel/export")
 */
class PrevisionnelExportController extends BaseController
{
    /**
     *
     * @Route("/omega/{annee}", name="administration_previsionnel_export_omega", methods="GET")
     */
    public function exportOmega(PrevisionnelExport $myPrevisionnel, int $annee): StreamedResponse
    {
        //todo: a revoir
        return $myPrevisionnel->exportOmegaDepartement($this->getDepartement(), $annee);
    }

    /**
     * @Route("/{annee}/{data}/{type}/{_format}", name="administration_previsionnel_export", methods="GET",
     *                                            requirements={"_format"="csv|xlsx|pdf",
     *                                            "type"="personnel|matiere|semestre"})
     */
    public function export(
        TypeMatiereManager $typeMatiereManager,
        PrevisionnelExport $myPrevisionnel,
        int $annee,
        string $data,
        string $type,
        string $_format
    ): StreamedResponse {
        //todo: dépend du type : Personnel, Matiere, Semestre
        return $myPrevisionnel->export($this->getDepartement(), $annee, $data, $type, $_format);
    }
}
