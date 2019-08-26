<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Configuration.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 6/24/18 9:09 PM
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

    /**
     * @return null|string
     */
    public function getCle(): ?string
    {
        return $this->cle;
    }

    /**
     * @param string $cle
     *
     * @return Configuration
     */
    public function setCle(string $cle): self
    {
        $this->cle = $cle;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    /**
     * @param string $valeur
     *
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
}
