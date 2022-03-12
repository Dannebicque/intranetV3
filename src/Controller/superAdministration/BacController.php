<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/BacController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Bac;
use App\Entity\Constantes;
use App\Form\BacType;
use App\Repository\BacRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/bac')]
class BacController extends BaseController
{
    #[Route(path: '/', name: 'sa_bac_index', methods: ['GET'])]
    public function index(BacRepository $bacRepository): Response
    {
        return $this->render('super-administration/bac/index.html.twig', ['bacs' => $bacRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_bac_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(MyExport $myExport, BacRepository $bacRepository, string $_format): Response
    {
        $bacs = $bacRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $bacs,
            'bacs',
            ['bac_administration'],
            ['libelle', 'libelleLong']
        );
    }

    #[Route(path: '/new', name: 'sa_bac_new', methods: ['GET', 'POST'])]
    public function create(Request $request): Response
    {
        $bac = new Bac();
        $form = $this->createForm(BacType::class, $bac);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($bac);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bac.add.success.flash');

            return $this->redirectToRoute('sa_bac_index');
        }

        return $this->render('super-administration/bac/new.html.twig', [
            'bac' => $bac,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_bac_show', methods: ['GET'])]
    public function show(Bac $bac): Response
    {
        return $this->render('super-administration/bac/show.html.twig', ['bac' => $bac]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_bac_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Bac $bac): Response
    {
        $form = $this->createForm(BacType::class, $bac);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bac.edit.success.flash');

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_bac_index');
            }

            return $this->redirectToRoute('sa_bac_edit', ['id' => $bac->getId()]);
        }

        return $this->render('super-administration/bac/edit.html.twig', [
            'bac' => $bac,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_bac_duplicate', methods: 'GET|POST')]
    public function duplicate(Bac $bac): Response
    {
        $newBac = clone $bac;
        $this->entityManager->persist($newBac);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'bac.duplicate.success.flash');

        return $this->redirectToRoute('sa_bac_edit', ['id' => $newBac->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_bac_delete', methods: 'DELETE')]
    public function delete(Request $request, Bac $bac): Response
    {
        $id = $bac->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
            $this->entityManager->remove($bac);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
