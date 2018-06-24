<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeDocumentRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class TypeDocument extends BaseEntity
{

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=75)
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation", inversedBy="typeDocuments")
     */
    private $formation;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Document", mappedBy="typeDocument")
     */
    private $documents;

    /**
     * TypeDocument constructor.
     *
     * @param Formation $formation
     */
    public function __construct(Formation $formation)
    {
        $this->setFormation($formation);
        $this->documents = new ArrayCollection();
    }

    /**
     * @return string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param string $libelle
     */
    public function setLibelle(string $libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return Formation|null
     */
    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    /**
     * @param Formation|null $formation
     *
     * @return TypeDocument
     */
    public function setFormation(?Formation $formation): self
    {
        $this->formation = $formation;

        return $this;
    }

    /**
     * @return Collection|Document[]
     */
    public function getDocuments(): Collection
    {
        return $this->documents;
    }

    /**
     * @param Document $document
     *
     * @return TypeDocument
     */
    public function addDocument(Document $document): self
    {
        if (!$this->documents->contains($document)) {
            $this->documents[] = $document;
            $document->setTypeDocument($this);
        }

        return $this;
    }

    /**
     * @param Document $document
     *
     * @return TypeDocument
     */
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
