<?php

namespace App\Controller;

use App\Repository\DocumentRepository;
use App\Repository\TypeDocumentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

/**
 * Class DocumentController
 * @package App\Controller
 * @Route("/{_locale}/document",
 *     requirements={
 *         "_locale": "fr|en"})
 */
class DocumentController extends Controller
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
     * @param Request            $request
     * @param DocumentRepository $documentRepository
     *
     * @param                    $typedocument
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/ajax/document/{typedocument}", name="document_ajax", options={"expose": true})
     */
    public function documents(Request $request, DocumentRepository $documentRepository, $typedocument): Response
    {
        $documents = $documentRepository->findByTypeDocument($typedocument);

        return $this->render('document/documents.html.twig', [
            'documents' => $documents
        ]);
    }


}
