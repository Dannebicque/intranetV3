<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/PersonnelDepartementController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 20/02/2024 18:55
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\PersonnelDepartement;
use App\Repository\PersonnelDepartementRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use function in_array;

/**
 * Class PersonnelDepartementController.
 */
#[Route(path: '/administratif/departement/personnel')]
class PersonnelDepartementController extends BaseController
{
    #[Route(path: '/{departement}', name: 'sa_personnel_departement_index')]
    public function index(PersonnelDepartementRepository $personnelDepartementRepository, Departement $departement): Response
    {
        return $this->render('super-administration/personnel_formation/index.html.twig', [
            'personnels' => $personnelDepartementRepository->getPersonnelByDepartements($departement),
            'departement' => $departement,
        ]);
    }

    #[Route(path: '/remove/{pf}', name: 'sa_personnel_departement_remove', methods: 'DELETE')]
    public function delete(Request $request, PersonnelDepartement $pf): Response
    {
        $id = $pf->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
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
     * @throws \JsonException
     */
    #[Route(path: '/modifier-droit/{pf}', name: 'sa_personnel_departement_modifier_droit', options: ['expose' => true])]
    public function modifierDroits(Request $request, PersonnelDepartement $pf): Response
    {
        $droit = $request->request->get('droit');
        if (in_array($droit, Constantes::ROLE_LISTE, true)) {
            $pf->clearRole();
            $pf->addRole($droit);
            $this->entityManager->flush();

            return $this->json($droit, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
