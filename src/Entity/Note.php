<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NoteRepository")
 */
class Note extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Evaluation", inversedBy="notes")
     */
    private $evaluation;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="notes")
     */
    private $etudiant;

    /**
     * @ORM\Column(type="float")
     */
    private $note;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commentaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ModificationNote", mappedBy="note")
     */
    private $modificationNotes;

    public function __construct()
    {
        $this->modificationNotes = new ArrayCollection();
    }

    public function getEvaluation(): ?Evaluation
    {
        return $this->evaluation;
    }

    public function setEvaluation(?Evaluation $evaluation): self
    {
        $this->evaluation = $evaluation;

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

    public function getNote(): ?float
    {
        return $this->note;
    }

    public function setNote(float $note): self
    {
        $this->note = $note;

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
     * @return Collection|ModificationNote[]
     */
    public function getModificationNotes(): Collection
    {
        return $this->modificationNotes;
    }

    public function addModificationNote(ModificationNote $modificationNote): self
    {
        if (!$this->modificationNotes->contains($modificationNote)) {
            $this->modificationNotes[] = $modificationNote;
            $modificationNote->setNote($this);
        }

        return $this;
    }

    public function removeModificationNote(ModificationNote $modificationNote): self
    {
        if ($this->modificationNotes->contains($modificationNote)) {
            $this->modificationNotes->removeElement($modificationNote);
            // set the owning side to null (unless already changed)
            if ($modificationNote->getNote() === $this) {
                $modificationNote->setNote(null);
            }
        }

        return $this;
    }
}
