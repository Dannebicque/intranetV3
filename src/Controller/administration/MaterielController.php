<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/MaterielController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:13
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Materiel;
use App\Form\MaterielType;
use App\Repository\MaterielRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/materiel')]
class MaterielController extends BaseController
{
    #[Route(path: '/', name: 'administration_materiel_index', methods: 'GET')]
    public function index(MaterielRepository $materielRepository): Response
    {
        return $this->render('administration/materiel/index.html.twig',
            ['materiels' => $materielRepository->findByDepartement($this->dataUserSession->getDepartement())]);
    }

    #[Route(path: '/export.{_format}', name: 'administration_materiel_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(MySerializer $mySerializer, MyExport $myExport, MaterielRepository $materielRepository, string $_format): Response
    {
        $materiels = $materielRepository->findByDepartement($this->dataUserSession->getDepartement());
        $data = $mySerializer->getDataFromSerialization(
            $materiels,
            ['titre', 'texte', 'departement' => ['libelle']],
            ['materiel_administration', 'utilisateur'],
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'materiels_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/new', name: 'administration_materiel_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $materiel = new Materiel();
        $form = $this->createForm(MaterielType::class, $materiel, [
            'attr' => [
                'data-provide' => 'validation',
            ],
            'departement' => $this->dataUserSession->getDepartement(),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($materiel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel.add.success.flash');

            return $this->redirectToRoute('administration_materiel_index');
        }

        return $this->render('administration/materiel/new.html.twig', [
            'materiel' => $materiel,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_materiel_show', methods: 'GET')]
    public function show(Materiel $materiel): Response
    {
        return $this->render('administration/materiel/show.html.twig', ['materiel' => $materiel]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_materiel_edit', methods: 'GET|POST')]
    public function edit(Request $request, Materiel $materiel): Response
    {
        $form = $this->createForm(MaterielType::class, $materiel, [
            'attr' => [
                'data-provide' => 'validation',
            ],
            'departement' => $this->dataUserSession->getDepartement(),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_materiel_index');
            }

            return $this->redirectToRoute('administration_materiel_edit', ['id' => $materiel->getId()]);
        }

        return $this->render('administration/materiel/edit.html.twig', [
            'materiel' => $materiel,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_materiel_delete', methods: 'DELETE')]
    public function delete(Request $request, Materiel $materiel): Response
    {
        $id = $materiel->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($materiel);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'materiel.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'materiel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_materiel_duplicate', methods: 'GET|POST')]
    public function duplicate(Materiel $materiel): Response
    {
        $newMateriel = clone $materiel;
        $this->entityManager->persist($newMateriel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'materiel.duplicate.success.flash');

        return $this->redirectToRoute('administration_materiel_edit', ['id' => $newMateriel->getId()]);
    }
}
