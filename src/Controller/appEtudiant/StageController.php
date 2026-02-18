<?php
/*
 * Copyright (c) 2026. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appEtudiant/StageController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/01/2026 10:38
 */

namespace App\Controller\appEtudiant;

use App\Controller\BaseController;
use App\Entity\Alternance;
use App\Entity\Constantes;
use App\Entity\StageEtudiant;
use App\Entity\StageRapport;
use App\Event\StageEvent;
use App\Form\StageEtudiantEtudiantType;
use App\Form\StageRapportType;
use App\Repository\StagePeriodeRepository;
use Carbon\Carbon;
use Exception;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

/**
 * Class StageController.
 */
#[IsGranted('ROLE_ETUDIANT')]
#[Route(path: '/application/etudiant/stage')]
class StageController extends BaseController
{
    #[Route(path: '/', name: 'application_etudiant_stage_index')]
    public function index(StagePeriodeRepository $stagePeriodeRepository): Response
    {
        $stagePeriodes = $stagePeriodeRepository->findStageEtudiant($this->getUser()->getSemestreActif(),
            $this->getAnneeUniversitaire());

        $stageEtudiants = [];
        foreach ($this->getUser()->getStageEtudiants() as $stage) {
            if (null !== $stage->getStagePeriode()) {
                $stageEtudiants[$stage->getStagePeriode()->getId()] = $stage;
            }
        }

        return $this->render('appEtudiant/stage/index.html.twig', [
            'stagePeriodes' => $stagePeriodes,
            'stageEtudiants' => $stageEtudiants,
        ]);
    }

    #[Route(path: '/details/{id}', name: 'application_etudiant_stage_detail', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function detailsStage(StageEtudiant $stageEtudiant): Response
    {
        if ($stageEtudiant->getEtudiant()->getId() !== $this->getUser()->getId()) {
            // si incohérence entre l'utilisateur connecté et le stage
            throw new AccessDeniedException('Vous n\'êtes pas l\'auteur de ce formulaire de stage');
        }

        return $this->render('appEtudiant/stage/details.html.twig', [
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    /**
     * @throws Exception
     * @deprecated nouveau formulaire à utiliser
     */
    #[Route(path: '/formulaire/{stageEtudiant}', name: 'application_etudiant_stage_formulaire', methods: 'GET|POST')]
    public function create(EventDispatcherInterface $eventDispatcher, Request $request, #[MapEntity(mapping: ['stageEtudiant' => 'uuid'])]
    StageEtudiant                                   $stageEtudiant): Response
    {
        if ($stageEtudiant->getEtudiant()->getId() !== $this->getUser()->getId()) {
            // si incohérence entre l'utilisateur connecté et le stage
            throw new AccessDeniedException('Vous n\'êtes pas l\'auteur de ce formulaire de stage');
        }

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
                'form' => $form,
            ]);
        }

        return $this->render('bundles/TwigBundle/Exception/error500.html.twig');
    }


    #[Route(path: '/rapport/{stageEtudiant}', name: 'application_etudiant_stage_rapport', methods: 'GET|POST')]
    public function rapportStage(EventDispatcherInterface $eventDispatcher,
                                 Request                  $request,
                                 #[MapEntity(mapping: ['stageEtudiant' => 'uuid'])]
                                 StageEtudiant            $stageEtudiant): Response
    {
        if ($stageEtudiant->getEtudiant()->getId() !== $this->getUser()->getId()) {
            // si incohérence entre l'utilisateur connecté et le stage
            throw $this->createAccessDeniedException('Vous n\'êtes pas l\'auteur de ce formulaire de stage');
        }

        $stageRapport = new StageRapport($stageEtudiant);
        $form = $this->createForm(StageRapportType::class, $stageRapport, [
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($stageRapport);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.rapport.success.flash');

            return $this->redirectToRoute('application_index', ['onglet' => 'stage']);
        }

        return $this->render('appEtudiant/stage/rapport.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'form' => $form,
        ]);
    }

    #[Route(path: '/periode/info/{id}', name: 'application_etudiant_stage_periode_info')]
    public function periodeInfo(StageEtudiant $stageEtudiant): Response
    {
        if ($stageEtudiant->getEtudiant()->getId() !== $this->getUser()->getId()) {
            // si incohérence entre l'utilisateur connecté et le stage
            throw new AccessDeniedException('Vous n\'êtes pas l\'auteur de ce formulaire de stage');
        }

        return $this->render('appEtudiant/stage/periodeInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'stagePeriode' => $stageEtudiant->getStagePeriode(),
        ]);
    }

    #[Route(path: '/entreprise/stage/info/{id}', name: 'application_etudiant_stage_entreprise_info')]
    public function entrepriseInfo(StageEtudiant $stageEtudiant): Response
    {
        if ($stageEtudiant->getEtudiant()->getId() !== $this->getUser()->getId()) {
            // si incohérence entre l'utilisateur connecté et le stage
            throw new AccessDeniedException('Vous n\'êtes pas l\'auteur de ce formulaire de stage');
        }

        return $this->render('appEtudiant/stage/entrepriseInfo.html.twig', [
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    #[Route(path: '/entreprise/alternance/info/{id}', name: 'application_etudiant_alternance_entreprise_info')]
    public function entrepriseAlternanceInfo(Alternance $alternance): Response
    {
        return $this->render('appEtudiant/stage/entrepriseAlternanceInfo.html.twig', [
            'alternance' => $alternance,
        ]);
    }
}
