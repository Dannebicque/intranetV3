<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireQuestionTag.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 11:21
 */

namespace App\Entity;

use App\Repository\QuestionnaireQuestionTagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireQuestionTagRepository::class)]
/** @deprecated */
class QuestionnaireQuestionTag extends BaseEntity
{
    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\QuestionnaireQuestion>
     */
    #[ORM\ManyToMany(targetEntity: QuestionnaireQuestion::class, inversedBy: 'questionnaireQuestionTags')]
    private Collection $question;

    public function __construct()
    {
        $this->question = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return Collection|QuestionnaireQuestion[]
     */
    public function getQuestion(): Collection
    {
        return $this->question;
    }

    public function addQuestion(QuestionnaireQuestion $question): self
    {
        if (!$this->question->contains($question)) {
            $this->question[] = $question;
        }

        return $this;
    }

    public function removeQuestion(QuestionnaireQuestion $question): self
    {
        $this->question->removeElement($question);

        return $this;
    }
}
