<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DocumentRepository")
 * @ORM\HasLifecycleCallbacks()
 * @Vich\Uploadable
 */
class Document extends BaseEntity
{
    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $taille;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $typeFichier;

    /**
     * @var TypeDocument
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeDocument", fetch="EAGER", inversedBy="documents")
     */
    private $typeDocument;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=100)
     */
    private $libelle;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $documentName;

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="document", fileNameProperty="documentName", size="taille",mimeType="type_fichier")
     */
    private $documentFile;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="documents")
     */
    private $semestres;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
    }

    /**
     * @return float|null
     */
    public function getTaille(): ?float
    {
        return $this->taille;
    }

    /**
     * @param float $taille
     *
     * @return Document
     */
    public function setTaille(float $taille): self
    {
        $this->taille = $taille;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getTypeFichier(): ?string
    {
        return $this->typeFichier;
    }

    /**
     * @param string $typeFichier
     *
     * @return Document
     */
    public function setTypeFichier(string $typeFichier): self
    {
        $this->typeFichier = $typeFichier;

        return $this;
    }

    /**
     * @return TypeDocument
     */
    public function getTypeDocument(): ?TypeDocument
    {
        return $this->typeDocument;
    }

    /**
     * @param TypeDocument $typeDocument
     *
     * @return Document
     */
    public function setTypeDocument(TypeDocument $typeDocument): self
    {
        $this->typeDocument = $typeDocument;

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @param string $description
     *
     * @return Document
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     *
     * @return Document
     */
    public function setLibelle($libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }


    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $document
     */
    public function setDocumentFile(?File $document = null): void
    {
        $this->documentFile = $document;

        if (null !== $document) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdated(new \DateTime());
        }
    }

    /**
     * @return null|File
     */
    public function getDocumentFile(): ?File
    {
        return $this->documentFile;
    }

    /**
     * @return string
     */
    public function getDocumentName(): ?string
    {
        return $this->documentName;
    }

    /**
     * @param string $documentName
     */
    public function setDocumentName(string $documentName): void
    {
        $this->documentName = $documentName;
    }

    /**
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    /**
     * @param Semestre $semestre
     *
     * @return Document
     */
    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    /**
     * @param Semestre $semestre
     *
     * @return Document
     */
    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

        return $this;
    }


}
