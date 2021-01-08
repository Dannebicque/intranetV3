<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/apc/ApcNiveauController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 08/01/2021 16:12

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\ApcNiveau;
use App\Entity\Constantes;
use App\Form\ApcNiveauType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/apc/niveau")
 */
class ApcNiveauController extends BaseController
{

    /**
     * @Route("/{competence}/new", name="administration_apc_niveau_new", methods={"GET","POST"})
     * @param Request       $request
     * @param ApcCompetence $competence
     *
     * @return Response
     */
    public function new(Request $request, ApcCompetence $competence): Response
    {
        $apcNiveau = new ApcNiveau($competence);
        $form = $this->createForm(ApcNiveauType::class, $apcNiveau);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcNiveau);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.niveau.create.success.flash');

            return $this->redirectToRoute('administration_apc_competence_show', ['id' => $competence->getId()]);
        }

        return $this->render('apc/apc_niveau/new.html.twig', [
            'apc_niveau' => $apcNiveau,
            'form'       => $form->createView(),
            'competence' => $competence
        ]);
    }

    /**
     * @Route("/{id}/edit", name="administration_apc_niveau_edit", methods={"GET","POST"})
     * @param Request   $request
     * @param ApcNiveau $apcNiveau
     *
     * @return Response
     */
    public function edit(Request $request, ApcNiveau $apcNiveau): Response
    {
        $form = $this->createForm(ApcNiveauType::class, $apcNiveau);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.niveau.edit.success.flash');

            return $this->redirectToRoute('administration_apc_competence_show',
                ['id' => $apcNiveau->getCompetence()->getId()]);
        }

        return $this->render('apc/apc_niveau/edit.html.twig', [
            'apc_niveau' => $apcNiveau,
            'form'       => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_apc_niveau_delete", methods={"DELETE"})
     * @param Request   $request
     * @param ApcNiveau $apcNiveau
     *
     * @return Response
     */
    public function delete(Request $request, ApcNiveau $apcNiveau): Response
    {
        $competence = $apcNiveau->getCompetence();

        if ($this->isCsrfTokenValid('delete' . $apcNiveau->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($apcNiveau);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.niveau.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.niveau.delete.error.flash');

        return $this->redirectToRoute('administration_apc_competence_show', ['id' => $competence->getId()]);
    }
}
