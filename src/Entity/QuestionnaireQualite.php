<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireQualite.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 08:52
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireQualiteRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class QuestionnaireQualite extends Questionnaire
{
    use LifeCycleTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="qualiteQuestionnaires")
     */
    private Semestre $semestre;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuestionnaireQuestionnaireSection", mappedBy="questionnaireQualite",
     *                                                                             cascade={"persist", "remove"})
     */
    private Collection $sections;

    public function __construct(Semestre $semestre)
    {
        parent::__construct();
        $this->semestre = $semestre;
        $this->sections = new ArrayCollection();
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    /**
     * @return Collection|QuestionnaireQuestionnaireSection[]
     */
    public function getSections(): Collection
    {
        return $this->sections;
    }

    public function addSection(QuestionnaireQuestionnaireSection $section): self
    {
        if (!$this->sections->contains($section)) {
            $this->sections[] = $section;
            $section->setQuestionnaireQualite($this);
        }

        return $this;
    }

    public function removeSection(QuestionnaireQuestionnaireSection $section): self
    {
        if ($this->sections->contains($section)) {
            $this->sections->removeElement($section);
            // set the owning side to null (unless already changed)
            if ($section->getQuestionnaireQualite() === $this) {
                $section->setQuestionnaireQualite(null);
            }
        }

        return $this;
    }
}
