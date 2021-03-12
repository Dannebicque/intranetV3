<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavoriEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DocumentFavoriEtudiantRepository")
 * @ORM\HasLifecycleCallbacks()
 *
 */
class DocumentFavoriEtudiant extends DocumentFavori
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="documentsFavoris")
     */
    private $etudiant;

    /**
     * EmpruntEtudiant constructor.
     *
     * @param $etudiant
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
