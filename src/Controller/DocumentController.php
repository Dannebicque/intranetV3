<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Controller/DocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 08/10/2021 06:59
 */

namespace App\Controller;

use App\Classes\MyDocument;
use App\Entity\Document;
use App\Repository\DocumentRepository;
use App\Repository\TypeDocumentRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/document')]
class DocumentController extends BaseController
{
    #[Route('/', name: 'document_index')]
    public function index(): Response
    {
        return $this->render('document/index.html.twig', []);
    }

    #[Route('/ajax/typedocument', name: 'typedocument_ajax', options: ['expose' => true])]
    public function typeDocument(TypeDocumentRepository $typeDocumentRepository): Response
    {
        $typeDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());

        return $this->render('document/typedocument.html.twig', [
            'typedocuments' => $typeDocuments,
            'nbDocumentsFavoris' => count($this->getUser()?->getDocumentsFavoris()),
        ]);
    }

    #[Route('/ajax/document/favori', name: 'document_ajax_favori', options: ['expose' => true])]
    public function documentsFavoris(MyDocument $myDocument): Response
    {
        $documents = $myDocument->mesDocumentsFavoris($this->getConnectedUser());
        $idDocuments = $myDocument->idMesDocumentsFavoris($this->getConnectedUser());

        return $this->render('document/documents.html.twig', [
            'documents' => $documents,
            'listesFavoris' => $idDocuments,
        ]);
    }

    #[Route('/ajax/document/{typedocument}', name: 'document_ajax', options: ['expose' => true])]
    public function documents(MyDocument $myDocument, DocumentRepository $documentRepository, $typedocument): Response
    {
        $documents = $documentRepository->findByTypeDocument($typedocument);
        $idDocuments = $myDocument->idMesDocumentsFavoris($this->getConnectedUser());

        return $this->render('document/documents.html.twig', [
            'documents' => $documents,
            'listesFavoris' => $idDocuments,
        ]);
    }

    /**
     * @ParamConverter("document", options={"mapping": {"document": "uuid"}})
     */
    #[Route(path: '/ajax/add-favori/{document}', name: 'document_add_favori', options: ['expose' => true])]
    public function addFavori(MyDocument $myDocument, Document $document): Response
    {
        $myDocument->setDocument($document);
        $etat = $myDocument->addOrRemoveFavori($this->getConnectedUser());

        return $this->json($etat, Response::HTTP_OK);
    }
}
