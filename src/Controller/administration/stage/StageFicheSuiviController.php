<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StageFicheSuiviController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration\stage;

use App\Classes\MyFicheSuivi;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StageEtudiant;
use App\Entity\StageFicheSuivi;
use App\Form\FicheSuiviType;
use App\Repository\StageFicheSuiviRepository;
use Exception;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route(path: '/administration/stage/fiche/suivi')]
class StageFicheSuiviController extends BaseController
{
    /**
     * @throws Exception
     */
    #[Route(path: '/{stage}', name: 'administration_stage_fiche_suivi_index', methods: ['GET', 'POST'])]
    public function index(StageFicheSuiviRepository $ficheSuiviRepository, StageEtudiant $stage): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $stage->getStagePeriode()->getSemestre()->getAnnee());
        $fiches = $ficheSuiviRepository->findBy(['stage' => $stage]);

        return $this->render('administration/stage/fiche_suivi/index.html.twig', [
            'stage' => $stage,
            'fiches' => $fiches,
            'uuid' => $stage->getStagePeriode()->getUuidString(),
        ]);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/new/{stage}', name: 'administration_stage_fiche_suivi_new', methods: ['GET', 'POST'])]
    public function new(Request $request, StageEtudiant $stage): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $stage->getStagePeriode()->getSemestre()->getAnnee());
        $stageFicheSuivi = new StageFicheSuivi($stage);
        $form = $this->createForm(FicheSuiviType::class, $stageFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($stageFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'fiche_suivi.new.success.flash');

            return $this->redirectToRoute('administration_stage_fiche_suivi_index', ['stage' => $stage->getId()]);
        }

        return $this->render('administration/stage/fiche_suivi/new.html.twig', [
            'stage_fiche_suivi' => $stageFicheSuivi,
            'stage' => $stage,
            'form' => $form,
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/imprimer/{id}', name: 'administration_stage_fiche_suivi_export', methods: ['GET'])]
    public function print(MyFicheSuivi $myStageFicheSuivi, StageFicheSuivi $stageFicheSuivi): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $stageFicheSuivi->getStage()?->getStagePeriode()?->getSemestre()?->getAnnee());

        return $myStageFicheSuivi->print($stageFicheSuivi);
    }

    #[Route(path: '/detail/{id}', name: 'administration_stage_fiche_suivi_show', methods: ['GET'])]
    public function show(StageFicheSuivi $stageFicheSuivi): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $stageFicheSuivi->getStage()?->getStagePeriode()?->getSemestre()?->getAnnee());

        return $this->render('administration/stage/fiche_suivi/show.html.twig', [
            'stage_fiche_suivi' => $stageFicheSuivi,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_stage_fiche_suivi_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, StageFicheSuivi $stageFicheSuivi): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $stageFicheSuivi->getStage()?->getStagePeriode()?->getSemestre()?->getAnnee());
        $form = $this->createForm(FicheSuiviType::class, $stageFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'fiche_suivi.edit.success.flash');

            if (null !== $request->request->get('btn_update') && null !== $stageFicheSuivi->getStage()) {
                return $this->redirectToRoute('administration_stage_periode_gestion', ['uuid' => $stageFicheSuivi->getStage()->getStagePeriode()->getUuidString()]);
            }

            return $this->redirectToRoute('administration_stage_fiche_suivi_edit',
                ['id' => $stageFicheSuivi->getId()]);
        }

        return $this->render('administration/stage/fiche_suivi/edit.html.twig', [
            'stage_fiche_suivi' => $stageFicheSuivi,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_stage_fiche_suivi_delete', methods: ['DELETE'])]
    public function delete(Request $request, StageFicheSuivi $stageFicheSuivi): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $stageFicheSuivi->getStage()?->getStagePeriode()?->getSemestre()?->getAnnee());
        $stage = $stageFicheSuivi->getStage();
        if ($this->isCsrfTokenValid('delete'.$stageFicheSuivi->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($stageFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'fiche_suivi.delete.success.flash');
        }
        if (null !== $stage) {
            return $this->redirectToRoute('administration_stage_periode_gestion', ['uuid' => $stage->getStagePeriode()->getUuidString()]);
        }

        return $this->redirectToRoute('administration_index');
    }
}
