<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StagePeriodeGestionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:23
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Classes\MyStage;
use App\Classes\Stage\MyExportStage;
use App\Controller\BaseController;
use App\Entity\StagePeriode;
use App\Repository\StagePeriodeRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeGestionController.
 */
#[Route(path: '/administration/stage/periode/gestion')]
class StagePeriodeGestionController extends BaseController
{
    #[Route(path: '/{uuid}/export.{_format}', name: 'administration_stage_periode_gestion_export', requirements: ['_format' => 'csv|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport     $myExport, #[MapEntity(mapping: ['uuid' => 'uuid'])]
        StagePeriode $stagePeriode, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $stageEtudiants = $stagePeriode->getStageEtudiants();

        $data = $mySerializer->getDataFromSerialization(
            $stageEtudiants,
            [
                'etudiant' => ['nom', 'prenom'],
                'entreprise' => ['raisonSociale'],
                // 'adresse' => ['adresse1','adresse2', 'cp', 'ville', 'pays']
                'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'tuteurUniversitaire' => ['nom', 'prenom', 'mailUniv'],
                'dateDebutStage',
                'dateFinStage',
            ],
            ['stage_periode_gestion', 'utilisateur', 'stage_entreprise_administration', 'adresse'],
            ['dateDebutStage' => MySerializer::ONLY_DATE, 'dateFinStage' => MySerializer::ONLY_DATE]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'periode_stage_'.$stagePeriode->getLibelle(),
        );
    }

    #[Route(path: '/{uuid}/export.xlsx', name: 'administration_stage_periode_gestion_export_xlsx', methods: 'GET')]
    public function exportXlsx(MyExportStage $myExport, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    StagePeriode                             $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());

        return $myExport->genereFichier($stagePeriode);
    }

    #[Route(path: '/{uuid}', name: 'administration_stage_periode_gestion')]
    public function periode(StagePeriodeRepository $stagePeriodeRepository, MyStage $myStage, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    StagePeriode                                   $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $periodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $pers = $stagePeriodeRepository->findByDiplome($diplome, $diplome->getAnneeUniversitaire());
            foreach ($pers as $periode) {
                $periodes[] = $periode;
            }
        }

        return $this->render('administration/stage/stage_periode_gestion/index.html.twig', [
            'stagePeriode' => $stagePeriode,
            'periodes' => $periodes,
            'myStage' => $myStage->getDataPeriode($stagePeriode),
        ]);
    }
}
