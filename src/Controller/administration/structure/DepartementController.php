<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/structure/DepartementController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2023 09:14
 */

namespace App\Controller\administration\structure;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use Symfony\Component\Form\Exception\LogicException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function count;

#[Route(path: '/administration/structure/departement')]
class DepartementController extends BaseController
{
    #[Route(path: '/{id}', name: 'administration_departement_show', methods: 'GET')]
    public function show(Departement $departement): Response
    {
        return $this->render('structure/departement/show.html.twig', ['departement' => $departement]);
    }

    /**
     * @throws LogicException
     */
    #[Route(path: '/{id}/edit', name: 'administration_departement_edit', methods: 'GET|POST')]
    public function delete(Request $request, Departement $departement): Response
    {
        $id = $departement->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN')) &&
            0 === count($departement->getDiplomes()) &&
            0 === count($departement->getHrs()) &&
            0 === count($departement->getEtudiants()) &&
            0 === count($departement->getPersonnelDepartements()) &&
            0 === count($departement->getTypeDocuments()) &&
            0 === count($departement->getActualites())) {
            $this->entityManager->remove($departement);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'departement.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'departement.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
