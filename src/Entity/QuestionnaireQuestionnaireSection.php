<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireQuestionnaireSection.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 25/06/2021 10:28
 */

namespace App\Entity;

use App\Entity\Traits\ConfigTrait;
use App\Entity\Traits\LifeCycleTrait;
use function array_key_exists;
use function count;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireQuestionnaireSectionRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class QuestionnaireQuestionnaireSection extends BaseEntity
{
    use LifeCycleTrait;
    use ConfigTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuestionnaireQualite", inversedBy="sections")
     */
    private ?QuestionnaireQualite $questionnaireQualite;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\QuestionnaireQuizz", inversedBy="sections")
     */
    private ?QuestionnaireQuizz $questionnaireQuizz;

    /**
     * @ORM\ManyToOne(targetEntity="QuestionnaireSection", inversedBy="qualiteQuestionnaireSections")
     */
    private ?QuestionnaireSection $section;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $ordre;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $enabled = true;

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

    public function previs($onglet = 0): array
    {
        $t = explode('-', $this->getConfig());
        if (2 === count($t)) {
            if (0 === $onglet) {
                return explode(',', $t[1]);
            }
            $pre = explode(',', $t[1]);
            $tPre = [];
            for ($i = 0; $i < 3; ++$i) {
                $key = (int) $onglet * 3 - (3 - $i);
                if (array_key_exists($key, $pre)) {
                    $tPre[] = $pre[$key];
                }
            }

            return $tPre;
        }

        return [];
    }
}
