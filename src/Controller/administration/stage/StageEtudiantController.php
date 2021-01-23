<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/stage/StageEtudiantController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/01/2021 14:47

namespace App\Controller\administration\stage;

use App\Classes\MyStageEtudiant;
use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Form\StageEtudiantType;
use App\Repository\PersonnelRepository;
use App\Repository\StageMailTemplateRepository;
use Doctrine\ORM\NonUniqueResultException;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

/**
 *  * @Route("/administration/stage/etudiant")
 */
class StageEtudiantController extends BaseController
{
    /**
     * @Route("/{id}", name="administration_stage_etudiant_show", methods="GET")
     * @param PersonnelRepository $personnelRepository
     * @param StageEtudiant       $stageEtudiant
     *
     * @return Response
     */
    public function show(PersonnelRepository $personnelRepository, StageEtudiant $stageEtudiant): Response
    {
        return $this->render(
            'administration/stage/stage_etudiant/show.html.twig',
            [
                'stageEtudiant' => $stageEtudiant,
                'personnels'    => $personnelRepository->findByDepartement($this->dataUserSession->getDepartement())
            ]
        );
    }

    /**
     * @Route("/ajax/edit/{id}", name="administration_stage_etudiant_ajax_edit", options={"expose":true})
     *
     * @param MyStageEtudiant $myStageEtudiant
     * @param Request         $request
     *
     * @param StageEtudiant   $stageEtudiant
     *
     * @return JsonResponse
     * @throws \Exception
     */
    public function ajaxEdit(
        MyStageEtudiant $myStageEtudiant,
        Request $request,
        StageEtudiant $stageEtudiant
    ): JsonResponse {
        $name = $request->request->get('field');
        $value = $request->request->get('value');
        $type = $request->request->get('type');

        $update = $myStageEtudiant->update($stageEtudiant, $name, $value, $type);

        return $update ? new JsonResponse('', Response::HTTP_OK) : new JsonResponse('erreur',
            Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/edit", name="administration_stage_etudiant_edit", methods="GET|POST")
     * @param Request       $request
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function edit(Request $request, StageEtudiant $stageEtudiant): Response
    {
        $form = $this->createForm(StageEtudiantType::class, $stageEtudiant);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.create.success.flash');

            return $this->redirectToRoute('administration_stage_etudiant_edit', ['id' => $stageEtudiant->getId()]);
        }

        return $this->render('administration/stage/stage_etudiant/edit.html.twig', [
            'stageEtudiant' => $stageEtudiant,
            'form'          => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_stage_etudiant_delete", methods="DELETE")
     * @param Request       $request
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function delete(Request $request, StageEtudiant $stageEtudiant): Response
    {
        $id = $stageEtudiant->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($stageEtudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.delete.success.flash');
        } else {
            $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'stage_etudiant.delete.error.flash');
        }

        return $this->json([
            'redirect' => true,
            'url'      => $stageEtudiant->getStagePeriode() !== null ? $this->generateUrl('administration_stage_periode_gestion',
                ['uuid' => $stageEtudiant->getStagePeriode()->getUuidString()]) : $this->generateUrl('administration_index')
        ]);
    }

    /**
     * @param MyStageEtudiant $myStageEtudiant
     * @param StagePeriode    $stagePeriode
     * @param Etudiant        $etudiant
     * @param                 $etat
     *
     * @return RedirectResponse
     * @throws NonUniqueResultException
     * @Route("/change-etat/{stagePeriode}/{etudiant}/{etat}", name="administration_stage_etudiant_change_etat")
     * @ParamConverter("stagePeriode", options={"mapping": {"stagePeriode": "uuid"}})
     */
    public function changeEtat(
        MyStageEtudiant $myStageEtudiant,
        StagePeriode $stagePeriode,
        Etudiant $etudiant,
        $etat
    ): RedirectResponse {
        $myStageEtudiant->changeEtat($stagePeriode, $etudiant, $etat);
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.change_etat.success.flash');

        return $this->redirectToRoute('administration_stage_periode_gestion',
            ['uuid' => $stagePeriode->getUuidString()]);
    }

    /**
     * @Route("/change-tuteur/{stageEtudiant}/{tuteur}", name="administration_stage_etudiant_change_tuteur",
     *                                                   options={"expose"=true})
     * @param StageEtudiant $stageEtudiant
     * @param Personnel     $tuteur
     *
     * @return JsonResponse
     */
    public function changeTuteur(
        StageEtudiant $stageEtudiant,
        Personnel $tuteur
    ): JsonResponse {
        $stageEtudiant->setTuteurUniversitaire($tuteur);
        $this->entityManager->persist($stageEtudiant);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.change_tuteur.success.flash');

        return $this->json(true, Response::HTTP_OK);
    }

    /**
     * @Route("/convention/pdf/{id}", name="administration_stage_etudiant_convention_pdf", methods="GET")
     * @param MyPDF         $myPDF
     * @param StageEtudiant $stageEtudiant
     *
     * @return PdfResponse
     * @throws LoaderError
     * @throws SyntaxError
     * @throws RuntimeError
     */
    public function conventionPdf(MyPDF $myPDF, StageEtudiant $stageEtudiant): PdfResponse
    {
        //1. regarder si convention existe dans le répertoire ? (un champ avec le nom dans la BDD ?)
        //2. Si oui envoyer
        //3. Si non générer et envoyer + sauvegarde
        //todo: prevoir bouton pour "regenerer" la convention

        return $myPDF::generePdf('pdf/stage/conventionStagePDF.html.twig',
            [
                'proposition' => $stageEtudiant,
            ],
            'Convention-' . $stageEtudiant->getEtudiant()->getNom(),
            $this->dataUserSession->getDepartement()
        );
    }


    /**
     * @Route("/courrier/pdf/{id}", name="administration_stage_etudiant_courrier_pdf", methods="GET")
     * @param MyPDF         $myPDF
     * @param StageEtudiant $stageEtudiant
     *
     * @return PdfResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function courrierPdf(MyPDF $myPDF, StageEtudiant $stageEtudiant): PdfResponse
    {
        return $myPDF::generePdf('pdf/stage/baseCourrier.html.twig',
            [
                'stageEtudiant' => $stageEtudiant,
            ],
            'courrier-' . $stageEtudiant->getEtudiant()->getNom(),
            $this->dataUserSession->getDepartement()
        );

    }

    /**
     * @param Environment                 $twig
     * @param StageMailTemplateRepository $stageMailTemplateRepository
     * @param StageEtudiant               $stageEtudiant
     *
     * @return Response
     * @throws LoaderError
     * @throws NonUniqueResultException
     * @throws SyntaxError
     */
    public function genereContentCourrier(
        Environment $twig,
        StageMailTemplateRepository $stageMailTemplateRepository,
        StageEtudiant $stageEtudiant
    ): Response {
        $mailTemplate = $stageMailTemplateRepository->findEventPeriode(
            'courrier',
            $stageEtudiant->getStagePeriode()
        );

        if ($mailTemplate !== null && $mailTemplate->getTwigTemplate() !== null) {

            $template = $twig->createTemplate($mailTemplate->getTwigTemplate()->getSource());
            $html = $template->render(['stageEtudiant' => $stageEtudiant]);

            return new Response($html);
        }

        return $this->render('pdf/stage/_courrierDefaut.html.twig', [
            'stageEtudiant' => $stageEtudiant,
        ]);
    }

    /**
     * @Route("/fiche-enseignant/{id}", name="administration_stage_etudiant_fiche_enseignant", methods="GET")
     * @param MyPDF         $myPDF
     * @param StageEtudiant $stageEtudiant
     *
     * @return PdfResponse
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function ficheEnseignant(MyPDF $myPDF, StageEtudiant $stageEtudiant): PdfResponse
    {
        return $myPDF::generePdf('pdf/fichePDFStage.html.twig',
            [
                'stageEtudiant' => $stageEtudiant
            ],
            'Fiche-Enseignant-stage-' . $stageEtudiant->getEtudiant()->getNom(),
            $this->dataUserSession->getDepartement()
        );
    }
}
