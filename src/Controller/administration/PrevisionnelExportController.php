<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/PrevisionnelExportController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration;

use App\Classes\Hrs\HrsManager;
use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\Previsionnel\PrevisionnelExport;
use App\Classes\Previsionnel\PrevisionnelManager;
use App\Controller\BaseController;
use App\Exception\AnneeUniversitaireNotFoundException;
use App\Exception\MatiereNotFoundException;
use App\Exception\SemestreNotFoundException;
use App\Repository\SemestreRepository;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class PrevisionnelExportController.
 */
#[Route(path: '/administration/service-previsionnel/export')]
class PrevisionnelExportController extends BaseController
{
    #[Route(path: '/omega/{annee}', name: 'administration_previsionnel_export_omega', methods: 'GET')]
    public function exportOmega(PrevisionnelManager $previsionnelManager, HrsManager $hrsManager, PrevisionnelExport $myPrevisionnel, ?int $annee = 0): StreamedResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        if (0 === $annee && null !== $this->dataUserSession->getAnneeUniversitaire()) {
            $annee = $this->dataUserSession->getAnneePrevisionnel();
        }

        if (0 === $annee) {
            throw new AnneeUniversitaireNotFoundException();
        }

        $previsionnels = $previsionnelManager->getPrevisionnelDepartement(
            $this->getDepartement(), $annee);
        $hrs = $hrsManager->getHrsDepartementAnnee($this->getDepartement(), $annee);

        return $myPrevisionnel->exportOmegaDepartement($previsionnels, $hrs, $this->getDepartement());
    }

    #[Route(path: '/{annee}/{data}/{type}/{_format}', name: 'administration_previsionnel_export', requirements: ['_format' => 'csv|xlsx|pdf', 'type' => 'personnel|matiere|semestre'], methods: 'GET')]
    public function export(
        SemestreRepository $semestreRepository,
        PrevisionnelManager $previsionnelManager,
        TypeMatiereManager $typeMatiereManager, PrevisionnelExport $myPrevisionnel, int $annee, string $data, string $type, string $_format): StreamedResponse
    {
        $matiere = null;
        $previsionnels = null;
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $this->getDepartement());
        switch ($type) {
            case 'personnel':
                $previsionnels = $previsionnelManager->getPrevisionnelDepartement(
                    $this->getDepartement(), $annee);
                break;
            case 'matiere':
                $matiere = $typeMatiereManager->getMatiereFromSelect($data);
                if (null === $matiere) {
                    throw new MatiereNotFoundException();
                }
                $previsionnels = $previsionnelManager->getPrevisionnelMatiere($matiere->id, $matiere->typeMatiere, $annee);
                break;
            case 'semestre':
                $semestre = $semestreRepository->find($data);
                if (null === $semestre) {
                    throw new SemestreNotFoundException();
                }
                $previsionnels = $previsionnelManager->getPrevisionnelSemestre($semestre, $annee);

                break;
        }

        return $myPrevisionnel->export($this->getDepartement(), $annee, $matiere, $_format, $previsionnels);
    }
}
