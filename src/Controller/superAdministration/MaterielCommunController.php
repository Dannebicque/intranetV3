<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/MaterielCommunController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\superAdministration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\MaterielCommun;
use App\Form\MaterielCommunType;
use App\Repository\MaterielCommunRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route(path: '/administratif/materiel/commun')]
class MaterielCommunController extends BaseController
{
    #[Route(path: '/', name: 'sa_materiel_commun_index', methods: ['GET'])]
    public function index(MaterielCommunRepository $materielCommunRepository): Response
    {
        return $this->render('super-administration/materiel_commun/index.html.twig', [
            'materiel_communs' => $materielCommunRepository->findAll(),
        ]);
    }

    #[Route(path: '/export.{_format}', name: 'sa_materiel_commun_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, MaterielCommunRepository $materielCommunRepository, string $_format): Response
    {
        $materielsCommuns = $materielCommunRepository->findAll();

        $data = $mySerializer->getDataFromSerialization(
            $materielsCommuns,
            ['designation', 'description'],
            ['materiel_commun_administration']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'materiel_commun',
        );
    }

    #[Route(path: '/new', name: 'sa_materiel_commun_new', methods: ['GET', 'POST'])]
    public function new(Request $request): Response
    {
        $materielCommun = new MaterielCommun();
        $form = $this->createForm(MaterielCommunType::class, $materielCommun);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($materielCommun);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel_commun.add.success.flash');

            return $this->redirectToRoute('sa_materiel_commun_index');
        }

        return $this->render('super-administration/materiel_commun/new.html.twig', [
            'materiel_commun' => $materielCommun,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'sa_materiel_commun_show', methods: ['GET'])]
    public function show(MaterielCommun $materielCommun): Response
    {
        return $this->render('super-administration/materiel_commun/show.html.twig', [
            'materiel_commun' => $materielCommun,
        ]);
    }

    #[Route(path: '/{id}/edit', name: 'sa_materiel_commun_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, MaterielCommun $materielCommun): Response
    {
        $form = $this->createForm(MaterielCommunType::class, $materielCommun);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel_commun.edit.success.flash');

            return $this->redirectToRoute('sa_materiel_commun_index');
        }

        return $this->render('super-administration/materiel_commun/edit.html.twig', [
            'materiel_commun' => $materielCommun,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}/duplicate', name: 'sa_materiel_commun_duplicate', methods: 'GET|POST')]
    public function duplicate(MaterielCommun $materielCommun): Response
    {
        $newMaterielCommun = clone $materielCommun;
        $this->entityManager->persist($newMaterielCommun);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel_commun.duplicate.success.flash');

        return $this->redirectToRoute('sa_materiel_commun_edit', ['id' => $newMaterielCommun->getId()]);
    }

    #[Route(path: '/{id}', name: 'sa_materiel_commun_delete', methods: 'DELETE')]
    public function delete(Request $request, MaterielCommun $materielCommun): Response
    {
        $id = $materielCommun->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($materielCommun);
            $this->entityManager->flush();

            return $this->json($id, Response::HTTP_OK);
        }

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
