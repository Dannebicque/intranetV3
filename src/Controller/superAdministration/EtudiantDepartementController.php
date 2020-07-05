<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/EtudiantDepartementController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Etudiant;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class PersonnelDepartementController
 * @package App\Controller\superAdministration
 * @Route("/administratif/departement/etudiant")
 */
class EtudiantDepartementController extends BaseController
{
    /**
     * @Route("/{departement}", name="sa_etudiant_departement_index")
     * @param Departement        $departement
     *
     * @return Response
     */
    public function index(Departement $departement): Response
    {
        return $this->render('super-administration/etudiant_departement/index.html.twig', [
            'etudiants'   => $departement->getEtudiants(),
            'departement' => $departement
        ]);
    }

    /**
     * @Route("/remove/{id}", name="sa_etudiant_remove", methods="DELETE")
     * @param Request  $request
     *
     * @param Etudiant $etudiant
     *
     * @return Response
     */
    public function delete(Request $request, Etudiant $etudiant): Response
    {
        $id = $etudiant->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $etudiant->setDeleted(true);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'etudiant_departement.remove.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'etudiant_departement.remove.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
