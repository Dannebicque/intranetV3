<?php

namespace App\Controller\api;

use App\Controller\BaseController;
use App\Entity\PersonnelFormation;
use App\Repository\PersonnelFormationRepository;
use App\Repository\PersonnelRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
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


    /**
     * @Route("/enseignants/{type}", name="api_enseignants_type", options={"expose":true})
     * @param PersonnelFormationRepository $personnelRepository
     * @param                              $type
     *
     * @return Response
     */
    public function getEnseignantsByType(PersonnelFormationRepository $personnelRepository, $type): Response
    {
        $personnels = $personnelRepository->findByType($type,
            $this->dataUserSession->getFormation()->getId()); //todo: fitlrer type et formation
        $pers = array();

        /** @var PersonnelFormation $p */
        foreach ($personnels as $p) {
            $t['nom'] = $p->getPersonnel() ? $p->getPersonnel()->getNom(): '';
            $t['prenom'] = $p->getPersonnel() ? $p->getPersonnel()->getPrenom(): '';
            $t['posteInterne'] = $p->getPersonnel() ? $p->getPersonnel()->getPosteInterne(): '';
            $t['telBureau'] = $p->getPersonnel() ? $p->getPersonnel()->getTelBureau(): '';
            $t['bureau1'] = $p->getPersonnel() ? $p->getPersonnel()->getBureau1(): '';
            $t['numeroHarpege'] = $p->getPersonnel() ? $p->getPersonnel()->getNumeroHarpege(): '';
            $t['mailUniv'] = $p->getPersonnel() ? $p->getPersonnel()->getMailUniv(): '';
            $t['id'] = $p->getPersonnel() ? $p->getPersonnel()->getId(): '';
            $pers[] = $t;
        }

        return new JsonResponse($pers);
    }

    /**
     * @param PersonnelRepository $personnelRepository
     * @param SerializerInterface $serialize
     * @param                     $needle
     *
     * @return Response
     * @Route("/personnel/recherche/{needle}", name="api_personnel_recherche", options={"expose":true})
     * @throws \InvalidArgumentException
     */
    public function searchPersonnel(
        PersonnelRepository $personnelRepository,
        SerializerInterface $serialize,
        $needle
    ): Response {
        $result = $personnelRepository->search($needle);
        $pers = array();

        foreach ($result as $p) {
            $pers[] = $p;
        }

        return new Response($serialize->serialize($pers, 'json'));
    }

    /**
     * @param PersonnelFormationRepository $personnelFormationRepository
     * @param PersonnelRepository          $personnelRepository
     * @param                              $slug
     *
     * @return Response
     * @throws \LogicException
     * @throws \InvalidArgumentException
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @Route("/personnel/formation/add/{slug}", name="api_personnel_add_to_formation", options={"expose":true})
     *
     */
    public function addPersonnelToFormation(
        PersonnelFormationRepository $personnelFormationRepository,
        PersonnelRepository $personnelRepository,
        $slug
    ): Response {
        $personnel = $personnelRepository->findOneBySlug($slug);
        if ($personnel !== null) {
            $existe = $personnelFormationRepository->findOneBy([
                'formation' => $this->dataUserSession->getFormation()->getId(),
                'personnel' => $personnel->getId()
            ]);
            if ($existe === null) {
                $pf = new PersonnelFormation($personnel, $this->dataUserSession->getFormation());
                $em = $this->getDoctrine()->getManager();
                $em->persist($pf);
                $em->flush();

                return new Response('', Response::HTTP_OK);
            }

            return new Response('Déjà dans la base', Response::HTTP_OK);

        }

        return new Response('Erreur', Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
