<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireSectionQuestion.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:23
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestionnaireSectionQuestionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireSectionQuestionRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated */
class QuestionnaireSectionQuestion extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: QuestionnaireSection::class, inversedBy: 'qualiteSectionQuestions')]
    private ?QuestionnaireSection $section = null;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQuestion::class, inversedBy: 'qualiteSectionQuestions')]
    private ?QuestionnaireQuestion $question = null;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $ordre = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $enabled = true;

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

    public function getEnabled(): ?bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }
}
