<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcComposanteEssentielleController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\ApcComposanteEssentielle;
use App\Entity\Constantes;
use App\Form\ApcComposanteEssentielleType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/apc/composante/essentielle')]
class ApcComposanteEssentielleController extends BaseController
{
    #[Route(path: '/{competence}/new', name: 'administration_apc_composante_essentielle_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ApcCompetence $competence): Response
    {
        $apcComposanteEssentielle = new ApcComposanteEssentielle($competence);
        $form = $this->createForm(ApcComposanteEssentielleType::class, $apcComposanteEssentielle);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcComposanteEssentielle);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.composanteEssentielle.create.success.flash');

            return $this->redirectToRoute('administration_apc_competence_show', ['id' => $competence->getId()]);
        }

        return $this->render('apc/apc_composante_essentielle/new.html.twig', [
            'apc_composante_essentielle' => $apcComposanteEssentielle,
            'form' => $form,
            'competence' => $competence,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_apc_composante_essentielle_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ApcComposanteEssentielle $apcComposanteEssentielle): Response
    {
        $form = $this->createForm(ApcComposanteEssentielleType::class, $apcComposanteEssentielle);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.composanteEssentielle.edit.success.flash');

            return $this->redirectToRoute('administration_apc_composante_essentielle_index');
        }

        return $this->render('apc/apc_composante_essentielle/edit.html.twig', [
            'apc_composante_essentielle' => $apcComposanteEssentielle,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_apc_composante_essentielle_delete', methods: ['DELETE'])]
    public function delete(Request $request, ApcComposanteEssentielle $apcComposanteEssentielle): Response
    {
        if ($this->isCsrfTokenValid('delete'.$apcComposanteEssentielle->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($apcComposanteEssentielle);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.composanteEssentielle.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.composanteEssentielle.delete.error.flash');

        return $this->redirectToRoute('administration_apc_composante_essentielle_index');
    }
}
