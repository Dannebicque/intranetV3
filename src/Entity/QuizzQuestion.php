<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/QuizzQuestion.php
// @author     David Annebicque
// @project intranetv3
// @date 28/11/2019 14:27
// @lastUpdate 27/11/2019 13:12

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuizzQuestionRepository")
 */
class QuizzQuestion extends BaseEntity
{
    public const QUESTION_TYPE_QCU = 'qcu';
    public const QUESTION_TYPE_QCM = 'qcm';
    public const QUESTION_TYPE_YESNO = 'yesno';
    public const QUESTION_TYPE_ECHELLE = 'echelle';
    public const QUESTION_TYPE_LIBRE = 'libre';

    public const LISTE_TYPE_QUESTION = [
        QuizzQuestion::QUESTION_TYPE_QCU     => QuizzQuestion::QUESTION_TYPE_QCU,
        QuizzQuestion::QUESTION_TYPE_QCM     => QuizzQuestion::QUESTION_TYPE_QCM,
        QuizzQuestion::QUESTION_TYPE_YESNO   => QuizzQuestion::QUESTION_TYPE_YESNO,
        QuizzQuestion::QUESTION_TYPE_ECHELLE => QuizzQuestion::QUESTION_TYPE_ECHELLE,
        QuizzQuestion::QUESTION_TYPE_LIBRE   => QuizzQuestion::QUESTION_TYPE_LIBRE
    ];

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $help;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuizzReponse", mappedBy="question", cascade={"persist", "remove"})
     * @ORM\OrderBy({"ordre"="ASC"})
     */
    private $quizzReponses;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\QuizzQuestionnaire", mappedBy="questions")
     */
    private $quizzQuestionnaires;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="quizzQuestions")
     */
    private $auteur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QualiteSectionQuestion", mappedBy="question")
     */
    private $qualiteSectionQuestions;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuizzQuestion", inversedBy="quizzQuestions")
     */
    private $questionParent;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuizzQuestion", mappedBy="questionParent")
     */
    private $quizzQuestions;

    /**
     * @ORM\Column(type="boolean")
     */
    private $obligatoire = true;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\QuizzEtudiantReponse", mappedBy="question")
     */
    private $quizzEtudiantReponses;


    public function __construct(Personnel $personnel)
    {
        $this->quizzReponses = new ArrayCollection();
        $this->quizzQuestionnaires = new ArrayCollection();
        $this->setAuteur($personnel);
        $this->qualiteSectionQuestions = new ArrayCollection();
        $this->quizzQuestions = new ArrayCollection();
        $this->quizzEtudiantReponses = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getHelp(): ?string
    {
        return $this->help;
    }

    public function setHelp(string $help): self
    {
        $this->help = $help;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|QuizzReponse[]
     */
    public function getQuizzReponses(): Collection
    {
        return $this->quizzReponses;
    }

    public function addQuizzReponse(QuizzReponse $quizzReponse): self
    {
        if (!$this->quizzReponses->contains($quizzReponse)) {
            $this->quizzReponses[] = $quizzReponse;
            $quizzReponse->setQuestion($this);
        }

        return $this;
    }

    public function removeQuizzReponse(QuizzReponse $quizzReponse): self
    {
        if ($this->quizzReponses->contains($quizzReponse)) {
            $this->quizzReponses->removeElement($quizzReponse);
            // set the owning side to null (unless already changed)
            if ($quizzReponse->getQuestion() === $this) {
                $quizzReponse->setQuestion(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|QuizzQuestionnaire[]
     */
    public function getQuizzQuestionnaires(): Collection
    {
        return $this->quizzQuestionnaires;
    }

    public function addQuizzQuestionnaire(QuizzQuestionnaire $quizzQuestionnaire): self
    {
        if (!$this->quizzQuestionnaires->contains($quizzQuestionnaire)) {
            $this->quizzQuestionnaires[] = $quizzQuestionnaire;
            $quizzQuestionnaire->addQuestion($this);
        }

        return $this;
    }

    public function removeQuizzQuestionnaire(QuizzQuestionnaire $quizzQuestionnaire): self
    {
        if ($this->quizzQuestionnaires->contains($quizzQuestionnaire)) {
            $this->quizzQuestionnaires->removeElement($quizzQuestionnaire);
            $quizzQuestionnaire->removeQuestion($this);
        }

        return $this;
    }

    public function getAuteur(): ?Personnel
    {
        return $this->auteur;
    }

    public function setAuteur(?Personnel $auteur): self
    {
        $this->auteur = $auteur;

        return $this;
    }

    /**
     * @return Collection|QualiteSectionQuestion[]
     */
    public function getQualiteSectionQuestions(): Collection
    {
        return $this->qualiteSectionQuestions;
    }

    public function addQualiteSectionQuestion(QualiteSectionQuestion $qualiteSectionQuestion): self
    {
        if (!$this->qualiteSectionQuestions->contains($qualiteSectionQuestion)) {
            $this->qualiteSectionQuestions[] = $qualiteSectionQuestion;
            $qualiteSectionQuestion->setQuestion($this);
        }

        return $this;
    }

    public function removeQualiteSectionQuestion(QualiteSectionQuestion $qualiteSectionQuestion): self
    {
        if ($this->qualiteSectionQuestions->contains($qualiteSectionQuestion)) {
            $this->qualiteSectionQuestions->removeElement($qualiteSectionQuestion);
            // set the owning side to null (unless already changed)
            if ($qualiteSectionQuestion->getQuestion() === $this) {
                $qualiteSectionQuestion->setQuestion(null);
            }
        }

        return $this;
    }

    public function getQuestionParent(): ?self
    {
        return $this->questionParent;
    }

    public function setQuestionParent(?self $questionParent): self
    {
        $this->questionParent = $questionParent;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getQuizzQuestions(): Collection
    {
        return $this->quizzQuestions;
    }

    public function addQuizzQuestion(self $quizzQuestion): self
    {
        if (!$this->quizzQuestions->contains($quizzQuestion)) {
            $this->quizzQuestions[] = $quizzQuestion;
            $quizzQuestion->setQuestionParent($this);
        }

        return $this;
    }

    public function removeQuizzQuestion(self $quizzQuestion): self
    {
        if ($this->quizzQuestions->contains($quizzQuestion)) {
            $this->quizzQuestions->removeElement($quizzQuestion);
            // set the owning side to null (unless already changed)
            if ($quizzQuestion->getQuestionParent() === $this) {
                $quizzQuestion->setQuestionParent(null);
            }
        }

        return $this;
    }

    public function getObligatoire(): ?bool
    {
        return $this->obligatoire;
    }

    public function setObligatoire(bool $obligatoire): self
    {
        $this->obligatoire = $obligatoire;

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
            $quizzEtudiantReponse->addQuestion($this);
        }

        return $this;
    }

    public function removeQuizzEtudiantReponse(QuizzEtudiantReponse $quizzEtudiantReponse): self
    {
        if ($this->quizzEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->quizzEtudiantReponses->removeElement($quizzEtudiantReponse);
            $quizzEtudiantReponse->removeQuestion($this);
        }

        return $this;
    }
}
