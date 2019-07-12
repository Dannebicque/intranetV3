<?php
/*
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Controller/DocumentController.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 4/28/19 8:47 PM
 */

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
     * @return Response
     */
    public function typeDocument(TypeDocumentRepository $typeDocumentRepository): Response
    {
        $typeDocuments = $typeDocumentRepository->findByDepartement(1);

        return $this->render('document/typedocument.html.twig', [
            'typedocuments' => $typeDocuments
        ]);
    }

    /**
     * @param DocumentRepository $documentRepository
     *
     * @param                    $typedocument
     *
     * @return Response
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
