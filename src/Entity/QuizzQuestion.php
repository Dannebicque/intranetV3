<?php
/**
 * Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/QuizzQuestion.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 09/11/2019 10:16
 * @lastUpdate 09/11/2019 10:08
 */

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
     * @ORM\Column(type="string", length=255)
     */
    private $help;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $type;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuizzReponse", mappedBy="question")
     */
    private $quizzReponses;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\QuizzQuestionnaire", mappedBy="questions")
     */
    private $quizzQuestionnaires;

    public function __construct()
    {
        $this->quizzReponses = new ArrayCollection();
        $this->quizzQuestionnaires = new ArrayCollection();
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
}
