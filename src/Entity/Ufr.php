<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Ufr.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\UfrRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UfrRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Ufr extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @var Collection<int, Departement>
     */
    #[ORM\OneToMany(mappedBy: 'ufr', targetEntity: Departement::class)]
    private Collection $departements;

    #[Groups(['ufr_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\ManyToMany(targetEntity: Site::class, inversedBy: 'ufrs')]
    private Collection $sites;

    #[Groups(['ufr_administration'])]
    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $responsable = null;

    #[ORM\ManyToOne(targetEntity: Site::class, inversedBy: 'ufrPrincipales')]
    private ?Site $sitePrincipal = null;

    public function __construct()
    {
        $this->sites = new ArrayCollection();
        $this->departements = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return Collection|Site[]
     */
    public function getSites(): Collection
    {
        return $this->sites;
    }

    public function addSite(Site $site): self
    {
        if (!$this->sites->contains($site)) {
            $this->sites[] = $site;
        }

        return $this;
    }

    public function removeSite(Site $site): self
    {
        if ($this->sites->contains($site)) {
            $this->sites->removeElement($site);
        }

        return $this;
    }

    public function getResponsable(): ?Personnel
    {
        return $this->responsable;
    }

    public function setResponsable(?Personnel $responsable): self
    {
        $this->responsable = $responsable;

        return $this;
    }

    public function getSitePrincipal(): ?Site
    {
        return $this->sitePrincipal;
    }

    public function setSitePrincipal(?Site $sitePrincipal): self
    {
        $this->sitePrincipal = $sitePrincipal;

        return $this;
    }

    /**
     * @return Collection|Departement[]
     */
    public function getDepartements(): Collection
    {
        return $this->departements;
    }

    public function addDepartement(Departement $departement): self
    {
        if (!$this->departements->contains($departement)) {
            $this->departements[] = $departement;
            $departement->setUfr($this);
        }

        return $this;
    }

    public function removeDepartement(Departement $departement): self
    {
        if ($this->departements->contains($departement)) {
            $this->departements->removeElement($departement);
            // set the owning side to null (unless already changed)
            if ($departement->getUfr() === $this) {
                $departement->setUfr(null);
            }
        }

        return $this;
    }
}
