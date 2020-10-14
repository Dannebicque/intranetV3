<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appPersonnel/SalleExamenController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 14/10/2020 21:57

namespace App\Controller\appPersonnel;

use App\Controller\BaseController;
use App\Classes\MySalleExamen;
use App\Entity\Constantes;
use App\Repository\PersonnelRepository;
use App\Repository\SalleExamenRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class QuizzController
 * @package App\Controller
 * @Route("/application/personnel/salle-examen")
 * @IsGranted("ROLE_PERMANENT")
 */
class SalleExamenController extends BaseController
{
    /**
     * @Route("/", name="application_personnel_salle_examen_index")
     * @param SalleExamenRepository $salleExamenRepository
     * @param PersonnelRepository   $personnelRepository
     *
     * @return Response
     */
    public function index(
        SalleExamenRepository $salleExamenRepository,
        PersonnelRepository $personnelRepository
    ): Response {
        return $this->render('appPersonnel/salle_examen/index.html.twig', [
            'salles'     => $salleExamenRepository->findByDepartement($this->dataUserSession->getDepartement()),
            'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement())
        ]);
    }

    /**
     * @param MySalleExamen $mySalleExamen
     * @param Request       $request
     *
     *
     * @return RedirectResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     * @Route("/application/salle-examen/genere/document",
     *     name="application_personnel_salle_examen_genere_placement",
     *     methods={"POST"})
     */
    public function generePlacement(MySalleExamen $mySalleExamen, Request $request): ?RedirectResponse
    {
        $capacite = $mySalleExamen->calculCapacite($request->request->get('salle'),
            $request->request->get('selectgroupes'), $request->request->get('detail_groupes'));
        if ($capacite) {
            $mySalleExamen->genereDocument(
                $request->request->get('dateeval'),
                $request->request->get('selectmatiere'),
                $request->request->get('enseignant1'),
                $request->request->get('enseignant2'),
                $this->dataUserSession->getDepartement()
            );

            return null;
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Salle trop petite');

        return $this->redirectToRoute('application_index', ['onglet' => 'salle_examen']);
    }
}
