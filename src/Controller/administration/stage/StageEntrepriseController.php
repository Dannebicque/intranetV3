<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/stage/StageEntrepriseController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 30/07/2019 08:40
 * @lastUpdate 30/07/2019 08:39
 */

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\Entreprise;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\MesClasses\MyExport;
use App\Repository\StageEtudiantRepository;
use PhpOffice\PhpSpreadsheet\Exception;
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
    public function index(StageEtudiantRepository $stageEtudiantRepository, StagePeriode $stagePeriode): Response
    {
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);
        $tEntreprises = [];
        /** @var StageEtudiant $entreprise */
        foreach ($entreprises as $entreprise) {
            if (array_key_exists(mb_strtolower($entreprise->getEntreprise()->getLibelle()), $tEntreprises)) {
                $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['entreprise'] = $entreprise->getEntreprise();
                $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['nbstagiaire']++;
            } else {
                $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['entreprise'] = $entreprise->getEntreprise();
                $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['nbstagiaire'] = 1;
            }
        }

        return $this->render('administration/stage/stage_entreprise/index.html.twig', [
            'entreprises' => $tEntreprises,
            'stagePeriode' => $stagePeriode
        ]);
    }

    /**
     * @Route("/details/{entreprise}", name="administration_stage_entreprise_detail", methods="GET")
     *
     * @param Entreprise $entreprise
     *
     * @return Response
     */
    public function details(Entreprise $entreprise): Response
    {
        return $this->render('administration/stage/stage_entreprise/details.html.twig', [
            'entreprise' => $entreprise,
        ]);
    }

    /**
     * @Route("/{uuid}/export.{_format}", name="administration_stage_entreprise_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     * @param MyExport               $myExport
     * @param                        $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(
        StageEtudiantRepository $stageEtudiantRepository,
        MyExport $myExport,
        StagePeriode $stagePeriode,
        $_format
    ): Response
    {
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);
        $response = $myExport->genereFichierGenerique(
            $_format,
            $entreprises,
            'dates',
            ['stage_periode_administration', 'utilisateur'],
            ['titre', 'texte', 'type', 'personnel' => ['nom', 'prenom']]
        );

        //todo: définir les colonnes. copier/coller ici

        return $response;
    }
}
