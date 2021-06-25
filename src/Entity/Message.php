<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Message.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 08:20
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MessageRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Message extends BaseEntity
{
    use LifeCycleTrait;

    public const ETAT_MESSAGE_DRAFT = 'D';
    public const ETAT_MESSAGE_ENVOYE = 'E';

    public const MESSAGE_TYPE_ETUDIANT = 'e';
    public const MESSAGE_TYPE_SEMESTRE = 's';
    public const MESSAGE_TYPE_GROUPE = 'g';
    public const MESSAGE_TYPE_PERMANENT = 'p';

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $sujet;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $message;

    /**
     * @ORM\Column(type="boolean")
     */
    private ?bool $important;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="messages")
     */
    private ?Personnel $expediteur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MessageDestinataire", mappedBy="message")
     */
    private Collection $messageDestinataires;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MessagePieceJointe", mappedBy="message")
     */
    private Collection $messagePieceJointes;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private string $etat = self::ETAT_MESSAGE_DRAFT;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $typeDestinataires;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private ?string $type;

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
