<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StageEntrepriseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Entreprise;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Repository\StageEtudiantRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function array_key_exists;

/**
 * Class StageEntrepriseController.
 *
 * @Route("/administration/stage/entreprise")
 */
class StageEntrepriseController extends BaseController
{
    /**
     * @Route("/{uuid}", name="administration_stage_entreprise_index")
     * @ParamConverter("stagePeriode", options={"mapping": {"uuid": "uuid"}})
     */
    public function index(StageEtudiantRepository $stageEtudiantRepository, StagePeriode $stagePeriode): Response
    {
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);
        $tEntreprises = [];
        /** @var StageEtudiant $entreprise */
        foreach ($entreprises as $entreprise) {
            if (null !== $entreprise->getEntreprise()) {
                if (array_key_exists(mb_strtolower($entreprise->getEntreprise()->getRaisonSociale()), $tEntreprises)) {
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['entreprise'] = $entreprise->getEntreprise();
                    ++$tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['nbstagiaire'];
                } else {
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['entreprise'] = $entreprise->getEntreprise();
                    $tEntreprises[mb_strtolower($entreprise->getEntreprise()->getRaisonSociale())]['nbstagiaire'] = 1;
                }
            }
        }

        return $this->render('administration/stage/stage_entreprise/index.html.twig', [
            'entreprises'  => $tEntreprises,
            'stagePeriode' => $stagePeriode,
        ]);
    }

    /**
     * @Route("/details/{entreprise}", name="administration_stage_entreprise_detail", methods="GET")
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
     *
     */
    public function export(
        StageEtudiantRepository $stageEtudiantRepository,
        MyExport $myExport,
        StagePeriode $stagePeriode,
        $_format
    ): Response {
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);

        return $myExport->genereFichierGenerique(
            $_format,
            $entreprises,
            'Entreprises',
            ['stage_entreprise_administration', 'adresse'],
            [
                'entreprise' => ['raisonSociale', 'responsable' => ['nom', 'prenom', 'fonction', 'telephone', 'email']],
                'tuteur'     => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'serviceStageEntreprise',
                'type',
                'personnel'  => ['nom', 'prenom'],
                'dateDebutStage',
                'dateFinStage',
            ]
        );
    }
}
