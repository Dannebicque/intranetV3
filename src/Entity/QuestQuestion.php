<?php

namespace App\Entity;

use App\Entity\Traits\ConfigTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestQuestionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestQuestionRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestQuestion extends BaseEntity
{
    use LifeCycleTrait;
    use ConfigTrait;

    #[ORM\ManyToOne(inversedBy: 'questQuestions')]
    private ?QuestSection $section = null;

    #[ORM\OneToMany(mappedBy: 'question', targetEntity: QuestReponse::class)]
    private Collection $questReponses;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $help = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $type;

    #[ORM\ManyToOne(targetEntity: QuestQuestion::class, inversedBy: 'questionsEnfants')]
    private ?QuestQuestion $questionParent = null;

    #[ORM\OneToMany(mappedBy: 'questionParent', targetEntity: QuestQuestion::class)]
    private Collection $questionsEnfants;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $obligatoire = true;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $parametre = '[]';

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $ordre = null;

    #[ORM\OneToMany(mappedBy: 'question', targetEntity: QuestChoix::class)]
    private Collection $questChoixes;

    public function __construct()
    {
        $this->questReponses = new ArrayCollection();
        $this->questionsEnfants = new ArrayCollection();
        $this->type = 'text'; //todo: comment gére ? Enum?
        $this->questChoixes = new ArrayCollection();
    }

    public function getSection(): ?QuestSection
    {
        return $this->section;
    }

    public function setSection(?QuestSection $section): self
    {
        $this->section = $section;

        return $this;
    }

    /**
     * @return Collection<int, QuestReponse>
     */
    public function getQuestReponses(): Collection
    {
        return $this->questReponses;
    }

    public function addQuestReponse(QuestReponse $questReponse): self
    {
        if (!$this->questReponses->contains($questReponse)) {
            $this->questReponses->add($questReponse);
            $questReponse->setQuestion($this);
        }

        return $this;
    }

    public function removeQuestReponse(QuestReponse $questReponse): self
    {
        if ($this->questReponses->removeElement($questReponse)) {
            // set the owning side to null (unless already changed)
            if ($questReponse->getQuestion() === $this) {
                $questReponse->setQuestion(null);
            }
        }

        return $this;
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

    public function setHelp(?string $help): self
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

    public function isObligatoire(): ?bool
    {
        return $this->obligatoire;
    }

    public function setObligatoire(bool $obligatoire): self
    {
        $this->obligatoire = $obligatoire;

        return $this;
    }

    public function getParametre(): ?array
    {
        return json_decode($this->parametre, true);
    }

    public function setParametre(?array $parametres): self
    {
        $this->parametre = json_encode($parametres);

        return $this;
    }

    public function getConfiguration(): ?string
    {
        return $this->configuration;
    }

    public function setConfiguration(?string $configuration): self
    {
        $this->configuration = $configuration;

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
     * @return Collection<int, QuestQuestion>
     */
    public function getQuestionsEnfants(): Collection
    {
        return $this->questionsEnfants;
    }

    public function addQuestionsEnfant(QuestQuestion $questionsEnfant): self
    {
        if (!$this->questionsEnfants->contains($questionsEnfant)) {
            $this->questionsEnfants->add($questionsEnfant);
            $questionsEnfant->setQuestionParent($this);
        }

        return $this;
    }

    public function removeQuestionsEnfant(QuestQuestion $questionsEnfant): self
    {
        if ($this->questionsEnfants->removeElement($questionsEnfant)) {
            // set the owning side to null (unless already changed)
            if ($questionsEnfant->getQuestionParent() === $this) {
                $questionsEnfant->setQuestionParent(null);
            }
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

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function getCle(?string $config = ''): string
    {
        if (!('' !== $config && null !== $config)) {
            if ($this->type === TypeLibre::class) {
                return 'question_text_q' . $this->getId();
            }

            return 'question_reponses_q' . $this->getId();
        }

        return '';
    }

    /**
     * @return Collection<int, QuestChoix>
     */
    public function getQuestChoixes(): Collection
    {
        return $this->questChoixes;
    }

    public function addQuestChoix(QuestChoix $questChoix): self
    {
        if (!$this->questChoixes->contains($questChoix)) {
            $this->questChoixes->add($questChoix);
            $questChoix->setQuestion($this);
        }

        return $this;
    }

    public function removeQuestChoix(QuestChoix $questChoix): self
    {
        if ($this->questChoixes->removeElement($questChoix)) {
            // set the owning side to null (unless already changed)
            if ($questChoix->getQuestion() === $this) {
                $questChoix->setQuestion(null);
            }
        }

        return $this;
    }
}
