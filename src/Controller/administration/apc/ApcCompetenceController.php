<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcCompetenceController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 09:08

namespace App\Controller\administration\apc;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcCompetenceType;
use App\Repository\ActualiteRepository;
use App\Repository\ApcComptenceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/competence")
 */
class ApcCompetenceController extends BaseController
{
    /**
     * @Route("/", name="administration_apc_competence_index", methods={"GET"})
     * @param ApcComptenceRepository $apcComptenceRepository
     *
     * @return Response
     */
    public function index(ApcComptenceRepository $apcComptenceRepository): Response
    {
        return $this->render('administration/apc/apc_competence/index.html.twig', [
            'apc_competences' => $apcComptenceRepository->findAll(),
        ]);
    }

    /**
     * @Route("/{diplome}/export.{_format}", name="administration_apc_competence_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     * @param MyExport               $myExport
     * @param ApcComptenceRepository $apcComptenceRepository
     * @param Diplome                $diplome
     * @param                        $_format
     *
     * @return Response
     */
    public function export(
        MyExport $myExport,
        ApcComptenceRepository $apcComptenceRepository,
        Diplome $diplome,
        $_format
    ): Response {
        $actualites = $apcComptenceRepository->getByDiplome($diplome);

        return $myExport->genereFichierGenerique(
            $_format,
            $actualites,
            'actualites',
            ['actualite_administration', 'utilisateur'],
            ['titre', 'texte', 'departement' => ['libelle']]
        );
    }

    /**
     * @Route("/new", name="administration_apc_competence_new", methods={"GET","POST"})
     * @param Request $request
     *
     * @return Response
     */
    public function new(Request $request): Response
    {
        $apcComptence = new ApcCompetence();
        $form = $this->createForm(ApcCompetenceType::class, $apcComptence);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcComptence);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.create.success.flash');

            return $this->redirectToRoute('administration_apc_competence_index');
        }

        return $this->render('administration/apc/apc_competence/new.html.twig', [
            'apc_competence' => $apcComptence,
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_competence_show", methods={"GET"})
     * @param ApcCompetence $apcCompetence
     *
     * @return Response
     */
    public function show(ApcCompetence $apcCompetence): Response
    {
        return $this->render('administration/apc/apc_competence/show.html.twig', [
            'apc_competence' => $apcCompetence,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_apc_competence_edit", methods={"GET","POST"})
     * @param Request       $request
     * @param ApcCompetence $apcCompetence
     *
     * @return Response
     */
    public function edit(Request $request, ApcCompetence $apcCompetence): Response
    {
        $form = $this->createForm(ApcCompetenceType::class, $apcCompetence);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.edit.success.flash');

            return $this->redirectToRoute('administration_apc_competence_index');
        }

        return $this->render('administration/apc/apc_competence/edit.html.twig', [
            'apc_competence' => $apcCompetence,
            'form'           => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_competence_delete", methods={"DELETE"})
     * @param Request       $request
     * @param ApcCompetence $apcCompetence
     *
     * @return Response
     */
    public function delete(Request $request, ApcCompetence $apcCompetence): Response
    {
        if ($this->isCsrfTokenValid('delete' . $apcCompetence->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($apcCompetence);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.delete.success.flash');
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.competence.delete.error.flash');

        return $this->redirectToRoute('administration_apc_competence_index');
    }

    /**
     * @Route("/{id}/duplicate", name="administration_apc_competence_duplicate", methods="GET|POST")
     * @param ApcCompetence $apcCompetence
     *
     * @return Response
     */
    public function duplicate(ApcCompetence $apcCompetence): Response
    {
        $newApcCompetence = clone $apcCompetence;

        $this->entityManager->persist($newApcCompetence);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_competence_edit', ['id' => $newApcCompetence->getId()]);
    }
}
