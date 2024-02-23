<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Site.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\SiteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SiteRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Site extends BaseEntity
{
    use LifeCycleTrait;

    #[Groups(['sites_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[Groups(['sites_administration'])]
    #[ORM\OneToOne(targetEntity: Adresse::class, cascade: ['persist', 'remove'])]
    private ?Adresse $adresse = null;

    #[ORM\ManyToMany(targetEntity: Ufr::class, mappedBy: 'sites')]
    private Collection $ufrs;

    /**
     * @var Collection<int, Salle>
     */
    #[ORM\OneToMany(mappedBy: 'site', targetEntity: Salle::class)]
    private Collection $salles;

    /**
     * @var Collection<int, Ufr>
     */
    #[ORM\OneToMany(mappedBy: 'sitePrincipal', targetEntity: Ufr::class)]
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

    public function setLibelle(?string $libelle): void
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
