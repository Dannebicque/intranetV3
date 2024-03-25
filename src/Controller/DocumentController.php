<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Controller/DocumentController.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 24/02/2024 18:06
 */

namespace App\Controller;

use App\Classes\MyDocument;
use App\Entity\Document;
use App\Repository\DocumentRepository;
use App\Repository\TypeDocumentRepository;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/', name: 'document_')]
class DocumentController extends BaseController
{
    #[Route('{source}', name: 'index', requirements: [
        'source' => 'document|originaux',
    ], methods: ['GET'])]
    public function index(string $source = Document::DOCUMENTS): Response
    {
        if (Document::ORIGINAUX === $source && !$this->hasAccessOriginaux()) {
            throw new NotFoundHttpException();
        }

        return $this->render('document/public/index.html.twig', [
            'source' => $source,
        ]);
    }

    #[Route('{source}/ajax/typedocument', name: 'typedocument_ajax', requirements: [
        'source' => 'document|originaux',
    ], options: ['expose' => true])]
    public function typeDocument(TypeDocumentRepository $typeDocumentRepository, string $source = Document::DOCUMENTS): Response
    {
        if (Document::ORIGINAUX === $source && !$this->hasAccessOriginaux()) {
            throw new NotFoundHttpException();
        }

        if (Document::ORIGINAUX === $source) {
            $typeDocuments = $typeDocumentRepository->findByOriginaux();
        } else {
            $typeDocuments = $typeDocumentRepository->findByDepartement($this->getDepartement());
        }

        return $this->render('document/public/_typedocument.html.twig', [
            'typedocuments' => $typeDocuments,
            'nbDocumentsFavoris' => is_countable($this->getUser()->getDocumentsFavoris()) ? count($this->getUser()->getDocumentsFavoris()) : 0,
        ]);
    }

    #[Route('{source}/ajax/document/favori', name: 'ajax_favori', requirements: [
        'source' => 'document|originaux',
    ], options: ['expose' => true])]
    public function documentsFavoris(MyDocument $myDocument, string $source = Document::DOCUMENTS): Response
    {
        if (Document::ORIGINAUX === $source && !$this->hasAccessOriginaux()) {
            throw new NotFoundHttpException();
        }

        $documents = $myDocument->mesDocumentsFavoris($this->getUser());
        $idDocuments = $myDocument->idMesDocumentsFavoris($this->getUser());

        return $this->render('document/public/_documents.html.twig', [
            'documents' => $documents,
            'listesFavoris' => $idDocuments,
            'source' => $source,
            'breadCrumbs' => [],
            'typeDoc' => ['enfants' => []]
        ]);
    }

    #[Route('{source}/ajax/document', name: 'ajax', requirements: [
        'source' => 'document|originaux',
    ], options: ['expose' => true])]
    public function documents(
        Request $request,
        MyDocument $myDocument,
        TypeDocumentRepository $typeDocumentRepository,
        DocumentRepository $documentRepository,
        string $source
    ): Response {
        if (Document::ORIGINAUX === $source && !$this->hasAccessOriginaux()) {
            throw new NotFoundHttpException();
        }

        $typedocument = $typeDocumentRepository->find($request->query->get('typedocument'));
        if (null === $typedocument) {
            throw new NotFoundHttpException();
        }

        $documents = $documentRepository->findByTypeDocument($typedocument->getId(), $this->isEtudiant());
        //todo: filtre par semestre ???
        $idDocuments = $myDocument->idMesDocumentsFavoris($this->getUser());
        $breadCrumbs = [];
        $td = $typedocument;
        while (null !== $td->getParent()) {
            $breadCrumbs[] = $td;
            $td = $td->getParent();
        }
        $breadCrumbs[] = $td;
        $breadCrumbs = array_reverse($breadCrumbs);

        return $this->render('document/public/_documents.html.twig', [
                'breadCrumbs' => $breadCrumbs,
                'documents' => $documents,
                'listesFavoris' => $idDocuments,
                'typeDoc' => $typedocument,
                'source' => $source,
            ]);
    }

    #[Route(path: '{source}/ajax/add-favori/{document}', name: 'add_favori', requirements: [
        'source' => 'document|originaux',
    ], options: ['expose' => true])]
    public function addFavori(MyDocument $myDocument, #[MapEntity(mapping: ['document' => 'uuid'])]
    Document                             $document): Response
    {
        $myDocument->setDocument($document);
        $etat = $myDocument->addOrRemoveFavori($this->getUser());

        return $this->json($etat, Response::HTTP_OK);
    }
}
