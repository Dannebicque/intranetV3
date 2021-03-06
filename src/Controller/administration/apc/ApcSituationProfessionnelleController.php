<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcSituationProfessionnelleController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 01/03/2021 18:49
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\ApcSituationProfessionnelle;
use App\Form\ApcSituationProfessionnelleType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/situation/professionnelle")
 */
class ApcSituationProfessionnelleController extends BaseController
{
    /**
     * @Route("/new/{competence}", name="administration_apc_situation_professionnelle_new", methods={"GET","POST"})
     */
    public function new(Request $request, ApcCompetence $competence): Response
    {
        $apcSituationProfessionnelle = new ApcSituationProfessionnelle();
        $form = $this->createForm(ApcSituationProfessionnelleType::class, $apcSituationProfessionnelle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($apcSituationProfessionnelle);
            $entityManager->flush();

            return $this->redirectToRoute('administration_apc_competence_show',
                ['id' => $competence->getId()]);
        }

        return $this->render('apc/apc_situation_professionnelle/new.html.twig', [
            'apc_situation_professionnelle' => $apcSituationProfessionnelle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_apc_situation_professionnelle_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ApcSituationProfessionnelle $apcSituationProfessionnelle): Response
    {
        $form = $this->createForm(ApcSituationProfessionnelleType::class, $apcSituationProfessionnelle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('administration_apc_competence_show',
                ['id' => $apcSituationProfessionnelle->getCompetence()->getId()]);
        }

        return $this->render('apc/apc_situation_professionnelle/edit.html.twig', [
            'apc_situation_professionnelle' => $apcSituationProfessionnelle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="apc_situation_professionnelle_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ApcSituationProfessionnelle $apcSituationProfessionnelle): Response
    {
        if ($this->isCsrfTokenValid('delete'.$apcSituationProfessionnelle->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($apcSituationProfessionnelle);
            $entityManager->flush();
        }

        return $this->redirectToRoute('apc_situation_professionnelle_index');
    }
}
