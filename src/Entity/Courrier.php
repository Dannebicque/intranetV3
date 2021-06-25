<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Courrier.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 05/06/2021 18:56
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CourrierRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Courrier extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="text")
     */
    private ?string $texte;

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
