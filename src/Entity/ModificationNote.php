<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/ModificationNote.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ModificationNoteRepository")
 */
class ModificationNote extends BaseEntity
{


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

    /**
     * @return Note|null
     */
    public function getNote(): ?Note
    {
        return $this->note;
    }

    /**
     * @param Note|null $note
     *
     * @return ModificationNote
     */
    public function setNote(?Note $note): self
    {
        $this->note = $note;

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel|null $personnel
     *
     * @return ModificationNote
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getAncienneNote(): ?float
    {
        return $this->ancienneNote;
    }

    /**
     * @param float $ancienneNote
     *
     * @return ModificationNote
     */
    public function setAncienneNote(float $ancienneNote): self
    {
        $this->ancienneNote = $ancienneNote;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getNouvelleNote(): ?float
    {
        return $this->nouvelleNote;
    }

    /**
     * @param float $nouvelleNote
     *
     * @return ModificationNote
     */
    public function setNouvelleNote(float $nouvelleNote): self
    {
        $this->nouvelleNote = $nouvelleNote;

        return $this;
    }
}
