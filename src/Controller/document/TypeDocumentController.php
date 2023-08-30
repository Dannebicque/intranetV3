<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/document/TypeDocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/07/2022 15:08
 */

namespace App\Controller\document;

use App\Classes\DocumentDelete;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Document;
use App\Entity\TypeDocument;
use App\Form\TypeDocumentType;
use App\Repository\TypeDocumentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TypeDocumentController extends BaseController
{
    #[Route(path: '/administration/categorie-{source}/', name: 'administration_type_document_index', methods: 'GET')]
    #[Route(path: '/administratif/categorie-{source}/', name: 'sa_qualite_type_document_index', methods: 'GET')]
    public function index(TypeDocumentRepository $typeDocumentRepository, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
            $typeDocuments = $typeDocumentRepository->findByOriginaux();
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
            $typeDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());
            $this->breadcrumbHelper->addItem('Documents', 'administration_type_document_index', ['source' => $source]);
        }

        return $this->render(
            'document/type_document/index.html.twig',
            [
                'type_documents' => $typeDocuments,
                'source' => $source,
            ]
        );
    }

    #[Route(path: '/administration/categorie-{source}/export.{_format}', name: 'administration_type_document_export', requirements: ['_format' => 'pdf|csv|xlsx'], methods: 'GET')]
    #[Route(path: '/administratif/categorie-{source}/export.{_format}', name: 'sa_qualite_type_document_export', requirements: ['_format' => 'pdf|csv|xlsx'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport,
        TypeDocumentRepository $typeDocumentRepository,
        string $_format,
        string $source
    ): Response {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
            $typesDocuments = $typeDocumentRepository->findByOriginaux();
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
            $typesDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());
        }

        $data = $mySerializer->getDataFromSerialization(
            $typesDocuments,
            [
                'libelle',
                'nbDocuments', // todo: comment l'intégrer ?
            ],
            ['typedocument_administration'],
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'type_documents_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/administration/categorie-{source}/ajouter', name: 'administration_type_document_new', methods: 'GET|POST')]
    #[Route(path: '/administratif/categorie-{source}/ajouter', name: 'sa_qualite_type_document_new', methods: 'GET|POST')]
    public function create(Request $request, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
            $typeDocument = new TypeDocument(null);
            $typeDocument->setOriginaux(true);
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
            $typeDocument = new TypeDocument($this->dataUserSession->getDepartement());
        }

        $form = $this->createForm(TypeDocumentType::class, $typeDocument, [
            'action' => Document::ORIGINAUX === $source ? $this->generateUrl('sa_qualite_type_document_new',
                ['source' => $source]) : $this->generateUrl('administration_type_document_new', ['source' => $source]),
            'attr' => [
                'data-provide' => 'validation',
            ],
            'source' => $source,
            'departement' => $this->getDepartement(),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->persist($typeDocument);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.add.success.flash');

            if (Document::ORIGINAUX === $source) {
                return $this->redirectToRoute('sa_qualite_type_document_index', ['source' => Document::ORIGINAUX]);
            }

            return $this->redirectToRoute('administration_type_document_index', ['source' => Document::DOCUMENTS]);
        }

        return $this->render('document/type_document/new.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form,
        ]);
    }

    #[Route(path: '/administration/categorie-{source}/{id}', name: 'administration_type_document_show', methods: 'GET')]
    #[Route(path: '/administratif/categorie-{source}/{id}', name: 'sa_qualite_type_document_show', methods: 'GET')]
    public function show(TypeDocument $typeDocument, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        }

        return $this->render('document/type_document/show.html.twig', ['type_document' => $typeDocument]);
    }

    #[Route(path: '/administration/categorie-{source}/{id}/edit', name: 'administration_type_document_edit', methods: 'GET|POST')]
    #[Route(path: '/administratif/categorie-{source}/{id}/edit', name: 'sa_qualite_type_document_edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeDocument $typeDocument, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        }

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
                if (Document::ORIGINAUX === $source) {
                    return $this->redirectToRoute('sa_qualite_type_document_index', ['source' => Document::ORIGINAUX]);
                }

                return $this->redirectToRoute('administration_type_document_index', ['source' => Document::DOCUMENTS]);
            }

            if (Document::ORIGINAUX === $source) {
                return $this->redirectToRoute('sa_qualite_type_document_edit',
                    ['id' => $typeDocument->getId(), 'source' => Document::ORIGINAUX]);
            }

            return $this->redirectToRoute('administration_type_document_edit',
                ['id' => $typeDocument->getId(), 'source' => Document::DOCUMENTS]);
        }

        return $this->render('document/type_document/edit.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form,
        ]);
    }

    #[Route(path: '/administration/categorie-{source}/{id}', name: 'administration_type_document_delete', methods: [
        'DELETE',
        'POST',
    ])]
    #[Route(path: '/administratif/categorie-{source}/{id}', name: 'sa_qualite_type_document_delete', methods: [
        'DELETE',
        'POST',
    ])]
    public function delete(
        DocumentDelete $documentDelete,
        Request $request,
        TypeDocument $typeDocument,
        string $source
    ): Response {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        }

        $id = $typeDocument->getId();
        if ($this->isCsrfTokenValid('delete'.$id, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
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

    #[Route(path: '/administration/categorie-{source}/{id}/duplicate', name: 'administration_type_document_duplicate', methods: 'GET|POST')]
    #[Route(path: '/administratif/categorie-{source}/{id}/duplicate', name: 'sa_qualite_type_document_duplicate', methods: 'GET|POST')]
    public function duplicate(TypeDocument $typeDocument, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        }

        $newTypeDocument = clone $typeDocument;
        $this->entityManager->persist($newTypeDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.duplicate.success.flash');

        if (Document::ORIGINAUX === $source) {
            return $this->redirectToRoute('sa_qualite_type_document_edit',
                ['id' => $newTypeDocument->getId(), 'source' => Document::ORIGINAUX]);
        }

        return $this->redirectToRoute('administration_type_document_edit',
            ['id' => $newTypeDocument->getId(), 'source' => Document::DOCUMENTS]);
    }
}
