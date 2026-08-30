<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/EtudiantApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 30/08/2026 11:21
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class AgendaController.
 */
#[Route(path: '/api/etudiant')]
class EtudiantApiController extends BaseController
{
    /**
     * EtudiantApiController constructor.
     */
    public function __construct(protected EtudiantRepository $etudiantRepository)
    {
    }

    #[Route(path: '/semestre/{semestre}', name: 'api_etudiants_semestre', options: ['expose' => true])]
    public function trombinoscopeEtudiantsAjax(Semestre $semestre): JsonResponse
    {
        $this->denyAccessUnlessGranted('ROLE_PERMANENT');

        $etudiants = $this->etudiantRepository->findBySemestre($semestre, $this->getAnneeUniversitaire());
        $etus = [];
        /** @var Etudiant $p */
        foreach ($etudiants as $p) {
            $t = [];
            $t['nom'] = $p->getNom();
            $t['prenom'] = $p->getPrenom();
            $t['slug'] = $p->getSlug();
            $t['siteperso'] = $p->getSitePerso();
            $t['siteuniv'] = $p->getSiteUniv();
            $t['mailUniv'] = $p->getMailUniv();
            $etus[] = $t;
        }

        return new JsonResponse($etus);
    }
}
