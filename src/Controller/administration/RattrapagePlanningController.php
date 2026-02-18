<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/RattrapagePlanningController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/01/2026 10:10
 */

namespace App\Controller\administration;

use App\Classes\Matieres\TypeMatiereManager;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Entity\Rattrapage;
use App\Repository\RattrapageRepository;
use App\Utils\Tools;
use Exception;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

/**
 * Class RattrapageController.
 */
#[Route(path: '/administration/rattrapage/planning')]
class RattrapagePlanningController extends BaseController
{
    #[Route(path: '/{diplome}', name: 'administration_rattrapage_planning_index')]
    public function index(TypeMatiereManager $typeMatiereManager, RattrapageRepository $rattrapageRepository, Diplome $diplome): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $diplome);

        return $this->render('administration/rattrapagePlanning/index.html.twig', [
            'rattrapages' => $rattrapageRepository->findValidByDiplome($diplome, $this->getAnneeUniversitaire()),
            'diplome' => $diplome,
            'matieres' => $typeMatiereManager->findByDiplomeArray($diplome),
            'options' => [
                'data-options' => [
                    'dateFormat' => 'd/m/Y',
                ],
            ],
        ]);
    }

    #[Route(path: '/{diplome}/export.{_format}', name: 'administration_rattrapage_planning_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, RattrapageRepository $rattrapageRepository, Diplome $diplome, string $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $diplome);
        $rattrapages = $rattrapageRepository->findValidByDiplome($diplome, $this->getAnneeUniversitaire());

        $data = $mySerializer->getDataFromSerialization(
            $rattrapages,
            [
                'etudiant' => ['nom', 'prenom'],
                'dateEval',
                'heureEval',
                'duree',
                'matiere' => ['libelle'],
                'personnel' => ['nom', 'prenom'],
                'dateRattrapage',
                'heureRattrapage',
                'salle',
                'etatDemande',
            ],
            ['rattrapage_administration', 'utilisateur', 'matiere'],
            ['dateEval' => MySerializer::ONLY_DATE, 'dateRattrapage' => MySerializer::ONLY_DATE, 'heureRattrapage' => MySerializer::ONLY_TIME]
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'rattrapages_'.$diplome->getLibelle(),
        );
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/change/{uuid}/{type}', name: 'administration_rattrapage_planning_change', requirements: ['type' => 'date|heure|salle'], options: ['expose' => true], methods: 'POST')]
    public function change(Request $request, #[MapEntity(mapping: ['uuid' => 'uuid'])]
    Rattrapage                     $rattrapage, string $type): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $rattrapage->getSemestre());
        $data = $request->request->get('data');
        switch ($type) {
            case 'date':
                $rattrapage->setDateRattrapage(Tools::convertDateToObject($data));
                break;
            case 'heure':
                $rattrapage->setHeureRattrapage(Tools::convertTimeToObject($data));
                break;
            case 'salle':
                $rattrapage->setSalle($data);
                break;
            default:
                return new Response('', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $this->entityManager->flush();

        return $this->json(true, Response::HTTP_OK);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/update_global/{type}/{diplome}', name: 'administration_rattrapage_update_global', requirements: ['type' => 'salle|heure|date'], options: ['expose' => true], methods: 'POST')]
    public function updateGlobal(Request $request, RattrapageRepository $rattrapageRepository, string $type, Diplome $diplome): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_SCOL', $diplome);
        $valeur = $request->request->get('valeur');
        $rattrapages = $rattrapageRepository->findValidByDiplome($diplome, $this->getAnneeUniversitaire());
        /** @var Rattrapage $rattrapage */
        foreach ($rattrapages as $rattrapage) {
            switch ($type) {
                case 'salle':
                    $rattrapage->setSalle($valeur);
                    break;
                case 'heure':
                    $rattrapage->setHeureRattrapage(Tools::convertTimeToObject($valeur));
                    break;
                case 'date':
                    $rattrapage->setDateRattrapage(Tools::convertDateToObject($valeur));
                    break;
            }
            $this->entityManager->persist($rattrapage);
        }
        $this->entityManager->flush();

        return $this->json(true, Response::HTTP_OK);
    }
}
