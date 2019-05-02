<?php
/**
 * *
 *  *  Copyright (C) $month.$year | David annebicque | IUT de Troyes - All Rights Reserved
 *  *
 *  *
 *  * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Ufr.php
 *  * @author     David annebicque
 *  * @project intranetv3
 *  * @date 5/2/19 4:18 AM
 *  * @lastUpdate 5/2/19 4:03 AM
 *  *
 *
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UfrRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Ufr extends BaseEntity
{
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Departement", mappedBy="ufr")
     */
    private $departements;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"ufr_administration"})
     */
    private $libelle;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Site", inversedBy="ufrs")
     */
    private $sites;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @Groups({"ufr_administration"})
     */
    private $responsable;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Site", inversedBy="ufrPrincipales")
     */
    private $sitePrincipal;

    public function __construct()
    {
        $this->sites = new ArrayCollection();
        $this->departements = new ArrayCollection();
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

    /**
     * @return Collection|Site[]
     */
    public function getSites(): Collection
    {
        return $this->sites;
    }

    /**
     * @param Site $site
     *
     * @return Ufr
     */
    public function addSite(Site $site): self
    {
        if (!$this->sites->contains($site)) {
            $this->sites[] = $site;
        }

        return $this;
    }

    /**
     * @param Site $site
     *
     * @return Ufr
     */
    public function removeSite(Site $site): self
    {
        if ($this->sites->contains($site)) {
            $this->sites->removeElement($site);
        }

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getResponsable(): ?Personnel
    {
        return $this->responsable;
    }

    /**
     * @param Personnel|null $responsable
     *
     * @return Ufr
     */
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
