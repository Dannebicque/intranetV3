<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Note.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NoteRepository")
 */
class Note extends BaseEntity
{
    use UuidTrait;

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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $commentaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ModificationNote", mappedBy="note")
     */
    private $modificationNotes;

    /**
     * @ORM\Column(type="boolean")
     */
    private $absenceJustifie = false;

    /**
     * Note constructor.
     * @throws Exception
     */
    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
        $this->modificationNotes = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }


    /**
     * @return Evaluation|null
     */
    public function getEvaluation(): ?Evaluation
    {
        return $this->evaluation;
    }

    /**
     * @param Evaluation|null $evaluation
     *
     * @return Note
     */
    public function setEvaluation(?Evaluation $evaluation): self
    {
        $this->evaluation = $evaluation;

        return $this;
    }

    /**
     * @return Etudiant|null
     */
    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    /**
     * @param Etudiant|null $etudiant
     *
     * @return Note
     */
    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getNote(): ?float
    {
        return $this->note;
    }

    /**
     * @param float $note
     *
     * @return Note
     */
    public function setNote(float $note): self
    {
        $this->note = $note;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    /**
     * @param string|null $commentaire
     *
     * @return Note
     */
    public function setCommentaire(?string $commentaire): self
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

    /**
     * @param ModificationNote $modificationNote
     *
     * @return Note
     */
    public function addModificationNote(ModificationNote $modificationNote): self
    {
        if (!$this->modificationNotes->contains($modificationNote)) {
            $this->modificationNotes[] = $modificationNote;
            $modificationNote->setNote($this);
        }

        return $this;
    }

    /**
     * @param ModificationNote $modificationNote
     *
     * @return Note
     */
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

    public function getAbsenceJustifie(): ?bool
    {
        return $this->absenceJustifie;
    }

    public function setAbsenceJustifie(bool $absenceJustifie): self
    {
        $this->absenceJustifie = $absenceJustifie;

        return $this;
    }

    public function setUuid($uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }
}
