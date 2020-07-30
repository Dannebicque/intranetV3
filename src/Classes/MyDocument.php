<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Classes/MyDocument.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:04

namespace App\Classes;


use App\Entity\Article;
use App\Entity\ArticleLikeEtudiant;
use App\Entity\ArticleLikePersonnel;
use App\Entity\Document;
use App\Entity\DocumentFavoriEtudiant;
use App\Entity\DocumentFavoriPersonnel;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Repository\ArticleLikeEtudiantRepository;
use App\Repository\ArticleLikePersonnelRepository;
use App\Repository\ArticleRepository;
use App\Repository\DocumentFavoriEtudiantRepository;
use App\Repository\DocumentFavoriPersonnelRepository;
use App\Repository\DocumentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class MyDocument
{
    /** @var Document */
    protected $document;

    /** @var EntityManagerInterface */
    protected $entityManager;

    /** @var DocumentFavoriEtudiantRepository */
    protected $documentFavoriEtudiantRepository;

    /** @var DocumentFavoriPersonnelRepository */
    protected $documentFavoriPersonnelRepository;

    /**
     * MyArticle constructor.
     *
     * @param EntityManagerInterface            $entityManager
     * @param DocumentFavoriEtudiantRepository  $documentFavoriEtudiantRepository
     * @param DocumentFavoriPersonnelRepository $documentFavoriPersonnelRepository
     */
    public function __construct(
        EntityManagerInterface $entityManager,
        DocumentFavoriEtudiantRepository $documentFavoriEtudiantRepository,
        DocumentFavoriPersonnelRepository $documentFavoriPersonnelRepository
    ) {
        $this->entityManager = $entityManager;
        $this->documentFavoriEtudiantRepository = $documentFavoriEtudiantRepository;
        $this->documentFavoriPersonnelRepository = $documentFavoriPersonnelRepository;
    }


    public function setDocument(Document $document)
    {
        $this->document = $document;
    }

    public function addOrRemoveFavori($getConnectedUser)
    {
        $etat = '';
        if ($getConnectedUser instanceof Personnel) {
            $r = $this->documentFavoriPersonnelRepository->findFavori($getConnectedUser, $this->document);
            if ($r === null || count($r) === 0) {
                //add
                $n = new DocumentFavoriPersonnel($getConnectedUser, $this->document);
                $this->entityManager->persist($n);
                $etat = 'add';
            } else {
                //remove
                $this->remove($r);
                $etat = 'remove';
            }
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->documentFavoriEtudiantRepository->findFavori($getConnectedUser, $this->document);
            if ($r === null || count($r) === 0) {
                //add
                $n = new DocumentFavoriEtudiant($getConnectedUser, $this->document);
                $this->entityManager->persist($n);
                $etat = 'add';
            } else {
                //remove
                $this->remove($r);
                $etat = 'remove';
            }
        }
        $this->entityManager->flush();

        return $etat;
    }

    private function remove($r)
    {
        foreach ($r as $t) {
            $this->entityManager->remove($t);
        }
    }

    public function mesDocumentsFavoris($getConnectedUser)
    {
        if ($getConnectedUser instanceof Personnel) {
            $r = $this->documentFavoriPersonnelRepository->findAllUserFavoris($getConnectedUser);
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->documentFavoriEtudiantRepository->findAllUserFavoris($getConnectedUser, $this->document);
        }

        $tabDocuments = [];
        foreach ($r as $document) {
            $tabDocuments[] = $document->getDocument();
        }

        return $tabDocuments;
    }

    public function idMesDocumentsFavoris($getConnectedUser)
    {
        if ($getConnectedUser instanceof Personnel) {
            $r = $this->documentFavoriPersonnelRepository->findAllUserFavoris($getConnectedUser);
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->documentFavoriEtudiantRepository->findAllUserFavoris($getConnectedUser, $this->document);
        }

        $tabDocuments = [];
        foreach ($r as $document) {
            $tabDocuments[] = $document->getDocument()->getId();
        }

        return $tabDocuments;
    }
}
