<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcRessourceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 18:49
 */

namespace App\Controller\administration\apc;

use App\Classes\Pdf\MyPDF;
use App\Controller\BaseController;
use App\Entity\Actualite;
use App\Entity\ApcRessource;
use App\Entity\ApcSae;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcRessourceType;
use App\Repository\ApcRessourceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/apc/ressource", name="administration_")
 */
class ApcRessourceController extends BaseController
{
    /**
     * @Route("/imprime/{id}.pdf", name="apc_ressource_export_one", methods="GET")
     *
     */
    public function exportOne(MyPDF $myPDF, ApcRessource $apcRessource)
    {
        return $myPDF::generePdf(
            'pdf/apc/fiche_ressource.html.twig',
            ['apc_sae' =>$apcRessource],
            'ressource',
            $this->getDepartement()
        );
    }

//    /**
//     * @Route("/export.{_format}", name="administration_apc_sae_export", methods="GET",
//     *                             requirements={"_format"="csv|xlsx|pdf"})
//     *
//     * @param $_format
//     */
//    public function export(MyExport $myExport, ApcSaeRepository $apcSaeRepository, $_format): Response
//    {
//        $actualites = $apcSaeRepository->getByDiplome($this->getDepartement());
//
//        return $myExport->genereFichierGenerique(
//            $_format,
//            $actualites,
//            'actualites',
//            ['actualite_administration', 'utilisateur'],
//            ['titre', 'texte', 'departement' => ['libelle']]
//        );
//    }

    /**
     * @Route("/new/{diplome}", name="apc_ressource_new", methods={"GET","POST"})
     */
    public function new(Request $request, Diplome $diplome): Response
    {
        $apcRessource = new ApcRessource();
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $diplome
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcRessource);
            $this->entityManager->flush();

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $diplome->getId()]);
        }

        return $this->render('apc/apc_ressource/new.html.twig', [
            'apc_ressource' => $apcRessource,
            'diplome' => $diplome,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/{id}", name="apc_ressource_show", methods={"GET"})
     */
    public function show(ApcRessource $apcRessource): Response
    {
        return $this->render('apc/apc_ressource/show.html.twig', [
            'apc_ressource' => $apcRessource,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="apc_ressource_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ApcRessource $apcRessource): Response
    {
        $form = $this->createForm(ApcRessourceType::class, $apcRessource, [
            'diplome' => $apcRessource->getDiplome()
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_matiere_index', ['diplome' => $apcRessource->getDiplome()->getId()]);
        }

        return $this->render('apc/apc_ressource/edit.html.twig', [
            'apc_ressource' => $apcRessource,
            'form' => $form->createView(),
            'diplome' => $apcRessource->getDiplome()
        ]);
    }

    /**
     * @Route("/{id}", name="apc_ressource_delete", methods="DELETE")
     */
    public function delete(Request $request, ApcRessource $apcRessource): Response
    {
        $id = $apcRessource->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($apcRessource);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc_ressource.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }

        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc_ressource.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="apc_ressource_duplicate", methods="GET|POST")
     */
    public function duplicate(ApcRessource $apcRessource): Response
    {
        $newApcRessource = clone $apcRessource;

        $this->entityManager->persist($newApcRessource);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc_ressource.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_ressource_edit', ['id' => $newApcRessource->getId()]);
    }
}
