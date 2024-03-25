<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TypeDocument.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
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
    private ?string $libelle = null;

    #[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'typeDocuments')]
    private ?Departement $departement = null;

    /**
     * @var Collection<int, Document>
     */
    #[ORM\OneToMany(mappedBy: 'typeDocument', targetEntity: Document::class)]
    private Collection $documents;

    #[ORM\Column(type: 'boolean')]
    private ?bool $originaux = false;

    #[ORM\ManyToOne(targetEntity: self::class, inversedBy: 'enfants')]
    private ?TypeDocument $parent;

    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: self::class)]
    private Collection $enfants;

    public function __construct(?Departement $departement)
    {
        $this->setDepartement($departement);
        $this->documents = new ArrayCollection();
        $this->enfants = new ArrayCollection();
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

    public function getOriginaux(): ?bool
    {
        return $this->originaux;
    }

    public function setOriginaux(bool $originaux): self
    {
        $this->originaux = $originaux;

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return Collection<int, self>
     */
    public function getEnfants(): Collection
    {
        return $this->enfants;
    }

    public function addEnfant(self $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    public function removeEnfant(self $enfant): self
    {
        // set the owning side to null (unless already changed)
        if ($this->enfants->removeElement($enfant) && $enfant->getParent() === $this) {
            $enfant->setParent(null);
        }

        return $this;
    }
}
