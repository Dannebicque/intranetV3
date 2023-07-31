<?php
/*
 * Copyright (c) 2023. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/MessageDestinatairePersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 31/07/2023 09:48
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\MessageDestinatairePersonnelRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageDestinatairePersonnelRepository::class)]
#[ORM\HasLifecycleCallbacks]
class MessageDestinatairePersonnel extends MessageDestinataire
{
    use LifeCycleTrait;

    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'messageDestinatairePersonnels')]
    private ?Personnel $personnel = null;

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    public function display(): string
    {
        return $this->getPersonnel()->getDisplay();
    }
}
