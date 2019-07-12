<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/RattrapagePlanningController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/12/19 11:21 AM
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Diplome;
use App\Entity\Rattrapage;
use App\MesClasses\MyExport;
use App\MesClasses\Tools;
use App\Repository\RattrapageRepository;
use DateTime;
use PhpOffice\PhpSpreadsheet\Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class RattrapageController
 * @package App\Controller\administration
 * @Route("/administration/rattrapage/planning")
 */
class RattrapagePlanningController extends BaseController
{
    /**
     * @Route("/{diplome}", name="administration_rattrapage_planning_index")
     * @param RattrapageRepository $rattrapageRepository
     *
     * @param Diplome              $diplome
     *
     * @return Response
     */
    public function index(
        RattrapageRepository $rattrapageRepository,
        Diplome $diplome
    ): Response {
        return $this->render('administration/rattrapagePlanning/index.html.twig', [
            'rattrapages' => $rattrapageRepository->findValidByDiplome($diplome, $diplome->getAnneeUniversitaire()),
            'diplome'     => $diplome
        ]);
    }

    /**
     * @Route("/{diplome}/export.{_format}", name="administration_rattrapage_planning_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport             $myExport
     * @param RattrapageRepository $rattrapageRepository
     * @param Diplome              $diplome
     * @param                      $_format
     *
     * @return Response
     * @throws Exception
     */
    public function export(
        MyExport $myExport,
        RattrapageRepository $rattrapageRepository,
        Diplome $diplome,
        $_format
    ): Response {
        $rattrapages = $rattrapageRepository->findValidByDiplome($diplome, $diplome->getAnneeUniversitaire());
        $response = $myExport->genereFichierGenerique(
            $_format,
            $rattrapages,
            'rattrapages_' . $diplome->getLibelle(),
            ['rattrapage_administration', 'utilisateur', 'matiere'],
            [
                'etudiant'  => ['nom', 'prenom'],
                'dateEval',
                'heureEval',
                'duree',
                'matiere'   => ['libelle'],
                'personnel' => ['nom', 'prenom'],
                'dateRattrapage',
                'heureRattrapage',
                'salle',
                'etatDemande'
            ]
        );

        return $response;
    }

    /**
     * @Route("/change/{uuid}/{type}", name="administration_rattrapage_planning_change", methods="POST",
     *                                    requirements={"type"="date|heure|salle"}, options={"expose":true})
     * @ParamConverter("rattrapage", options={"mapping": {"uuid": "uuid"}})
     * @param Request    $request
     * @param Rattrapage $rattrapage
     *
     * @param            $type
     *
     * @return Response
     * @throws \Exception
     */
    public function change(Request $request, Rattrapage $rattrapage, $type): Response
    {
        $data = $request->request->get('data');
        switch ($type) {
            case 'date':
                $rattrapage->setDateRattrapage(Tools::convertDateToObject($data));
                break;
            case 'heure':
                $rattrapage->setHeureRattrapage(new DateTime($data));
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
     * @Route("/update_global/{type}/{diplome}", name="administration_rattrapage_update_global", methods="POST",
     *                                    requirements={"type"="salle|heure|date"}, options={"expose":true})
     * @param EventDispatcherInterface $eventDispatcher
     *
     * @return Response
     * @throws \Exception
     */
    public function updateGlobal(
        Request $request,
        RattrapageRepository $rattrapageRepository,
        $type,
        Diplome $diplome
    ): Response {
        $valeur = $request->request->get('valeur');

        $rattrapages = $rattrapageRepository->findValidByDiplome($diplome, $diplome->getAnneeUniversitaire());

        /** @var Rattrapage $rattrapage */
        foreach ($rattrapages as $rattrapage) {
            switch ($type) {
                case 'salle':
                    $rattrapage->setSalle($valeur);
                    break;
                case 'heure':
                    $rattrapage->setHeureRattrapage(new DateTime($valeur));
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
