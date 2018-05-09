<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ConfigurationRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Configuration extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=50)
     */
    private $cle;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $valeur;

    public function getCle(): ?string
    {
        return $this->cle;
    }

    public function setCle(string $cle): self
    {
        $this->cle = $cle;

        return $this;
    }

    public function getValeur(): ?string
    {
        return $this->valeur;
    }

    public function setValeur(string $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }
}
