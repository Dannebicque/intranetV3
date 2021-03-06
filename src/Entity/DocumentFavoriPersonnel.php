<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavoriPersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

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
     * @param $personnel
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
