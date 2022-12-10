<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireQuestionnaireSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 11:31
 */

namespace App\Entity;

use App\Entity\Traits\ConfigTrait;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestionnaireQuestionnaireSectionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireQuestionnaireSectionRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated */
class QuestionnaireQuestionnaireSection extends BaseEntity
{
    use LifeCycleTrait;
    use ConfigTrait;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQualite::class, inversedBy: 'sections')]
    private ?QuestionnaireQualite $questionnaireQualite = null;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQuizz::class, inversedBy: 'sections')]
    private ?QuestionnaireQuizz $questionnaireQuizz = null;

    #[ORM\ManyToOne(targetEntity: QuestionnaireSection::class, inversedBy: 'qualiteQuestionnaireSections')]
    private ?QuestionnaireSection $section = null;

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

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): self
    {
        $this->ordre = $ordre;

        return $this;
    }

    public function isEnabled(): bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function getQuestionnaireQualite(): ?QuestionnaireQualite
    {
        return $this->questionnaireQualite;
    }

    public function setQuestionnaireQualite(?QuestionnaireQualite $questionnaireQualite): self
    {
        $this->questionnaireQualite = $questionnaireQualite;

        return $this;
    }

    public function getQuestionnaireQuizz(): ?QuestionnaireQuizz
    {
        return $this->questionnaireQuizz;
    }

    public function setQuestionnaireQuizz(?QuestionnaireQuizz $questionnaireQuizz): self
    {
        $this->questionnaireQuizz = $questionnaireQuizz;

        return $this;
    }
}
