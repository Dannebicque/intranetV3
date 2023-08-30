<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/apc/ApcCompetenceController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2023 08:55
 */

namespace App\Controller\administration\apc;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\ApcCompetence;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Form\ApcCompetenceType;
use App\Repository\ApcComptenceRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/apc/competence')]
class ApcCompetenceController extends BaseController
{
    #[Route(path: '/{diplome}/export.{_format}', name: 'administration_apc_competence_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, ApcComptenceRepository $apcComptenceRepository, Diplome $diplome, string $_format): Response
    {
        $apcCompetences = $apcComptenceRepository->findByDiplome($diplome);
        // todo: a faire.
        $data = $mySerializer->getDataFromSerialization(
            $apcCompetences,
            [
            ],
            [],
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'comptences_'.$diplome->getLibelle(),
        );
    }

    #[Route(path: '/{diplome}/new', name: 'administration_apc_competence_new', methods: ['GET', 'POST'])]
    public function new(Request $request, Diplome $diplome): Response
    {
        $apcComptence = new ApcCompetence($diplome->getReferentiel());
        $form = $this->createForm(ApcCompetenceType::class, $apcComptence);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($apcComptence);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.create.success.flash');

            return $this->redirectToRoute('administration_apc_referentiel_index', ['diplome' => $diplome->getId()]);
        }

        return $this->render('apc/apc_competence/new.html.twig', [
            'apc_competence' => $apcComptence,
            'form' => $form,
            'diplome' => $diplome,
        ]);
    }

    #[Route(path: '/{id}/detail', name: 'administration_apc_competence_show', methods: ['GET'])]
    public function show(ApcCompetence $apcCompetence): Response
    {
        return $this->render('apc/apc_competence/show.html.twig', [
            'competence' => $apcCompetence,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_apc_competence_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, ApcCompetence $apcCompetence): Response
    {
        $form = $this->createForm(ApcCompetenceType::class, $apcCompetence);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.edit.success.flash');

            return $this->redirectToRoute('administration_apc_competence_index',
                ['diplome' => $apcCompetence->getApcReferentiel()->getDiplomes()?->getId()]);//Todo: a revoir, pas de diplome
        }

        return $this->render('apc/apc_competence/edit.html.twig', [
            'apc_competence' => $apcCompetence,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_apc_competence_delete', methods: ['DELETE'])]
    public function delete(Request $request, ApcCompetence $apcCompetence): Response
    {
        $diplome = $apcCompetence->getDiplome();
        if ($this->isCsrfTokenValid('delete'.$apcCompetence->getId(), $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($apcCompetence);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.delete.success.flash');
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'apc.competence.delete.error.flash');

        if (null !== $diplome) {
            return $this->redirectToRoute('administration_apc_referentiel_index',
                [
                    'diplome' => $diplome->getId(),
                ]);
        }

        return $this->redirectToRoute('administration_index');
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_apc_competence_duplicate', methods: 'GET|POST')]
    public function duplicate(ApcCompetence $apcCompetence): Response
    {
        $newApcCompetence = clone $apcCompetence;
        $this->entityManager->persist($newApcCompetence);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'apc.competence.duplicate.success.flash');

        return $this->redirectToRoute('administration_apc_competence_edit', ['id' => $newApcCompetence->getId()]);
    }
}
