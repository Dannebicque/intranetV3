<?php
/*
 * Copyright (c) 2026. | IntranetV3 - All Rights Reserved
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Repository\EtudiantRepository;
use App\Repository\SemestreRepository;
use App\Repository\GroupeRepository;
use App\Entity\TypeGroupe;
use App\Entity\Groupe;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/api/evenement', options: ['expose' => true])]
class EvenementApiController extends BaseController
{
    public function __construct(
        private readonly EtudiantRepository $etudiantRepository,
        private readonly SemestreRepository $semestreRepository,
        private readonly GroupeRepository $groupeRepository,
    ) {
    }

    #[Route(path: '/etudiants', name: 'api_evenement_etudiants', methods: ['GET'])]
    public function etudiants(Request $request): Response
    {
        // Autorisé pour SUPER_ADMIN et SCOLARITE
        if (!$this->isGranted('ROLE_SUPER_ADMIN') && !$this->isGranted('ROLE_SCOLARITE')) {
            return $this->json(['message' => 'Forbidden'], Response::HTTP_FORBIDDEN);
        }

        $departementId = $request->query->getInt('departement', 0) ?: null;
        $semestres = $request->query->all('semestres'); // array<int>
        $groupes = $request->query->all('groupes'); // array<int>
        $q = (string) $request->query->get('q', '');
        $page = max(1, (int) $request->query->get('page', 1));
        $limit = min(100, max(1, (int) $request->query->get('limit', 20)));

        $result = $this->etudiantRepository->searchForEvenement(
            departementId: $departementId,
            semestreIds: array_filter(array_map('intval', (array) $semestres)),
            groupeIds: array_filter(array_map('intval', (array) $groupes)),
            q: $q,
            page: $page,
            limit: $limit
        );

        $items = array_map(static function ($row) {
            // $row est un tableau partiel issu du select
            $text = trim(($row['nom'] ?? '') . ' ' . ($row['prenom'] ?? ''));
            if (!empty($row['semestre'])) {
                $text .= ' — ' . $row['semestre'];
            }
            if (!empty($row['groupes'])) {
                $text .= ' — ' . $row['groupes'];
            }
            return [
                'id' => (int) $row['id'],
                'text' => $text,
            ];
        }, $result['data']);

        return $this->json([
            'items' => $items,
            'total' => $result['total'],
            'page' => $page,
            'hasMore' => ($page * $limit) < $result['total'],
        ]);
    }

    #[Route(path: '/semestres', name: 'api_evenement_semestres', methods: ['GET'])]
    public function semestres(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN');
        if (false === $this->isGranted('ROLE_SCOLARITE') && false === $this->isGranted('ROLE_SUPER_ADMIN')) {
            return $this->json(['message' => 'Forbidden'], Response::HTTP_FORBIDDEN);
        }

        $departementId = $request->query->getInt('departement', 0);
        if ($departementId <= 0) {
            return $this->json(['items' => []]);
        }
        /** @var Departement|null $departement */
        $departement = $this->entityManager->getRepository(Departement::class)->find($departementId);
        if (null === $departement) {
            return $this->json(['items' => []]);
        }
        $semestres = $this->semestreRepository->findByDepartement($departement);
        $items = [];
        foreach ($semestres as $s) {
            $items[] = [
                'id' => $s->getId(),
                'text' => $s->getLibelle(),
            ];
        }
        return $this->json(['items' => $items]);
    }

    #[Route(path: '/groupes', name: 'api_evenement_groupes', methods: ['GET'])]
    public function groupes(Request $request): Response
    {
        $this->denyAccessUnlessGranted('ROLE_SUPER_ADMIN');
        if (false === $this->isGranted('ROLE_SCOLARITE') && false === $this->isGranted('ROLE_SUPER_ADMIN')) {
            return $this->json(['message' => 'Forbidden'], Response::HTTP_FORBIDDEN);
        }

        $semestres = $request->query->all('semestres'); // array<int>

        if (empty($semestres)) {
            return $this->json(['items' => []]);
        }

        $qb = $this->groupeRepository->createQueryBuilder('g')
            ->leftJoin('g.typeGroupe', 'tg')
            ->leftJoin('tg.semestres', 's')
            ->addSelect('tg')
            ->addSelect('s')
        ;
        $qb->andWhere('s.id IN (:semestres)')->setParameter('semestres', array_map('intval', (array) $semestres));
        $qb->orderBy('g.libelle', 'ASC');

        $rows = $qb->getQuery()->getResult();
        $items = [];
        foreach ($rows as $g) {
            if ($g instanceof \App\Entity\Groupe) {
                $items[] = ['id' => $g->getId(), 'text' => $g->getLibelle()];
            }
        }
        return $this->json(['items' => $items]);
    }
}
