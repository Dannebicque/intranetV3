<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/UserAjaxController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:46
 */

namespace App\Controller;

use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\PersonnelDepartement;
use App\Entity\Semestre;
use App\Repository\DepartementRepository;
use App\Repository\PersonnelDepartementRepository;
use App\Repository\SemestreRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class UserController.
 */
#[Route(path: '/utilisateur/ajax')]
class UserAjaxController extends BaseController
{
    #[Route(path: '/change-defaut/{departement}', name: 'user_change_departement_defaut', options: ['expose' => true])]
    public function changeDepartementDefaut(
        PersonnelDepartementRepository $personnelDepartementRepository,
        #[MapEntity(mapping: ['departement' => 'uuid'])]
        Departement                    $departement): ?JsonResponse
    {
        if (null !== $this->getUser() && 'permanent' === $this->getUser()->getTypeUser()) {
            $pf = $personnelDepartementRepository->findByPersonnel($this->getUser());
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

    #[Route(path: '/change-password', name: 'user_change_password', options: ['expose' => true])]
    public function changePassword(UserPasswordHasherInterface $passwordEncoder, Request $request): ?JsonResponse
    {
        if (null !== $this->getUser() && 'permanent' === $this->getUser()->getTypeUser()) {
            $passwd1 = trim($request->request->get('passwd1'));
            $passwd2 = trim($request->request->get('passwd2'));
            $passwdActuel = trim($request->request->get('passwdactuel'));

            if ($passwd1 === $passwd2 && '' !== $passwd1 && $passwordEncoder->isPasswordValid($this->getUser(),
                    $passwdActuel)) {
                $passwordEncode = $passwordEncoder->hashPassword($this->getUser(), $passwd1);
                $this->getUser()->setPassword($passwordEncode);
                $this->entityManager->flush();

                return new JsonResponse(true, Response::HTTP_OK);
            }
        }

        return new JsonResponse(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/change-semestre/{etudiant}/{semestre}', name: 'user_change_semestre', options: ['expose' => true])]
    public function changeSemestreEtudiant(SemestreRepository $semestreRepository, Etudiant $etudiant, Semestre $semestre): ?JsonResponse
    {
        $semestre = $semestreRepository->find($semestre);
        if (null !== $semestre) {
            $etudiant->setSemestre($semestre);
            $etudiant->setAnneeSortie(0);
            $etudiant->setDepartement($semestre->getDiplome()->getDepartement());
        } else {
            $etudiant->setSemestre(null);
        }
        // suppression des groupes
        foreach ($etudiant->getGroupes() as $groupe) {
            $etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($etudiant);
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/change-departement/{etudiant}/{departement}', name: 'user_change_departement', options: ['expose' => true])]
    public function changeDepartementEtudiant(DepartementRepository $departementRepository, Etudiant $etudiant, $departement = null): ?JsonResponse
    {
        if (null !== $departement) {
            $departement = $departementRepository->find($departement);
            $etudiant->setDepartement($departement);
        } else {
            $etudiant->setDepartement(null);
        }
        $etudiant->setSemestre(null);
        // suppression des groupes
        foreach ($etudiant->getGroupes() as $groupe) {
            $etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($etudiant);
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }

    #[Route(path: '/change-annee-sortie/{etudiant}/{annee}', name: 'user_change_annee_sortie', options: ['expose' => true])]
    public function changeAnneeSortie(Etudiant $etudiant, $annee): ?JsonResponse
    {
        $etudiant->setAnneeSortie($annee);
        if (0 !== $annee) {
            $etudiant->setSemestre(null);
            // suppression des groupes
            foreach ($etudiant->getGroupes() as $groupe) {
                $etudiant->removeGroupe($groupe);
                $groupe->removeEtudiant($etudiant);
            }
        }
        $this->entityManager->flush();

        return new JsonResponse(true, Response::HTTP_OK);
    }
}
