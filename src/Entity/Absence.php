<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AbsenceRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Absence extends BaseEntity
{
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="date")
     */
    private $date;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="heure", type="time")
     */
    private $heure;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="duree", type="time")
     */
    private $duree;

    /**
     * @var boolean
     *
     * @ORM\Column(name="justifie", type="boolean")
     */
    private $justifie = false;


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", fetch="EAGER")
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
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="absences")
     */
    private $etudiant;

   public function __construct()
   {
       $this->anneeuniversitaire= date('Y');
   }

    /**
     * @return \DateTime
     */
    public function getDate(): ?\DateTime
    {
        return $this->date;
    }

    /**
     * @param \DateTime $date
     */
    public function setDate(\DateTime $date): void
    {
        $this->date = $date;
    }

    /**
     * @return \DateTime
     */
    public function getHeure(): ?\DateTime
    {
        return $this->heure;
    }

    /**
     * @param \DateTime $heure
     */
    public function setHeure(\DateTime $heure): void
    {
        $this->heure = $heure;
    }

    /**
     * @return \DateTime
     */
    public function getDuree(): ?\DateTime
    {
        return $this->duree;
    }

    /**
     * @param \DateTime $duree
     */
    public function setDuree(\DateTime $duree): void
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

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }


}
