<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtExportController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\MesClasses\Edt\MyEdtExport;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps/export")
 */
class EdtExportController extends BaseController
{
    /**
     * @Route("/voir/{source}", name="administration_edt_export_voir")
     *
     *
     * @param MyEdtExport $myEdtExport
     * @param             $source
     *
     * @return Response
     */
    public function voirPdf(MyEdtExport $myEdtExport, $source): Response
    {
        return $this->render('administration/edtExport/voir.html.twig', [
            'docs' => $myEdtExport->getAllDocs($this->dataUserSession->getDepartement(),
                $this->dataUserSession->getPersonnels())
        ]);
    }

    /**
     * @Route("/{source}", name="administration_edt_export_index")
     *
     *
     * @param $source
     *
     * @return Response
     */
    public function index($source): Response
    {
        return $this->render('administration/edtExport/index.html.twig', [
            'source' => $source
        ]);
    }

    /**
     * @Route("/{source}.{_format}", name="administration_edt_export_all")
     *
     *
     * @param $source
     *
     * @return Response
     */
    public function exportAll($source): Response
    {
        return $this->render('administration/edtExport/index.html.twig', [

        ]);
    }


}
