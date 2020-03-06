<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QualiteSectionQuestionRepository")
 */
class QualiteSectionQuestion extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QualiteSection", inversedBy="qualiteSectionQuestions")
     */
    private $section;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuizzQuestion", inversedBy="qualiteSectionQuestions")
     */
    private $question;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordre;


    public function getSection(): ?QualiteSection
    {
        return $this->section;
    }

    public function setSection(?QualiteSection $section): self
    {
        $this->section = $section;

        return $this;
    }

    public function getQuestion(): ?QuizzQuestion
    {
        return $this->question;
    }

    public function setQuestion(?QuizzQuestion $question): self
    {
        $this->question = $question;

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
