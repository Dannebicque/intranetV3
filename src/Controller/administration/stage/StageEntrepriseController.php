<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StageEntrepriseController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:23
 */

namespace App\Controller\administration\stage;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Entreprise;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Repository\StageEtudiantRepository;
use function array_key_exists;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class StageEntrepriseController.
 */
#[Route(path: '/administration/stage/entreprise')]
class StageEntrepriseController extends BaseController
{
    #[Route(path: '/{uuid}', name: 'administration_stage_entreprise_index')]
    #[ParamConverter('stagePeriode', options: ['mapping' => ['uuid' => 'uuid']])]
    public function index(StageEtudiantRepository $stageEtudiantRepository, StagePeriode $stagePeriode): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
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
            'entreprises' => $tEntreprises,
            'stagePeriode' => $stagePeriode,
        ]);
    }

    #[Route(path: '/details/{entreprise}', name: 'administration_stage_entreprise_detail', methods: 'GET')]
    public function details(Entreprise $entreprise): Response
    {
        return $this->render('administration/stage/stage_entreprise/details.html.twig', [
            'entreprise' => $entreprise,
        ]);
    }

    #[Route(path: '/{uuid}/export.{_format}', name: 'administration_stage_entreprise_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    #[ParamConverter('stagePeriode', options: ['mapping' => ['uuid' => 'uuid']])]
    public function export(
        MySerializer $mySerializer,
        StageEtudiantRepository $stageEtudiantRepository, MyExport $myExport, StagePeriode $stagePeriode, string $_format): Response
    {
        // feature: Développer de manière général en super Admin...
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $entreprises = $stageEtudiantRepository->findEntreprisesByPeriode($stagePeriode);

        $data = $mySerializer->getDataFromSerialization(
            $entreprises,
            [
                // todo: gérer le 3eme niveau...
                'entreprise' => ['raisonSociale', 'responsable' => ['nom', 'prenom', 'fonction', 'telephone', 'email']],
                'tuteur' => ['nom', 'prenom', 'fonction', 'telephone', 'email'],
                'serviceStageEntreprise',
                'personnel' => ['nom', 'prenom'],
                'dateDebutStage',
                'dateFinStage',
            ],
            ['stage_entreprise_administration', 'adresse'],
            ['dateDebutStage' => MySerializer::ONLY_DATE, 'dateFinStage' => MySerializer::ONLY_DATE]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'entreprises_'.$stagePeriode->getSemestre()?->getLibelle(),
        );
    }
}
