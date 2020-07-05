<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/UserAjaxController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller;

use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\Favori;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use App\Repository\DepartementRepository;
use App\Repository\EtudiantRepository;
use App\Repository\FavoriRepository;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\SemestreRepository;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
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
     * @param FavoriRepository   $favoriRepository
     * @param EtudiantRepository $etudiantRepository
     * @param Request            $request
     *
     * @return Response
     * @throws NonUniqueResultException
     * @throws Exception
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
            $fav = $favoriRepository->findBy([
                'etudiantDemandeur' => $this->getConnectedUser()->getId(),
                'etudiantDemande'   => $user->getId()
            ]);
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
     *
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

    /**
     * @Route("/change-semestre/{etudiant}/{semestre}", name="user_change_semestre", options={"expose":true})
     *
     * @param SemestreRepository $semestreRepository
     * @param Etudiant           $etudiant
     * @param Semestre           $semestre
     *
     * @return JsonResponse
     */
    public function changeSemestreEtudiant(
        SemestreRepository $semestreRepository,
        Etudiant $etudiant,
        $semestre
    ): ?JsonResponse {
        $semestre = $semestreRepository->find($semestre);
        if ($semestre !== null) {
            $etudiant->setSemestre($semestre);
        } else {
            $etudiant->setSemestre(null);
        }
        //suppression des groupes
        foreach ($etudiant->getGroupes() as $groupe) {
            $etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($etudiant);
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/change-departement/{etudiant}/{departement}", name="user_change_departement", options={"expose":true})
     * @param DepartementRepository $departementRepository
     * @param Etudiant              $etudiant
     *
     * @param                       $departement
     *
     * @return JsonResponse
     */
    public function changeDepartementEtudiant(
        DepartementRepository $departementRepository,
        Etudiant $etudiant,
        $departement
    ): ?JsonResponse {
        $departement = $departementRepository->find($departement);
        if ($departement !== null) {
            $etudiant->setDepartement($departement);
        } else {
            $etudiant->setDepartement(null);
        }

        $etudiant->setSemestre(null);
        //suppression des groupes
        foreach ($etudiant->getGroupes() as $groupe) {
            $etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($etudiant);
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    /**
     * @Route("/change-annee-sortie/{etudiant}/{annee}", name="user_change_annee_sortie", options={"expose":true})
     * @param Etudiant              $etudiant
     *
     * @param                       $annee
     *
     * @return JsonResponse
     */
    public function changeAnneeSortie(
        Etudiant $etudiant,
        $annee
    ): ?JsonResponse {
        $etudiant->setAnneeSortie($annee);
        if ($annee !== 0) {
            $etudiant->setSemestre(null);
            //suppression des groupes
            foreach ($etudiant->getGroupes() as $groupe) {
                $etudiant->removeGroupe($groupe);
                $groupe->removeEtudiant($etudiant);
            }
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }
}
