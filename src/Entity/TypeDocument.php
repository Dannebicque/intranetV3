<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeDocument.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 25/07/2020 11:21

namespace App\Entity;

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
     *
     * @param Departement $departement
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

    /**
     * @param string $libelle
     */
    public function setLibelle(string $libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return Departement|null
     */
    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    /**
     * @param Departement|null $departement
     *
     * @return TypeDocument
     */
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
