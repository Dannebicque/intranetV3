<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcNiveauController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\administration\apc;

use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\ApcNiveau;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcNiveauType;
use App\Repository\ApcNiveauRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/apc/niveau')]
class ApcNiveauController extends BaseController
{
    #[Route(path: '/{diplome}/synchro-niveau-annee', name: 'administration_apc_niveau_annee_synchro', methods: 'GET')]
    public function synchroNiveauAnnee(ApcNiveauRepository $apcNiveauRepository, Diplome $diplome): Response
    {
        // todo: une année dépend du PN ? La structure dépend du PN ? Comment est-ce codé dans Apogée ? Un nouveau diplôme ?
        $annees = $diplome->getAnnees();
        $t = [];
        foreach ($annees as $annee) {
            $t[$annee->getOrdre()] = $annee;
        }
        $niveaux = $apcNiveauRepository->findByDiplome($diplome);
        foreach ($niveaux as $niveau) {
            if (array_key_exists($niveau->getOrdre(), $t)) {
                $niveau->setAnnee($t[$niveau->getOrdre()]);
            }
        }
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'Synchronisation effectuée');

        return $this->redirectToRoute('administration_apc_referentiel_index', [
            'diplome' => $diplome->getId(),
        ]);
    }

    #[Route(path: '/{competence}/new', name: 'administration_apc_niveau_new', methods: ['GET', 'POST'])]
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
            'form' => $form,
            'competence' => $competence,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_apc_niveau_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ApcNiveau $apcNiveau): Response
    {
        $form = $this->createForm(ApcNiveauType::class, $apcNiveau);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.niveau.edit.success.flash');

            return $this->redirectToRoute('administration_apc_competence_show',
                ['id' => $apcNiveau->getCompetence()?->getId()]);
        }

        return $this->render('apc/apc_niveau/edit.html.twig', [
            'apc_niveau' => $apcNiveau,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_apc_niveau_delete', methods: ['DELETE'])]
    public function delete(Request $request, ApcNiveau $apcNiveau): Response
    {
        $competence = $apcNiveau->getCompetence();
        if ($this->isCsrfTokenValid('delete'.$apcNiveau->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($apcNiveau);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.niveau.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.niveau.delete.error.flash');

        return $this->redirectToRoute('administration_apc_competence_show', ['id' => $competence->getId()]);
    }
}
