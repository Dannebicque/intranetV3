<?php
/**
 * Copyright (C) 8 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/EtudiantGroupeController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 23/08/2019 11:28
 * @lastUpdate 23/08/2019 11:28
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use App\Entity\TypeGroupe;
use App\Repository\EtudiantRepository;
use App\Repository\GroupeRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CommissionAbsenceController
 * @package App\Controller\administration
 * @Route("/administration/etudiant/groupe")
 */
class EtudiantGroupeController extends BaseController
{
    /**
     * @Route("/semestre/{semestre}", name="administration_etudiant_groupe_semestre_index")
     * @param Semestre $semestre
     *
     * @return Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant_groupe/index.html.twig', [
            'semestre' => $semestre
        ]);
    }


    /**
     * @Route("/affecte/{typeGroupe}", name="administration_etudiant_groupe_affecte", options={"expose":true})
     * @param EtudiantRepository $etudiantRepository
     * @param TypeGroupe         $typeGroupe
     *
     * @return Response
     */
    public function affecte(EtudiantRepository $etudiantRepository, TypeGroupe $typeGroupe): Response
    {
        $etudiants = $etudiantRepository->findBySemestre($typeGroupe->getSemestre());

        return $this->render('administration/etudiant_groupe/affecte.html.twig', [
            'typeGroupe' => $typeGroupe,
            'etudiants'  => $etudiants
        ]);
    }

    /**
     * @Route("/synchro/apogee/{semestre}", name="administration_etudiant_groupe_synchro_apogee")
     * @param EtudiantRepository $etudiantRepository
     *
     * @param Semestre           $semestre
     *
     * @return Response
     */
    public function synchroApogee(EtudiantRepository $etudiantRepository, Semestre $semestre): Response
    {

        $this->addFlashBag('success', 'groupes.synchronises');

        return $this->redirectToRoute('administration_etudiant_groupe_semestre_index',
            ['semestre' => $semestre->getId()]);
    }

    /**
     * @Route("/synchro/parent/{semestre}", name="administration_etudiant_groupe_synchro_parent")
     *
     * @param GroupeRepository $groupeRepository
     * @param Semestre         $semestre
     *
     * @return Response
     */
    public function synchroParent(GroupeRepository $groupeRepository, Semestre $semestre): Response
    {
        $groupes = $groupeRepository->findBySemestre($semestre);
        /** @var Groupe $groupe */
        foreach ($groupes as $groupe) {
            //pas d'enfant c'est le groupe de plus bas  niveau
            if (count($groupe->getEnfants()) === 0) {
                $groupeParents = [];
                $g = $groupe;
                while ($g->getParent() !== null) {
                    $groupeParents[] = $g->getParent();
                    $g = $g->getParent();
                }

                foreach ($groupe->getEtudiants() as $etudiant) {
                    //supprimer les groupes de l'étudiant
                    foreach ($etudiant->getGroupes() as $gr) {
                        $etudiant->removeGroupe($gr);
                    }
                    //remettre le groupe en cours
                    $etudiant->addGroupe($groupe);
                    //ajouter les parents
                    foreach ($groupeParents as $gp) {
                        $etudiant->addGroupe($gp);
                    }
                }
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag('success', 'groupes.parents.synchronises');

        return $this->redirectToRoute('administration_etudiant_groupe_semestre_index',
            ['semestre' => $semestre->getId()]);

    }

    /**
     * @Route("/change", name="administration_etudiant_groupe_change", options={"expose":true})
     *
     * @param Request            $request
     * @param EtudiantRepository $etudiantRepository
     * @param GroupeRepository   $groupeRepository
     *
     * @return Response
     */
    public function change(
        Request $request,
        EtudiantRepository $etudiantRepository,
        GroupeRepository $groupeRepository
    ): Response {
        $cle = $request->request->get('id');

        $t = explode('-', $cle);
        $id = explode('_', $t[0]);

        //récupére l'étudiant
        $etu = $etudiantRepository->find($id[1]);
        if ($etu !== null) {
            //efface l'ancien groupe
            if ($request->request->get('oldgroupe') !== 0) {
                $oldgroupe = $groupeRepository->find($request->request->get('oldgroupe'));
                if ($oldgroupe !== null) {
                    $oldgroupe->removeEtudiant($etu);
                    $this->entityManager->persist($oldgroupe);
                    $this->entityManager->flush();
                }

            }


            if ($t[1] !== 0) {
                $groupe = $groupeRepository->find(trim($t[1])); //récupérer groupe etudiant...
                if ($groupe) {
                    //supprimer l'ancier groupe...
                    $groupe->addEtudiant($etu);
                    $this->entityManager->persist($groupe);
                    $this->entityManager->flush();
                }
            }

            return new Response('true', Response::HTTP_OK);
        }

        return new Response('false', Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}", name="administration_etudiant_groupe_delete", methods="DELETE")
     * @param Request  $request
     * @param Groupe   $groupe
     *
     * @param Etudiant $etudiant
     *
     * @return Response
     */
    public function delete(Request $request, Groupe $groupe, Etudiant $etudiant): Response
    {

        if ($this->isCsrfTokenValid('delete' . $groupe->getId(), $request->request->get('_token'))) {
            $etudiant->removeGroupe($groupe);
            $groupe->removeEtudiant($etudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'etudiant_groupe.delete.success.flash');

            return $this->json('ok', Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'etudiant_groupe.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
