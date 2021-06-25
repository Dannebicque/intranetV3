<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/appEtudiant/StageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:55
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\Constantes;
use App\Entity\StageEtudiant;
use App\Event\StageEvent;
use App\Form\StageEtudiantEtudiantType;
use App\Repository\StagePeriodeRepository;
use Carbon\Carbon;
use DateTime;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class StageController.
 *
 * @Route("/application/etudiant/stage")
 */
class StageController extends BaseController
{
    /**
     * @Route("/", name="application_etudiant_stage_index")
     */
    public function index(StagePeriodeRepository $stagePeriodeRepository): Response
    {
        $stagePeriodes = $stagePeriodeRepository->findStageEtudiant($this->getConnectedUser()->getSemestre());
        $stageEtudiants = [];

        foreach ($this->getConnectedUser()->getStageEtudiants() as $stage) {
            if (null !== $stage->getStagePeriode()) {
                $stageEtudiants[$stage->getStagePeriode()->getId()] = $stage;
            }
        }

        return $this->render('appEtudiant/stage/index.html.twig', [
            'stagePeriodes'  => $stagePeriodes,
            'stageEtudiants' => $stageEtudiants,
        ]);
    }

    /**
     * @Route("/details/{id}", name="application_etudiant_stage_detail", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function detailsStage(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appEtudiant/stage/details.html.twig', [
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    /**
     * @Route("/formulaire/{stageEtudiant}", name="application_etudiant_stage_formulaire", methods="GET|POST")
     * @ParamConverter("stageEtudiant", options={"mapping": {"stageEtudiant": "uuid"}})
     *
     * @throws Exception
     */
    public function create(
        EventDispatcherInterface $eventDispatcher,
        Request $request,
        StageEtudiant $stageEtudiant
    ): Response {
        if (null !== $stageEtudiant->getStagePeriode()) {
            $form = $this->createForm(StageEtudiantEtudiantType::class, $stageEtudiant, [
                'flexible' => $stageEtudiant->getStagePeriode()->getDatesFlexibles(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]);
            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $stageEtudiant->setEtatStage(StageEtudiant::ETAT_STAGE_DEPOSE);
                $stageEtudiant->setDateDepotFormulaire(Carbon::now());
                $this->entityManager->flush();

                $event = new StageEvent($stageEtudiant);
                $eventDispatcher->dispatch($event, StageEvent::CHGT_ETAT_STAGE_DEPOSE);

                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.formulaire.success.flash');

                return $this->redirectToRoute('application_index', ['onglet' => 'stage']);
            }

            return $this->render('appEtudiant/stage/formulaire.html.twig', [
                'stageEtudiant' => $stageEtudiant,
                'form'          => $form->createView(),
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }

    /**
     * @Route("/periode/info/{id}", name="application_etudiant_stage_periode_info")
     */
    public function periodeInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appEtudiant/stage/periodeInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'stagePeriode'  => $stageEtudiant->getStagePeriode(),
        ]);
    }

    /**
     * @Route("/entreprise/stage/info/{id}", name="application_etudiant_stage_entreprise_info")
     */
    public function entrepriseInfo(StageEtudiant $stageEtudiant): Response
    {
        return $this->render('appEtudiant/stage/entrepriseInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    /**
     * @Route("/entreprise/alternance/info/{id}", name="application_etudiant_alternance_entreprise_info")
     */
    public function entrepriseAlternanceInfo(Alternance $alternance): Response
    {
        return $this->render('appEtudiant/stage/entrepriseAlternanceInfo.html.twig', [
            'alternance' => $alternance,
        ]);
    }
}
