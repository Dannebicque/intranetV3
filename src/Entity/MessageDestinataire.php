<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/MessageDestinataire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:21
 */

namespace App\Entity;

use App\Repository\MessageDestinataireRepository;
use Carbon\CarbonInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * MessageDestinataire.
 */
#[ORM\Table]
#[ORM\Entity(repositoryClass: MessageDestinataireRepository::class)]
#[ORM\InheritanceType(value: 'SINGLE_TABLE')]
#[ORM\DiscriminatorColumn(name: 'typeDestinataire', type: 'string')]
#[ORM\DiscriminatorMap(value: [
    'personnel' => MessageDestinatairePersonnel::class,
    'etudiant' => MessageDestinataireEtudiant::class,
])]
abstract class MessageDestinataire extends BaseEntity
{
    public const UNREAD = 'U';
    public const READ = 'R';
    public const STARRED = 'S';
    public const DELETED = 'D';

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateLu = null;

    #[ORM\Column(type: Types::STRING, length: 1)]
    private string $etat = self::UNREAD;

    #[ORM\ManyToOne(targetEntity: Message::class, fetch: 'EAGER', inversedBy: 'messageDestinataires')]
    private ?Message $message = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $starred = false;

    public function getDateLu(): ?CarbonInterface
    {
        return $this->dateLu;
    }

    public function setDateLu(CarbonInterface $dateLu): self
    {
        $this->dateLu = $dateLu;

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

    public function getMessage(): ?Message
    {
        return $this->message;
    }

    public function setMessage(?Message $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getStarred(): ?bool
    {
        return $this->starred;
    }

    public function setStarred(bool $starred): self
    {
        $this->starred = $starred;

        return $this;
    }
}
