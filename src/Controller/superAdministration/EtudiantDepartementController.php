<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/superAdministration/PersonnelDepartementController.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/28/19 8:47 PM
 *  * @lastUpdate 4/28/19 8:46 PM
 *  *
 *
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Departement;
use App\Entity\Etudiant;
use App\Entity\PersonnelDepartement;
use App\Repository\EtudiantRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function in_array;

/**
 * Class PersonnelDepartementController
 * @package App\Controller\superAdministration
 * @Route("/super-administration/departement/etudiant")
 */
class EtudiantDepartementController extends BaseController
{
    /**
     * @Route("/{departement}", name="sa_etudiant_departement_index")
     * @param Departement $departement
     *
     * @return Response
     */
    public function index(EtudiantRepository $etudiantRepository, Departement $departement): Response
    {
        return $this->render('super-administration/etudiant_departement/index.html.twig', [
            'etudiants' => $etudiantRepository->getByDepartement($departement, null),
            'departement'  => $departement
        ]);
    }

    /**
     * @Route("/{departement}/add", name="sa_etudiant_departement_add")
     * @param Departement $departement
     *
     * @return Response
     */
    public function add(Departement $departement): Response
    {
        return $this->render('super-administration/etudiant_departement/add.html.twig', [
            'departement'  => $departement
        ]);
    }

    /**
     * @Route("/remove/{id}", name="sa_etudiant_remove", methods="DELETE")
     * @param Request              $request
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
