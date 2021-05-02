<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/ImportDiplomeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/05/2021 18:48
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Repository\TypeDiplomeRepository;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administratif/diplome-import")
 */
class ImportDiplomeController extends BaseController
{
    /**
     * @Route("/", name="sa_diplome_import_index")
     */
    public function index(TypeDiplomeRepository $typeDiplomeRepository)
    {
        return $this->render('super-administration/import_diplome/index.html.twig', [
            'typeDiplomes' => $typeDiplomeRepository->findAll()
        ]);
    }
}
