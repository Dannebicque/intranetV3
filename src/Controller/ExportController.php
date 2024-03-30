<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/ExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/03/2024 16:27
 */

namespace App\Controller;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyExportListing;
use PhpOffice\PhpSpreadsheet\Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class ExportController.
 */
#[Route(path: '/export')]
class ExportController extends AbstractController
{
    /**
     * @return StreamedResponse|null
     *
     * @throws RuntimeError
     * @throws SyntaxError
     * @throws Exception
     * @throws LoaderError
     */
    #[Route(path: '/listing', name: 'export_listing')]
    public function listing(TypeMatiereManager $typeMatiereManager, MyExportListing $myExport, Request $request): null|StreamedResponse|Response
    {
        $matiere = $request->request->get('matiere');
        $typeMatiere = $request->request->get('typeMatiere');
        if (0 !== (int) $matiere) {
            $mat = $typeMatiereManager->getMatiere($matiere, $typeMatiere);
        } else {
            $mat = null;
        }
        $exportTypeDocument = $request->request->get('exportTypeDocument');
        $exportChamps = $request->request->all()['exportChamps'];
        $exportFormat = $request->request->get('exportFormat');
        $exportFiltre = $request->request->all()['exportFiltre'];

        return $myExport->genereFichier($exportTypeDocument, $exportFormat, $exportChamps, $exportFiltre, $mat,
            $this->getUser());
    }
}
