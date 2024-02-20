<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/PrevisionnelApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\api;

use App\Classes\Previsionnel\PrevisionnelManager;
use App\Controller\BaseController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

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
