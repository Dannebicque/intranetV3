<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/MessageDestinataire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 28/06/2021 21:12
 */

namespace App\Entity;

use Carbon\CarbonInterface;
use Doctrine\ORM\Mapping as ORM;

/**
 * MessageDestinataire.
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="App\Repository\MessageDestinataireRepository")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="typeDestinataire", type="string")
 * @ORM\DiscriminatorMap( {"personnel" = "MessageDestinatairePersonnel",
 *                         "etudiant" = "MessageDestinataireEtudiant"} )
 */
abstract class MessageDestinataire extends BaseEntity
{
    public const UNREAD = 'U';
    public const READ = 'R';
    public const STARRED = 'S';
    public const DELETED = 'D';

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private ?CarbonInterface $dateLu;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private string $etat = self::UNREAD;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Message", inversedBy="messageDestinataires")
     */
    private ?Message $message;

    /**
     * @ORM\Column(type="boolean")
     */
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
