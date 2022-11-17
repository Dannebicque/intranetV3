<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/EdtCompareController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/10/2022 18:54
 */

namespace App\Controller\administration;

use App\Classes\ComparePrevisionnel\ComparePrevisionnelPersonnel;
use App\Classes\ComparePrevisionnel\ComparePrevisonnelMatiere;
use App\Classes\Matieres\TypeMatiereManager;
use App\Controller\BaseController;
use App\Exception\MatiereNotFoundException;
use App\Repository\CalendrierRepository;
use App\Repository\EdtPlanningRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/emploi-du-temps/compare')]
class EdtCompareController extends BaseController
{
    public function __construct(protected EdtPlanningRepository $edtPlanningRepository, protected CalendrierRepository $calendrierRepository)
    {
    }

    #[Route(path: '/personnels/{source}', name: 'administration_edt_compare_personnels', methods: ['GET'])]
    public function comparePersonnel(ComparePrevisionnelPersonnel $comparePrevisionnelPersonnel, string $source): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());
        $comparatif = $comparePrevisionnelPersonnel->compareEdtPreviPersonnels($this->getDepartement(),
            $this->dataUserSession->getAnneePrevisionnel(), $source);

        return $this->render('administration/edtCompare/comparePersonnel.html.twig', [
            'comparatifs' => $comparatif,
            'personnels' => $comparePrevisionnelPersonnel->getPersonnels(),
            'source' => $source,
        ]);
    }

    #[Route(path: '/matieres/{source}', name: 'administration_edt_compare_matiere', methods: ['GET'])]
    public function compareMatiere(ComparePrevisonnelMatiere $comparePrevisonnelMatiere, string $source): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $this->getDepartement());
        $comparatif = $comparePrevisonnelMatiere->compareEdtPreviMatiere($this->dataUserSession->getDepartement(),
            $this->dataUserSession->getAnneePrevisionnel(), $source);

        return $this->render('administration/edtCompare/compareMatieres.html.twig', [
            'comparatifs' => $comparatif,
            'matieres' => $comparePrevisonnelMatiere->getMatieres(),
            'source' => $source,
        ]);
    }

    /**
     * @throws \App\Exception\MatiereNotFoundException
     */
    #[Route(path: '/ajax/enseignants/plusinfo/{matiere}', name: 'administration_edt_compare_plus_info')]
    public function comparePlusInfo(TypeMatiereManager $typeMatiereManager, string $matiere): Response
    {
        // todo: a gérer le cas des mutualisés et des prévisionnels
        $mat = $typeMatiereManager->getMatiereFromSelect($matiere);
        if (null === $mat) {
            throw new MatiereNotFoundException();
        }
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_EDT', $mat->semestre);
        // tester si celcat ou intranet
        $planning = $this->edtPlanningRepository->findBy(['idMatiere' => $mat->id, 'typeMatiere' => $mat->typeMatiere]);
        $calendrier = $this->calendrierRepository->findCalendrierArray($this->getAnneeUniversitaire());

        return $this->render('administration/edtCompare/_plusInfo.html.twig', [
            'planning' => $planning,
            'matiere' => $matiere,
            'calendrier' => $calendrier,
        ]);
    }
}
