<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ModificationNote.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 22:10
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ModificationNoteRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class ModificationNote extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Note", inversedBy="modificationNotes")
     */
    private $note;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="modificationNotes")
     */
    private $personnel;

    /**
     * @ORM\Column(type="float")
     */
    private $ancienneNote;

    /**
     * @ORM\Column(type="float")
     */
    private $nouvelleNote;

    public function getNote(): ?Note
    {
        return $this->note;
    }

    /**
     * @return ModificationNote
     */
    public function setNote(?Note $note): self
    {
        $this->note = $note;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @return ModificationNote
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function getAncienneNote(): ?float
    {
        return $this->ancienneNote;
    }

    /**
     * @return ModificationNote
     */
    public function setAncienneNote(float $ancienneNote): self
    {
        $this->ancienneNote = $ancienneNote;

        return $this;
    }

    public function getNouvelleNote(): ?float
    {
        return $this->nouvelleNote;
    }

    /**
     * @return ModificationNote
     */
    public function setNouvelleNote(float $nouvelleNote): self
    {
        $this->nouvelleNote = $nouvelleNote;

        return $this;
    }
}
