<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/PrevisionnelApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 11/05/2021 08:46
 */

namespace App\Controller\api;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MatiereApiController.
 */
#[Route(path: '/api/previsionnel')]
class PrevisionnelApiController extends BaseController
{
    /**
     * @return JsonResponse
     */
    #[Route(path: '/matiere/{matiere}/{type}', name: 'api_previsionnel_matiere', options: ['expose' => true])]
    public function previsionnelMatiereAjax(PrevisionnelManager $previsionnelManager, int $matiere, string $type): Response
    {
        $previsionnel = $previsionnelManager->getPrevisionnelMatiere(
            $matiere,
            $type,
            $this->dataUserSession->getAnneePrevisionnel()
        );

        return $this->render(
            'api/previsionnel/matiere.html.twig',
            ['previsionnel' => $previsionnel]
        );
    }
}
