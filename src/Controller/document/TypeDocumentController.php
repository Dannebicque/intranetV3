<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/document/TypeDocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 15/05/2022 14:40
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
use PhpParser\Comment\Doc;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administration/categorie-{source}', name: 'administration_type_document_')]
#[Route(path: '/administratif/categorie-{source}', name: 'sa_qualite_type_document_')]
class TypeDocumentController extends BaseController
{
    #[Route(path: '/', name: 'index', methods: 'GET')]
    public function index(TypeDocumentRepository $typeDocumentRepository, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_QUALITE');
            $typeDocuments = $typeDocumentRepository->findByOriginaux();
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
            $typeDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());
        }

        return $this->render(
            'document/type_document/index.html.twig',
            [
                'type_documents' => $typeDocuments,
                'source' => $source,
            ]
        );
    }

    #[Route(path: '/export.{_format}', name: 'export', requirements: ['_format' => 'pdf|csv|xlsx'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport,
        TypeDocumentRepository $typeDocumentRepository,
        $_format,
        string $source
    ): Response {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_QUALITE');
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
            'type_documents_' . $this->getDepartement()?->getLibelle(),
        );
    }

    #[Route(path: '/new', name: 'new', methods: 'GET|POST')]
    public function create(Request $request, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_QUALITE');
            $typeDocument = new TypeDocument();
            $typeDocument->setOriginaux(true);
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
            $typeDocument = new TypeDocument($this->dataUserSession->getDepartement());
        }

        $form = $this->createForm(TypeDocumentType::class, $typeDocument, [
            'action' => $source === Document::ORIGINAUX ? $this->generateUrl('sa_qualite_type_document_new',
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

            return $this->redirectToRoute('administration_type_document_index', ['source' => Document::DOCUMENT]);
        }

        return $this->render('document/type_document/new.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'show', methods: 'GET')]
    public function show(TypeDocument $typeDocument, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_QUALITE');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        }

        return $this->render('document/type_document/show.html.twig', ['type_document' => $typeDocument]);
    }

    #[Route(path: '/{id}/edit', name: 'edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeDocument $typeDocument, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_QUALITE');
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

                return $this->redirectToRoute('administration_type_document_index', ['source' => Document::DOCUMENT]);
            }

            if (Document::ORIGINAUX === $source) {
                return $this->redirectToRoute('sa_qualite_type_document_edit',
                    ['id' => $typeDocument->getId(), 'source' => Document::ORIGINAUX]);
            }

            return $this->redirectToRoute('administration_type_document_edit',
                ['id' => $typeDocument->getId(), 'source' => Document::DOCUMENT]);
        }

        return $this->render('document/type_document/edit.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'delete', methods: 'DELETE')]
    public function delete(
        DocumentDelete $documentDelete,
        Request $request,
        TypeDocument $typeDocument,
        string $source
    ): Response {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_QUALITE');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $this->getDepartement());
        }

        $id = $typeDocument->getId();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
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

    #[Route(path: '/{id}/duplicate', name: 'duplicate', methods: 'GET|POST')]
    public function duplicate(TypeDocument $typeDocument, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_QUALITE');
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
            ['id' => $newTypeDocument->getId(), 'source' => Document::DOCUMENT]);
    }
}
