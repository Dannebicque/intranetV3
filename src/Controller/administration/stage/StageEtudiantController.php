<?php

namespace App\Controller\administration\stage;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Etudiant;
use App\Entity\StageEtudiant;
use App\Entity\StagePeriode;
use App\Form\StageEtudiantType;
use App\MesClasses\MyStageEtudiant;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
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
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function show(StageEtudiant $stageEtudiant): Response
    {
        return $this->render(
            'administration/stage/stage_etudiant/show.html.twig',
            ['stageEtudiant' => $stageEtudiant]
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
            $this->getDoctrine()->getManager()->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'stage_etudiant.create.success.flash');

            return $this->redirectToRoute('administration_stage_etudiant_edit', ['id' => $stageEtudiant->getId()]);
        }

        return $this->render('administration/stage/stage_etudiant/edit.html.twig', [
            'stage_etudiant' => $stageEtudiant,
            'form'           => $form->createView(),
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
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     * @throws \Doctrine\ORM\NonUniqueResultException
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
     * @Route("/convention/pdf/{id}", name="administration_stage_etudiant_convention_pdf", methods="GET")
     * @param StageEtudiant $stageEtudiant
     *
     * @return Response
     */
    public function conventionPdf(StageEtudiant $stageEtudiant): Response
    {

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

    }
}
