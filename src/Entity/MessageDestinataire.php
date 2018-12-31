<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * MessageDestinataire
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
    /**
     * @ORM\Column(type="datetime")
     */
    private $dateLu;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $etat;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Message", inversedBy="messageDestinataires")
     */
    private $message;


    public function getDateLu(): ?\DateTimeInterface
    {
        return $this->dateLu;
    }

    public function setDateLu(\DateTimeInterface $dateLu): self
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
}
