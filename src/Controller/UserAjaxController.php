<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/UserAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

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
 * Class UserController.
 *
 * @Route("/utilisateur/ajax")
 */
class UserAjaxController extends BaseController
{
    /**
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
        if ($user && 'true' === $action) {
            $fav = new Favori($this->getConnectedUser(), $user);

            $this->entityManager->persist($fav);
            $this->entityManager->flush();

            return new Response('ok', Response::HTTP_OK);
        }

        if ($user && 'false' === $action) {
            $fav = $favoriRepository->findBy([
                'etudiantDemandeur' => $this->getConnectedUser()->getId(),
                'etudiantDemande'   => $user->getId(),
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
     * @ParamConverter("departement", options={"mapping": {"departement": "uuid"}})
     *
     * @return JsonResponse
     */
    public function changeDepartementDefaut(
        PersonnelDepartementRepository $personnelDepartementRepository,
        Departement $departement
    ): ?JsonResponse {
        if (null !== $this->getConnectedUser() && 'permanent' === $this->getConnectedUser()->getTypeUser()) {
            $pf = $personnelDepartementRepository->findByPersonnel($this->getConnectedUser());
            /** @var PersonnelDepartement $p */
            foreach ($pf as $p) {
                if (null !== $p->getDepartement() && $p->getDepartement()->getId() === $departement->getId()) {
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
     * @param Semestre $semestre
     *
     * @return JsonResponse
     */
    public function changeSemestreEtudiant(
        SemestreRepository $semestreRepository,
        Etudiant $etudiant,
        $semestre
    ): ?JsonResponse {
        $semestre = $semestreRepository->find($semestre);
        if (null !== $semestre) {
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
     *
     * @param $departement
     *
     * @return JsonResponse
     */
    public function changeDepartementEtudiant(
        DepartementRepository $departementRepository,
        Etudiant $etudiant,
        $departement
    ): ?JsonResponse {
        $departement = $departementRepository->find($departement);
        if (null !== $departement) {
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
     *
     * @param $annee
     *
     * @return JsonResponse
     */
    public function changeAnneeSortie(
        Etudiant $etudiant,
        $annee
    ): ?JsonResponse {
        $etudiant->setAnneeSortie($annee);
        if (0 !== $annee) {
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
