<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SalleRepository")
 */
class Salle extends BaseEntity
{
    public const SALLE_TD = 'td';
    public const SALLE_TP = 'tp';
    public const SALLE_AMPHI = 'amphi';
    public const SALLE_INFORMATIQUE = 'info';

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $libelle;

    /**
     * @ORM\Column(type="integer")
     */
    private $capacite = 0;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Site", inversedBy="salles")
     */
    private $site;

    /**
     * @return null|string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param string $libelle
     *
     * @return Salle
     */
    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return int|null
     */
    public function getCapacite(): ?int
    {
        return $this->capacite;
    }

    /**
     * @param int $capacite
     *
     * @return Salle
     */
    public function setCapacite(int $capacite): self
    {
        $this->capacite = $capacite;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @return Salle
     */
    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Site|null
     */
    public function getSite(): ?Site
    {
        return $this->site;
    }

    /**
     * @param Site|null $site
     *
     * @return Salle
     */
    public function setSite(?Site $site): self
    {
        $this->site = $site;

        return $this;
    }
}
