<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SiteRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Site extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist", "remove"})
     */
    private $adresse;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Ufr", mappedBy="sites")
     */
    private $ufrs;

    public function __construct()
    {
        $this->ufrs = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getAdresse(): ?Adresse
    {
        return $this->adresse;
    }

    public function setAdresse(?Adresse $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * @return Collection|Ufr[]
     */
    public function getUfrs(): Collection
    {
        return $this->ufrs;
    }

    public function addUfr(Ufr $ufr): self
    {
        if (!$this->ufrs->contains($ufr)) {
            $this->ufrs[] = $ufr;
            $ufr->addSite($this);
        }

        return $this;
    }

    public function removeUfr(Ufr $ufr): self
    {
        if ($this->ufrs->contains($ufr)) {
            $this->ufrs->removeElement($ufr);
            $ufr->removeSite($this);
        }

        return $this;
    }


}
