<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/MessageDestinatairePersonnel.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 7/4/18 1:06 PM
 */

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
