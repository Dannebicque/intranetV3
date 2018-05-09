<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DateRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Date extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titre;

    /**
     * @ORM\Column(type="text")
     */
    private $texte;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="date")
     */
    private $date_debut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="time", nullable=true)
     */
    private $heure_debut;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="date")
     */
    private $date_fin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(type="time", nullable=true)
     */
    private $heure_fin;

    /**
     * @var string
     *
     * @ORM\Column(name="lieu", type="string", length=150)
     */
    private $lieu;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $allday = false;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=1)
     */
    private $qui = 'E'; //ou P si uniquement prof

    /**
     * @var Formation
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation")
     */
    private $formation;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="dates")
     */
    private $semestres;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getDateDebut(): ?\DateTime
    {
        return $this->date_debut;
    }

    /**
     * @param \DateTime $date_debut
     */
    public function setDateDebut(\DateTime $date_debut): void
    {
        $this->date_debut = $date_debut;
    }

    /**
     * @return \DateTime
     */
    public function getHeureDebut(): ?\DateTime
    {
        return $this->heure_debut;
    }

    /**
     * @param \DateTime $heure_debut
     */
    public function setHeureDebut(\DateTime $heure_debut): void
    {
        $this->heure_debut = $heure_debut;
    }

    /**
     * @return \DateTime
     */
    public function getDateFin(): ?\DateTime
    {
        return $this->date_fin;
    }

    /**
     * @param \DateTime $date_fin
     */
    public function setDateFin(\DateTime $date_fin): void
    {
        $this->date_fin = $date_fin;
    }

    /**
     * @return \DateTime
     */
    public function getHeureFin(): ?\DateTime
    {
        return $this->heure_fin;
    }

    /**
     * @param \DateTime $heure_fin
     */
    public function setHeureFin(\DateTime $heure_fin): void
    {
        $this->heure_fin = $heure_fin;
    }

    /**
     * @return string
     */
    public function getLieu(): ?string
    {
        return $this->lieu;
    }

    /**
     * @param string $lieu
     */
    public function setLieu(string $lieu): void
    {
        $this->lieu = $lieu;
    }

    /**
     * @return bool
     */
    public function isAllday(): bool
    {
        return $this->allday;
    }

    /**
     * @param bool $allday
     */
    public function setAllday(bool $allday): void
    {
        $this->allday = $allday;
    }

    /**
     * @return string
     */
    public function getQui(): ?string
    {
        return $this->qui;
    }

    /**
     * @param string $qui
     */
    public function setQui(string $qui): void
    {
        $this->qui = $qui;
    }

    /**
     * @return Formation
     */
    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    /**
     * @param Formation $formation
     */
    public function setFormation(Formation $formation): void
    {
        $this->formation = $formation;
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
}
