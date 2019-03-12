<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AbsenceJustificatifRepository")
 * @Vich\Uploadable
 */
class AbsenceJustificatif extends BaseEntity
{
    /**
     * @var \Ramsey\Uuid\UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="date")
     */
    private $dateFin;

    /**
     * @ORM\Column(type="time")
     */
    private $heureDebut;

    /**
     * @ORM\Column(type="time")
     */
    private $heureFin;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $motif;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $etat;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="absenceJustificatifs")
     */
    private $etudiant;

    /**
     * @ORM\Column(type="integer")
     */
    private $anneeUniversitaire;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $fichierName;

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="justificatif", fileNameProperty="fichierName")
     */
    private $fichierFile;

    /**
     * AbsenceJustificatif constructor.
     *
     * @param Etudiant $etudiant
     *
     * @throws \Exception
     */
    public function __construct(Etudiant $etudiant)
    {
        $this->etat = 'D';
        $this->uuid = Uuid::uuid4();
        $this->anneeUniversitaire = $etudiant->getSemestre()->getAnneeUniversitaire();
        $this->setEtudiant($etudiant);
    }

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(\DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getHeureDebut(): ?\DateTimeInterface
    {
        return $this->heureDebut;
    }

    public function setHeureDebut(\DateTimeInterface $heureDebut): self
    {
        $this->heureDebut = $heureDebut;

        return $this;
    }

    public function getHeureFin(): ?\DateTimeInterface
    {
        return $this->heureFin;
    }

    public function setHeureFin(\DateTimeInterface $heureFin): self
    {
        $this->heureFin = $heureFin;

        return $this;
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
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

    public function getAnneeUniversitaire(): ?int
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(int $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

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
    public function setFichierFile(?File $document = null): void
    {
        $this->fichierFile = $document;

        if (null !== $document) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdated(new \DateTime());
        }
    }

    /**
     * @return null|File
     */
    public function getFichierFile(): ?File
    {
        return $this->fichierFile;
    }

    /**
     * @return string
     */
    public function getFichierName(): ?string
    {
        return $this->fichierName;
    }

    /**
     * @param string $fichierName
     */
    public function setFichierName(string $fichierName): void
    {
        $this->fichierName = $fichierName;
    }

    /**
     * @return \Ramsey\Uuid\UuidInterface
     */
    public function getUuid(): \Ramsey\Uuid\UuidInterface
    {
        return $this->uuid;
    }

    /**
     * @return \Ramsey\Uuid\UuidInterface
     */
    public function getUuidString(): string
    {
        return $this->getUuid()->toString();
    }

    public function getEtatLong()
    {
        $tabEtat = [
            'A' => 'Accepté, absences justifiées',
            'R' => 'Refusé',
            'D' => 'Déposé, en attente de validation'
        ];

        return $tabEtat[$this->etat];
    }
}
