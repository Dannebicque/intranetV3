<?php

namespace App\Entity;

use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuizzEtudiantRepository")
 */
class QuizzEtudiant extends BaseEntity
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="quizzEtudiants")
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QualiteQuestionnaire", inversedBy="quizzEtudiants")
     */
    private $questionnaire;

    /**
     * @ORM\Column(type="boolean")
     */
    private $termine = false;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuizzEtudiantReponse", mappedBy="quizzEtudiant")
     */
    private $quizzEtudiantReponses;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateTermine;

    public function __construct(Etudiant $etudiant, QualiteQuestionnaire $questionnaire)
    {
        $this->setEtudiant($etudiant);
        $this->setQuestionnaire($questionnaire);
        $this->quizzEtudiantReponses = new ArrayCollection();
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

    public function getQuestionnaire(): ?QualiteQuestionnaire
    {
        return $this->questionnaire;
    }

    public function setQuestionnaire(?QualiteQuestionnaire $questionnaire): self
    {
        $this->questionnaire = $questionnaire;

        return $this;
    }

    public function getTermine(): ?bool
    {
        return $this->termine;
    }

    public function setTermine(bool $termine): self
    {
        $this->termine = $termine;

        return $this;
    }

    /**
     * @return Collection|QuizzEtudiantReponse[]
     */
    public function getQuizzEtudiantReponses(): Collection
    {
        return $this->quizzEtudiantReponses;
    }

    public function addQuizzEtudiantReponse(QuizzEtudiantReponse $quizzEtudiantReponse): self
    {
        if (!$this->quizzEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->quizzEtudiantReponses[] = $quizzEtudiantReponse;
            $quizzEtudiantReponse->setQuizzEtudiant($this);
        }

        return $this;
    }

    public function removeQuizzEtudiantReponse(QuizzEtudiantReponse $quizzEtudiantReponse): self
    {
        if ($this->quizzEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->quizzEtudiantReponses->removeElement($quizzEtudiantReponse);
            // set the owning side to null (unless already changed)
            if ($quizzEtudiantReponse->getQuizzEtudiant() === $this) {
                $quizzEtudiantReponse->setQuizzEtudiant(null);
            }
        }

        return $this;
    }

    public function getDateTermine(): ?DateTimeInterface
    {
        return $this->dateTermine;
    }

    public function setDateTermine(DateTimeInterface $dateTermine): self
    {
        $this->dateTermine = $dateTermine;

        return $this;
    }
}
