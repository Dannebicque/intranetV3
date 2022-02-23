<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeDocument.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:34
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\TypeDocumentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: TypeDocumentRepository::class)]
#[ORM\HasLifecycleCallbacks]
class TypeDocument extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(['typedocument_administration', 'document_administration'])]
    #[ORM\Column(type: Types::STRING, length: 75)]
    private ?string $libelle;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'typeDocuments')]
    private ?Departement $departement;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Document>
     */
    #[ORM\OneToMany(mappedBy: 'typeDocument', targetEntity: Document::class)]
    private Collection $documents;

    public function __construct(Departement $departement)
    {
        $this->setDepartement($departement);
        $this->documents = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * @return Collection|Document[]
     */
    public function getDocuments(): Collection
    {
        return $this->documents;
    }

    public function addDocument(Document $document): self
    {
        if (!$this->documents->contains($document)) {
            $this->documents[] = $document;
            $document->setTypeDocument($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->contains($document)) {
            $this->documents->removeElement($document);
            // set the owning side to null (unless already changed)
            if ($document->getTypeDocument() === $this) {
                $document->setTypeDocument(null);
            }
        }

        return $this;
    }
}
