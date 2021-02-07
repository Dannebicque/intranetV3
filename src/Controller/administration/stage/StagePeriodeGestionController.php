<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeGestionController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Classes\MyStage;
use App\Classes\Stage\MyExportStage;
use App\Controller\BaseController;
use App\Entity\StagePeriode;
use App\Repository\StagePeriodeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeGestionController.
 *
 * @Route("/administration/stage/periode/gestion")
 */
class StagePeriodeGestionController extends BaseController
{
    /**
     * @Route("/{uuid}/export.{_format}", name="administration_stage_periode_gestion_export", methods="GET",
     *                             requirements={"_format"="csv|pdf"})
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     *
     * @param $_format
     */
    public function export(MyExport $myExport, StagePeriode $stagePeriode, $_format): Response
    {
        $stageEtudiants = $stagePeriode->getStageEtudiants();

        return $myExport->genereFichierGenerique(
            $_format,
            $stageEtudiants,
            'periode_stage_' . $stagePeriode->getLibelle(),
            ['stage_periode_gestion', 'utilisateur', 'stage_entreprise_administration', 'adresse'],
            [
                'etudiant'            => ['nom', 'prenom'],
                'entreprise'          => ['raisonSociale'],
                //'adresse' => ['adresse1','adresse2', 'cp', 'ville', 'pays']
                'tuteur'              => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'tuteurUniversitaire' => ['nom', 'prenom', 'mailUniv'],
                'dateDebutStage',
                'dateFinStage',
            ]
        );
    }

    /**
     * @Route("/{uuid}/export.xlsx", name="administration_stage_periode_gestion_export_xlsx", methods="GET")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     */
    public function exportXlsx(MyExportStage $myExport, StagePeriode $stagePeriode): Response
    {
        return $myExport->genereFichier($stagePeriode);
    }

    /**
     * @Route("/{uuid}", name="administration_stage_periode_gestion")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     */
    public function periode(
        StagePeriodeRepository $stagePeriodeRepository,
        MyStage $myStage,
        StagePeriode $stagePeriode
    ): Response {
        $periodes = [];
        foreach ($this->dataUserSession->getDiplomes() as $diplome) {
            $pers = $stagePeriodeRepository->findByDiplome($diplome, $diplome->getAnneeUniversitaire());
            foreach ($pers as $periode) {
                $periodes[] = $periode;
            }
        }

        return $this->render('administration/stage/stage_periode_gestion/index.html.twig', [
            'stagePeriode' => $stagePeriode,
            'periodes'     => $periodes,
            'myStage'      => $myStage->getDataPeriode($stagePeriode),
        ]);
    }
}
