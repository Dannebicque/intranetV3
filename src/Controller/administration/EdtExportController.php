<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtExportController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 31/08/2020 18:17

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Classes\Edt\MyEdtExport;
use App\Repository\PersonnelDepartementRepository;
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
     * @Route("/voir/{source}", name="administration_edt_export_voir", requirements={"source"="intranet|celcat"})
     *
     *
     * @param MyEdtExport $myEdtExport
     * @param             $source
     *
     * @return Response
     */
    public function voirPdf(
        MyEdtExport $myEdtExport,
        PersonnelDepartementRepository $personnelDepartementRepository,
        $source
    ): Response {
        return $this->render('administration/edtExport/voir.html.twig', [
            'docs' => $myEdtExport->getAllDocs($this->dataUserSession->getDepartement())
        ]);
    }

    /**
     * @Route("/{source}", name="administration_edt_export_index", requirements={"source"="intranet|celcat"})
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
     * @Route("/tous/{source}.{_format}", name="administration_edt_export_all",
     *                                    requirements={"source"="intranet|celcat"})
     *
     *
     * @param MyEdtExport $myEdtExport
     * @param             $source
     *
     * @param             $_format
     *
     * @return Response
     */
    public function exportAll(MyEdtExport $myEdtExport, $source, $_format): Response
    {
        $myEdtExport->genereAllDocument($source, $_format, $this->dataUserSession->getDepartement());


//        return $this->render('administration/edtExport/index.html.twig', [
//            'source' => $source
//        ]);
    }


}
