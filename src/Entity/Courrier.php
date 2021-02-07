<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Courrier.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CourrierRepository")
 */
class Courrier extends BaseEntity
{
    /**
     * @ORM\Column(type="text")
     */
    private $texte;

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    /**
     * @return Courrier
     */
    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }
}
