<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EtudiantGroupeController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/09/2023 12:12
 */

namespace App\Controller\administration;

use App\Classes\MyGroupes;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use App\Repository\TypeGroupeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CommissionAbsenceController.
 */
#[Route(path: '/administration/etudiant/groupe')]
class EtudiantGroupeController extends BaseController
{
    #[Route(path: '/semestre/{semestre}', name: 'administration_etudiant_groupe_semestre_index')]
    public function index(Semestre $semestre, TypeGroupeRepository $typeGroupeRepository): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $semestre);

        return $this->render('administration/etudiant_groupe/index.html.twig', [
            'semestre' => $semestre,
            'typeGroupes' => $typeGroupeRepository->findByDiplomeAndOrdreSemestre($semestre->getDiplome(), $semestre->getOrdreLmd()),
        ]);
    }

    #[Route(path: '/affecte/{typeGroupe}', name: 'administration_etudiant_groupe_affecte', options: ['expose' => true])]
    public function affecte(GroupeRepository $groupeRepository, EtudiantRepository $etudiantRepository, TypeGroupe $typeGroupe): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $typeGroupe->getSemestres()->first());
        $etudiants = $etudiantRepository->findByOrdreSemestreAndDiplome($typeGroupe->getSemestres()->first()->getOrdreLmd(), $typeGroupe->getSemestres()->first()->getDiplome());
        $groupes = $groupeRepository->findByTypeGroupe($typeGroupe);

        return $this->render('administration/etudiant_groupe/affecte.html.twig', [
            'typeGroupe' => $typeGroupe,
            'groupes' => $groupes,
            'etudiants' => $etudiants,
        ]);
    }

    #[Route(path: '/synchro/apogee/{semestre}', name: 'administration_etudiant_groupe_synchro_apogee')]
    public function synchroApogee(MyGroupes $myGroupes, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $myGroupes->updateFromApogee($semestre);
        $this->addFlashBag('success', 'groupes.synchronises');

        return $this->redirectToRoute('administration_etudiant_groupe_semestre_index',
            ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/synchro/parent/{semestre}', name: 'administration_etudiant_groupe_synchro_parent')]
    public function synchroParent(MyGroupes $myGroupes, Semestre $semestre): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $semestre);
        $myGroupes->updateParent($semestre);
        $this->addFlashBag('success', 'groupes.parents.synchronises');

        return $this->redirectToRoute('administration_etudiant_groupe_semestre_index',
            ['semestre' => $semestre->getId()]);
    }

    #[Route(path: '/change', name: 'administration_etudiant_groupe_change', options: ['expose' => true])]
    public function change(Request $request, EtudiantRepository $etudiantRepository, GroupeRepository $groupeRepository): Response
    {
        $cle = $request->request->get('id');
        $t = explode('-', (string) $cle);
        $id = explode('_', $t[0]);
        // récupére l'étudiant
        $etu = $etudiantRepository->find($id[1]);
        if (null !== $etu) {
            // efface l'ancien groupe
            if (0 !== $request->request->get('oldgroupe')) {
                $oldgroupe = $groupeRepository->find($request->request->get('oldgroupe'));
                if (null !== $oldgroupe) {
                    $oldgroupe->removeEtudiant($etu);
                    $this->entityManager->persist($oldgroupe);
                    $this->entityManager->flush();
                }
            }

            if (0 !== (int) $t[1]) {
                $groupe = $groupeRepository->find(trim($t[1])); // récupérer groupe etudiant...
                if ($groupe) {
                    // supprimer l'ancier groupe...
                    $groupe->addEtudiant($etu);
                    $this->entityManager->persist($groupe);
                    $this->entityManager->flush();
                }
            }

            return new Response('true', Response::HTTP_OK);
        }

        return new Response('false', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/{etudiant}', name: 'administration_etudiant_groupe_delete', methods: 'DELETE')]
    public function delete(Request $request, Groupe $groupe, Etudiant $etudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $etudiant->getSemestre());
        if ($this->isCsrfTokenValid('delete'.$groupe->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $id = $groupe->getId();
            $etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($etudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant_groupe.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'etudiant_groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
