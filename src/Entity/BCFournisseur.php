<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/BCFournisseur.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Repository\BCFournisseurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BCFournisseurRepository::class)]
class BCFournisseur extends BaseEntity
{
    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::STRING, length: 10)]
    private ?string $numero = null;

    /**
     * @var ArrayCollection
     */
    #[ORM\OneToMany(mappedBy: 'fournisseur', targetEntity: BCDemande::class)]
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
        // set the owning side to null (unless already changed)
        if ($this->bCDemandes->removeElement($bCDemande) && $bCDemande->getFournisseur() === $this) {
            $bCDemande->setFournisseur(null);
        }

        return $this;
    }
}
