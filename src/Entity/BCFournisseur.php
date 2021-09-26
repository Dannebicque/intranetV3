<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/BCFournisseur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/09/2021 14:31
 */

namespace App\Entity;

use App\Repository\BCFournisseurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=BCFournisseurRepository::class)
 */
class BCFournisseur extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=100)
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private ?string $numero;

    /**
     * @ORM\OneToMany(targetEntity=BCDemande::class, mappedBy="fournisseur")
     */
    private ArrayCollection $bCDemandes;

    public function __construct()
    {
        $this->bCDemandes = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getNumero(): ?string
    {
        return $this->numero;
    }

    public function setNumero(string $numero): self
    {
        $this->numero = $numero;

        return $this;
    }

    /**
     * @return Collection|BCDemande[]
     */
    public function getBCDemandes(): Collection
    {
        return $this->bCDemandes;
    }

    public function addBCDemande(BCDemande $bCDemande): self
    {
        if (!$this->bCDemandes->contains($bCDemande)) {
            $this->bCDemandes[] = $bCDemande;
            $bCDemande->setFournisseur($this);
        }

        return $this;
    }

    public function removeBCDemande(BCDemande $bCDemande): self
    {
        if ($this->bCDemandes->removeElement($bCDemande)) {
            // set the owning side to null (unless already changed)
            if ($bCDemande->getFournisseur() === $this) {
                $bCDemande->setFournisseur(null);
            }
        }

        return $this;
    }
}
