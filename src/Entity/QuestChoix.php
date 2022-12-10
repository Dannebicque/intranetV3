<?php

namespace App\Entity;

use App\Components\Questionnaire\Interfaces\QuestChoixInterface;
use App\Entity\Traits\LifeCycleTrait;
use App\Repository\QuestChoixRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestChoixRepository::class)]
#[ORM\HasLifecycleCallbacks]
class QuestChoix extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(length: 255)]
    private ?string $valeur = null;

    #[ORM\Column(length: 20)]
    private ?string $typeDestinataire = null;

    #[ORM\Column]
    private ?int $idQuestChoix = null;

    #[ORM\ManyToOne(inversedBy: 'questChoixes')]
    private ?QuestQuestion $question = null;

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(string $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getTypeDestinataire(): ?string
    {
        return $this->typeDestinataire;
    }

    public function setTypeDestinataire(string $type_destinataire): self
    {
        $this->typeDestinataire = $type_destinataire;

        return $this;
    }

    public function getIdQuestChoix(): ?int
    {
        return $this->idQuestChoix;
    }

    public function setIdQuestChoix(int $idQuestChoix): self
    {
        $this->idQuestChoix = $idQuestChoix;

        return $this;
    }

    public function getQuestion(): ?QuestQuestion
    {
        return $this->question;
    }

    public function setQuestion(?QuestQuestion $question): self
    {
        $this->question = $question;

        return $this;
    }
}
