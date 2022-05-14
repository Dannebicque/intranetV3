<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/superAdministration/QualiteDocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 14/05/2022 09:39
 */

namespace App\Controller\superAdministration;

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
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path: '/administratif/qualite/documents', name: 'sa_qualite_documents_')]
class QualiteDocumentController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index')]
    public function index(Request $request): Response
    {
        $table = $this->createTable(DocumentTableType::class, [
            'departement' => $this->getDepartement(),
            'source' => 'originaux',
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('document/administration/index.html.twig',
            ['table' => $table]);
    }

    #[Route('/export.{_format}', name: 'export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport,
        DocumentRepository $documentRepository,
        $_format
    ): Response {
        $documents = $documentRepository->findByDepartement($this->getDepartement());
        $data = $mySerializer->getDataFromSerialization(
            $documents,
            ['libelle', 'description', 'typeDocument' => ['libelle'], 'semestres' => ['libelle']],
            ['document_administration', 'semestre']
        );

        return $myExport->genereFichierGeneriqueFromData(
            $_format,
            $data,
            'documents_'.$this->getDepartement()?->getLibelle(),
        );
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    public function create(
        MyUpload $myUpload,
        Request $request): Response
    {
        $document = new Document();
        $document->setTypeDestinataire(Constantes::TYPE_DESTINATAIRE_PERSONNEL);
        $form = $this->createForm(
            DocumentType::class,
            $document,
            [
                'departement' => null,
                'source' => 'originaux',
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $myUpload->upload($form->get('documentFile')->getData(), 'documents/');
            $document->updateFile($myUpload);

            $this->entityManager->persist($document);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.add.success.flash');

            return $this->redirectToRoute('sa_qualite_documents_index');
        }

        return $this->render('document/administration/new.html.twig', [
            'document' => $document,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    #[Route(path: '/{id}', name: 'show', methods: 'GET')]
    public function show(Document $document): Response
    {
        return $this->render('document/administration/show.html.twig', ['document' => $document]);
    }

    /**
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    #[Route(path: '/{id}/edit', name: 'edit', methods: 'GET|POST')]
    public function edit(
        MyUpload $myUpload,
        Request $request, Document $document): Response
    {
        $form = $this->createForm(
            DocumentType::class,
            $document,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'source' => 'originaux',
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if (null !== $form->get('documentFile')->getData()) {
                // supprimer l'ancien
                $myUpload->deleteFile($document->getDocumentName(),'documents/');
                $myUpload->upload($form->get('documentFile')->getData(), 'documents/');
                $document->updateFile($myUpload);
            }

            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('sa_qualite_documents_index');
            }

            return $this->redirectToRoute('sa_qualite_documents_edit', ['id' => $document->getUuidString()]);
        }

        return $this->render('document/administration/edit.html.twig', [
            'document' => $document,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    #[Route(path: '/{id}', name: 'delete', methods: 'DELETE|POST')]
    public function delete(
        DocumentDelete $documentDelete, Request $request, Document $document): Response
    {
        $id = $document->getId();
        $uuid = $document->getUuid();
        if ($this->isCsrfTokenValid('delete'.$uuid, $request->request->get('_token'))) {
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
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     *
     * @throws Exception
     */
    #[Route(path: '/{id}/duplicate', name: 'duplicate', methods: 'GET|POST')]
    public function duplicate(Document $document): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);
        $newDocument = clone $document;
        $this->entityManager->persist($newDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.duplicate.success.flash');

        return $this->redirectToRoute('sa_qualite_documents_edit', ['id' => $newDocument->getUuidString()]);
    }
}
