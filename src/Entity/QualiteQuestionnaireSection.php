<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QualiteQuestionnaireSectionRepository")
 */
class QualiteQuestionnaireSection extends BaseEntity
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QualiteQuestionnaire", inversedBy="qualiteQuestionnaireSections")
     */
    private $questionnaire;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QualiteSection", inversedBy="qualiteQuestionnaireSections",
     *                                                          fetch="EAGER")
     */
    private $section;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordre;

    public function getQuestionnaire(): ?QualiteQuestionnaire
    {
        return $this->questionnaire;
    }

    public function setQuestionnaire(?QualiteQuestionnaire $questionnaire): self
    {
        $this->questionnaire = $questionnaire;

        return $this;
    }

    public function getSection(): ?QualiteSection
    {
        return $this->section;
    }

    public function setSection(QualiteSection $section): self
    {
        $this->section = $section;

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
}
