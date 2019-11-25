<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/api/PrevisionnelApiController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Matiere;
use App\Repository\PrevisionnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class MatiereApiController
 * @package App\Controller
 * @Route("/api/previsionnel")
 */
class PrevisionnelApiController extends BaseController
{
    /**
     * @Route("/matiere/{matiere}", name="api_previsionnel_matiere", options={"expose":true})
     * @param PrevisionnelRepository $previsionnelRepository
     * @param Matiere                $matiere
     *
     * @return JsonResponse
     */
    public function previsionnelMatiereAjax(
        PrevisionnelRepository $previsionnelRepository,
        Matiere $matiere
    ): Response {
        $previsionnel = $previsionnelRepository->findPrevisionnelMatiere(
            $matiere,
            $this->dataUserSession->getAnneePrevisionnel()
        );

        return $this->render(
            'api/previsionnel/matiere.html.twig',
            ['previsionnel' => $previsionnel, 'matiere' => $matiere]
        );
    }
}
