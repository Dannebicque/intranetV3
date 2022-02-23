<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/MessageDestinatairePersonnel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 08:24
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
}
