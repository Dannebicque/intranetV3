<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QualiteSectionRepository")
 */
class QualiteSection extends BaseEntity
{


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titre;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textExplicatif;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QualiteSectionQuestion", mappedBy="section", fetch="EAGER")
     * @ORM\OrderBy({"ordre"="ASC"})
     */
    private $qualiteSectionQuestions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QualiteQuestionnaireSection", mappedBy="section")
     */
    private $qualiteQuestionnaireSections;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $config;

    public function __construct()
    {
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
            $qualiteSectionQuestion->setSection($this);
        }

        return $this;
    }

    public function removeQualiteSectionQuestion(QualiteSectionQuestion $qualiteSectionQuestion): self
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
     * @return Collection|QualiteQuestionnaireSection[]
     */
    public function getQualiteQuestionnaireSections(): Collection
    {
        return $this->qualiteQuestionnaireSections;
    }

    public function addQualiteQuestionnaireSection(QualiteQuestionnaireSection $qualiteQuestionnaireSection): self
    {
        if (!$this->qualiteQuestionnaireSections->contains($qualiteQuestionnaireSection)) {
            $this->qualiteQuestionnaireSections[] = $qualiteQuestionnaireSection;
            $qualiteQuestionnaireSection->setSection($this);
        }

        return $this;
    }

    public function removeQualiteQuestionnaireSection(QualiteQuestionnaireSection $qualiteQuestionnaireSection): self
    {
        if ($this->qualiteQuestionnaireSections->contains($qualiteQuestionnaireSection)) {
            $this->qualiteQuestionnaireSections->removeElement($qualiteQuestionnaireSection);
            // set the owning side to null (unless already changed)
            if ($qualiteQuestionnaireSection->getSection() === $this) {
                $qualiteQuestionnaireSection->setSection(null);
            }
        }

        return $this;
    }

    public function previs()
    {
        $t = explode('-', $this->getConfig());
        if (count($t) === 2) {
            return explode(',', $t[1]);
        }

        return [];
    }

    public function getConfig(): ?string
    {
        return $this->config;
    }

    public function setConfig(?string $config): self
    {
        $this->config = $config;

        return $this;
    }
}
