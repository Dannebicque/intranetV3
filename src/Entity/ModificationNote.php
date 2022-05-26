<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/ModificationNote.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:21
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\ModificationNoteRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ModificationNoteRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ModificationNote extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: Note::class, inversedBy: 'modificationNotes')]
    private ?Note $note = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'modificationNotes')]
    private ?Personnel $personnel = null;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $ancienneNote = null;

    #[ORM\Column(type: Types::FLOAT)]
    private ?float $nouvelleNote = null;

    public function getNote(): ?Note
    {
        return $this->note;
    }

    public function setNote(?Note $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getAncienneNote(): ?float
    {
        return $this->ancienneNote;
    }

    public function setAncienneNote(float $ancienneNote): self
    {
        $this->ancienneNote = $ancienneNote;

        return $this;
    }

    public function getNouvelleNote(): ?float
    {
        return $this->nouvelleNote;
    }

    public function setNouvelleNote(float $nouvelleNote): self
    {
        $this->nouvelleNote = $nouvelleNote;

        return $this;
    }
}
