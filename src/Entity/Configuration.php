<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Configuration.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConfigurationRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Configuration extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"configuration_administration"})
     */
    private $cle;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"configuration_administration"})
     */
    private $valeur;

    /**
     * @ORM\Column(type="string", length=1)
     */
    private $type = 'T';

    public function getCle(): ?string
    {
        return $this->cle;
    }

    /**
     * @return Configuration
     */
    public function setCle(string $cle): self
    {
        $this->cle = $cle;

        return $this;
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    /**
     * @return Configuration
     */
    public function setValeur(string $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getTypeLong(): string
    {
        return 'T' === $this->type ? 'Texte' : 'Fichier';
    }
}
