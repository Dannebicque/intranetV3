<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/TypeMaterielController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/09/2022 09:13
 */

namespace App\Controller\administration;

use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeMateriel;
use App\Form\TypeMaterielType;
use App\Repository\TypeMaterielRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/type-materiel')]
class TypeMaterielController extends BaseController
{
    #[Route(path: '/', name: 'administration_type_materiel_index', methods: 'GET')]
    public function index(TypeMaterielRepository $typeMaterielRepository): Response
    {
        return $this->render('administration/type_materiel/index.html.twig',
            ['type_materiels' => $typeMaterielRepository->findByDepartement($this->dataUserSession->getDepartement())]);
    }

    #[Route(path: '/export.{_format}', name: 'administration_type_materiel_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, TypeMaterielRepository $type_materielRepository, string $_format): Response
    {
        $type_materiels = $type_materielRepository->findByDepartement($this->dataUserSession->getDepartement());

        $data = $mySerializer->getDataFromSerialization(
            $type_materiels,
            ['titre', 'texte', 'departement' => ['libelle']],
            ['type_materiel_administration', 'utilisateur'],
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'type_materiels_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/new', name: 'administration_type_materiel_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $typeMateriel = new TypeMateriel($this->dataUserSession->getDepartement());
        $form = $this->createForm(TypeMaterielType::class, $typeMateriel, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeMateriel);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_materiel.add.success.flash');

            return $this->redirectToRoute('administration_type_materiel_index');
        }

        return $this->render('administration/type_materiel/new.html.twig', [
            'type_materiel' => $typeMateriel,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_type_materiel_show', methods: 'GET')]
    public function show(TypeMateriel $typeMateriel): Response
    {
        return $this->render('administration/type_materiel/show.html.twig', ['type_materiel' => $typeMateriel]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_type_materiel_edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeMateriel $typeMateriel): Response
    {
        $form = $this->createForm(TypeMaterielType::class, $typeMateriel, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_materiel.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_type_materiel_index');
            }

            return $this->redirectToRoute('administration_type_materiel_edit', ['id' => $typeMateriel->getId()]);
        }

        return $this->render('administration/type_materiel/edit.html.twig', [
            'type_materiel' => $typeMateriel,
            'form' => $form,
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_type_materiel_delete', methods: 'DELETE')]
    public function delete(Request $request, TypeMateriel $type_materiel): Response
    {
        $id = $type_materiel->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $this->entityManager->remove($type_materiel);
            $this->entityManager->flush();
            $this->addFlashBag(
                Constantes::FLASHBAG_SUCCESS,
                'type_materiel.delete.success.flash'
            );

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'type_materiel.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_type_materiel_duplicate', methods: 'GET|POST')]
    public function duplicate(TypeMateriel $type_materiel): Response
    {
        $newTypeMateriel = clone $type_materiel;
        $this->entityManager->persist($newTypeMateriel);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_materiel.duplicate.success.flash');

        return $this->redirectToRoute('administration_type_materiel_edit', ['id' => $newTypeMateriel->getId()]);
    }
}
