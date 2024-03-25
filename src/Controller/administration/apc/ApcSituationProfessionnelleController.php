<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcSituationProfessionnelleController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\ApcSituationProfessionnelle;
use App\Entity\Constantes;
use App\Form\ApcSituationProfessionnelleType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/apc/situation/professionnelle')]
class ApcSituationProfessionnelleController extends BaseController
{
    #[Route(path: '/new/{competence}', name: 'administration_apc_situation_professionnelle_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ApcCompetence $competence): Response
    {
        $apcSituationProfessionnelle = new ApcSituationProfessionnelle();
        $form = $this->createForm(ApcSituationProfessionnelleType::class, $apcSituationProfessionnelle);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcSituationProfessionnelle);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.edit.success.situation.professionnelle'
            );

            return $this->redirectToRoute('administration_apc_competence_show',
                ['id' => $competence->getId()]);
        }

        return $this->render('apc/apc_situation_professionnelle/new.html.twig', [
            'apc_situation_professionnelle' => $apcSituationProfessionnelle,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_apc_situation_professionnelle_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ApcSituationProfessionnelle $apcSituationProfessionnelle): Response
    {
        $form = $this->createForm(ApcSituationProfessionnelleType::class, $apcSituationProfessionnelle);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.edit.success.situation.professionnelle'
            );

            return $this->redirectToRoute('administration_apc_competence_show',
                ['id' => $apcSituationProfessionnelle->getCompetence()->getId()]);
        }

        return $this->render('apc/apc_situation_professionnelle/edit.html.twig', [
            'apc_situation_professionnelle' => $apcSituationProfessionnelle,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'apc_situation_professionnelle_delete', methods: ['DELETE'])]
    public function delete(Request $request, ApcSituationProfessionnelle $apcSituationProfessionnelle): Response
    {
        if ($this->isCsrfTokenValid('delete'.$apcSituationProfessionnelle->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($apcSituationProfessionnelle);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'apc.delete.success.situation.professionnelle'
            );
        }

        return $this->redirectToRoute('apc_situation_professionnelle_index');
    }
}
