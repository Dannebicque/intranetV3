<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Message.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MessageRepository")
 */
class Message extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=100)
     */
    private $sujet;

    /**
     * @ORM\Column(type="text")
     */
    private $message;

    /**
     * @ORM\Column(type="boolean")
     */
    private $important;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="messages")
     */
    private $expediteur;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MessageDestinataire", mappedBy="message")
     */
    private $messageDestinataires;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\MessagePieceJointe", mappedBy="message")
     */
    private $messagePieceJointes;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $etat = 'D';

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $typeDestinataires;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $type;

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
