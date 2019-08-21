<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/PrevisionnelExportController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/08/2019 12:29
 * @lastUpdate 21/08/2019 12:08
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\MesClasses\MyPrevisionnel;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PrevisionnelExportController
 * @package App\Controller\administration
 * @Route("/administration/service-previsionnel/export")
 */
class PrevisionnelExportController extends BaseController
{


    /**
     * @param MyPrevisionnel $myPrevisionnel
     * @param                $annee
     *
     * @return StreamedResponse
     * @throws Exception
     * @Route("/omega/{annee}", name="administration_previsionnel_export_omega", methods="GET")
     *
     */
    public function exportOmega(MyPrevisionnel $myPrevisionnel, $annee): StreamedResponse
    {
        return $myPrevisionnel->exportOmegaDepartement($this->dataUserSession->getDepartement(), $annee);
    }

    /**
     * @param MyPrevisionnel $myPrevisionnel
     * @param                $annee
     *
     * @param                $type
     * @param                $data
     * @param                $_format
     *
     * @return StreamedResponse
     * @Route("/{annee}/{type}/{data}/{_format}", name="administration_previsionnel_export", methods="GET",
     *                                            requirements={"_format"="csv|xlsx|pdf",
     *                                            "type"="personnel|matiere|semestre"})
     */
    public function export(MyPrevisionnel $myPrevisionnel, $annee, $type, $data, $_format): StreamedResponse
    {
        return $myPrevisionnel->export($this->dataUserSession->getDepartement(), $annee, $type, $data, $_format);
    }


}
