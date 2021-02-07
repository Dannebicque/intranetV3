<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/EtudiantApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Semestre;
use App\Repository\EtudiantRepository;
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

    /**
     * @Route("/departement", name="api_etudiant_departement", options={"expose":true})
     *
     * @throws InvalidArgumentException
     */
    public function getEtudiantsByDepartement(Request $request): Response
    {
        $length = $request->get('length');
        $length = $length && (-1 !== $length) ? $length : 0;

        $start = $request->get('start');
        $start = $length ? ($start && (-1 !== $start) ? $start : 0) / $length : 0;

        $order = $request->get('order');

        $search = $request->get('search');
        $filters = [
            'query' => $search['value'],
            'order' => $order,
        ];

        $users = $this->etudiantRepository->getArrayEtudiantsByDepartement(
            $this->dataUserSession->getDepartementId(),
            $filters,
            $start,
            $length
        );

        $output = [
            'draw'            => $request->get('draw'),
            'data'            => $users,
            'recordsFiltered' => \count($this->etudiantRepository->getByDepartement(
                $this->dataUserSession->getDepartementId(),
                $filters,
                0,
                false
            )),
            'recordsTotal'    => \count($this->etudiantRepository->getByDepartement(
                $this->dataUserSession->getDepartementId(),
                [],
                0,
                false
            )),
        ];

        return $this->json($output, Response::HTTP_OK);
    }
}
