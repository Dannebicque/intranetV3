<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CahierTexte.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 11:23
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Repository\CahierTexteRepository;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CahierTexteRepository::class)]
#[ORM\HasLifecycleCallbacks]
class CahierTexte extends BaseEntity
{
    use LifeCycleTrait;
    use MatiereTrait;

    #[Groups(groups: ['carnet_personnel'])]
    #[ORM\Column(type: Types::STRING, length: 150)]
    private ?string $libelle = null;

    #[Groups(groups: ['carnet_personnel'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $description = null;

    #[Groups(groups: ['carnet_personnel'])]
    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?CarbonInterface $dateRetour = null;

    #[Groups(groups: ['carnet_personnel'])]
    #[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'cahierTextes')]
    private ?Personnel $personnel = null;

    #[ORM\ManyToMany(targetEntity: Fichier::class, inversedBy: 'cahierTextes')]
    private Collection $fichiers;

    #[Groups(groups: ['carnet_personnel'])]
    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'cahierTextes')]
    private ?Semestre $semestre = null;

    public function __construct()
    {
        $this->fichiers = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDateRetour(): ?CarbonInterface
    {
        return $this->dateRetour;
    }

    public function setDateRetour(CarbonInterface $dateRetour): self
    {
        $this->dateRetour = $dateRetour;

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return Collection|Fichier[]
     */
    public function getFichiers(): Collection
    {
        return $this->fichiers;
    }

    public function addFichier(Fichier $fichier): self
    {
        if (!$this->fichiers->contains($fichier)) {
            $this->fichiers[] = $fichier;
        }

        return $this;
    }

    public function removeFichier(Fichier $fichier): self
    {
        if ($this->fichiers->contains($fichier)) {
            $this->fichiers->removeElement($fichier);
        }

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }
}
