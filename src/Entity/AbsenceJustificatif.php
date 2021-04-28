<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AbsenceJustificatif.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/04/2021 21:16
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use Carbon\Carbon;
use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Serializable;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AbsenceJustificatifRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
 */
class AbsenceJustificatif extends BaseEntity implements Serializable
{
    use UuidTrait;
    use LifeCycleTrait;

    public const ACCEPTE = 'A';
    public const REFUSE = 'R';
    public const DEPOSE = 'D';

    public const ETATLONG = [
        self::ACCEPTE => 'Accepté, absences justifiées',
        self::REFUSE => 'Refusé',
        self::DEPOSE => 'Déposé, en attente de validation',
    ];

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"justificatif_administration"})
     */
    private $dateHeureDebut;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"justificatif_administration"})
     */
    private $dateHeureFin;

    /**
     * @ORM\Column(type="text")
     * @Groups({"justificatif_administration"})
     */
    private $motif;

    /**
     * @ORM\Column(type="string", length=1)
     * @Groups({"justificatif_administration"})
     */
    private $etat;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="absenceJustificatifs")
     * @Groups({"justificatif_administration"})
     */
    private $etudiant;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $fichierName;

    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="justificatif", fileNameProperty="fichierName")
     */
    private $fichierFile;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private $anneeUniversitaire;

    private $dateDebut;
    private $heureDebut;
    private $dateFin;
    private $heureFin;

    /**
     * AbsenceJustificatif constructor.
     *
     * @throws Exception
     */
    public function __construct(Etudiant $etudiant)
    {
        $this->dateDebut = new DateTime('now');
        $this->dateFin = new DateTime('now');
        $this->heureDebut = new DateTime('08:00');
        $this->heureFin = new DateTime('18:30');
        $this->etat = 'D';
        $this->setUuid(Uuid::uuid4());
        $this->anneeUniversitaire = null !== $etudiant ? $etudiant->getAnneeUniversitaire() : null;
        $this->setEtudiant($etudiant);
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getDateHeureDebut(): ?DateTimeInterface
    {
        return $this->dateHeureDebut;
    }

    public function setDateHeureDebut(DateTimeInterface $dateHeureDebut): self
    {
        $this->dateHeureDebut = $dateHeureDebut;

        return $this;
    }

    public function getDateHeureFin(): ?DateTimeInterface
    {
        return $this->dateHeureFin;
    }

    public function setDateHeureFin(DateTimeInterface $dateHeureFin): self
    {
        $this->dateHeureFin = $dateHeureFin;

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

    /**
     * @throws Exception
     */
    public function setFichierFile(?File $document = null): void
    {
        $this->fichierFile = $document;

        if (null !== $document) {
            $this->setUpdated(new DateTime());
        }
    }

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

    public function setFichierName(?string $fichierName): void
    {
        $this->fichierName = $fichierName;
    }

    /**
     * @return string
     * @Groups({"justificatif_administration"})
     */
    public function getEtatLong(): string
    {
        return self::ETATLONG[$this->etat];
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function etatLong()
    {
        return self::ETATLONG[$this->etat];
    }

    public function serialize()
    {
        return serialize($this->getId());
    }

    public function unserialize($serialized)
    {
        $this->uuid = unserialize($serialized, ['allowed_classes' => false]);
    }

    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    public function getHeureDebut()
    {
        return $this->heureDebut;
    }

    public function getDateFin()
    {
        return $this->dateFin;
    }

    public function getHeureFin()
    {
        return $this->heureFin;
    }

    public function setDateDebut($dateDebut): void
    {
        $this->dateDebut = $dateDebut;
    }

    public function setHeureDebut($heureDebut): void
    {
        $this->heureDebut = $heureDebut;
    }

    public function setDateFin($dateFin): void
    {
        $this->dateFin = $dateFin;
    }

    public function setHeureFin($heureFin): void
    {
        $this->heureFin = $heureFin;
    }

    public function prepareData()
    {
        $this->setDateDebut($this->getDateHeureDebut());
        $this->setHeureDebut($this->getDateHeureDebut());
        $this->setDateFin($this->getDateHeureFin());
        $this->setHeureFin($this->getDateHeureFin());
    }

    public function transformeData()
    {
        $this->setDateHeureDebut(Carbon::createFromFormat('Y-m-d H:i',
            $this->getDateDebut()->format('Y-m-d') . ' ' . $this->getHeureDebut()->format('H:i')));
        $this->setDateHeureFin(Carbon::createFromFormat('Y-m-d H:i',
            $this->getDateFin()->format('Y-m-d') . ' ' . $this->getHeureFin()->format('H:i')));
    }
}
