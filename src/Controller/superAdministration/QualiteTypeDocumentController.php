<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/QualiteTypeDocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 13/05/2022 20:50
 */

namespace App\Controller\superAdministration;

use App\Classes\DocumentDelete;
use App\Classes\MyExport;
use App\Classes\MySerializer;
use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\TypeDocument;
use App\Form\TypeDocumentType;
use App\Repository\TypeDocumentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/qualite/categorie-documents', name: 'sa_qualite_type_document_')]
class QualiteTypeDocumentController extends BaseController
{
    #[Route(path: '/', name: 'index', methods: 'GET')]
    public function index(TypeDocumentRepository $typeDocumentRepository): Response
    {
        return $this->render(
            'document/type_document/index.html.twig',
            ['type_documents' => $typeDocumentRepository->findByOriginaux()]
        );
    }

    #[Route(path: '/export.{_format}', name: 'export', requirements: ['_format' => 'pdf|csv|xlsx'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, TypeDocumentRepository $typeDocumentRepository, $_format): Response
    {
        $typesDocuments = $typeDocumentRepository->findByOriginaux();

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
            'type_documents_originaux',
        );
    }

    #[Route(path: '/new', name: 'new', methods: 'GET|POST')]
    public function create(Request $request): Response
    {
        $typeDocument = new TypeDocument(null);
        $typeDocument->setOriginaux(true);
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

            return $this->redirectToRoute('sa_qualite_type_document_index');
        }

        return $this->render('document/type_document/new.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'show', methods: 'GET')]
    public function show(TypeDocument $typeDocument): Response
    {
        return $this->render('document/type_document/show.html.twig', ['type_document' => $typeDocument]);
    }

    #[Route(path: '/{id}/edit', name: 'edit', methods: 'GET|POST')]
    public function edit(Request $request, TypeDocument $typeDocument): Response
    {
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
                return $this->redirectToRoute('sa_qualite_type_document_index');
            }

            return $this->redirectToRoute('sa_qualite_type_document_edit', ['id' => $typeDocument->getId()]);
        }

        return $this->render('document/type_document/edit.html.twig', [
            'type_document' => $typeDocument,
            'form' => $form->createView(),
        ]);
    }

    #[Route(path: '/{id}', name: 'delete', methods: 'DELETE')]
    public function delete(DocumentDelete $documentDelete, Request $request, TypeDocument $typeDocument): Response
    {
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

    #[Route(path: '/{id}/duplicate', name: 'duplicate', methods: 'GET|POST')]
    public function duplicate(TypeDocument $typeDocument): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_ASS', $typeDocument->getDepartement());
        $newTypeDocument = clone $typeDocument;
        $this->entityManager->persist($newTypeDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'type_document.duplicate.success.flash');

        return $this->redirectToRoute('sa_qualite_type_document_edit', ['id' => $newTypeDocument->getId()]);
    }
}
