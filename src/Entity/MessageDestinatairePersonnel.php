<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MessageDestinatairePersonnelRepository")
 */
class MessageDestinatairePersonnel extends MessageDestinataire
{
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="messageDestinatairePersonnels")
     */
    private $personnel;

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }
}
