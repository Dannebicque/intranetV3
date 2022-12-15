<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 02/09/2022 18:25
 */

namespace App\Entity;

use App\Components\Questionnaire\TypeQuestion\TypeEchelle;
use App\Components\Questionnaire\TypeQuestion\TypeLibre;
use App\Components\Questionnaire\TypeQuestion\TypeOuiNon;
use App\Components\Questionnaire\TypeQuestion\TypeQcm;
use App\Components\Questionnaire\TypeQuestion\TypeQcu;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestionnaireQuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireQuestionRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated Utiliser QuestQuestion */
class QuestionnaireQuestion extends BaseEntity
{
    use LifeCycleTrait;

    /** @var string A ne pas utiliser. utiliser QuestionnaireRegistry */
    final public const QUESTION_TYPE_QCU = 'qcu';
    final public const QUESTION_TYPE_QCM = 'qcm';
    final public const QUESTION_TYPE_YESNO = 'yesno';
    final public const QUESTION_TYPE_ECHELLE = 'echelle';
    final public const QUESTION_TYPE_LIBRE = 'libre';
    final public const LISTE_TYPE_QUESTION = [
        self::QUESTION_TYPE_ECHELLE => self::QUESTION_TYPE_ECHELLE,
        self::QUESTION_TYPE_LIBRE => self::QUESTION_TYPE_LIBRE,
        self::QUESTION_TYPE_QCM => self::QUESTION_TYPE_QCM,
        self::QUESTION_TYPE_QCU => self::QUESTION_TYPE_QCU,
        self::QUESTION_TYPE_YESNO => self::QUESTION_TYPE_YESNO,
    ];

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $help = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $type = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireReponse>
     */
    #[ORM\OneToMany(mappedBy: 'question', targetEntity: QuestionnaireReponse::class, cascade: [
        'persist',
        'remove',
    ], fetch: 'EAGER')]
    #[ORM\OrderBy(value: ['ordre' => 'ASC'])]
    private Collection $quizzReponses;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'quizzQuestions')]
    private ?Personnel $auteur = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int,\App\Entity\QuestionnaireSectionQuestion>
     */
    #[ORM\OneToMany(mappedBy: 'question', targetEntity: QuestionnaireSectionQuestion::class)]
    private Collection $qualiteSectionQuestions;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQuestion::class, inversedBy: 'questionsEnfants')]
    private ?QuestionnaireQuestion $questionParent = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int,\App\Entity\QuestionnaireQuestion>
     */
    #[ORM\OneToMany(mappedBy: 'questionParent', targetEntity: QuestionnaireQuestion::class)]
    private Collection $questionsEnfants;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $obligatoire = true;

    #[ORM\Column(type: Types::STRING, length: 30)]
    private string $alignement = 'HORIZONTAL_CENTER';

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $parametre = '[]';

    #[ORM\Column(type: Types::INTEGER, nullable: true)]
    private ?int $maxChoix = 1;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $configuration = '[]';

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\QuestionnaireQuestionTag>
     */
    #[ORM\ManyToMany(targetEntity: QuestionnaireQuestionTag::class, mappedBy: 'question', cascade: ['persist'])]
    private Collection $questionnaireQuestionTags;

    #[ORM\ManyToOne]
    private ?Departement $departement = null;

    public function __construct(Personnel $personnel)
    {
        $this->quizzReponses = new ArrayCollection();
        $this->setAuteur($personnel);
        $this->qualiteSectionQuestions = new ArrayCollection();
        $this->questionsEnfants = new ArrayCollection();
        $this->questionnaireQuestionTags = new ArrayCollection();
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
     *
     * @deprecated
     */
    public function getQuizzReponses(): Collection
    {
        return $this->quizzReponses;
    }

    public function getReponses(): Collection
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

    public function getQuestionParent(): ?self
    {
        return $this->questionParent;
    }

    public function setQuestionParent(?self $questionParent): self
    {
        $this->questionParent = $questionParent;

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

    public function getCle(?string $config = ''): string
    {
        if (!('' !== $config && null !== $config)) {
            if ($this->type === TypeLibre::class) {
                return 'quizz_question_text_q' . $this->getId();
            }

            return 'quizz_question_reponses_q' . $this->getId();
        }

        return '';
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
        if (null !== $this->parametre) {
            return json_decode($this->parametre, true, 512, JSON_THROW_ON_ERROR);
        }

        return [];
    }

    public function setParametre(?array $parametre): self
    {
        $this->parametre = json_encode($parametre, JSON_THROW_ON_ERROR);

        return $this;
    }

    /** @deprecated */
    public function getTypeQuestion(): string
    {
        $t = [
            self::QUESTION_TYPE_QCU => TypeQcu::class,
            self::QUESTION_TYPE_QCM => TypeQcm::class,
            self::QUESTION_TYPE_YESNO => TypeOuiNon::class,
            self::QUESTION_TYPE_ECHELLE => TypeEchelle::class,
            self::QUESTION_TYPE_LIBRE => TypeLibre::class,
        ];

        return $t[$this->type];
    }

    public function getMaxChoix(): int
    {
        return $this->maxChoix;
    }

    public function setMaxChoix(int $maxChoix = 1): self
    {
        $this->maxChoix = $maxChoix;

        return $this;
    }

    public function getConfiguration(): ?array
    {
        if (null !== $this->configuration && '' !== $this->configuration) {
            return json_decode($this->configuration, true, 512, JSON_THROW_ON_ERROR);
        }

        return [];
    }

    public function setConfiguration(?array $configuration): self
    {
        $this->configuration = json_encode($configuration, JSON_THROW_ON_ERROR);

        return $this;
    }

    /**
     * @return Collection|QuestionnaireQuestionTag[]
     */
    public function getQuestionnaireQuestionTags(): Collection
    {
        return $this->questionnaireQuestionTags;
    }

    public function addQuestionnaireQuestionTag(QuestionnaireQuestionTag $questionnaireQuestionTag): self
    {
        if (!$this->questionnaireQuestionTags->contains($questionnaireQuestionTag)) {
            $this->questionnaireQuestionTags->add($questionnaireQuestionTag);
            $questionnaireQuestionTag->addQuestion($this);
        }

        return $this;
    }

    public function removeQuestionnaireQuestionTag(QuestionnaireQuestionTag $questionnaireQuestionTag): self
    {
        if ($this->questionnaireQuestionTags->removeElement($questionnaireQuestionTag)) {
            $questionnaireQuestionTag->removeQuestion($this);
        }

        return $this;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }
}
