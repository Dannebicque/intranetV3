<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StagePeriodeGestionController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 06/08/2020 08:26

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\StagePeriode;
use App\Classes\MyStage;
use App\Repository\StageEtudiantRepository;
use App\Repository\StagePeriodeRepository;
use PhpOffice\PhpSpreadsheet\Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StagePeriodeGestionController
 * @package App\Controller\administration
 * @Route("/administration/stage/periode/gestion")
 *
 */
class StagePeriodeGestionController extends BaseController
{
    /**
     * @Route("/{uuid}/export.{_format}", name="administration_stage_periode_gestion_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param MyExport               $myExport
     * @param StagePeriodeRepository $stagePeriodeRepository
     * @param                        $_format
     *
     * @param StagePeriode           $stagePeriode
     *
     * @return Response
     * @throws Exception
     */
    public function export(MyExport $myExport, StagePeriode $stagePeriode, $_format): Response
    {
        $stageEtudiants = $stagePeriode->getStageEtudiants();

        return $myExport->genereFichierGenerique(
            $_format,
            $stageEtudiants,
            'periode_stage_' . $stagePeriode->getLibelle(),
            ['stage_periode_gestion', 'utilisateur', 'stage_entreprise_administration', 'adresse'],
            ['etudiant'            => ['nom', 'prenom'],
             'entreprise'          => ['raisonSociale', 'libelle'],
             'tuteur'              => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
             'tuteurUniversitaire' => ['nom', 'prenom'],
             'dateDebutStage',
             'dateFinStage'
            ]
        );
    }

    /**
     * @Route("/{uuid}", name="administration_stage_periode_gestion")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param StagePeriodeRepository $stagePeriodeRepository
     * @param MyStage                $myStage
     * @param StagePeriode           $stagePeriode
     *
     * @return Response
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
            'myStage'      => $myStage->getDataPeriode($stagePeriode)
        ]);
    }


}
