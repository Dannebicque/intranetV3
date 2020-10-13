<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/AbsenceJustificatif.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 06:34

namespace App\Entity;

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
 */
class AbsenceJustificatif extends BaseEntity implements Serializable
{
    public const ACCEPTE = 'A';
    public const REFUSE = 'R';
    public const DEPOSE = 'D';

    Public const ETATLONG = [
        'A' => 'Accepté',
        'R' => 'Refusé',
        'D' => 'Déposé'
    ];

    use UuidTrait;

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
     * @param Etudiant $etudiant
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
        $this->anneeUniversitaire = $etudiant !== null ? $etudiant->getAnneeUniversitaire() : null;
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
     * @param File|null $document
     *
     * @throws Exception
     */
    public function setFichierFile(?File $document = null): void
    {
        $this->fichierFile = $document;

        if (null !== $document) {
            $this->setUpdated(new DateTime());
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
     * @param string|null $fichierName
     */
    public function setFichierName(?string $fichierName): void
    {
        $this->fichierName = $fichierName;
    }


    public function getEtatLong(): string
    {
        $tabEtat = [
            'A' => 'Accepté, absences justifiées',
            'R' => 'Refusé',
            'D' => 'Déposé, en attente de validation'
        ];

        return $tabEtat[$this->etat];
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

    /**
     * @return mixed
     */
    public function getDateDebut()
    {
        return $this->dateDebut;
    }

    /**
     * @return mixed
     */
    public function getHeureDebut()
    {
        return $this->heureDebut;
    }

    /**
     * @return mixed
     */
    public function getDateFin()
    {
        return $this->dateFin;
    }

    /**
     * @return mixed
     */
    public function getHeureFin()
    {
        return $this->heureFin;
    }

    /**
     * @param mixed $dateDebut
     */
    public function setDateDebut($dateDebut): void
    {
        $this->dateDebut = $dateDebut;
    }

    /**
     * @param mixed $heureDebut
     */
    public function setHeureDebut($heureDebut): void
    {
        $this->heureDebut = $heureDebut;
    }

    /**
     * @param mixed $dateFin
     */
    public function setDateFin($dateFin): void
    {
        $this->dateFin = $dateFin;
    }

    /**
     * @param mixed $heureFin
     */
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
