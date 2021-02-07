<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/PrevisionnelExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:11
 */


namespace App\Controller\administration;

use App\Classes\MyPrevisionnel;
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
     * @param $annee
     *
     * @Route("/omega/{annee}", name="administration_previsionnel_export_omega", methods="GET")
     */
    public function exportOmega(MyPrevisionnel $myPrevisionnel, $annee): StreamedResponse
    {
        return $myPrevisionnel->exportOmegaDepartement($this->getDepartement(), $annee);
    }

    /**
     * @param $annee
     * @param $type
     * @param $data
     * @param $_format
     *
     * @Route("/{annee}/{type}/{data}/{_format}", name="administration_previsionnel_export", methods="GET",
     *                                            requirements={"_format"="csv|xlsx|pdf",
     *                                            "type"="personnel|matiere|semestre"})
     */
    public function export(MyPrevisionnel $myPrevisionnel, $annee, $type, $data, $_format): StreamedResponse
    {
        return $myPrevisionnel->export($this->getDepartement(), $annee, $type, $data, $_format);
    }
}
