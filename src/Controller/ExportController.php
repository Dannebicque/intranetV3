<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/ExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/05/2021 08:58
 */

namespace App\Controller;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyExportListing;
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
     * @return StreamedResponse|null
     *
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws Exception
     * @throws LoaderError
     */
    public function listing(TypeMatiereManager $typeMatiereManager, MyExportListing $myExport, Request $request)
    {
        $matiere = $request->request->get('matiere');
        $typeMatiere = $request->request->get('typeMatiere');
        if (0 !== $matiere) {
            $mat = $typeMatiereManager->getMatiere($matiere, $typeMatiere);
        }

        $exportTypeDocument = $request->request->get('exportTypeDocument');
        $exportChamps = $request->request->get('exportChamps');
        $exportFormat = $request->request->get('exportFormat');
        $exportFiltre = $request->request->get('exportFiltre');

        return $myExport->genereFichier($exportTypeDocument, $exportFormat, $exportChamps, $exportFiltre, $mat,
            $this->getUser());
    }
}
