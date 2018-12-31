<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
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
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Semestre $semestre): Response
    {
        return $this->render('administration/etudiant_groupe/index.html.twig', [
            'semestre' => $semestre
        ]);
    }


    /**
     * @Route("/affecte/{typeGroupe}", name="administration_etudiant_groupe_affecte", options={"expose":true})
     * @param Semestre $semestre
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function affecte(EtudiantRepository $etudiantRepository,  TypeGroupe $typeGroupe): Response
    {
        $etudiants = $etudiantRepository->findBySemestre($typeGroupe->getSemestre());

        return $this->render('administration/etudiant_groupe/affecte.html.twig', [
            'typeGroupe' => $typeGroupe,
            'etudiants' => $etudiants
        ]);
    }

    /**
     * @Route("/change", name="administration_etudiant_groupe_change", options={"expose":true})
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function change(Request $request, EtudiantRepository $etudiantRepository, GroupeRepository $groupeRepository): Response
    {
        $cle = $request->request->get('id');

        $t = explode('-', $cle);
        $id = explode('_', $t[0]);

        //récupére l'étudiant
        dump($id[1]);
        $etu = $etudiantRepository->find($id[1]);
        dump($etu);
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
        //todo: a faire
        /*$id = $actualite->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {

            $this->entityManager->remove($actualite);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'actualite.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'actualite.delete.error.flash');*/
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
