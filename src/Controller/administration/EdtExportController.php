<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/EdtExportController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/01/2021 09:12

namespace App\Controller\administration;

use App\Classes\Edt\MyEdtExport;
use App\Controller\BaseController;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class EdtController
 * @package App\Controller\administration
 * @Route("/administration/emploi-du-temps/export")
 */
class EdtExportController extends BaseController
{
    /**
     * @Route("/voir", name="administration_edt_export_voir", requirements={"source"="intranet|celcat"})
     *
     *
     * @param MyEdtExport $myEdtExport
     *
     * @return Response
     */
    public function voirPdf(
        MyEdtExport $myEdtExport
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

        return $this->redirectToRoute('administration_edt_export_voir');
    }

    /**
     * @Route("/profs/{source}.pdf", name="administration_edt_export_profs",
     *                                    requirements={"source"="intranet|celcat"})
     *
     *
     * @param Request             $request
     * @param PersonnelRepository $personnelRepository
     * @param MyEdtExport         $myEdtExport
     * @param                     $source
     *
     * @return Response
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function exportProfs(
        Request $request,
        PersonnelRepository $personnelRepository,
        MyEdtExport $myEdtExport,
        $source
    ) {
        $profs = $request->request->get('personnels');

        foreach ($profs as $prof) {
            $personnel = $personnelRepository->find($prof);
            if ($personnel !== null) {
                return $myEdtExport->generePdf($personnel, $source, $this->getDepartement());
            }
        }

        return $this->redirectToRoute('administration_edt_export_voir');
    }


}
