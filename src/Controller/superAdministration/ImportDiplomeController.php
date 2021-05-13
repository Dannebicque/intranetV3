<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ImportDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2021 12:31
 */

namespace App\Controller\superAdministration;

use App\Classes\MyUpload;
use App\Classes\Structure\DiplomeImport;
use App\Controller\BaseController;
use App\Entity\Diplome;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/diplome-import")
 */
class ImportDiplomeController extends BaseController
{
    /**
     * @Route("/{id}", name="sa_diplome_import_index")
     */
    public function index(
        MyUpload $myUpload,
        DiplomeImport $diplomeImport,
        Request $request,
        Diplome $diplome
    ) {
        //if ($request->isMethod('POST')) {
        //$fichier = $myUpload->upload($request->files->get('fichier'), 'temp/', ['xml']);
        $fichier = '/Users/davidannebicque/htdocs/intranetV3/demo/referentiels/competences/but-MMI.xml';
        $diplomeImport->import($diplome, $fichier, 'competences'); //$request->request->get('typeFichier'));
        // }

        return $this->render('super-administration/import_diplome/index.html.twig', [
            'diplome' => $diplome,
        ]);
    }
}
