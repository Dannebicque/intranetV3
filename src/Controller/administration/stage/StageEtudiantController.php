<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/stage/StageEtudiantController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:55
 */

namespace App\Controller\administration\stage;

use App\Classes\MyStageEtudiant;
use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Event\StageEvent;
use App\Form\StageEtudiantType;
use App\Repository\PersonnelRepository;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\NonUniqueResultException;
use Exception;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

#[Route(path: '/administration/stage/etudiant')]
class StageEtudiantController extends BaseController
{
    #[Route(path: '/{id}', name: 'administration_stage_etudiant_show', methods: 'GET')]
    public function show(PersonnelRepository $personnelRepository, StageEtudiant $stageEtudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());

        return $this->render(
            'administration/stage/stage_etudiant/show.html.twig',
            [
                'stageEtudiant' => $stageEtudiant,
                'personnels' => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement()),
            ]
        );
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/ajax/edit/{id}', name: 'administration_stage_etudiant_ajax_edit', options: ['expose' => true])]
    public function ajaxEdit(MyStageEtudiant $myStageEtudiant, Request $request, StageEtudiant $stageEtudiant): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $type = $request->request->get('type');
        $update = $myStageEtudiant->update($stageEtudiant, $name, $value, $type);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/edit', name: 'administration_stage_etudiant_edit', methods: 'GET|POST')]
    public function edit(Request $request, StageEtudiant $stageEtudiant): Response
    {
        // $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());
        $form = $this->createForm(StageEtudiantType::class, $stageEtudiant);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.create.success.flash');

            return $this->redirectToRoute('administration_stage_etudiant_edit', ['id' => $stageEtudiant->getId()]);
        }

        return $this->render('administration/stage/stage_etudiant/edit.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_stage_etudiant_delete', methods: 'DELETE')]
    public function delete(Request $request, StageEtudiant $stageEtudiant): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());
        $id = $stageEtudiant->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($stageEtudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.delete.success.flash');
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'stage_etudiant.delete.error.flash');
        }

        return $this->json([
            'redirect' => true,
            'url' => null !== $stageEtudiant->getStagePeriode() ? $this->generateUrl('administration_stage_periode_gestion',
                ['uuid' => $stageEtudiant->getStagePeriode()->getUuidString()]) : $this->generateUrl('administration_index'),
        ]);
    }

    /**
     * @throws NonUniqueResultException
     */
    #[Route(path: '/change-etat/{stagePeriode}/{etudiant}/{etat}', name: 'administration_stage_etudiant_change_etat')]
    public function changeEtat(MyStageEtudiant $myStageEtudiant, #[MapEntity(mapping: ['stagePeriode' => 'uuid'])]
    StagePeriode                               $stagePeriode, Etudiant $etudiant, $etat): RedirectResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stagePeriode->getSemestre());
        $myStageEtudiant->changeEtat($stagePeriode, $etudiant, $etat);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.change_etat.success.flash');

        return $this->redirectToRoute('administration_stage_periode_gestion',
            ['uuid' => $stagePeriode->getUuidString()]);
    }

    #[Route(path: '/change-tuteur/{stageEtudiant}/{tuteur}', name: 'administration_stage_etudiant_change_tuteur', options: ['expose' => true])]
    public function changeTuteur(StageEtudiant $stageEtudiant, Personnel $tuteur): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());
        $stageEtudiant->setTuteurUniversitaire($tuteur);
        $this->entityManager->persist($stageEtudiant);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.change_tuteur.success.flash');

        return $this->json(true, Response::HTTP_OK);
    }

    /**
     * @throws LoaderError
     * @throws SyntaxError
     * @throws RuntimeError
     */
    #[Route(path: '/convention/pdf/{id}', name: 'administration_stage_etudiant_convention_pdf', methods: 'GET')]
    public function conventionPdf(MyPDF $myPDF, StageEtudiant $stageEtudiant): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());
        // 1. regarder si convention existe dans le répertoire ? (un champ avec le nom dans la BDD ?)
        // 2. Si oui envoyer
        // 3. Si non générer et envoyer + sauvegarde
        // todo: prevoir bouton pour "regenerer" la convention
        return $myPDF::generePdf('pdf/stage/conventionStagePDF.html.twig',
            [
                'proposition' => $stageEtudiant,
            ],
            'Convention-'.$stageEtudiant->getEtudiant()->getNom()
        );
    }

    #[Route(path: '/envoyer-convention/pdf/{id}', name: 'administration_stage_etudiant_envoyer_convention_pdf', options: ['expose' => true], methods: 'GET')]
    public function envoyerConventionPdf(
        KernelInterface $kernel,
        EventDispatcherInterface $eventDispatcher,
        MyPDF $myPDF, StageEtudiant $stageEtudiant): JsonResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());

        $myPDF::genereAndSavePdf('pdf/stage/conventionStagePDF.html.twig',
            [
                'proposition' => $stageEtudiant,
            ],
            'Convention-'.$stageEtudiant->getEtudiant()->getNom(),
            $kernel->getProjectDir().'/public/upload/conventions/'
        );

        $event = new StageEvent($stageEtudiant);
        $eventDispatcher->dispatch($event, StageEvent::CONVENTION_STAGE_ENVOYEE);

        return $this->json(true);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/courrier/pdf/{id}', name: 'administration_stage_etudiant_courrier_pdf', methods: 'GET')]
    public function courrierPdf(MyPDF $myPDF, StageEtudiant $stageEtudiant): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());

        return $myPDF::generePdf('pdf/stage/baseCourrier.html.twig',
            [
                'stageEtudiant' => $stageEtudiant,
            ],
            'courrier-'.$stageEtudiant->getEtudiant()->getNom()
        );
    }

    /**
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws SyntaxError
     */
    public function genereContentCourrier(
        Environment $twig,
        StageMailTemplateRepository $stageMailTemplateRepository,
        StageEtudiant $stageEtudiant
    ): Response {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());

        $mailTemplate = $stageMailTemplateRepository->findEventPeriode(
            'courrier',
            $stageEtudiant->getStagePeriode()
        );

        if (null !== $mailTemplate && null !== $mailTemplate->getTwigTemplate()) {
            $template = $twig->createTemplate($mailTemplate->getTwigTemplate()->getSource());
            $html = $template->render(['stageEtudiant' => $stageEtudiant]);

            return new Response($html);
        }

        return $this->render('pdf/stage/_courrierDefaut.html.twig', [
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    /**
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    #[Route(path: '/fiche-enseignant/{id}', name: 'administration_stage_etudiant_fiche_enseignant', methods: 'GET')]
    public function ficheEnseignant(MyPDF $myPDF, StageEtudiant $stageEtudiant): PdfResponse
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $stageEtudiant->getStagePeriode()?->getSemestre());

        return $myPDF::generePdf('pdf/fichePDFStage.html.twig',
            [
                'stageEtudiant' => $stageEtudiant,
            ],
            'Fiche-Enseignant-stage-'.$stageEtudiant->getEtudiant()->getNom()
        );
    }
}
