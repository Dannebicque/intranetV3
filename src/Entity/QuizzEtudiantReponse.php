<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuizzEtudiantReponseRepository")
 */
class QuizzEtudiantReponse extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="quizzEtudiantReponses")
     */
    private $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QualiteQuestionnaire", inversedBy="quizzEtudiantReponses")
     */
    private $questionnaire;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $valeur;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\QuizzQuestion", inversedBy="quizzEtudiantReponses")
     */
    private $question;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\QuizzReponse", inversedBy="quizzEtudiantReponses")
     */
    private $reponse;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $cleReponse;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $cleQuestion;


    public function __construct(QualiteQuestionnaire $qualiteQuestionnaire)
    {
        $this->setQuestionnaire($qualiteQuestionnaire);
        $this->question = new ArrayCollection();
        $this->reponse = new ArrayCollection();
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

    /**
     * @return Collection|QuizzQuestion[]
     */
    public function getQuestion(): Collection
    {
        return $this->question;
    }

    public function addQuestion(QuizzQuestion $question): self
    {
        if (!$this->question->contains($question)) {
            $this->question[] = $question;
        }

        return $this;
    }

    public function removeQuestion(QuizzQuestion $question): self
    {
        if ($this->question->contains($question)) {
            $this->question->removeElement($question);
        }

        return $this;
    }

    /**
     * @return Collection|QuizzReponse[]
     */
    public function getReponse(): Collection
    {
        return $this->reponse;
    }

    public function addReponse(QuizzReponse $reponse): self
    {
        if (!$this->reponse->contains($reponse)) {
            $this->reponse[] = $reponse;
        }

        return $this;
    }

    public function removeReponse(QuizzReponse $reponse): self
    {
        if ($this->reponse->contains($reponse)) {
            $this->reponse->removeElement($reponse);
        }

        return $this;
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(?string $valeur): self
    {
        $this->valeur = trim($valeur);

        return $this;
    }

    public function getCleReponse(): ?string
    {
        return $this->cleReponse;
    }

    public function setCleReponse(?string $cleReponse): self
    {
        $this->cleReponse = $cleReponse;

        return $this;
    }

    public function getCleQuestion(): ?string
    {
        return $this->cleQuestion;
    }

    public function setCleQuestion(string $cleQuestion): self
    {
        $this->cleQuestion = $cleQuestion;

        return $this;
    }
}
