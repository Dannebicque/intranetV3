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
     */
    private $notes;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $num_etudiant;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $num_ine;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     */
    private $bac;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $annee_bac;

    public function __construct()
    {
        $this->notes = new ArrayCollection();
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
        return $this->num_etudiant;
    }

    public function setNumEtudiant(string $num_etudiant): self
    {
        $this->num_etudiant = $num_etudiant;

        return $this;
    }

    public function getNumIne(): ?string
    {
        return $this->num_ine;
    }

    public function setNumIne(string $num_ine): self
    {
        $this->num_ine = $num_ine;

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
        return $this->annee_bac;
    }

    public function setAnneeBac(?int $annee_bac): self
    {
        $this->annee_bac = $annee_bac;

        return $this;
    }


}
