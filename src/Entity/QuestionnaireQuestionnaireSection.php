<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireQuestionnaireSection.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 23/11/2020 17:55

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireQuestionnaireSectionRepository")
 */
class QuestionnaireQuestionnaireSection extends BaseEntity
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuestionnaireQualite", inversedBy="sections")
     */
    private $questionnaireQualite;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuestionnaireQuizz", inversedBy="sections")
     */
    private $questionnaireQuizz;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireSection", inversedBy="qualiteQuestionnaireSections")
     */
    private $section;

    /**
     * @ORM\Column(type="integer")
     */
    private $ordre;


    public function getSection(): ?QuestionnaireSection
    {
        return $this->section;
    }

    public function setSection(QuestionnaireSection $section): self
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
