<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcApprentissageCritiqueController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcApprentissageCritique;
use App\Entity\ApcNiveau;
use App\Entity\Constantes;
use App\Form\ApcApprentissageCritiqueType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/apc/apprentissage/critique')]
class ApcApprentissageCritiqueController extends BaseController
{
    #[Route(path: '/new/{niveau}', name: 'administration_apc_apprentissage_critique_new', methods: ['GET', 'POST'])]
    public function new(Request $request, ApcNiveau $niveau): Response
    {
        $apcApprentissageCritique = new ApcApprentissageCritique($niveau);
        $form = $this->createForm(ApcApprentissageCritiqueType::class, $apcApprentissageCritique);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcApprentissageCritique);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.apprentissageCritique.create.success.flash');
            if (null !== $niveau->getCompetence()) {
                return $this->redirectToRoute('administration_apc_competence_show',
                    ['id' => $niveau->getCompetence()->getId()]);
            }

            return $this->redirectToRoute('administration_apc_referentiel_index');
        }

        return $this->render('apc/apc_apprentissage_critique/new.html.twig', [
            'apc_apprentissage_critique' => $apcApprentissageCritique,
            'form' => $form,
            'competence' => $niveau->getCompetence(),
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_apc_apprentissage_critique_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ApcApprentissageCritique $apcApprentissageCritique): Response
    {
        $form = $this->createForm(ApcApprentissageCritiqueType::class, $apcApprentissageCritique);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.apprentissageCritique.edit.success.flash');

            return $this->redirectToRoute('administration_apc_apprentissage_critique_index');
        }

        return $this->render('apc/apc_apprentissage_critique/edit.html.twig', [
            'apc_apprentissage_critique' => $apcApprentissageCritique,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_apc_apprentissage_critique_delete', methods: ['DELETE'])]
    public function delete(Request $request, ApcApprentissageCritique $apcApprentissageCritique): Response
    {
        if ($this->isCsrfTokenValid('delete'.$apcApprentissageCritique->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($apcApprentissageCritique);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.apprentissageCritique.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.apprentissageCritique.delete.error.flash');

        return $this->redirectToRoute('administration_apc_apprentissage_critique_index');
    }
}
