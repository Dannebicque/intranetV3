<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Classes/MyDocument.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/08/2023 08:34
 */

/*
 * Pull your hearder here, for exemple, Licence header.
 */

namespace App\Classes;

use App\Entity\Document;
use App\Entity\DocumentFavoriEtudiant;
use App\Entity\DocumentFavoriPersonnel;
use App\Entity\Etudiant;
use App\Entity\Personnel;
use App\Interfaces\UtilisateurInterface;
use App\Repository\DocumentFavoriEtudiantRepository;
use App\Repository\DocumentFavoriPersonnelRepository;
use Doctrine\ORM\EntityManagerInterface;
use function count;

class MyDocument
{
    protected Document $document;

    public function __construct(protected EntityManagerInterface $entityManager, protected DocumentFavoriEtudiantRepository $documentFavoriEtudiantRepository, protected DocumentFavoriPersonnelRepository $documentFavoriPersonnelRepository)
    {
    }

    public function setDocument(Document $document): void
    {
        $this->document = $document;
    }

    public function addOrRemoveFavori(UtilisateurInterface $getConnectedUser): string
    {
        $etat = '';
        if ($getConnectedUser instanceof Personnel) {
            $r = $this->documentFavoriPersonnelRepository->findFavori($getConnectedUser, $this->document);
            if (0 === count($r)) {
                // add
                $n = new DocumentFavoriPersonnel($getConnectedUser, $this->document);
                $this->entityManager->persist($n);
                $etat = 'add';
            } else {
                // remove
                $this->remove($r);
                $etat = 'remove';
            }
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->documentFavoriEtudiantRepository->findFavori($getConnectedUser, $this->document);
            if (0 === count($r)) {
                // add
                $n = new DocumentFavoriEtudiant($getConnectedUser, $this->document);
                $this->entityManager->persist($n);
                $etat = 'add';
            } else {
                // remove
                $this->remove($r);
                $etat = 'remove';
            }
        }
        $this->entityManager->flush();

        return $etat;
    }

    private function remove($r): void
    {
        foreach ($r as $t) {
            $this->entityManager->remove($t);
        }
    }

    public function mesDocumentsFavoris(UtilisateurInterface $getConnectedUser): array
    {
        $r = null;
        if ($getConnectedUser instanceof Personnel) {
            $r = $this->documentFavoriPersonnelRepository->findAllUserFavoris($getConnectedUser);
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->documentFavoriEtudiantRepository->findAllUserFavoris($getConnectedUser);
        }

        if (null !== $r) {
            $tabDocuments = [];
            foreach ($r as $document) {
                $tabDocuments[] = $document->getDocument();
            }

            return $tabDocuments;
        }

        return [];
    }

    public function idMesDocumentsFavoris(UtilisateurInterface $getConnectedUser): array
    {
        $r = null;

        if ($getConnectedUser instanceof Personnel) {
            $r = $this->documentFavoriPersonnelRepository->findAllUserFavoris($getConnectedUser);
        } elseif ($getConnectedUser instanceof Etudiant) {
            $r = $this->documentFavoriEtudiantRepository->findAllUserFavoris($getConnectedUser);
        }

        if (null !== $r) {
            $tabDocuments = [];
            foreach ($r as $document) {
                $tabDocuments[] = $document->getDocument()->getId();
            }

            return $tabDocuments;
        }

        return [];
    }
}
