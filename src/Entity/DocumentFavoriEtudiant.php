<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/DocumentFavoriEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 19:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\DocumentFavoriEtudiantRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: DocumentFavoriEtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class DocumentFavoriEtudiant extends DocumentFavori
{
    use LifeCycleTrait;

    public function __construct(#[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'documentsFavoris')] private ?Etudiant $etudiant, Document $document)
    {
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
