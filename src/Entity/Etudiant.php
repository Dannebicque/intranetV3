<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EtudiantRepository")
 */
class Etudiant extends Utilisateur
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="etudiants")
     */
    private $semestre;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="etudiant")
     *
     */
    private $notes;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $numEtudiant;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $numIne;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $bac;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $anneeBac;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Absence", mappedBy="etudiant")
     * @ORM\OrderBy({"date" = "desc", "heure" = "desc"})
     */
    private $absences;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist", "remove"})
     */
    private $adresseParentale;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Rattrapage", mappedBy="etudiant")
     */
    private $rattrapages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Favori", mappedBy="etudiantDemandeur")
     */
    private $etudiantDemande;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Favori", mappedBy="etudiantDemande")
     */
    private $etudiantDemandeur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Scolarite", mappedBy="etudiant")
     */
    private $scolarites;

    public function __construct()
    {
        $this->notes = new ArrayCollection();
        $this->absences = new ArrayCollection();
        $this->rattrapages = new ArrayCollection();
        $this->etudiantDemande = new ArrayCollection();
        $this->etudiantDemandeur = new ArrayCollection();
        $this->scolarites = new ArrayCollection();
    }

    public function getId()
    {
        return $this->id;
    }

    /**
     * @return Semestre
     */
    public function getSemestre(): Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre $semestre
     */
    public function setSemestre(Semestre $semestre): void
    {
        $this->semestre = $semestre;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    public function addNote(Note $note): self
    {
        if (!$this->notes->contains($note)) {
            $this->notes[] = $note;
            $note->setEtudiant($this);
        }

        return $this;
    }

    public function removeNote(Note $note): self
    {
        if ($this->notes->contains($note)) {
            $this->notes->removeElement($note);
            // set the owning side to null (unless already changed)
            if ($note->getEtudiant() === $this) {
                $note->setEtudiant(null);
            }
        }

        return $this;
    }


    public function getNumEtudiant(): ?string
    {
        return $this->numEtudiant;
    }

    public function setNumEtudiant(string $numEtudiant): self
    {
        $this->numEtudiant = $numEtudiant;

        return $this;
    }

    public function getNumIne(): ?string
    {
        return $this->numIne;
    }

    public function setNumIne(string $numIne): self
    {
        $this->numIne = $numIne;

        return $this;
    }

    public function getBac(): ?string
    {
        return $this->bac;
    }

    public function setBac(?string $bac): self
    {
        $this->bac = $bac;

        return $this;
    }

    public function getAnneeBac(): ?int
    {
        return $this->anneeBac;
    }

    public function setAnneeBac(?int $anneeBac): self
    {
        $this->anneeBac = $anneeBac;

        return $this;
    }

    /**
     * @return Collection|Absence[]
     */
    public function getAbsences(): Collection
    {
        return $this->absences;
    }

    public function addAbsence(Absence $absence): self
    {
        if (!$this->absences->contains($absence)) {
            $this->absences[] = $absence;
            $absence->setEtudiant($this);
        }

        return $this;
    }

    public function removeAbsence(Absence $absence): self
    {
        if ($this->absences->contains($absence)) {
            $this->absences->removeElement($absence);
            // set the owning side to null (unless already changed)
            if ($absence->getEtudiant() === $this) {
                $absence->setEtudiant(null);
            }
        }

        return $this;
    }

    public function getAdresseParentale(): ?Adresse
    {
        return $this->adresseParentale;
    }

    public function setAdresseParentale(?Adresse $adresseParentale): self
    {
        $this->adresseParentale = $adresseParentale;

        return $this;
    }

    /**
     * @return Collection|Rattrapage[]
     */
    public function getRattrapages(): Collection
    {
        return $this->rattrapages;
    }

    public function addRattrapage(Rattrapage $rattrapage): self
    {
        if (!$this->rattrapages->contains($rattrapage)) {
            $this->rattrapages[] = $rattrapage;
            $rattrapage->setEtudiant($this);
        }

        return $this;
    }

    public function removeRattrapage(Rattrapage $rattrapage): self
    {
        if ($this->rattrapages->contains($rattrapage)) {
            $this->rattrapages->removeElement($rattrapage);
            // set the owning side to null (unless already changed)
            if ($rattrapage->getEtudiant() === $this) {
                $rattrapage->setEtudiant(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Favori[]
     */
    public function getEtudiantDemande(): Collection
    {
        return $this->etudiantDemande;
    }

    public function addEtudiantDemande(Favori $etudiantDemande): self
    {
        if (!$this->etudiantDemande->contains($etudiantDemande)) {
            $this->etudiantDemande[] = $etudiantDemande;
            $etudiantDemande->setEtudiantDemandeur($this);
        }

        return $this;
    }

    public function removeEtudiantDemande(Favori $etudiantDemande): self
    {
        if ($this->etudiantDemande->contains($etudiantDemande)) {
            $this->etudiantDemande->removeElement($etudiantDemande);
            // set the owning side to null (unless already changed)
            if ($etudiantDemande->getEtudiantDemandeur() === $this) {
                $etudiantDemande->setEtudiantDemandeur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Favori[]
     */
    public function getEtudiantDemandeur(): Collection
    {
        return $this->etudiantDemandeur;
    }

    public function addEtudiantDemandeur(Favori $etudiantDemandeur): self
    {
        if (!$this->etudiantDemandeur->contains($etudiantDemandeur)) {
            $this->etudiantDemandeur[] = $etudiantDemandeur;
            $etudiantDemandeur->setEtudiantDemand�e($this);
        }

        return $this;
    }

    public function removeEtudiantDemandeur(Favori $etudiantDemandeur): self
    {
        if ($this->etudiantDemandeur->contains($etudiantDemandeur)) {
            $this->etudiantDemandeur->removeElement($etudiantDemandeur);
            // set the owning side to null (unless already changed)
            if ($etudiantDemandeur->getEtudiantDemand�e() === $this) {
                $etudiantDemandeur->setEtudiantDemand�e(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Scolarite[]
     */
    public function getScolarites(): Collection
    {
        return $this->scolarites;
    }

    public function addScolarite(Scolarite $scolarite): self
    {
        if (!$this->scolarites->contains($scolarite)) {
            $this->scolarites[] = $scolarite;
            $scolarite->setEtudiant($this);
        }

        return $this;
    }

    public function removeScolarite(Scolarite $scolarite): self
    {
        if ($this->scolarites->contains($scolarite)) {
            $this->scolarites->removeElement($scolarite);
            // set the owning side to null (unless already changed)
            if ($scolarite->getEtudiant() === $this) {
                $scolarite->setEtudiant(null);
            }
        }

        return $this;
    }


}
