<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Bac.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BacRepository")
 */
class Bac extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=30)
     * @Groups({"bac_administration"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"bac_administration"})
     */
    private $libelleLong;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     */
    private $code_apogee;

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getLibelleLong(): ?string
    {
        return $this->libelleLong;
    }

    public function setLibelleLong(string $libelleLong): self
    {
        $this->libelleLong = $libelleLong;

        return $this;
    }

    public function getCodeApogee(): ?string
    {
        return $this->code_apogee;
    }

    public function setCodeApogee(?string $code_apogee): self
    {
        $this->code_apogee = $code_apogee;

        return $this;
    }
}
