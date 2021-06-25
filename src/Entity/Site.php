<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Site.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:18
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SiteRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Site extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"sites_administration"})
     */
    private ?string $libelle;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Adresse", cascade={"persist", "remove"})
     * @Groups({"sites_administration"})
     */
    private ?Adresse $adresse;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Ufr", mappedBy="sites")
     */
    private Collection $ufrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Salle", mappedBy="site")
     */
    private Collection $salles;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ufr", mappedBy="sitePrincipal")
     */
    private Collection $ufrPrincipales;

    public function __construct()
    {
        $this->ufrs = new ArrayCollection();
        $this->salles = new ArrayCollection();
        $this->ufrPrincipales = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

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

    /**
     * @return Collection|Salle[]
     */
    public function getSalles(): Collection
    {
        return $this->salles;
    }

    public function addSalle(Salle $salle): self
    {
        if (!$this->salles->contains($salle)) {
            $this->salles[] = $salle;
            $salle->setSite($this);
        }

        return $this;
    }

    public function removeSalle(Salle $salle): self
    {
        if ($this->salles->contains($salle)) {
            $this->salles->removeElement($salle);
            // set the owning side to null (unless already changed)
            if ($salle->getSite() === $this) {
                $salle->setSite(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Ufr[]
     */
    public function getUfrPrincipales(): Collection
    {
        return $this->ufrPrincipales;
    }

    public function addUfrPrincipale(Ufr $ufrPrincipale): self
    {
        if (!$this->ufrPrincipales->contains($ufrPrincipale)) {
            $this->ufrPrincipales[] = $ufrPrincipale;
            $ufrPrincipale->setSitePrincipal($this);
        }

        return $this;
    }

    public function removeUfrPrincipale(Ufr $ufrPrincipale): self
    {
        if ($this->ufrPrincipales->contains($ufrPrincipale)) {
            $this->ufrPrincipales->removeElement($ufrPrincipale);
            // set the owning side to null (unless already changed)
            if ($ufrPrincipale->getSitePrincipal() === $this) {
                $ufrPrincipale->setSitePrincipal(null);
            }
        }

        return $this;
    }
}
