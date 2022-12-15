<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/05/2022 21:47
 */

namespace App\Entity;

use App\Entity\Traits\ConfigTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestionnaireSectionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireSectionRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated Utiliser QuestSection */
class QuestionnaireSection extends BaseEntity
{
    use LifeCycleTrait;
    use ConfigTrait;

    final public const DETAIL = 'DETAIL';
    final public const GROUPE = 'GROUPE';

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $titre = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $textExplicatif = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireSectionQuestion>
     */
    #[ORM\OneToMany(mappedBy: 'section', targetEntity: QuestionnaireSectionQuestion::class, cascade: ['persist', 'remove'])]
    #[ORM\OrderBy(value: ['ordre' => 'ASC'])]
    private Collection $qualiteSectionQuestions;

    // todo: éventuellement faire une vraie requete ? pour éviter de multiplier les requetes
    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireQuestionnaireSection>
     */
    #[ORM\OneToMany(mappedBy: 'section', targetEntity: QuestionnaireQuestionnaireSection::class)]
    private Collection $qualiteQuestionnaireSections;

    #[ORM\Column(type: Types::STRING, length: 10, nullable: true)]
    private string $typeCalcul;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $typeSection = null;

    #[ORM\ManyToOne]
    private ?Departement $departement = null;

    public function __construct()
    {
        $this->typeCalcul = self::DETAIL;
        $this->qualiteSectionQuestions = new ArrayCollection();
        $this->qualiteQuestionnaireSections = new ArrayCollection();
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
            $qualiteSectionQuestion->setSection($this);
        }

        return $this;
    }

    public function removeQualiteSectionQuestion(QuestionnaireSectionQuestion $qualiteSectionQuestion): self
    {
        if ($this->qualiteSectionQuestions->contains($qualiteSectionQuestion)) {
            $this->qualiteSectionQuestions->removeElement($qualiteSectionQuestion);
            // set the owning side to null (unless already changed)
            if ($qualiteSectionQuestion->getSection() === $this) {
                $qualiteSectionQuestion->setSection(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|QuestionnaireQuestionnaireSection[]
     */
    public function getQualiteQuestionnaireSections(): Collection
    {
        return $this->qualiteQuestionnaireSections;
    }

    public function addQualiteQuestionnaireSection(QuestionnaireQuestionnaireSection $qualiteQuestionnaireSection): self
    {
        if (!$this->qualiteQuestionnaireSections->contains($qualiteQuestionnaireSection)) {
            $this->qualiteQuestionnaireSections[] = $qualiteQuestionnaireSection;
            $qualiteQuestionnaireSection->setSection($this);
        }

        return $this;
    }

    public function removeQualiteQuestionnaireSection(QuestionnaireQuestionnaireSection $qualiteQuestionnaireSection
    ): self {
        if ($this->qualiteQuestionnaireSections->contains($qualiteQuestionnaireSection)) {
            $this->qualiteQuestionnaireSections->removeElement($qualiteQuestionnaireSection);
            // set the owning side to null (unless already changed)
            if ($qualiteQuestionnaireSection->getSection() === $this) {
                $qualiteQuestionnaireSection->setSection(null);
            }
        }

        return $this;
    }

    public function getTypeCalcul(): ?string
    {
        return $this->typeCalcul;
    }

    public function setTypeCalcul(string $typeCalcul): self
    {
        $this->typeCalcul = $typeCalcul;

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
