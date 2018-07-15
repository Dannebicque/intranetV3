<?php

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\PersonnelFormation;
use App\MesClasses\MyPersonnel;
use App\Repository\PersonnelFormationRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class AgendaController
 * @package App\Controller
 * @Route("/api/personnel")
 */
class PersonnelApiController extends BaseController
{
    /** @var PersonnelRepository */
    protected $personnelRepository;

    /**
     * EtudiantApiController constructor.
     *
     * @param PersonnelRepository $personnelRepository
     */
    public function __construct(PersonnelRepository $personnelRepository)
    {
        $this->personnelRepository = $personnelRepository;
    }


    /**
     * @Route("/enseignants/{type}", name="api_enseignants_type", options={"expose":true})
     * @param                              $type
     *
     * @return Response
     */
    public function getEnseignantsByType($type): Response
    {
        $personnels = $this->personnelRepository->findByType($type,
            $this->dataUserSession->getFormationId());
        $pers = array();

        /** @var PersonnelFormation $p */
        foreach ($personnels as $p) {
            $t = [];
            $t['nom'] = $p->getPersonnel() ? $p->getPersonnel()->getNom() : '';
            $t['prenom'] = $p->getPersonnel() ? $p->getPersonnel()->getPrenom() : '';
            $t['posteInterne'] = $p->getPersonnel() ? $p->getPersonnel()->getPosteInterne() : '';
            $t['telBureau'] = $p->getPersonnel() ? $p->getPersonnel()->getTelBureau() : '';
            $t['bureau1'] = $p->getPersonnel() ? $p->getPersonnel()->getBureau1() : '';
            $t['numeroHarpege'] = $p->getPersonnel() ? $p->getPersonnel()->getNumeroHarpege() : '';
            $t['mailUniv'] = $p->getPersonnel() ? $p->getPersonnel()->getMailUniv() : '';
            $t['id'] = $p->getPersonnel() ? $p->getPersonnel()->getId() : '';
            $pers[] = $t;
        }

        return new JsonResponse($pers);
    }

    /**
     * @param SerializerInterface $serialize
     * @param                     $needle
     *
     * @return Response
     * @Route("/personnel/recherche/{needle}", name="api_personnel_recherche", options={"expose":true})
     * @throws \InvalidArgumentException
     */
    public function searchPersonnel(
        SerializerInterface $serialize,
        $needle
    ): Response {
        $result = $this->personnelRepository->search($needle);
        $pers = array();

        foreach ($result as $p) {
            $pers[] = $p;
        }

        return new Response($serialize->serialize($pers, 'json'));
    }

    /**
     * @param PersonnelFormationRepository $personnelFormationRepository
     * @param                              $slug
     *
     * @return Response
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @Route("/personnel/formation/add/{slug}", name="api_personnel_add_to_formation", options={"expose":true})
     */
    public function addPersonnelToFormation(
        PersonnelFormationRepository $personnelFormationRepository,
        $slug
    ): Response {
        $personnel = $this->personnelRepository->findOneBySlug($slug);
        if ($personnel !== null) {
            $existe = $personnelFormationRepository->findOneBy([
                'formation' => $this->dataUserSession->getFormationId(),
                'personnel' => $personnel->getId()
            ]);
            if ($existe === null) {
                $pf = new PersonnelFormation($personnel, $this->dataUserSession->getFormation());
                $this->entityManager->persist($pf);
                $this->entityManager->flush();

                return new Response('', Response::HTTP_OK);
            }

            return new Response('Déjà dans la base', Response::HTTP_OK);

        }

        return new Response('Erreur', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param MyPersonnel $myPersonnel
     * @param Request     $request
     *
     * @return Response
     * @Route("/all", name="api_all_personnel", options={"expose":true})
     */
    public function getAllPersonnel(MyPersonnel $myPersonnel, Request $request): Response
    {
        $length = $request->get('length');
        $length = $length && ($length !== -1) ? $length : 0;

        $start = $request->get('start');
        $start = $length ? ($start && ($start !== -1) ? $start : 0) / $length : 0;

        $search = $request->get('search');
        $filters = [
            'query' => $search['value']
        ];

        $users = $myPersonnel->getArrayAllPersonnel(
            $filters, $start, $length
        );

        $output = [
            'draw'            => 1,
            'data'            => $users,
            'recordsFiltered' => \count($this->personnelRepository->getAllPersonnel(
                $filters, 0, false)),
            'recordsTotal'    => \count($this->personnelRepository->getAllPersonnel(
                [], 0, false))
        ];

        return $this->json($output, Response::HTTP_OK);
    }
}
