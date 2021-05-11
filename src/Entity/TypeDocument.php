<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeDocument.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeDocumentRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class TypeDocument extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=75)
     * @Groups({"typedocument_administration","document_administration"})
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="typeDocuments")
     */
    private $departement;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Document", mappedBy="typeDocument")
     */
    private $documents;

    /**
     * TypeDocument constructor.
     */
    public function __construct(Departement $departement)
    {
        $this->setDepartement($departement);
        $this->documents = new ArrayCollection();
    }

    /**
     * @return string
     */
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
