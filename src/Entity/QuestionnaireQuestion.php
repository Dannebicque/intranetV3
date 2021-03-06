<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 11:20
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireQuestionRepository")
 */
class QuestionnaireQuestion extends BaseEntity
{
    public const QUESTION_TYPE_QCU = 'qcu';
    public const QUESTION_TYPE_QCM = 'qcm';
    public const QUESTION_TYPE_YESNO = 'yesno';
    public const QUESTION_TYPE_ECHELLE = 'echelle';
    public const QUESTION_TYPE_LIBRE = 'libre';

    public const LISTE_TYPE_QUESTION = [
        self::QUESTION_TYPE_QCU     => self::QUESTION_TYPE_QCU,
        self::QUESTION_TYPE_QCM     => self::QUESTION_TYPE_QCM,
        self::QUESTION_TYPE_YESNO   => self::QUESTION_TYPE_YESNO,
        self::QUESTION_TYPE_ECHELLE => self::QUESTION_TYPE_ECHELLE,
        self::QUESTION_TYPE_LIBRE   => self::QUESTION_TYPE_LIBRE,
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
     * @ORM\OneToMany(targetEntity="QuestionnaireReponse", mappedBy="question", cascade={"persist", "remove"},
     *                                                        fetch="EAGER")
     * @ORM\OrderBy({"ordre"="ASC"})
     */
    private $quizzReponses;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="quizzQuestions")
     */
    private $auteur;

    /**
     * @ORM\OneToMany(targetEntity="QuestionnaireSectionQuestion", mappedBy="question")
     */
    private $qualiteSectionQuestions;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireQuestion", inversedBy="questionsEnfants")
     */
    private $questionParent;

    /**
     * @ORM\OneToMany(targetEntity="QuestionnaireQuestion", mappedBy="questionParent")
     */
    private $questionsEnfants;

    /**
     * @ORM\Column(type="boolean")
     */
    private $obligatoire = true;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $alignement = 'HORIZONTAL_CENTER';

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $parametre;

    public function __construct(Personnel $personnel)
    {
        $this->quizzReponses = new ArrayCollection();
        $this->quizzQuestionnaires = new ArrayCollection();
        $this->setAuteur($personnel);
        $this->qualiteSectionQuestions = new ArrayCollection();
        $this->questionsEnfants = new ArrayCollection();
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
     * @return Collection|QuestionnaireReponse[]
     */
    public function getQuizzReponses(): Collection
    {
        return $this->quizzReponses;
    }

    public function addQuizzReponse(QuestionnaireReponse $quizzReponse): self
    {
        if (!$this->quizzReponses->contains($quizzReponse)) {
            $this->quizzReponses[] = $quizzReponse;
            $quizzReponse->setQuestion($this);
        }

        return $this;
    }

    public function removeQuizzReponse(QuestionnaireReponse $quizzReponse): self
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
     * @return Collection|QuestionnaireSectionQuestion[]
     */
    public function getQualiteSectionQuestions(): Collection
    {
        return $this->qualiteSectionQuestions;
    }

    public function addQualiteSectionQuestion(QuestionnaireSectionQuestion $qualiteSectionQuestion): self
    {
        if (!$this->qualiteSectionQuestions->contains($qualiteSectionQuestion)) {
            $this->qualiteSectionQuestions[] = $qualiteSectionQuestion;
            $qualiteSectionQuestion->setQuestion($this);
        }

        return $this;
    }

    public function removeQualiteSectionQuestion(QuestionnaireSectionQuestion $qualiteSectionQuestion): self
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
    public function getQuestionsEnfants(): Collection
    {
        return $this->questionsEnfants;
    }

    public function addQuestionEnfant(self $quizzQuestion): self
    {
        if (!$this->questionsEnfants->contains($quizzQuestion)) {
            $this->questionsEnfants[] = $quizzQuestion;
            $quizzQuestion->setQuestionParent($this);
        }

        return $this;
    }

    public function removeQuestionEnfant(self $quizzQuestion): self
    {
        if ($this->questionsEnfants->contains($quizzQuestion)) {
            $this->questionsEnfants->removeElement($quizzQuestion);
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

    public function getCle($config = '')
    {
        if ('' !== $config && null !== $config) {
        } else {
            return 'quizz_question_reponses_q' . $this->getId();
        }
    }

    public function getAlignement(): ?string
    {
        return '' === $this->alignement ? 'HORIZONTAL_CENTER' : $this->alignement;
    }

    public function setAlignement(string $alignement): self
    {
        $this->alignement = $alignement;

        return $this;
    }

    public function getParametre(): ?array
    {
        if (null !== $this->parametre || '' !== $this->parametre) {
            return json_decode($this->parametre, true);
        }

        return [];
    }

    public function setParametre(?array $parametre): self
    {
        $this->parametre = json_encode($parametre);

        return $this;
    }
}
