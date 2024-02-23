<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Document.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Classes\MyUpload;
use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\TypeDestinataireTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\DocumentRepository;
use Carbon\Carbon;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: DocumentRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Document extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;
    use TypeDestinataireTrait;

    // todo: enum
    final public const TYPE_DOCUMENT = [
        'application/vnd.ms-powerpoint' => 'Prés. PPT',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation' => 'Prés. PPT',
        'application/pdf' => 'PDF',
        'image/jpeg' => 'Image (jpeg)',
        'image/png' => 'Image (png)',
        'application/vnd.ms-excel' => 'Tabl. Excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' => 'Tabl. Excel',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'Doc. Word',
        'application/msword' => 'Doc. Word',
        'application/vnd.oasis.opendocument.text' => 'Doc. ODT',
    ];

    final public const TYPE_DOCUMENT_ICON = [
        'application/vnd.ms-powerpoint' => 'fas fa-file-powerpoint',
        'application/vnd.openxmlformats-officedocument.presentationml.presentation' => 'fas fa-file-powerpoint',
        'application/pdf' => 'fas fa-file-pdf',
        'image/jpeg' => 'fas fa-file-image',
        'image/png' => 'fas fa-file-image',
        'application/vnd.ms-excel' => 'fas fa-file-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' => 'fas fa-file-excel',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' => 'fas fa-file-word',
        'application/msword' => 'fas fa-file-word',
        'application/vnd.oasis.opendocument.text' => 'fas fa-file-lines',
    ];

    public const ORIGINAUX = 'originaux';
    public const DOCUMENTS = 'documents';

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $taille = null;

    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $typeFichier = null;

    #[Groups(groups: ['document_administration'])]
    #[ORM\ManyToOne(targetEntity: TypeDocument::class, inversedBy: 'documents')]
    private ?TypeDocument $typeDocument = null;

    #[Groups(groups: ['document_administration'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[Groups(groups: ['document_administration'])]
    #[Assert\Length(min: 5, max: 100, minMessage: 'Le titre du document doit contenir au minimum {{ limit }} caractères', maxMessage: 'Le titre du document doit contenir au maximum {{ limit }} caractères')]
    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 50)]
    private ?string $documentName = '';

    #[Groups(groups: ['document_administration'])]
    #[ORM\ManyToMany(targetEntity: Semestre::class, inversedBy: 'documents')]
    private Collection $semestres;

    /**
     * @var Collection<int, DocumentFavori>
     */
    #[ORM\OneToMany(mappedBy: 'document', targetEntity: DocumentFavori::class)]
    private Collection $documentsFavoris;

    /**
     * Document constructor.
     *
     * @throws Exception
     */
    public function __construct()
    {
        $this->documentsFavoris = new ArrayCollection();
        $this->setUuid(Uuid::uuid4());
        $this->semestres = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
        $this->setCreated(Carbon::now());
    }

    public function getTaille(): ?float
    {
        return $this->taille;
    }

    public function setTaille(?float $taille = 0.0): self
    {
        $this->taille = $taille;

        return $this;
    }

    public function getTypeFichier(): ?string
    {
        return $this->typeFichier;
    }

    public function setTypeFichier(?string $typeFichier): self
    {
        $this->typeFichier = $typeFichier;

        return $this;
    }

    public function getTypeDocument(): ?TypeDocument
    {
        return $this->typeDocument;
    }

    public function setTypeDocument(?TypeDocument $typeDocument): self
    {
        $this->typeDocument = $typeDocument;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

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

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

        return $this;
    }

    public function typeFichierTraduit(): ?string
    {
        if (array_key_exists($this->typeFichier, self::TYPE_DOCUMENT)) {
            return self::TYPE_DOCUMENT[$this->typeFichier];
        }

        return $this->typeFichier;
    }

    public function typeFichierIcone(): ?string
    {
        if (array_key_exists($this->typeFichier, self::TYPE_DOCUMENT_ICON)) {
            return '<i class="'.self::TYPE_DOCUMENT_ICON[$this->typeFichier].' fa-6x text-primary"></i> <br>'.$this->typeFichierTraduit();
        }

        return $this->typeFichier;
    }

    public function typeFichierIconePetit(): ?string
    {
        if (array_key_exists($this->typeFichier, self::TYPE_DOCUMENT_ICON)) {
            return '<i class="'.self::TYPE_DOCUMENT_ICON[$this->typeFichier].' fa-2x text-primary"></i> '.$this->typeFichierTraduit();
        }

        return $this->typeFichier;
    }

    public function tailleKo(): float
    {
        return $this->taille / 1024;
    }

    public function updateFile(MyUpload $myUpload): void
    {
        $this->setDocumentName($myUpload->getName());
        $this->setTaille($myUpload->getTaille());
        $this->setTypeFichier($myUpload->getTypeFichier());
    }

    /**
     * @return Collection<int, DocumentFavori>
     */
    public function getDocumentsFavoris(): Collection
    {
        return $this->documentsFavoris;
    }

    public function addDocumentsFavori(DocumentFavori $documentsFavori): self
    {
        if (!$this->documentsFavoris->contains($documentsFavori)) {
            $this->documentsFavoris[] = $documentsFavori;
            $documentsFavori->setDocument($this);
        }

        return $this;
    }

    public function removeDocumentsFavori(DocumentFavori $documentsFavori): self
    {
        // set the owning side to null (unless already changed)
        if ($this->documentsFavoris->removeElement($documentsFavori) && $documentsFavori->getDocument() === $this) {
            $documentsFavori->setDocument(null);
        }

        return $this;
    }
}
