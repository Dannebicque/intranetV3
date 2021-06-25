<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireSectionQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:04
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireSectionQuestionRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class QuestionnaireSectionQuestion extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireSection", inversedBy="qualiteSectionQuestions")
     */
    private ?QuestionnaireSection $section;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireQuestion", inversedBy="qualiteSectionQuestions")
     */
    private ?QuestionnaireQuestion $question;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $ordre;

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
