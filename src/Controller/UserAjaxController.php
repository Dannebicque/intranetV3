<?php

namespace App\Controller;

use App\Entity\Favori;
use App\Entity\Formation;
use App\Entity\PersonnelFormation;
use App\Repository\EtudiantRepository;
use App\Repository\FavoriRepository;
use App\Repository\PersonnelFormationRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class UserController
 * @package App\Controller
 * @Route("/utilisateur/ajax")
 */
class UserAjaxController extends BaseController
{
    /**
     * @param FavoriRepository $favoriRepository
     * @param EtudiantRepository $etudiantRepository
     * @param Request $request
     *
     * @return Response
     * @throws \Doctrine\ORM\NonUniqueResultException
     * @Route("/add-favori", name="user_add_favori", options={"expose":true})
     */
    public function addFavori(
        FavoriRepository $favoriRepository,
        EtudiantRepository $etudiantRepository,
        Request $request
    ): Response {
        $action = $request->request->get('etat');
        $user = $etudiantRepository->findOneBySlug($request->request->get('user'));
        if ($user && $action === 'true') {
            $fav = new Favori($this->getUser(), $user);

            $this->entityManager->persist($fav);
            $this->entityManager->flush();

            return new Response('ok', Response::HTTP_OK);
        }

        if ($user && $action === 'false') {
            $fav = $favoriRepository->findBy(array(
                'etudiantDemandeur' => $this->getUser()->getId(),
                'etudiantDemande'   => $user->getId()
            ));
            foreach ($fav as $f) {
                $this->entityManager->remove($f);
            }
            $this->entityManager->flush();

            return new Response('ok', Response::HTTP_OK);
        }

        return new Response('nok', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/change-defaut/{formation}", name="user_change_formation_defaut", options={"expose":true})
     * @param PersonnelFormationRepository $personnelFormationRepository
     * @param Formation                    $formation
     *
     * @return JsonResponse
     */
    public function changeFormationDefaut(
        PersonnelFormationRepository $personnelFormationRepository,
        Formation $formation
    ): ?JsonResponse {
        if ($this->dataUserSession->getUser() !== null && $this->dataUserSession->getUser()->getTypeUser() === 'permanent') {
            $pf = $personnelFormationRepository->findByPersonnel($this->dataUserSession->getUser());
            /** @var PersonnelFormation $p */
            foreach ($pf as $p) {
                if ($p->getFormation() !== null && $p->getFormation()->getId() === $formation->getId()) {
                    $p->setDefaut(true);
                } else {
                    $p->setDefaut(false);
                }
                $this->entityManager->persist($p);
            }
            $this->entityManager->flush();

            return new JsonResponse(true, Response::HTTP_OK);
        }
        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
