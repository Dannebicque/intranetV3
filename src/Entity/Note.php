<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Note.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/03/2024 07:45
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\NoteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

#[ORM\Entity(repositoryClass: NoteRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Note extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: Evaluation::class, fetch: 'EAGER', inversedBy: 'notes')]
    private ?Evaluation $evaluation = null;

    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'notes')]
    private ?Etudiant $etudiant = null;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $note = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentaire = null;

    /**
     * @var Collection<int, ModificationNote>
     */
    #[ORM\OneToMany(mappedBy: 'note', targetEntity: ModificationNote::class)]
    private Collection $modificationNotes;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $absenceJustifie = false;

    /**
     * @throws Exception
     */
    public function __construct()
    {
        $this->setUuid(Uuid::uuid4());
        $this->modificationNotes = new ArrayCollection();
    }

    public function setUuid(UuidInterface $uuid): self
    {
        $this->uuid = $uuid;

        return $this;
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
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

    public function setNote(mixed $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

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

    public function getAbsenceJustifie(): ?bool
    {
        return $this->absenceJustifie;
    }

    public function setAbsenceJustifie(bool $absenceJustifie): self
    {
        $this->absenceJustifie = $absenceJustifie;

        return $this;
    }
}
