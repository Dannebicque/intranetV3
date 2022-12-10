<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireQuizz.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 08:58
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestionnaireQuizzRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JetBrains\PhpStorm\Deprecated;

#[ORM\Entity(repositoryClass: QuestionnaireQuizzRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated Utiliser QuestQuestionnaire */
class QuestionnaireQuizz extends Questionnaire
{
    use LifeCycleTrait;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireQuestionnaireSection>
     */
    #[ORM\OneToMany(mappedBy: 'questionnaireQuizz', targetEntity: QuestionnaireQuestionnaireSection::class)]
    private Collection $sections;

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
