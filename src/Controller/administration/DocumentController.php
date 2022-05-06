<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/administration/DocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 20:57
 */

namespace App\Controller\administration;

use App\Classes\DocumentDelete;
use App\Classes\MyExport;
use App\Classes\MySerializer;
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

#[Route('/administration/documents', name: 'administration_document_')]
class DocumentController extends BaseController
{
    /**
     * @throws \JsonException
     */
    #[Route('/', name: 'index', options: ['expose' => true], methods: ['GET', 'POST'])]
    public function index(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());

        $table = $this->createTable(DocumentTableType::class, [
            'departement' => $this->getDepartement(),
        ]);
        $table->handleRequest($request);

        if ($table->isCallback()) {
            return $table->getCallbackResponse();
        }

        return $this->render('administration/document/index.html.twig',
            ['table' => $table]);
    }

    #[Route('/export.{_format}', name: 'export', requirements: ['_format' => 'csv|xlsx|pdf'], methods: 'GET')]
    public function export(
        MySerializer $mySerializer,
        MyExport $myExport, DocumentRepository $documentRepository, $_format): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());

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
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $this->getDepartement());

        $document = new Document();
        $form = $this->createForm(
            DocumentType::class,
            $document,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $document->setTaille(10);
            $document->setTypeFichier('PDF');
            $this->entityManager->persist($document);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.add.success.flash');

            return $this->redirectToRoute('administration_document_index');
        }

        return $this->render('administration/document/new.html.twig', [
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
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);

        return $this->render('administration/document/show.html.twig', ['document' => $document]);
    }

    /**
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    #[Route(path: '/{id}/edit', name: 'edit', methods: 'GET|POST')]
    public function edit(Request $request, Document $document): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);
        $form = $this->createForm(
            DocumentType::class,
            $document,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr' => [
                    'data-provide' => 'validation',
                ],
            ]
        );
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.edit.success.flash');
            if (null !== $request->request->get('btn_update')) {
                return $this->redirectToRoute('administration_document_index');
            }

            return $this->redirectToRoute('administration_document_edit', ['id' => $document->getUuidString()]);
        }

        return $this->render('administration/document/edit.html.twig', [
            'document' => $document,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     */
    #[Route(path: '/{id}', name: 'delete', methods: 'DELETE|POST')]
    public function delete(DocumentDelete $documentDelete, Request $request, Document $document): Response
    {
        $this->denyAccessUnlessGranted('MINIMAL_ROLE_STAGE', $document->getSemestres()[0]);
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

        return $this->redirectToRoute('administration_document_edit', ['id' => $newDocument->getUuidString()]);
    }
}
