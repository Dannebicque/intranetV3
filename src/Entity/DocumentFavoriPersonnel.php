<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavoriPersonnel.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 30/07/2020 13:04

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DocumentFavoriPersonnelRepository")
 */
class DocumentFavoriPersonnel extends DocumentFavori
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="documentsFavoris")
     */
    private $personnel;


    /**
     * EmpruntEtudiant constructor.
     *
     * @param          $personnel
     *
     * @param Document $document
     */
    public function __construct($personnel, Document $document)
    {
        $this->personnel = $personnel;
        $this->setDocument($document);
    }


    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }
}
