<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/QualiteController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:36
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Table\QualiteTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/enquete-qualite')]
class QualiteController extends BaseController
{
    #[Route(path: '/', name: 'sa_qualite_index', methods: 'GET')]
    public function index(): Response
    {
        return $this->render('super-administration/qualite/index.html.twig');
    }

    #[Route(path: '/diplome/{diplome}', name: 'sa_qualite_diplome', methods: ['GET|POST'])]
    public function diplome(Request $request, Diplome $diplome): Response
    {
        $table = $this->createTable(QualiteTableType::class, [
            'diplome' => $diplome,
            'type' => 'administratif'
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/qualite/diplome.html.twig',
            [
                'table' => $table,
            ]);
    }
}
