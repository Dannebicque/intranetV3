<?php
/**
 * Copyright (C) 9 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/api/EtudiantApiController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 21/09/2019 08:28
 * @lastUpdate 21/09/2019 08:14
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
use function count;

/**
 * Class AgendaController
 * @package App\Controller
 * @Route("/api/etudiant")
 */
class EtudiantApiController extends BaseController
{
    /** @var EtudiantRepository */
    protected $etudiantRepository;

    /**
     * EtudiantApiController constructor.
     *
     * @param EtudiantRepository $etudiantRepository
     */
    public function __construct(EtudiantRepository $etudiantRepository)
    {
        $this->etudiantRepository = $etudiantRepository;
    }

    /**
     * @Route("/semestre/{semestre}", name="api_etudiants_semestre", options={"expose":true})
     * @param Semestre $semestre
     *
     * @return JsonResponse
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
     * @param Request $request
     *
     * @return Response
     * @Route("/departement", name="api_etudiant_departement", options={"expose":true})
     * @throws InvalidArgumentException
     */
    public function getEtudiantsByDepartement(Request $request): Response
    {
        $length = $request->get('length');
        $length = $length && ($length !== -1) ? $length : 0;

        $start = $request->get('start');
        $start = $length ? ($start && ($start !== -1) ? $start : 0) / $length : 0;

        $order = $request->get('order');

        $search = $request->get('search');
        $filters = [
            'query' => $search['value'],
            'order' => $order
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
            'recordsFiltered' => count($this->etudiantRepository->getByDepartement(
                $this->dataUserSession->getDepartementId(),
                $filters,
                0,
                false
            )),
            'recordsTotal'    => count($this->etudiantRepository->getByDepartement(
                $this->dataUserSession->getDepartementId(),
                [],
                0,
                false
            ))
        ];

        //return new Response(json_encode($output), 200, ['Content-Type' => 'application/json']);
        return $this->json($output, Response::HTTP_OK);
    }
}
