<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Document.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/03/2021 22:19
 */

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DocumentRepository")
 * @Vich\Uploadable
 */
class Document extends BaseEntity
{
    use UuidTrait;

    const TYPE_DOCUMENT = [
        'application/vnd.openxmlformats-officedocument.presentationml.presentation' => 'Prés. PPT',
        'application/pdf' => 'PDF',
        'application/vnd.ms-excel' => 'Tabl. Excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' => 'Tabl. Excel',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'Doc. Word',
        'application/vnd.oasis.opendocument.text' => 'Doc. ODT',
    ];

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $taille;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=100)
     */
    private $typeFichier;

    /**
     * @var TypeDocument
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeDocument", inversedBy="documents")
     * @Groups({"document_administration"})
     */
    private $typeDocument;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"document_administration"})
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=100)
     * @Groups({"document_administration"})
     * @Assert\Length(
     *      min = 5,
     *      max = 100,
     *      minMessage = "Le titre du document doit contenir au minimum {{ limit }} caractères",
     *      maxMessage = "Le titre du document doit contenir au maximum {{ limit }} caractères",
     *      allowEmptyString = false
     * )
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
     * @Vich\UploadableField(mapping="documentFile", fileNameProperty="documentName", size="taille",
     *                                               mimeType="typeFichier")
     */
    private $documentFile;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="documents")
     * @Groups({"document_administration"})
     */
    private $semestres;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\DocumentFavori", mappedBy="document")
     */
    private $documentsFavoris;

    /**
     * Document constructor.
     *
     * @throws Exception
     */
    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
        $this->semestres = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
        $this->setCreated(new DateTime('now'));
    }

    public function getTaille(): ?float
    {
        return $this->taille;
    }

    /**
     * @return Document
     */
    public function setTaille(?float $taille = 0.0): self
    {
        $this->taille = $taille;

        return $this;
    }

    public function getTypeFichier(): ?string
    {
        return $this->typeFichier;
    }

    /**
     * @return Document
     */
    public function setTypeFichier(?string $typeFichier): self
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
     * @return Document
     */
    public function setLibelle($libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @throws Exception
     */
    public function setDocumentFile(?File $documentFile = null): void
    {
        $this->documentFile = $documentFile;

        if (null !== $documentFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdated(new DateTime());
        }
    }

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

    public function setDocumentName(?string $documentName): void
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
     * @return Document
     */
    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

        return $this;
    }

    public function getUuidString(): string
    {
        return (string)$this->getUuid();
    }

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function typeFichierTraduit()
    {
        if (array_key_exists($this->typeFichier, self::TYPE_DOCUMENT)) {
            return self::TYPE_DOCUMENT[$this->typeFichier];
        }

        return $this->typeFichier;
    }

    public function tailleKo()
    {
        return $this->taille / 1024;
    }
}
