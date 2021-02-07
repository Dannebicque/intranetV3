<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireSectionQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireSectionQuestionRepository")
 */
class QuestionnaireSectionQuestion extends BaseEntity
{
    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireSection", inversedBy="qualiteSectionQuestions")
     */
    private $section;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireQuestion", inversedBy="qualiteSectionQuestions")
     */
    private $question;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordre;

    public function getSection(): ?QuestionnaireSection
    {
        return $this->section;
    }

    public function setSection(?QuestionnaireSection $section): self
    {
        $this->section = $section;

        return $this;
    }

    public function getQuestion(): ?QuestionnaireQuestion
    {
        return $this->question;
    }

    public function setQuestion(?QuestionnaireQuestion $question): self
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
