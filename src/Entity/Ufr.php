<?php

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

    public function __construct()
    {
        $this->sites = new ArrayCollection();
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
}
