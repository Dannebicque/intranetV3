<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/PpnController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Diplome;
use App\Entity\Ppn;
use App\Form\PpnType;
use App\Repository\PpnRepository;
use Exception;
use RuntimeException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/programme-pedagogique')]
class PpnController extends BaseController
{
    #[Route(path: '/', name: 'administration_ppn_index', methods: 'GET')]
    public function index(PpnRepository $ppnRepository): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render('administration/ppn/index.html.twig', ['ppns' => $ppnRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'administration_ppn_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        // save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @throws Exception
     */
    #[Route(path: '/copie', name: 'administration_ppn_copie_integrale', methods: 'POST')]
    public function copieIntegrale(PpnRepository $ppnRepository, Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
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

            return $this->redirectToRoute('administration_ppn_index');
        }
        throw new RuntimeException('Pas de PPN trouvé');
    }

    #[Route(path: '/new/{diplome}', name: 'administration_ppn_new', methods: 'GET|POST')]
    public function create(Request $request, Diplome $diplome = null): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $diplome);
        $ppn = new Ppn();
        $ppn->setDiplome($diplome);
        $form = $this->createForm(PpnType::class, $ppn, [
            'departement' => $this->dataUserSession->getDepartement(),
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($ppn);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.add.success.flash');

            return $this->redirectToRoute('administration_ppn_index');
        }

        return $this->render('structure/ppn/new.html.twig', [
            'ppn' => $ppn,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_ppn_show', methods: 'GET')]
    public function show(Ppn $ppn): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $ppn->getDiplome());

        return $this->render('structure/ppn/show.html.twig', ['ppn' => $ppn]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_ppn_edit', methods: 'GET|POST')]
    public function edit(Request $request, Ppn $ppn): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $ppn->getDiplome());
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
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_ppn_index');
            }
        }

        return $this->render('structure/ppn/edit.html.twig', [
            'ppn' => $ppn,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_ppn_delete', methods: 'DELETE')]
    public function delete(Request $request, Ppn $ppn): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $ppn->getDiplome());
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

    #[Route(path: '/{id}/duplicate', name: 'administration_ppn_duplicate', methods: 'GET|POST')]
    public function duplicate(Ppn $ppn): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $ppn->getDiplome());
        $newPpn = clone $ppn;
        $this->entityManager->persist($newPpn);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ppn.duplicate.success.flash');

        return $this->redirectToRoute('administration_ppn_edit', ['id' => $newPpn->getId()]);
    }
}
