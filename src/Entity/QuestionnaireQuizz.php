<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireQuizz.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\QuestionnaireQuizzRepository")
 */
class QuestionnaireQuizz extends Questionnaire
{
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\QuestionnaireQuestionnaireSection", mappedBy="questionnaireQuizz")
     */
    private $sections;

    public function __construct()
    {
        parent::__construct();
        $this->sections = new ArrayCollection();
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
            $section->setQuestionnaireQuizz($this);
        }

        return $this;
    }

    public function removeSection(QuestionnaireQuestionnaireSection $section): self
    {
        if ($this->sections->contains($section)) {
            $this->sections->removeElement($section);
            // set the owning side to null (unless already changed)
            if ($section->getQuestionnaireQuizz() === $this) {
                $section->setQuestionnaireQuizz(null);
            }
        }

        return $this;
    }
}
