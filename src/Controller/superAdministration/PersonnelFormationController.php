<?php

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Formation;
use App\Entity\PersonnelFormation;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PersonnelFormationController
 * @package App\Controller\superAdministration
 * @Route("/super-administration/formation/personnel")
 */
class PersonnelFormationController extends BaseController
{
    /**
     * @Route("/{formation}", name="sa_personnel_formation_index")
     * @param Formation $formation
     *
     * @return Response
     */
    public function index(Formation $formation): Response
    {
        return $this->render('super-administration/personnel_formation/index.html.twig', [
            'personnels' => $formation->getPersonnelFormations(),
            'formation'  => $formation
        ]);
    }

    /**
     * @Route("/remove/{pf}", name="sa_personnel_formation_remove", methods="DELETE")
     * @param Request            $request
     * @param PersonnelFormation $pf
     *
     * @return Response
     */
    public function delete(Request $request, PersonnelFormation $pf): Response
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
     * @Route("/modifier-droit/{pf}", name="sa_personnel_formation_modifier_droit", options={"expose":true})
     * @param Request            $request
     * @param PersonnelFormation $pf
     *
     * @return Response
     */
    public function modifierDroits(Request $request, PersonnelFormation $pf): Response
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
