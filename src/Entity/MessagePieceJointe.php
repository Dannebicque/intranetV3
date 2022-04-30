<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/MessagePieceJointe.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 11:05
 */

namespace App\Entity;

use App\Repository\MessagePieceJointeRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessagePieceJointeRepository::class)]
class MessagePieceJointe extends BaseEntity
{
    #[ORM\ManyToOne(targetEntity: Message::class, inversedBy: 'messagePieceJointes')]
    private ?Message $message = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 50)]
    private ?string $fichier = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 5)]
    private ?string $extension = null;

    public function getMessage(): ?Message
    {
        return $this->message;
    }

    public function setMessage(?Message $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getFichier(): ?string
    {
        return $this->fichier;
    }

    public function setFichier(string $fichier): self
    {
        $this->fichier = $fichier;

        return $this;
    }

    public function getExtension(): ?string
    {
        return $this->extension;
    }

    public function setExtension(string $extension): self
    {
        $this->extension = $extension;

        return $this;
    }
}
