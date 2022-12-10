<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnairePersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/05/2022 14:37
 */

namespace App\Entity;

use App\Repository\QuestionnairePersonnelRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnairePersonnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated */
class QuestionnairePersonnel extends QuestionnaireUserAbstract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private mixed $id;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'quizzPersonnels')]
    private ?Personnel $personnel = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnairePersonnelReponse>
     */
    #[ORM\OneToMany(mappedBy: 'questionnairePersonnel', targetEntity: QuestionnairePersonnelReponse::class, cascade: [
        'persist',
        'remove',
    ])]
    private Collection $questionnairePersonnelReponses;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function __construct(Personnel $personnel, QuestionnaireQuizz|QuestionnaireQualite $questionnaire, ?string $typeQuestionnaire)
    {
        parent::__construct($questionnaire, $typeQuestionnaire);
        $this->setPersonnel($personnel);
        $this->questionnairePersonnelReponses = new ArrayCollection();
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return Collection|QuestionnairePersonnelReponse[]
     */
    public function getQuestionnairePersonnelReponses(): Collection
    {
        return $this->questionnairePersonnelReponses;
    }

    public function addQuestionnairePersonnelReponse(QuestionnairePersonnelReponse $quizzPersonnelReponse): self
    {
        if (!$this->questionnairePersonnelReponses->contains($quizzPersonnelReponse)) {
            $this->questionnairePersonnelReponses[] = $quizzPersonnelReponse;
            $quizzPersonnelReponse->setQuestionnairePersonnel($this);
        }

        return $this;
    }

    public function removeQuestionnairePersonnelReponse(QuestionnairePersonnelReponse $quizzPersonnelReponse): self
    {
        if ($this->questionnairePersonnelReponses->contains($quizzPersonnelReponse)) {
            $this->questionnairePersonnelReponses->removeElement($quizzPersonnelReponse);
            // set the owning side to null (unless already changed)
            if ($quizzPersonnelReponse->getQuestionnairePersonnel() === $this) {
                $quizzPersonnelReponse->setQuestionnairePersonnel(null);
            }
        }

        return $this;
    }
}
