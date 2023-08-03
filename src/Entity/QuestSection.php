<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 03/08/2023 10:03
 */

namespace App\Entity;

use App\Components\Questionnaire\Section\ConfigurableSection;
use App\Components\Questionnaire\Section\EndSection;
use App\Components\Questionnaire\Section\StartSection;
use App\Entity\Traits\ConfigTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestSectionRepository;
use Carbon\Carbon;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestSectionRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestSection extends BaseEntity
{
    use LifeCycleTrait;
    use ConfigTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $textExplicatif = null;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $typeSection = null;

    #[ORM\ManyToOne(inversedBy: 'questSections')]
    private ?QuestQuestionnaire $questionnaire = null;

    #[ORM\OneToMany(mappedBy: 'section', targetEntity: QuestQuestion::class, cascade: ['persist', 'remove'])]
    #[ORM\OrderBy(['ordre' => 'ASC'])]
    private Collection $questQuestions;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $ordre = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $enabled = true;

    public function __construct()
    {
        $this->questQuestions = new ArrayCollection();
    }

    public function __clone(): void
    {
        $this->setCreated(Carbon::now());
        $this->setUpdated(Carbon::now());
    }

    public function getQuestionnaire(): ?QuestQuestionnaire
    {
        return $this->questionnaire;
    }

    public function setQuestionnaire(?QuestQuestionnaire $questionnaire): self
    {
        $this->questionnaire = $questionnaire;

        return $this;
    }

    /**
     * @return Collection<int, QuestQuestion>
     */
    public function getQuestQuestions(): Collection
    {
        return $this->questQuestions;
    }

    public function addQuestQuestion(QuestQuestion $questQuestion): self
    {
        if (!$this->questQuestions->contains($questQuestion)) {
            $this->questQuestions->add($questQuestion);
            $questQuestion->setSection($this);
        }

        return $this;
    }

    public function removeQuestQuestion(QuestQuestion $questQuestion): self
    {
        if ($this->questQuestions->removeElement($questQuestion)) {
            // set the owning side to null (unless already changed)
            if ($questQuestion->getSection() === $this) {
                $questQuestion->setSection(null);
            }
        }

        return $this;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTextExplicatif(): ?string
    {
        return $this->textExplicatif;
    }

    public function setTextExplicatif(?string $textExplicatif): self
    {
        $this->textExplicatif = $textExplicatif;

        return $this;
    }

    public function getTypeSection(): ?string
    {
        return $this->typeSection;
    }

    public function setTypeSection(?string $typeSection): self
    {
        $this->typeSection = $typeSection;

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

    public function isEnabled(): ?bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function typeSectionTexte(): string
    {
        return match ($this->typeSection) {

            ConfigurableSection::class => 'Paramètrable',
            StartSection::class => 'Introduction',
            EndSection::class => 'Fin',
            default => 'Section',
        };
    }
}
