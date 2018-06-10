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
    private $personnelAuteur;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Personnel", inversedBy="evaluationsAutorise")
     */
    private $personnelAutorise;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateEvaluation;

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
        $this->personnelAutorise = new ArrayCollection();
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
        return $this->personnelAuteur;
    }

    public function setPersonnelAuteur(?Personnel $personnelAuteur): self
    {
        $this->personnelAuteur = $personnelAuteur;

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getPersonnelAutorise(): Collection
    {
        return $this->personnelAutorise;
    }

    public function addPersonnelAutorise(Personnel $personnelAutorise): self
    {
        if (!$this->personnelAutorise->contains($personnelAutorise)) {
            $this->personnelAutorise[] = $personnelAutorise;
        }

        return $this;
    }

    public function removePersonnelAutorise(Personnel $personnelAutorise): self
    {
        if ($this->personnelAutorise->contains($personnelAutorise)) {
            $this->personnelAutorise->removeElement($personnelAutorise);
        }

        return $this;
    }

    public function getDateEvaluation(): ?\DateTimeInterface
    {
        return $this->dateEvaluation;
    }

    public function setDateEvaluation(\DateTimeInterface $dateEvaluation): self
    {
        $this->dateEvaluation = $dateEvaluation;

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
