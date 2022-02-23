<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/QuestionnaireEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 27/07/2021 10:37
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestionnaireEtudiantRepository;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireEtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestionnaireEtudiant extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'quizzEtudiants')]
    private ?Etudiant $etudiant = null;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQualite::class)]
    private ?QuestionnaireQualite $questionnaireQualite = null;

    #[ORM\ManyToOne(targetEntity: QuestionnaireQuizz::class)]
    private ?QuestionnaireQuizz $questionnaireQuizz = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $termine = false;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireEtudiantReponse>
     */
    #[ORM\OneToMany(mappedBy: 'questionnaireEtudiant', targetEntity: QuestionnaireEtudiantReponse::class, cascade: [
        'persist',
        'remove',
    ])]
    private Collection $questionnaireEtudiantReponses;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateTermine = null;

    public function __construct(Etudiant $etudiant, QuestionnaireQuizz | QuestionnaireQualite $questionnaire, ?string $typeQuestionnaire)
    {
        $this->setEtudiant($etudiant);
        switch ($typeQuestionnaire) {
            case 'quizz':
                $this->setQuestionnaireQuizz($questionnaire);
                break;
            case 'qualite':
                $this->setQuestionnaireQualite($questionnaire);
                break;
        }

        $this->questionnaireEtudiantReponses = new ArrayCollection();
    }

    public function getEtudiant(): ?Etudiant
    {
        return $this->etudiant;
    }

    public function setEtudiant(?Etudiant $etudiant): self
    {
        $this->etudiant = $etudiant;

        return $this;
    }

    public function getTermine(): ?bool
    {
        return $this->termine;
    }

    public function setTermine(bool $termine): self
    {
        $this->termine = $termine;

        return $this;
    }

    /**
     * @return Collection|QuestionnaireEtudiantReponse[]
     */
    public function getQuestionnaireEtudiantReponses(): Collection
    {
        return $this->questionnaireEtudiantReponses;
    }

    public function addQuestionnaireEtudiantReponse(QuestionnaireEtudiantReponse $quizzEtudiantReponse): self
    {
        if (!$this->questionnaireEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->questionnaireEtudiantReponses[] = $quizzEtudiantReponse;
            $quizzEtudiantReponse->setQuestionnaireEtudiant($this);
        }

        return $this;
    }

    public function removeQuestionnaireEtudiantReponse(QuestionnaireEtudiantReponse $quizzEtudiantReponse): self
    {
        if ($this->questionnaireEtudiantReponses->contains($quizzEtudiantReponse)) {
            $this->questionnaireEtudiantReponses->removeElement($quizzEtudiantReponse);
            // set the owning side to null (unless already changed)
            if ($quizzEtudiantReponse->getQuestionnaireEtudiant() === $this) {
                $quizzEtudiantReponse->setQuestionnaireEtudiant(null);
            }
        }

        return $this;
    }

    public function getDateTermine(): ?CarbonInterface
    {
        return $this->dateTermine;
    }

    public function setDateTermine(?CarbonInterface $dateTermine): self
    {
        $this->dateTermine = $dateTermine;

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
