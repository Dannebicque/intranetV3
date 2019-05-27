<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Absence.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 4/30/19 2:35 PM
 *  * @lastUpdate 4/30/19 10:17 AM
 *  *
 *
 */

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AbsenceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Absence extends BaseEntity
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", fetch="EAGER")
     * @MaxDepth(2)
     * @Groups({"absences_administration"})
     */
    private $personnel;

    /**
     * @var integer
     *
     * @ORM\Column(name="anneeuniversitaire", type="integer")
     */
    private $anneeuniversitaire;

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
     * @ORM\Column(type="datetime")
     */
    private $dateJustifie;

    /**
     * Absence constructor.
     * @throws Exception
     */
    public function __construct()
    {
        $this->uuid = Uuid::uuid4();
        $this->anneeuniversitaire = (int)date('Y');
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
     * @return int
     */
    public function getAnneeuniversitaire(): int
    {
        return $this->anneeuniversitaire;
    }

    /**
     * @param int $anneeuniversitaire
     */
    public function setAnneeuniversitaire(int $anneeuniversitaire): void
    {
        $this->anneeuniversitaire = $anneeuniversitaire;
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

    public function getDateJustifie(): ?\DateTimeInterface
    {
        return $this->dateJustifie;
    }

    public function setDateJustifie(\DateTimeInterface $dateJustifie): self
    {
        $this->dateJustifie = $dateJustifie;

        return $this;
    }
}
