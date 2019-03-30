<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\PersonnelDepartement;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PersonnelDepartementController
 * @package App\Controller\superAdministration
 * @Route("/super-administration/departement/personnel")
 */
class PersonnelDepartementController extends BaseController
{
    /**
     * @Route("/{departement}", name="sa_personnel_departement_index")
     * @param Departement $departement
     *
     * @return Response
     */
    public function index(Departement $departement): Response
    {
        return $this->render('super-administration/personnel_formation/index.html.twig', [
            'personnels' => $departement->getPersonnelDepartements(),
            'departement'  => $departement
        ]);
    }

    /**
     * @Route("/remove/{pf}", name="sa_personnel_departement_remove", methods="DELETE")
     * @param Request              $request
     * @param PersonnelDepartement $pf
     *
     * @return Response
     */
    public function delete(Request $request, PersonnelDepartement $pf): Response
    {
        $id = $pf->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($pf);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'personnel_formation.remove.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'personnel_formation.remove.error.flash');
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/modifier-droit/{pf}", name="sa_personnel_departement_modifier_droit", options={"expose":true})
     * @param Request              $request
     * @param PersonnelDepartement $pf
     *
     * @return Response
     */
    public function modifierDroits(Request $request, PersonnelDepartement $pf): Response
    {
        $droit = $request->request->get('droit');
        if ($pf !== null && \in_array($droit, Constantes::ROLE_LISTE, true)) {
            $pf->clearRole();
            $pf->addRole($droit);
            $this->entityManager->flush();
            return $this->json($droit, Response::HTTP_OK);
        }
        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);

    }
}
