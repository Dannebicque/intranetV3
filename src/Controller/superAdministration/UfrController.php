<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/superAdministration/UfrController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Ufr;
use App\Form\UfrType;
use App\Repository\UfrRepository;
use function count;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/ufr')]
class UfrController extends BaseController
{
    #[Route(path: '/', name: 'sa_ufr_index', methods: 'GET')]
    public function index(UfrRepository $ufrRepository): Response
    {
        return $this->render('super-administration/ufr/index.html.twig', ['ufrs' => $ufrRepository->findAll()]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_ufr_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(MyExport $myExport, UfrRepository $ufrRepository, $_format): Response
    {
        $ufrs = $ufrRepository->findAll();

        return $myExport->genereFichierGenerique(
            $_format,
            $ufrs,
            'ufr',
            ['ufr_administration', 'utilisateur'],
            ['libelle', 'responsable' => ['nom', 'prenom', 'mailUniv']]
        );
    }

    #[Route(path: '/new', name: 'sa_ufr_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $ufr = new Ufr();
        $form = $this->createForm(UfrType::class, $ufr, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($ufr);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ufr.add.success.flash');

            return $this->redirectToRoute('sa_ufr_index');
        }

        return $this->render('super-administration/ufr/new.html.twig', [
            'ufr' => $ufr,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_ufr_show', methods: 'GET')]
    public function show(Ufr $ufr): Response
    {
        return $this->render('super-administration/ufr/show.html.twig', ['ufr' => $ufr]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_ufr_edit', methods: 'GET|POST')]
    public function edit(Request $request, Ufr $ufr): Response
    {
        $form = $this->createForm(UfrType::class, $ufr, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ufr.edit.success.flash');

            return $this->redirectToRoute('sa_ufr_edit', ['id' => $ufr->getId()]);
        }

        return $this->render('super-administration/ufr/edit.html.twig', [
            'ufr' => $ufr,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_ufr_duplicate', methods: 'GET|POST')]
    public function duplicate(Ufr $ufr): Response
    {
        $newUfr = clone $ufr;
        $this->entityManager->persist($newUfr);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'ufr.duplicate.success.flash');

        return $this->redirectToRoute('sa_ufr_edit', ['id' => $newUfr->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_ufr_delete', methods: 'DELETE')]
    public function delete(Request $request, Ufr $ufr): Response
    {
        $id = $ufr->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
            if (0 === count($ufr->getDepartements())) {
                $this->entityManager->remove($ufr);
                $this->entityManager->flush();

                return $this->json($id, Response::HTTP_OK);
            }

            return $this->json('not_empty', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
