<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/DocumentDelete.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/09/2021 16:35
 */

namespace App\Classes;

use App\Entity\Document;
use App\Repository\DocumentFavoriEtudiantRepository;
use App\Repository\DocumentFavoriPersonnelRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\KernelInterface;

class DocumentDelete
{
    protected KernelInterface $kernel;
    protected EntityManagerInterface $entityManager;
    protected DocumentFavoriEtudiantRepository $documentFavoriEtudiantRepository;
    protected DocumentFavoriPersonnelRepository $documentFavoriPersonnelRepository;

    public function __construct(
        KernelInterface $kernel,
        DocumentFavoriEtudiantRepository $documentFavoriEtudiantRepository,
        DocumentFavoriPersonnelRepository $documentFavoriPersonnelRepository,
        EntityManagerInterface $entityManager
    ) {
        $this->kernel = $kernel;
        $this->documentFavoriEtudiantRepository = $documentFavoriEtudiantRepository;
        $this->documentFavoriPersonnelRepository = $documentFavoriPersonnelRepository;
        $this->entityManager = $entityManager;
    }

    public function deleteDocument(Document $document): bool
    {
        $docs = $this->documentFavoriEtudiantRepository->findBy(['document' => $document->getId()]);
        foreach ($docs as $doc) {
            $this->entityManager->remove($doc);
        }

        $docs = $this->documentFavoriPersonnelRepository->findBy(['document' => $document->getId()]);
        foreach ($docs as $doc) {
            $this->entityManager->remove($doc);
        }
        $file = $this->kernel->getProjectDir() . '/public/upload/documents/' . $document->getDocumentName();
        if (file_exists($file)) {
            unlink($file);
        }
        $this->entityManager->remove($document);
        $this->entityManager->flush();

        return true;
    }

}
