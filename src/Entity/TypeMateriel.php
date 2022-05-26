<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/TypeMateriel.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 26/05/2022 18:24
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\TypeMaterielRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TypeMaterielRepository::class)]
#[ORM\HasLifecycleCallbacks]
class TypeMateriel extends BaseEntity
{
    use LifeCycleTrait;
    #[ORM\Column(type: Types::STRING, length: 100)]
    private ?string $libelle = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Materiel>
     */
    #[ORM\OneToMany(mappedBy: 'typeMateriel', targetEntity: Materiel::class)]
    private Collection $materiels;

    public function __construct(#[ORM\ManyToOne(targetEntity: Departement::class, inversedBy: 'typeMateriels')] private Departement $departement)
    {
        $this->materiels = new ArrayCollection();
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

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * @return Collection|Materiel[]
     */
    public function getMateriels(): Collection
    {
        return $this->materiels;
    }

    public function addMateriel(Materiel $materiel): self
    {
        if (!$this->materiels->contains($materiel)) {
            $this->materiels[] = $materiel;
            $materiel->setTypeMateriel($this);
        }

        return $this;
    }

    public function removeMateriel(Materiel $materiel): self
    {
        if ($this->materiels->contains($materiel)) {
            $this->materiels->removeElement($materiel);
            // set the owning side to null (unless already changed)
            if ($materiel->getTypeMateriel() === $this) {
                $materiel->setTypeMateriel(null);
            }
        }

        return $this;
    }
}
