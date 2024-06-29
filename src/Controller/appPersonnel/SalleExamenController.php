<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/SalleExamenController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:35
 */

namespace App\Controller\appPersonnel;

use App\Classes\MySalleExamen;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Repository\PersonnelRepository;
use App\Repository\SalleExamenRepository;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 * Class QuizzController.
 */
#[Route(path: '/application/personnel/salle-examen')]
#[IsGranted('ROLE_PERMANENT')]
class SalleExamenController extends BaseController
{
    #[Route(path: '/', name: 'application_personnel_salle_examen_index')]
    public function index(SemestreRepository $semestreRepository, SalleExamenRepository $salleExamenRepository, PersonnelRepository $personnelRepository): Response
    {
        $this->breadcrumbHelper->addItem('Applications', 'application_index');
        $this->breadcrumbHelper->addLastItem('Salles d\'examens');

        return $this->render('appPersonnel/salle_examen/index.html.twig', [
            'semestres' => $semestreRepository->findByDepartementActif($this->getDepartement()),
            'salles' => $salleExamenRepository->findByDepartement($this->getDepartement()),
            'personnels' => $personnelRepository->findByDepartement($this->getDepartement()),
        ]);
    }

    /**
     * @throws SyntaxError
     * @throws LoaderError
     * @throws RuntimeError
     */
    #[Route(path: '/application/salle-examen/genere/document', name: 'application_personnel_salle_examen_genere_placement', methods: ['POST'])]
    public function generePlacement(
        SemestreRepository $semestreRepository,
        MySalleExamen $mySalleExamen, Request $request): Response
    {
        $capacite = $mySalleExamen->calculCapacite($request->request->get('salle'),
            $request->request->get('selectgroupes'), $request->request->all()['detail_groupes']);
        $semestre = $semestreRepository->find($request->request->get('selectsemestre'));
        if ($capacite && null !== $semestre) {
            return $mySalleExamen->genereDocument(
                $request->request->get('dateeval'),
                $request->request->get('selectmatiere'),
                $request->request->get('enseignant1'),
                $request->request->get('enseignant2'),
                $semestre
            );
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'Salle trop petite');

        return $this->redirectToRoute('application_index', ['onglet' => 'salle_examen']);
    }
}
