<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/PpnController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\superAdministration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Ppn;
use App\Form\PpnType;
use App\Repository\PpnRepository;
use Exception;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/super-sa/programme-pedagogique')]
class PpnController extends BaseController
{
    #[Route(path: '/export.{_format}', name: 'sa_ppn_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(): Response
    {
        // save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/copie', name: 'sa_ppn_copie_integrale', methods: 'POST')]
    public function copieIntegrale(PpnRepository $ppnRepository, Request $request): Response
    {
        $ppnOrigine = $ppnRepository->find($request->request->get('ppn_origine'));
        $ppnDest = $ppnRepository->find($request->request->get('ppn_dest'));
        if (null !== $ppnDest && null !== $ppnOrigine) {
            // effacer contenu PPN de destination
            foreach ($ppnDest->getMatieres() as $matiere) {
                $this->entityManager->remove($matiere);
            }
            $this->entityManager->flush();

            // Copie PPN
            foreach ($ppnOrigine->getMatieres() as $matiere) {
                $newMatiere = clone $matiere;
                $newMatiere->setPpn($ppnDest);
                $ppnDest->addMatiere($newMatiere);
                $this->entityManager->persist($newMatiere);
                $this->entityManager->persist($ppnDest);
            }
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.copie.integrale.success.flash');
        }

        return $this->redirectToRoute('sa_ppn_index');
    }

    #[Route(path: '/new/{diplome}', name: 'sa_ppn_new', methods: 'GET|POST')]
    public function create(Request $request, Diplome $diplome): Response
    {
        $ppn = new Ppn();
        $ppn->setDiplome($diplome);
        $form = $this->createForm(PpnType::class, $ppn, [
            'departement' => $diplome->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($ppn);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.add.success.flash');

            return $this->redirectToRoute('sa_structure_index', ['departement' => $diplome->getDepartement()->getId()]);
        }

        return $this->render('structure/ppn/new.html.twig', [
            'ppn' => $ppn,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_ppn_show', methods: 'GET')]
    public function show(Ppn $ppn): Response
    {
        return $this->render('structure/ppn/show.html.twig', ['ppn' => $ppn]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_ppn_edit', methods: 'GET|POST')]
    public function edit(Request $request, Ppn $ppn): Response
    {
        $form = $this->createForm(PpnType::class, $ppn, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.edit.success.flash');

            return $this->redirectToRoute('sa_ppn_index');
        }

        return $this->render('structure/ppn/edit.html.twig', [
            'ppn' => $ppn,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_ppn_delete', methods: 'DELETE')]
    public function delete(Request $request, Ppn $ppn): Response
    {
        // suppression uniquement si vide.
        // feature: gérer une suppression plus complete en super-admin
        $id = $ppn->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($ppn);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'ppn.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_ppn_duplicate', methods: 'GET|POST')]
    public function duplicate(Ppn $ppn): Response
    {
        $newPpn = clone $ppn;
        $this->entityManager->persist($newPpn);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.duplicate.success.flash');

        return $this->redirectToRoute('sa_ppn_edit', ['id' => $newPpn->getId()]);
    }
}
