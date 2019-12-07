<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/stage/StageEntrepriseController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
     * @param StageEtudiantRepository $stageEtudiantRepository
     * @param StagePeriode            $stagePeriode
     *
     * @return Response
     */
    public function index(StageEtudiantRepository $stageEtudiantRepository, StagePeriode $stagePeriode): Response
    {
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);
        $tEntreprises = [];
        /** @var StageEtudiant $entreprise */
        foreach ($entreprises as $entreprise) {
            if ($entreprise->getEntreprise() !== null) {
                if (array_key_exists(mb_strtolower($entreprise->getEntreprise()->getLibelle()), $tEntreprises)) {
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['entreprise'] = $entreprise->getEntreprise();
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['nbstagiaire']++;
                } else {
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['entreprise'] = $entreprise->getEntreprise();
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getLibelle())]['nbstagiaire'] = 1;
                }
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
     * @param StageEtudiantRepository $stageEtudiantRepository
     * @param MyExport                $myExport
     * @param StagePeriode            $stagePeriode
     * @param                         $_format
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
        return $myExport->genereFichierGenerique(
            $_format,
            $entreprises,
            'Entreprises',
            ['stage_entreprise_administration', 'adresse'],
            ['entreprise' => ['raisonSociale', 'libelle', 'responsable' =>['nom', 'prenom', 'fonction', 'telephone', 'email']], 'tuteur' =>['nom', 'prenom', 'fonction', 'telephone', 'email'], 'serviceStageEntreprise', 'type', 'personnel' => ['nom', 'prenom']]
        );
    }
}
