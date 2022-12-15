<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/QuestionnaireEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/06/2022 09:10
 */

namespace App\Entity;

use App\Repository\QuestionnaireEtudiantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionnaireEtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
/** @deprecated Utiliser QuestQuestionnaireEtudiant' */
class QuestionnaireEtudiant extends QuestionnaireUserAbstract
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: Types::INTEGER)]
    private mixed $id;

    #[ORM\ManyToOne(targetEntity: Etudiant::class, inversedBy: 'quizzEtudiants')]
    private ?Etudiant $etudiant = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireEtudiantReponse>
     */
    #[ORM\OneToMany(mappedBy: 'questionnaireEtudiant', targetEntity: QuestionnaireEtudiantReponse::class, cascade: [
        'persist',
        'remove',
    ])]
    private Collection $questionnaireEtudiantReponses;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function __construct(Etudiant $etudiant, QuestionnaireQuizz|QuestionnaireQualite $questionnaire, ?string $typeQuestionnaire)
    {
        parent::__construct($questionnaire, $typeQuestionnaire);
        $this->setEtudiant($etudiant);
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
}
