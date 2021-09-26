<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/EtudiantApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 15:37
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\EtudiantRepository;
use function count;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AgendaController.
 *
 * @Route("/api/etudiant")
 */
class EtudiantApiController extends BaseController
{
    /** @var EtudiantRepository */
    protected $etudiantRepository;

    /**
     * EtudiantApiController constructor.
     */
    public function __construct(EtudiantRepository $etudiantRepository)
    {
        $this->etudiantRepository = $etudiantRepository;
    }

    /**
     * @Route("/semestre/{semestre}", name="api_etudiants_semestre", options={"expose":true})
     */
    public function trombinoscopeEtudiantsAjax(Semestre $semestre): JsonResponse
    {
        $etudiants = $this->etudiantRepository->findBySemestre($semestre->getId());

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
