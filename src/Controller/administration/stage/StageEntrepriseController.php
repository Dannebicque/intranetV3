<?php

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\StagePeriode;
use App\MesClasses\MyExport;
use App\Repository\StagePeriodeRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageEntrepriseController
 * @package App\Controller\administration\stage
 * @Route("/administration/stage/entreprise")
 *
 */
class StageEntrepriseController extends BaseController
{
    /**
     * @Route("/{uuid}", name="administration_stage_entreprise_index")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param StagePeriode $stagePeriode
     *
     * @return Response
     */
    public function index(StagePeriode $stagePeriode): Response
    {
        return $this->render('administration/stage/stage_entreprise/index.html.twig', [
            'entreprises'  => [],
            'stagePeriode' => $stagePeriode
        ]);
    }

    /**
     * @Route("/export.{_format}", name="administration_stage_entreprise_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param StagePeriodeRepository $stagePeriodeRepository
     * @param MyExport               $myExport
     * @param                        $_format
     *
     * @return Response
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function export(StagePeriodeRepository $stagePeriodeRepository, MyExport $myExport, $_format): Response
    {
        $dates = $stagePeriodeRepository->findByFormation($this->dataUserSession->getFormation());
        $response = $myExport->genereFichierGenerique(
            $_format,
            $dates,
            'dates',
            ['stage_periode_administration', 'utilisateur'],
            ['titre', 'texte', 'type', 'personnel' => ['nom', 'prenom']]
        );
        //todo: définir les colonnes. copier/coller ici

        return $response;
    }
}
