<?php
// Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireQuestionnaireSection.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 07/01/2021 13:40

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

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $config;


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

    public function getConfig(): ?string
    {
        return $this->config;
    }

    public function setConfig(?string $config): self
    {
        $this->config = $config;

        return $this;
    }

    public function previs($onglet = 0)
    {
        $t = explode('-', $this->getConfig());
        if (count($t) === 2) {
            if ($onglet === 0) {
                return explode(',', $t[1]);
            }
            $pre = explode(',', $t[1]);
            $tPre = [];
            for ($i = 0; $i < 3; $i++) {
                $key = (int)$onglet * 3 - (3 - $i);
                if (array_key_exists($key, $pre)) {
                    $tPre[] = $pre[$key];
                }
            }

            return $tPre;

        }

        return [];
    }
}
