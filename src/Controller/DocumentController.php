<?php

namespace App\Controller;

use App\Repository\DocumentRepository;
use App\Repository\TypeDocumentRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class DocumentController
 * @package App\Controller
 * @Route("/document")
 */
class DocumentController extends BaseController
{
    /**
     * @Route("/", name="document_index")
     */
    public function index(): Response
    {
        return $this->render('document/index.html.twig', [
        ]);
    }

    /**
     * @Route("/ajax/typedocument", name="typedocument_ajax", options={"expose": true})
     * @param TypeDocumentRepository $typeDocumentRepository
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function typeDocument(TypeDocumentRepository $typeDocumentRepository): Response
    {
        $typeDocuments = $typeDocumentRepository->findByFormation(1);

        return $this->render('document/typedocument.html.twig', [
            'typedocuments' => $typeDocuments
        ]);
    }

    /**
     * @param DocumentRepository $documentRepository
     *
     * @param                    $typedocument
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/ajax/document/{typedocument}", name="document_ajax", options={"expose": true})
     */
    public function documents(DocumentRepository $documentRepository, $typedocument): Response
    {
        $documents = $documentRepository->findByTypeDocument($typedocument);

        return $this->render('document/documents.html.twig', [
            'documents' => $documents
        ]);
    }
}
