<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller;

use App\Classes\MyExportListing;
use App\Repository\MatiereRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class ExportController.
 *
 * @Route("/export")
 */
class ExportController extends AbstractController
{
    /**
     * @Route("/listing", name="export_listing")
     *
     * @return bool|StreamedResponse|null
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws Exception
     *
     * @throws LoaderError
     */
    public function listing(MatiereRepository $matiereRepository, MyExportListing $myExport, Request $request)
    {
        $matiere = $request->request->get('matiere');
        if (0 !== $matiere) {
            $matiere = $matiereRepository->find($matiere);
        }

        $exportTypeDocument = $request->request->get('exportTypeDocument');
        $exportChamps = $request->request->get('exportChamps');
        $exportFormat = $request->request->get('exportFormat');
        $exportFiltre = $request->request->get('exportFiltre');

        return $myExport->genereFichier($exportTypeDocument, $exportFormat, $exportChamps, $exportFiltre, $matiere,
            $this->getUser());
    }
}
