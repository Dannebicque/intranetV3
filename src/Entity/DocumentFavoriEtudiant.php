<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavoriEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:04

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DocumentFavoriEtudiantRepository")
 */
class DocumentFavoriEtudiant extends DocumentFavori
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="documentsFavoris")
     */
    private $etudiant;


    /**
     * EmpruntEtudiant constructor.
     *
     * @param          $etudiant
     *
     * @param Document $document
     */
    public function __construct($etudiant, Document $document)
    {
        $this->etudiant = $etudiant;
        $this->setDocument($document);
    }


    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }
}
