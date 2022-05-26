<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Courrier.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:21
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\CourrierRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CourrierRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Courrier extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $texte = null;

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }
}
