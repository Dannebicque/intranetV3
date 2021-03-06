<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Salle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:49
 */

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

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
     * @Groups({"salle_administration"})
     */
    private $libelle;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"salle_administration"})
     */
    private $capacite = 0;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"salle_administration"})
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Site", inversedBy="salles")
     * @Groups({"salle_administration"})
     */
    private $site;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SalleExamen", mappedBy="salle")
     */
    private $salleExamens;

    public function __construct()
    {
        $this->salleExamens = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @return Salle
     */
    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getCapacite(): ?int
    {
        return $this->capacite;
    }

    /**
     * @return Salle
     */
    public function setCapacite(int $capacite): self
    {
        $this->capacite = $capacite;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @return Salle
     */
    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getSite(): ?Site
    {
        return $this->site;
    }

    /**
     * @return Salle
     */
    public function setSite(?Site $site): self
    {
        $this->site = $site;

        return $this;
    }

    /**
     * @return Collection|SalleExamen[]
     */
    public function getSalleExamens(): Collection
    {
        return $this->salleExamens;
    }

    public function addSalleExamen(SalleExamen $salleExamen): self
    {
        if (!$this->salleExamens->contains($salleExamen)) {
            $this->salleExamens[] = $salleExamen;
            $salleExamen->setSalle($this);
        }

        return $this;
    }

    public function removeSalleExamen(SalleExamen $salleExamen): self
    {
        if ($this->salleExamens->contains($salleExamen)) {
            $this->salleExamens->removeElement($salleExamen);
            // set the owning side to null (unless already changed)
            if ($salleExamen->getSalle() === $this) {
                $salleExamen->setSalle(null);
            }
        }

        return $this;
    }
}
