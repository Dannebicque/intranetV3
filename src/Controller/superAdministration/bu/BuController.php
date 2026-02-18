<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/bu/BuController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Controller\superAdministration\bu;

use App\Controller\BaseController;
use App\Table\BuRapportTableType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/bu')]
class BuController extends BaseController
{
    #[Route(path: '/', name: 'sa_bu_index', methods: 'GET')]
    public function index(Request $request): Response
    {
        $table = $this->createTable(BuRapportTableType::class, [
            'type' => 'administratif'
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('super-administration/bu/index.html.twig', [
            'table' => $table,
        ]);
    }

}
