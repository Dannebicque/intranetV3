<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/document/DocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 16/02/2024 22:17
 */

namespace App\Controller\document;

use App\Classes\DocumentDelete;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Classes\MyUpload;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Document;
use App\Form\DocumentType;
use App\Repository\DocumentRepository;
use App\Table\DocumentTableType;
use Exception;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DocumentController extends BaseController
{
    #[Route('/administration/document/{source}', name: 'administration_document_index', methods: ['GET', 'POST'])]
    #[Route('/administratif/document/{source}', name: 'sa_qualite_documents_index', methods: ['GET', 'POST'])]
    public function index(Request $request, string $source = Document::DOCUMENTS): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
            $table = $this->createTable(DocumentTableType::class, [
                'source' => Document::ORIGINAUX,
            ]);
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
            $table = $this->createTable(DocumentTableType::class, [
                'departement' => $this->getDepartement(),
                'source' => $source,
            ]);
            $this->breadcrumbHelper->addAdministration()->addLastItem('Documents');
        }

        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('document/administration/index.html.twig',
            ['table' => $table, 'source' => $source]);
    }

    #[Route('/administration/document/{source}export.{_format}', name: 'administration_document_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    #[Route('/administratif/document/{source}export.{_format}', name: 'sa_qualite_documents_export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport,
        DocumentRepository $documentRepository,
        string $_format,
        string $source = Document::DOCUMENTS
    ): Response {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
            $documents = $documentRepository->findByOriginaux();
            $name = 'originaux';
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
            $documents = $documentRepository->findByDepartement($this->getDepartement());
            $name = $this->getDepartement()?->getLibelle();
        }

        $data = $mySerializer->getDataFromSerialization(
            $documents,
            ['libelle', 'description', 'typeDocument' => ['libelle'], 'semestres' => ['libelle']],
            ['document_administration', 'semestre']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'documents_'.$name,
        );
    }

    #[Route('/administration/document/{source}/ajouter', name: 'administration_document_new', methods: ['GET', 'POST'])]
    #[Route('/administratif/document/{source}/ajouter', name: 'sa_qualite_documents_new', methods: ['GET', 'POST'])]
    public function create(
        MyUpload $myUpload,
        Request $request,
        string $source = Document::DOCUMENTS
    ): Response {
        $document = new Document();

        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
            $document->setTypeDestinataire(Constantes::TYPE_DESTINATAIRE_PERSONNEL);
            $form = $this->createForm(
                DocumentType::class,
                $document,
                [
                    'departement' => null,
                    'source' => $source,
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                ]
            );
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());
            $this->breadcrumbHelper->addAdministration()
                ->addItem('Documents', 'administration_document_index', ['source' => $source])
                ->addLastItem('Ajouter un document');

            $form = $this->createForm(
                DocumentType::class,
                $document,
                [
                    'departement' => $this->getDepartement(),
                    'source' => $source,
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                ]
            );
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $myUpload->upload($form->get('documentFile')->getData(), 'documents/');
            $document->updateFile($myUpload);

            $this->entityManager->persist($document);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.add.success.flash');

            if (Document::ORIGINAUX === $source) {
                if (null !== $request->request->get('btn_update')) {
                    return $this->redirectToRoute('sa_qualite_documents_index', ['source' => $source]);
                }

                return $this->redirectToRoute('sa_qualite_documents_new', ['source' => $source]);
            }

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_document_index', ['source' => $source]);
            }

            return $this->redirectToRoute('administration_document_new', ['source' => $source]);
        }

        return $this->render('document/administration/new.html.twig', [
            'document' => $document,
            'form' => $form,
            'source' => $source,
        ]);
    }

    #[Route('/administration/document/{source}/{id}', name: 'administration_document_show', methods: ['GET'])]
    #[Route('/administratif/document/{source}/{id}', name: 'sa_qualite_documents_show', methods: ['GET'])]
    public function show(#[MapEntity(mapping: ['id' => 'uuid'])]
                         Document $document, string $source = Document::DOCUMENTS): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);
            $this->breadcrumbHelper->addAdministration()
                ->addItem('Documents', 'administration_document_index', ['source' => $source])
                ->addLastItem('Détail du document');
        }

        return $this->render('document/administration/show.html.twig', ['document' => $document, 'source' => $source]);
    }

    #[Route('/administration/document/{source}/{id}/edit', name: 'administration_document_edit', methods: [
        'GET',
        'POST',
    ])]
    #[Route('/administratif/document/{source}/{id}/edit', name: 'sa_qualite_documents_edit', methods: ['GET', 'POST'])]
    public function edit(
        MyUpload $myUpload,
        Request $request,
        #[MapEntity(mapping: ['id' => 'uuid'])]
        Document $document,
        string $source = Document::DOCUMENTS
    ): Response {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
            $form = $this->createForm(
                DocumentType::class,
                $document,
                [
                    'source' => $source,
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                ]
            );
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);
            $form = $this->createForm(
                DocumentType::class,
                $document,
                [
                    'departement' => $this->dataUserSession->getDepartement(),
                    'source' => $source,
                    'attr' => [
                        'data-provide' => 'validation',
                    ],
                ]
            );
        }

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if (null !== $form->get('documentFile')->getData()) {
                // supprimer l'ancien
                $myUpload->deleteFile($document->getDocumentName(), 'documents/');
                $myUpload->upload($form->get('documentFile')->getData(), 'documents/');
                $document->updateFile($myUpload);
            }

            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.edit.success.flash');

            if (Document::ORIGINAUX === $source) {
                if (null !== $request->request->get('btn_update')) {
                    return $this->redirectToRoute('sa_qualite_documents_index', ['source' => $source]);
                }

                return $this->redirectToRoute('sa_qualite_documents_edit',
                    ['id' => $document->getUuidString(), 'source' => $source]);
            }

            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_document_index', ['source' => $source]);
            }

            return $this->redirectToRoute('administration_document_edit',
                ['id' => $document->getUuidString(), 'source' => $source]);
        }

        return $this->render('document/administration/edit.html.twig', [
            'document' => $document,
            'form' => $form,
            'source' => $source,
        ]);
    }

    #[Route('/administration/document/{source}/{id}', name: 'administration_document_delete', methods: [
        'DELETE',
        'POST',
    ])]
    #[Route('/administratif/document/{source}/{id}', name: 'sa_qualite_documents_delete', methods: ['DELETE', 'POST'])]
    public function delete(
        DocumentDelete $documentDelete,
        Request $request,
        #[MapEntity(mapping: ['id' => 'uuid'])]
        Document $document,
        string $source
    ): Response {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);
        }

        $id = $document->getId();
        $uuid = $document->getUuid();
        if ($this->isCsrfTokenValid('delete'.$uuid, $request->server->get('HTTP_X_CSRF_TOKEN'))) {
            $docDelete = $documentDelete->deleteDocument($document);
            if (true === $docDelete) {
                $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.delete.success.flash');

                return $this->json($id, Response::HTTP_OK);
            }
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'document.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @throws Exception
     */
    #[Route('/administration/document/{source}/{id}/duplicate', name: 'administration_document_duplicate', methods: [
        'GET',
        'POST',
    ])]
    #[Route('/administratif/document/{source}/{id}/duplicate', name: 'sa_qualite_documents_duplicate', methods: [
        'GET',
        'POST',
    ])]
    public function duplicate(#[MapEntity(mapping: ['id' => 'uuid'])]
                              Document $document, string $source): Response
    {
        if (Document::ORIGINAUX === $source) {
            $this->denyAccessUnlessGranted('ROLE_ADMINISTRATIF');
        } else {
            $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);
        }

        $newDocument = clone $document;
        $this->entityManager->persist($newDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.duplicate.success.flash');

        if (Document::ORIGINAUX === $source) {
            return $this->redirectToRoute('sa_qualite_documents_edit', ['id' => $newDocument->getUuidString()]);
        }

        return $this->redirectToRoute('administration_document_edit', ['id' => $newDocument->getUuidString()]);
    }
}
