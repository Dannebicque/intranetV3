<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/TypeDocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/10/2021 12:14
 */

namespace App\Controller\administration;

use App\Classes\DocumentDelete;
use App\Classes\MyExport;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeDocument;
use App\Form\TypeDocumentType;
use App\Repository\TypeDocumentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/categorie-documents')]
class TypeDocumentController extends BaseController
{
    #[Route(path: '/', name: 'administration_type_document_index', methods: 'GET')]
    public function index(TypeDocumentRepository $typeDocumentRepository): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());

        return $this->render(
            'administration/type_document/index.html.twig',
            ['type_documents' => $typeDocumentRepository->findByDepartement($this->getDepartement())]
        );
    }

    #[Route(path: '/export.{_format}', name: 'administration_type_document_export', requirements: ['_format' => 'pdf|csv|xlsx'], methods: 'GET')]
    public function export(MyExport $myExport, TypeDocumentRepository $typeDocumentRepository, $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $typesDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());

        return $myExport->genereFichierGenerique(
            $_format,
            $typesDocuments,
            'types documents',
            ['typedocument_administration'],
            [
                'libelle',
                'nbDocuments', //todo: comment l'intégrer ?
            ]
        );
    }

    #[Route(path: '/new', name: 'administration_type_document_new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        $typeDocument = new TypeDocument($this->dataUserSession->getDepartement());
        $form = $this->createForm(TypeDocumentType::class, $typeDocument, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeDocument);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.add.success.flash');

            return $this->redirectToRoute('administration_type_document_index');
        }

        return $this->render('administration/type_document/new.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_type_document_show', methods: 'GET')]
    public function show(TypeDocument $typeDocument): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeDocument->getDepartement());

        return $this->render('administration/type_document/show.html.twig', ['type_document' => $typeDocument]);
    }

    #[Route(path: '/{id}/edit', name: 'administration_type_document_edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeDocument $typeDocument): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeDocument->getDepartement());
        $form = $this->createForm(TypeDocumentType::class, $typeDocument, [
            'attr' => [
                'data-provide' => 'validation',
            ],
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_type_document_index');
            }

            return $this->redirectToRoute('administration_type_document_edit', ['id' => $typeDocument->getId()]);
        }

        return $this->render('administration/type_document/edit.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'administration_type_document_delete', methods: 'DELETE')]
    public function delete(DocumentDelete $documentDelete, Request $request, TypeDocument $typeDocument): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeDocument->getDepartement());
        $id = $typeDocument->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->request->get('_token'))) {
            foreach ($typeDocument->getDocuments() as $document) {
                $documentDelete->deleteDocument($document);
                if (true !== $documentDelete) {
                    return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
                }
            }

            $this->entityManager->remove($typeDocument);
            $this->entityManager->flush();

            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.delete.success.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    #[Route(path: '/{id}/duplicate', name: 'administration_type_document_duplicate', methods: 'GET|POST')]
    public function duplicate(TypeDocument $typeDocument): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeDocument->getDepartement());
        $newTypeDocument = clone $typeDocument;
        $this->entityManager->persist($newTypeDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.duplicate.success.flash');

        return $this->redirectToRoute('administration_type_document_edit', ['id' => $newTypeDocument->getId()]);
    }
}
