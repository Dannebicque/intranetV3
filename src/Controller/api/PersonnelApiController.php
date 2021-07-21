<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/api/PersonnelApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/07/2021 17:05
 */

namespace App\Controller\api;

use App\Classes\MyPersonnel;
use App\Controller\BaseController;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\NonUniqueResultException;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use function count;

/**
 * Class AgendaController.
 *
 * @Route("/api/personnel")
 */
class PersonnelApiController extends BaseController
{
    /** @var PersonnelRepository */
    protected $personnelRepository;

    /**
     * EtudiantApiController constructor.
     */
    public function __construct(PersonnelRepository $personnelRepository)
    {
        $this->personnelRepository = $personnelRepository;
    }

    /**
     * @Route("/enseignants/{type}", name="api_enseignants_type", options={"expose":true})
     *
     */
    public function getEnseignantsByType($type): Response
    {
        $personnels = $this->personnelRepository->findByType(
            $type,
            $this->dataUserSession->getDepartementId()
        );
        $pers = [];

        /** @var Personnel $p */
        foreach ($personnels as $p) {
            if (null !== $p) {
                $t = [];
                $t['nom'] = $p->getNom();
                $t['prenom'] = $p->getPrenom();
                $t['posteInterne'] = $p->getPosteInterne();
                $t['telBureau'] = $p->getTelBureau();
                $t['bureau1'] = $p->getBureau1();
                $t['numeroHarpege'] = $p->getNumeroHarpege();
                $t['mailUniv'] = $p->getMailUniv();
                $t['id'] = $p->getId();
                $pers[] = $t;
            }
        }

        return new JsonResponse($pers);
    }

    /**
     * @Route("/enseignants", name="api_enseignants_departement", options={"expose":true})
     */
    public function getEnseignantsByDepartement(): Response
    {
        $personnels = $this->personnelRepository->findByDepartement(
            $this->dataUserSession->getDepartementId()
        );
        $pers = [];

        /** @var Personnel $p */
        foreach ($personnels as $p) {
            $t = [];
            $t['nom'] = $p->getNom();
            $t['prenom'] = $p->getPrenom();
            $t['display'] = $p->getDisplayPr();
            $t['id'] = $p->getId();
            $pers[] = $t;
        }

        return new JsonResponse($pers);
    }

    /**
     *
     * @Route("/personnel/recherche/{needle}", name="api_personnel_recherche", options={"expose":true})
     *
     * @throws InvalidArgumentException
     */
    public function searchPersonnel(
        SerializerInterface $serialize,
        $needle
    ): Response {
        $result = $this->personnelRepository->search($needle);
        $pers = [];

        foreach ($result as $p) {
            $pers[] = $p;
        }

        return new Response($serialize->serialize($pers, 'json'));
    }

    /**
     *
     * @throws NonUniqueResultException
     * @Route("/personnel/departement/add/{slug}/{departement}", name="api_personnel_add_to_departement",
     *                                                           options={"expose":true})
     */
    public function addPersonnelToDepartement(
        PersonnelDepartementRepository $personnelDepartementRepository,
        $slug,
        ?Departement $departement = null
    ): Response {
        $personnel = $this->personnelRepository->findOneBySlug($slug);
        $departement = $departement ?? $this->dataUserSession->getDepartement();

        if (null !== $personnel && null !== $departement) {
            $existe = $personnelDepartementRepository->findOneBy([
                'departement' => $departement->getId(),
                'personnel'   => $personnel->getId(),
            ]);
            if (null === $existe) {
                $pf = new PersonnelDepartement($personnel, $departement);
                $this->entityManager->persist($pf);
                $this->entityManager->flush();

                return new Response(true, Response::HTTP_OK);
            }

            return new Response('Déjà dans la base', Response::HTTP_OK);
        }

        return new Response('Erreur', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/all", name="api_all_personnel", options={"expose":true})
     */
    public function getAllPersonnel(MyPersonnel $myPersonnel, Request $request): Response
    {
        $length = $request->get('length');
        $length = $length && (-1 !== $length) ? $length : 0;

        $start = $request->get('start');
        $start = $length ? ($start && (-1 !== $start) ? $start : 0) / $length : 0;

        $search = $request->get('search');

        $order = $request->get('order');

        $filters = [
            'query' => $search['value'],
            'order' => $order,
        ];

        $users = $myPersonnel->getArrayAllPersonnel(
            $filters,
            $start,
            $length
        );

        $output = [
            'draw'            => $request->get('draw'),
            'data'            => $users,
            'recordsFiltered' => count($this->personnelRepository->getAllPersonnel(
                $filters,
                0,
                false
            )),
            'recordsTotal' => count($this->personnelRepository->getAllPersonnel(
                [],
                0,
                false
            )),
        ];

        return $this->json($output, Response::HTTP_OK);
    }
}
