<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/api/PersonnelApiController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\Departement;
use App\Entity\Personnel;
use App\Entity\PersonnelDepartement;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\NonUniqueResultException;
use InvalidArgumentException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class AgendaController.
 */
#[Route(path: '/api/personnel')]
class PersonnelApiController extends BaseController
{
    /**
     * EtudiantApiController constructor.
     */
    public function __construct(protected PersonnelRepository $personnelRepository)
    {
    }

    #[Route(path: '/enseignants/{type}', name: 'api_enseignants_type', options: ['expose' => true])]
    public function getEnseignantsByType($type): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        $personnels = $this->personnelRepository->findByType(
            $type,
            $this->getDepartement()
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

    #[Route(path: '/enseignants', name: 'api_enseignants_departement', options: ['expose' => true])]
    public function getEnseignantsByDepartement(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_PERMANENT');
        $personnels = $this->personnelRepository->findByDepartement(
            $this->getDepartement()
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
     * @throws InvalidArgumentException
     */
    #[Route(path: '/personnel/recherche/{needle}', name: 'api_personnel_recherche', options: ['expose' => true])]
    public function searchPersonnel(SerializerInterface $serialize, $needle): Response
    {
        $this->denyAccessUnlessGranted('ROLE_PERMANENT');

        $result = $this->personnelRepository->search($needle);
        $pers = [];
        foreach ($result as $p) {
            $pers[] = $p;
        }

        return new Response($serialize->serialize($pers, 'json'));
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/personnel/departement/add/{slug}/{departement}', name: 'api_personnel_add_to_departement', options: ['expose' => true])]
    public function addPersonnelToDepartement(PersonnelDepartementRepository $personnelDepartementRepository, $slug, ?Departement $departement = null): Response
    {
        $this->denyAccessUnlessGranted('ROLE_PERMANENT');
        $personnel = $this->personnelRepository->findOneBySlug($slug);
        $departement ??= $this->dataUserSession->getDepartement();
        if (null !== $personnel && null !== $departement) {
            $existe = $personnelDepartementRepository->findOneBy([
                'departement' => $departement->getId(),
                'personnel' => $personnel->getId(),
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
}
