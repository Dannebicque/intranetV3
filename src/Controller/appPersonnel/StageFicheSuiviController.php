<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/appPersonnel/StageFicheSuiviController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/12/2022 12:09
 */

namespace App\Controller\appPersonnel;

use App\Classes\MyFicheSuivi;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\StageEtudiant;
use App\Entity\StageFicheSuivi;
use App\Form\FicheSuiviType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route('/application/personnel/stage/suivi', name: 'app_personnel_stage_fiche_suivi_')]
#[\Symfony\Component\Security\Http\Attribute\IsGranted('ROLE_PERMANENT')]
class StageFicheSuiviController extends BaseController
{
    #[Route('/{stage}', name: 'index')]
    public function index(StageEtudiant $stage): Response
    {
        return $this->render('appPersonnel/stage_fiche_suivi/index.html.twig', [
            'fiches_suivi' => $stage->getStageFicheSuivis(),
            'stage' => $stage,
        ]);
    }

    #[Route(path: '/{stage}/new', name: 'new', methods: ['GET', 'POST'])]
    public function new(Request $request, StageEtudiant $stage): Response
    {
        $stageFicheSuivi = new StageFicheSuivi($stage);
        $form = $this->createForm(FicheSuiviType::class, $stageFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($stageFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'stage.edit.success.fiche_suivi'
            );

            return $this->redirectToRoute('app_personnel_stage_fiche_suivi_show',
                ['id' => $stageFicheSuivi->getId()]);
        }

        return $this->render('appPersonnel/stage_fiche_suivi/new.html.twig', [
            'stage_fiche_suivi' => $stageFicheSuivi,
            'form' => $form,
            'stage' => $stage,
        ]);
    }

    #[Route(path: '/{id}/details', name: 'show', methods: ['GET'])]
    public function show(StageFicheSuivi $stageFicheSuivi): Response
    {
        return $this->render('appPersonnel/stage_fiche_suivi/show.html.twig', [
            'stage_fiche_suivi' => $stageFicheSuivi,
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/{id}/imprimer', name: 'print', methods: ['GET'])]
    public function print(MyFicheSuivi $ficheSuivi, StageFicheSuivi $stageFicheSuivi): Response
    {
        return $ficheSuivi->print($stageFicheSuivi);
    }

    #[Route(path: '/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, StageFicheSuivi $stageFicheSuivi): Response
    {
        $form = $this->createForm(FicheSuiviType::class, $stageFicheSuivi);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'stage.edit.success.fiche_suivi'
            );

            return $this->redirectToRoute('app_personnel_stage_fiche_suivi_show',
                ['id' => $stageFicheSuivi->getId()]);
        }

        return $this->render('appPersonnel/stage_fiche_suivi/edit.html.twig', [
            'stage_fiche_suivi' => $stageFicheSuivi,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'delete', methods: ['DELETE'])]
    public function delete(Request $request, StageFicheSuivi $stageFicheSuivi): Response
    {
        $stage = $stageFicheSuivi->getStage();
        if ($this->isCsrfTokenValid('delete'.$stageFicheSuivi->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($stageFicheSuivi);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'stage.delete.success.fiche_suivi'
            );
        }

        if (null !== $stage) {
            return $this->redirectToRoute('app_personnel_stage_fiche_suivi_index',
                ['stage' => $stage->getId()]);
        }

        return $this->redirectToRoute('administration_index');
    }
}
