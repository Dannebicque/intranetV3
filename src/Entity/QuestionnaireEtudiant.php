<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 24/11/2020 11:42

namespace App\Entity;

use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\PersistentCollection;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireEtudiantRepository")
 */
class QuestionnaireEtudiant extends BaseEntity
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Etudiant", inversedBy="quizzEtudiants")
     */
    private ?Etudiant $etudiant;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireQualite")
     */
    private ?QuestionnaireQualite $questionnaireQualite;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuestionnaireQuizz")
     */
    private ?QuestionnaireQuizz $questionnaireQuizz;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $termine = false;

    /**
     * @ORM\OneToMany(targetEntity="QuestionnaireEtudiantReponse", mappedBy="questionnaireEtudiant")
     */
    private $questionnaireEtudiantReponses;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?DateTimeInterface $dateTermine;

    public function __construct(Etudiant $etudiant, $questionnaire, $typeQuestionnaire)
    {
        $this->setEtudiant($etudiant);
        switch ($typeQuestionnaire) {
            case 'quizz':
                $this->setQuestionnaireQuizz($questionnaire);
                break;
            case 'qualite':
                $this->setQuestionnaireQualite($questionnaire);
                break;
        }

        $this->questionnaireEtudiantReponses = new ArrayCollection();
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
     * @return Collection|QuestionnaireEtudiantReponse[]
     */
    public function getQuestionnaireEtudiantReponses(): Collection
    {
        return $this->questionnaireEtudiantReponses;
    }

    public function addQuestionnaireEtudiantReponse(QuestionnaireEtudiantReponse $quizzEtudiantReponse): self
    {
        if (!$this->questionnaireEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->questionnaireEtudiantReponses[] = $quizzEtudiantReponse;
            $quizzEtudiantReponse->setQuestionnaireEtudiant($this);
        }

        return $this;
    }

    public function removeQuestionnaireEtudiantReponse(QuestionnaireEtudiantReponse $quizzEtudiantReponse): self
    {
        if ($this->questionnaireEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->questionnaireEtudiantReponses->removeElement($quizzEtudiantReponse);
            // set the owning side to null (unless already changed)
            if ($quizzEtudiantReponse->getQuestionnaireEtudiant() === $this) {
                $quizzEtudiantReponse->setQuestionnaireEtudiant(null);
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

    public function getQuestionnaireQualite(): ?QuestionnaireQualite
    {
        return $this->questionnaireQualite;
    }

    public function setQuestionnaireQualite(?QuestionnaireQualite $questionnaireQualite): self
    {
        $this->questionnaireQualite = $questionnaireQualite;

        return $this;
    }

    public function getQuestionnaireQuizz(): ?QuestionnaireQuizz
    {
        return $this->questionnaireQuizz;
    }

    public function setQuestionnaireQuizz(?QuestionnaireQuizz $questionnaireQuizz): self
    {
        $this->questionnaireQuizz = $questionnaireQuizz;

        return $this;
    }
}
