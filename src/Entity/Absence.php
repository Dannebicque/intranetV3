<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Absence.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Serializable;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AbsenceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Absence extends BaseEntity implements Serializable
{
    /**
     * @var UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;

    /**
     * @return UuidInterface
     */
    public function getUuid(): UuidInterface
    {
        return $this->uuid;
    }

    /**
     * @return UuidInterface
     */
    public function getUuidString(): string
    {
        return (string)$this->getUuid();
    }

    /**
     * @var DateTime
     *
     * @ORM\Column(name="date", type="date")
     * @Groups({"absences_administration"})
     */
    private $date;

    /**
     * @var DateTime
     *
     * @ORM\Column(name="heure", type="time")
     * @Groups({"absences_administration"})
     */
    private $heure;

    /**
     * @var DateTime
     *
     * @ORM\Column(name="duree", type="time")
     * @Groups({"absences_administration"})
     */
    private $duree;

    /**
     * @var boolean
     *
     * @ORM\Column(name="justifie", type="boolean")
     * @Groups({"absences_administration"})
     */
    private $justifie = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @MaxDepth(2)
     * @Groups({"absences_administration"})
     */
    private $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="absences")
     * @MaxDepth(2)
     * @Groups({"absences_administration"})
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="absences")
     * @MaxDepth(2)
     * @Groups({"absences_administration"})
     */
    private $etudiant;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateJustifie;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire")
     */
    private $anneeUniversitaire;

    /**
     * Absence constructor.
     * @throws Exception
     */
    public function __construct()
    {
        $this->uuid = Uuid::uuid4();
        $this->anneeUniversitaire = $this->etudiant !== null ? $this->etudiant->getAnneeUniversitaire() : null;
    }

    /**
     * @return DateTime
     */
    public function getDate(): ?DateTime
    {
        return $this->date;
    }

    /**
     * @param DateTime $date
     */
    public function setDate(DateTime $date): void
    {
        $this->date = $date;
    }

    /**
     * @return DateTime
     */
    public function getHeure(): ?DateTime
    {
        return $this->heure;
    }

    /**
     * @param DateTime $heure
     */
    public function setHeure(DateTime $heure): void
    {
        $this->heure = $heure;
    }

    /**
     * @return DateTime
     */
    public function getDuree(): ?DateTime
    {
        return $this->duree;
    }

    /**
     * @param DateTime $duree
     */
    public function setDuree(DateTime $duree): void
    {
        $this->duree = $duree;
    }

    /**
     * @return bool
     */
    public function isJustifie(): bool
    {
        return $this->justifie;
    }

    /**
     * @param bool $justifie
     */
    public function setJustifie(bool $justifie): void
    {
        $this->justifie = $justifie;
    }


    /**
     * @return mixed
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param mixed $personnel
     */
    public function setPersonnel($personnel): void
    {
        $this->personnel = $personnel;
    }

    /**
     * @return mixed
     */
    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @param mixed $etudiant
     */
    public function setEtudiant($etudiant): void
    {
        $this->etudiant = $etudiant;
    }

    /**
     * @return Matiere|null
     */
    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    /**
     * @param Matiere|null $matiere
     *
     * @return Absence
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    public function getDateJustifie(): ?DateTimeInterface
    {
        return $this->dateJustifie;
    }

    public function setDateJustifie(DateTimeInterface $dateJustifie): self
    {
        $this->dateJustifie = $dateJustifie;

        return $this;
    }

    public function getJson(): array
    {
        return [
            'id'          => $this->getId(),
            'justifie'    => $this->isJustifie(),
            'uuidString'  => $this->getUuidString(),
            'date'        => $this->getDate() !== null ? $this->getDate()->format('d/m/Y') : '-',
            'heure'       => $this->getHeure() !== null ? $this->getHeure()->format('H:i') : '-',
            'personnel'   => $this->getPersonnel() !== null ? $this->getPersonnel()->getDisplay() : '-',
            'codeMatiere' => $this->getMatiere() !== null ? $this->getMatiere()->getCodeMatiere() : '-',
        ];
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

    public function getJustifie(): ?bool
    {
        return $this->justifie;
    }

    /**
     * @inheritDoc
     */
    public function serialize()
    {
    }

    /**
     * @inheritDoc
     */
    public function unserialize($serialized)
    {
    }
}
