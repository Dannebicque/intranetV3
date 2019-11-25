<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/administration/stage/StageEtudiantController.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Form\StageEtudiantType;
use App\MesClasses\MyStageEtudiant;
use App\Repository\PersonnelRepository;
use Doctrine\ORM\NonUniqueResultException;
use Dompdf\Dompdf;
use Dompdf\Options;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
        //todo: a tester car pas appelé en Ajax...
        $id = $stageEtudiant->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($stageEtudiant);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.delete.success.flash');

            return $stageEtudiant->getStagePeriode() !== null ? $this->redirectToRoute('administration_stage_periode_gestion',
                ['uuid' => $stageEtudiant->getStagePeriode()->getUuidString()]) : $this->redirectToRoute('administratif_homepage');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'stage_etudiant.delete.error.flash');

        return $stageEtudiant->getStagePeriode() !== null ? $this->redirectToRoute('administration_stage_periode_gestion',
            ['uuid' => $stageEtudiant->getStagePeriode()->getUuidString()]) : $this->redirectToRoute('administratif_homepage');
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
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function conventionPdf(StageEtudiant $stageEtudiant): Response
    {
        //1. regarder si convention existe dans le répertoire ? (un champ avec le nom dans la BDD ?)
        //2. Si oui envoyer
        //3. Si non générer et envoyer + sauvegarde
        //todo: prevoir bouton pour "regenerer" la convention
        $html = $this->renderView('pdf/conventionStagePDF.html.twig', [
            'proposition' => $stageEtudiant,
        ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response($dompdf->stream('Convention-' . $stageEtudiant->getEtudiant()->getNom(),
            ['Attachment' => 1]));

    }


    /**
     * @Route("/courrier/pdf/{id}", name="administration_stage_etudiant_courrier_pdf", methods="GET")
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function courrierPdf(StageEtudiant $stageEtudiant): Response
    {

    }

    /**
     * @Route("/fiche-enseignant/{id}", name="administration_stage_etudiant_fiche_enseignant", methods="GET")
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function ficheEnseignant(StageEtudiant $stageEtudiant): Response
    {
        $html = $this->renderView('pdf/fichePDFStage.html.twig',
            [
                'stageEtudiant' => $stageEtudiant
            ]);

        $options = new Options();
        $options->set('isRemoteEnabled', true);
        $options->set('isPhpEnabled', true);

        $dompdf = new Dompdf($options);
        $dompdf->loadHtml($html);
        $dompdf->render();

        return new Response ($dompdf->stream('Fiche-Enseignant-stage-' . $stageEtudiant->getEtudiant()->getNom(),
            ['Attachment' => 1]));
    }
}
