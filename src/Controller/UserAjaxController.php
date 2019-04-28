<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/UserAjaxController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:46 PM
 *  *
 *
 */

namespace App\Controller;

use App\Entity\Departement;
use App\Entity\Favori;
use App\Entity\PersonnelDepartement;
use App\Repository\EtudiantRepository;
use App\Repository\FavoriRepository;
use App\Repository\PersonnelDepartementRepository;
use Doctrine\ORM\NonUniqueResultException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
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
     * @throws NonUniqueResultException
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
            $fav = new Favori($this->getConnectedUser(), $user);

            $this->entityManager->persist($fav);
            $this->entityManager->flush();

            return new Response('ok', Response::HTTP_OK);
        }

        if ($user && $action === 'false') {
            $fav = $favoriRepository->findBy(array(
                'etudiantDemandeur' => $this->getConnectedUser()->getId(),
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
     * @Route("/change-defaut/{departement}", name="user_change_departement_defaut", options={"expose":true})
     * @param PersonnelDepartementRepository $personnelDepartementRepository
     * @param Departement                    $departement
     * @ParamConverter("departement", options={"mapping": {"departement": "uuid"}})
     * @return JsonResponse
     */
    public function changeDepartementDefaut(
        PersonnelDepartementRepository $personnelDepartementRepository,
        Departement $departement
    ): ?JsonResponse {
        if ($this->getConnectedUser() !== null && $this->getConnectedUser()->getTypeUser() === 'permanent') {
            $pf = $personnelDepartementRepository->findByPersonnel($this->getConnectedUser());
            /** @var PersonnelDepartement $p */
            foreach ($pf as $p) {
                if ($p->getDepartement() !== null && $p->getDepartement()->getId() === $departement->getId()) {
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
