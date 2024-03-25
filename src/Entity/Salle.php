<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Salle.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\SalleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SalleRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Salle extends BaseEntity
{
    use LifeCycleTrait;

    final public const SALLE_TD = 'td';
    final public const SALLE_TP = 'tp';
    final public const SALLE_AMPHI = 'amphi';
    final public const SALLE_INFORMATIQUE = 'info';

    #[Groups(groups: ['salle_administration'])]
    #[ORM\Column(type: Types::STRING, length: 30)]
    private ?string $libelle = null;

    #[Groups(groups: ['salle_administration'])]
    #[ORM\Column(type: Types::INTEGER)]
    private int $capacite = 0;

    #[Groups(groups: ['salle_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $type = null;

    #[Groups(groups: ['salle_administration'])]
    #[ORM\ManyToOne(targetEntity: Site::class, inversedBy: 'salles')]
    private ?Site $site = null;

    /**
     * @var Collection<int, SalleExamen>
     */
    #[ORM\OneToMany(mappedBy: 'salle', targetEntity: SalleExamen::class)]
    private Collection $salleExamens;

    public function __construct()
    {
        $this->salleExamens = new ArrayCollection();
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

    public function getCapacite(): ?int
    {
        return $this->capacite;
    }

    public function setCapacite(int $capacite): self
    {
        $this->capacite = $capacite;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getSite(): ?Site
    {
        return $this->site;
    }

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
