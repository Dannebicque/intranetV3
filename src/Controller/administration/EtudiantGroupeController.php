<?php

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Etudiant;
use App\Entity\Groupe;
use App\Entity\Semestre;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class CommissionAbsenceController
 * @package App\Controller\administration
 * @Route({"fr":"administration/etudiant/groupe",
 *         "en":"administration/student/group"}
 *)
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
     * @Route("/{id}", name="administration_etudiant_groupe_delete", methods="DELETE")
     * @param Request $request
     * @param Groupe  $groupe
     *
     * @return Response
     */
    public function delete(Request $request, Groupe $groupe, Etudiant $etudiant): Response
    {
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
