<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Message.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2023 09:48
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\MessageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Message extends BaseEntity
{
    use LifeCycleTrait;

    final public const ETAT_MESSAGE_DRAFT = 'D';
    final public const ETAT_MESSAGE_ENVOYE = 'E';
    final public const MESSAGE_TYPE_ETUDIANT = 'e';
    final public const MESSAGE_TYPE_SEMESTRE = 's';
    final public const MESSAGE_TYPE_GROUPE = 'g';
    final public const MESSAGE_TYPE_MATIERE = 'm';
    final public const MESSAGE_TYPE_PERMANENT = 'p';

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $sujet = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $message = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $important = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class, fetch: 'EAGER', inversedBy: 'messages')]
    private ?Personnel $expediteur = null;

    /**
     * @var Collection<int, MessageDestinataire>
     */
    #[ORM\OneToMany(mappedBy: 'message', targetEntity: MessageDestinataire::class)]
    private Collection $messageDestinataires;

    /**
     * @var Collection<int, MessagePieceJointe>
     */
    #[ORM\OneToMany(mappedBy: 'message', targetEntity: MessagePieceJointe::class, fetch: 'EAGER')]
    private Collection $messagePieceJointes;

    #[ORM\Column(type: Types::STRING, length: 1)]
    private string $etat = self::ETAT_MESSAGE_DRAFT;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $typeDestinataires = null;

    #[ORM\Column(type: Types::STRING, length: 1)]
    private ?string $type = null;

    public function __construct()
    {
        $this->messageDestinataires = new ArrayCollection();
        $this->messagePieceJointes = new ArrayCollection();
    }

    public function getSujet(): ?string
    {
        return $this->sujet;
    }

    public function setSujet(string $sujet): self
    {
        $this->sujet = $sujet;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getImportant(): ?bool
    {
        return $this->important;
    }

    public function setImportant(bool $important): self
    {
        $this->important = $important;

        return $this;
    }

    public function getExpediteur(): ?Personnel
    {
        return $this->expediteur;
    }

    public function setExpediteur(?Personnel $expediteur): self
    {
        $this->expediteur = $expediteur;

        return $this;
    }

    /**
     * @return Collection|MessageDestinataire[]
     */
    public function getMessageDestinataires(): Collection
    {
        return $this->messageDestinataires;
    }

    public function addMessageDestinataire(MessageDestinataire $messageDestinataire): self
    {
        if (!$this->messageDestinataires->contains($messageDestinataire)) {
            $this->messageDestinataires[] = $messageDestinataire;
            $messageDestinataire->setMessage($this);
        }

        return $this;
    }

    public function removeMessageDestinataire(MessageDestinataire $messageDestinataire): self
    {
        if ($this->messageDestinataires->contains($messageDestinataire)) {
            $this->messageDestinataires->removeElement($messageDestinataire);
            // set the owning side to null (unless already changed)
            if ($messageDestinataire->getMessage() === $this) {
                $messageDestinataire->setMessage(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|MessagePieceJointe[]
     */
    public function getMessagePieceJointes(): Collection
    {
        return $this->messagePieceJointes;
    }

    public function addMessagePieceJointe(MessagePieceJointe $messagePieceJointe): self
    {
        if (!$this->messagePieceJointes->contains($messagePieceJointe)) {
            $this->messagePieceJointes[] = $messagePieceJointe;
            $messagePieceJointe->setMessage($this);
        }

        return $this;
    }

    public function removeMessagePieceJointe(MessagePieceJointe $messagePieceJointe): self
    {
        if ($this->messagePieceJointes->contains($messagePieceJointe)) {
            $this->messagePieceJointes->removeElement($messagePieceJointe);
            // set the owning side to null (unless already changed)
            if ($messagePieceJointe->getMessage() === $this) {
                $messagePieceJointe->setMessage(null);
            }
        }

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getTypeDestinataires(): ?string
    {
        return $this->typeDestinataires;
    }

    public function setTypeDestinataires(string $typeDestinataires): self
    {
        $this->typeDestinataires = $typeDestinataires;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }
}
