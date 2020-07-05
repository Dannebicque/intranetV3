<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/administration/DocumentController.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 05/07/2020 08:09

namespace App\Controller\administration;

use App\Controller\BaseController;
use App\Entity\Constantes;
use App\Entity\Document;
use App\Form\DocumentType;
use App\Repository\DocumentRepository;
use Exception;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/administration/documents")
 */
class DocumentController extends BaseController
{
    /**
     * @Route("/", name="administration_document_index", methods="GET")
     * @param DocumentRepository $documentRepository
     *
     * @return Response
     */
    public function index(DocumentRepository $documentRepository): Response
    {
        return $this->render('administration/document/index.html.twig',
            ['documents' => $documentRepository->findAll()]);
    }

    /**
     * @Route("/export.{_format}", name="administration_document_export", methods="GET",
     *                             requirements={"_format"="csv|xlsx|pdf"})
     */
    public function export(): Response
    {
        //save en csv
        return new Response('', Response::HTTP_OK);
    }

    /**
     * @Route("/new", name="administration_document_new", methods="GET|POST")
     * @param Request $request
     *
     * @return Response
     * @throws Exception
     */
    public function create(Request $request): Response
    {
        $document = new Document();
        $form = $this->createForm(
            DocumentType::class,
            $document,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
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
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_document_show", methods="GET")
     * @param Document $document
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     *
     * @return Response
     */
    public function show(Document $document): Response
    {
        return $this->render('administration/document/show.html.twig', ['document' => $document]);
    }

    /**
     * @Route("/{id}/edit", name="administration_document_edit", methods="GET|POST")
     * @param Request  $request
     * @param Document $document
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     *
     * @return Response
     */
    public function edit(Request $request, Document $document): Response
    {
        $form = $this->createForm(
            DocumentType::class,
            $document,
            [
                'departement' => $this->dataUserSession->getDepartement(),
                'attr'        => [
                    'data-provide' => 'validation'
                ]
            ]
        );
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.edit.success.flash');
            if ($request->request->get('btn_update') !== null) {
                return $this->redirectToRoute('administration_document_index');
            }

            return $this->redirectToRoute('administration_document_edit', ['id' => $document->getUuidString()]);
        }

        return $this->render('administration/document/edit.html.twig', [
            'document' => $document,
            'form'     => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="administration_document_delete", methods="DELETE")
     * @param Request  $request
     * @param Document $document
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     *
     * @return Response
     */
    public function delete(Request $request, Document $document): Response
    {
        $id = $document->getUuidString();
        if ($this->isCsrfTokenValid('delete' . $id, $request->request->get('_token'))) {
            $this->entityManager->remove($document);
            $this->entityManager->flush();
            $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.delete.success.flash');

            return $this->json($id, Response::HTTP_OK);
        }
        $this->addFlashBag(Constantes::FLASHBAG_ERROR, 'document.delete.error.flash');

        return $this->json(false, Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @Route("/{id}/duplicate", name="administration_document_duplicate", methods="GET|POST")
     * @param Document $document
     * @ParamConverter("document", options={"mapping": {"id": "uuid"}})
     *
     * @return Response
     * @throws Exception
     */
    public function duplicate(Document $document): Response
    {
        $newDocument = new Document();
        $newDocument->duplicate($document);

        $this->entityManager->persist($newDocument);
        $this->entityManager->flush();
        $this->addFlashBag(Constantes::FLASHBAG_SUCCESS, 'document.duplicate.success.flash');

        return $this->redirectToRoute('administration_document_edit', ['id' => $newDocument->getUuidString()]);
    }
}
