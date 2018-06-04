<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EvaluationRepository")
 */
class Evaluation extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="evaluations")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="evaluationsAuteur")
     */
    private $personnel_auteur;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Personnel", inversedBy="evaluationsAutorise")
     */
    private $personnel_autorise;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date_evaluation;

    /**
     * @ORM\Column(type="integer")
     */
    private $anneeuniversitaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $visible;

    /**
     * @ORM\Column(type="boolean")
     */
    private $modifiable;

    /**
     * @ORM\Column(type="float")
     */
    private $coefficient;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commentaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="evaluation")
     */
    private $notes;

    public function __construct()
    {
        $this->personnel_autorise = new ArrayCollection();
        $this->notes = new ArrayCollection();
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

    public function getPersonnelAuteur(): ?Personnel
    {
        return $this->personnel_auteur;
    }

    public function setPersonnelAuteur(?Personnel $personnel_auteur): self
    {
        $this->personnel_auteur = $personnel_auteur;

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getPersonnelAutorise(): Collection
    {
        return $this->personnel_autorise;
    }

    public function addPersonnelAutorise(Personnel $personnelAutorise): self
    {
        if (!$this->personnel_autorise->contains($personnelAutorise)) {
            $this->personnel_autorise[] = $personnelAutorise;
        }

        return $this;
    }

    public function removePersonnelAutorise(Personnel $personnelAutorise): self
    {
        if ($this->personnel_autorise->contains($personnelAutorise)) {
            $this->personnel_autorise->removeElement($personnelAutorise);
        }

        return $this;
    }

    public function getDateEvaluation(): ?\DateTimeInterface
    {
        return $this->date_evaluation;
    }

    public function setDateEvaluation(\DateTimeInterface $date_evaluation): self
    {
        $this->date_evaluation = $date_evaluation;

        return $this;
    }

    public function getAnneeuniversitaire(): ?int
    {
        return $this->anneeuniversitaire;
    }

    public function setAnneeuniversitaire(int $anneeuniversitaire): self
    {
        $this->anneeuniversitaire = $anneeuniversitaire;

        return $this;
    }

    public function getVisible(): ?bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    public function getModifiable(): ?bool
    {
        return $this->modifiable;
    }

    public function setModifiable(bool $modifiable): self
    {
        $this->modifiable = $modifiable;

        return $this;
    }

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(float $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
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
            $note->setEvaluation($this);
        }

        return $this;
    }

    public function removeNote(Note $note): self
    {
        if ($this->notes->contains($note)) {
            $this->notes->removeElement($note);
            // set the owning side to null (unless already changed)
            if ($note->getEvaluation() === $this) {
                $note->setEvaluation(null);
            }
        }

        return $this;
    }
}
