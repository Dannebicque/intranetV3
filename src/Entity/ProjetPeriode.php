<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ProjetPeriode.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 21/08/2021 12:37
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\ProjetPeriodeRepository;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass=ProjetPeriodeRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class ProjetPeriode extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="projetPeriodes")
     */
    private ?Semestre $semestre;

    /**
     * @ORM\ManyToMany(targetEntity=Personnel::class, inversedBy="projetPeriodes")
     */
    private Collection $responsables;

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $dateDebut = null;

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $dateFin = null;

    /**
     * @ORM\ManyToOne(targetEntity=AnneeUniversitaire::class, inversedBy="projetPeriodes")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * @ORM\OneToMany(targetEntity=ProjetEtudiant::class, mappedBy="projetPeriode")
     */
    private Collection $projetEtudiants;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private ?string $texteLibre;

    public function __construct()
    {
        $this->responsables = new ArrayCollection();
        $this->setUuid(Uuid::uuid4());
        $this->projetEtudiants = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
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

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getResponsables(): Collection
    {
        return $this->responsables;
    }

    public function addResponsable(Personnel $responsable): self
    {
        if (!$this->responsables->contains($responsable)) {
            $this->responsables[] = $responsable;
        }

        return $this;
    }

    public function removeResponsable(Personnel $responsable): self
    {
        if ($this->responsables->contains($responsable)) {
            $this->responsables->removeElement($responsable);
        }

        return $this;
    }

    public function getDateDebut(): ?CarbonInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(CarbonInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?CarbonInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(CarbonInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?AnneeUniversitaire $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    /**
     * @return Collection|ProjetEtudiant[]
     */
    public function getProjetEtudiants(): Collection
    {
        return $this->projetEtudiants;
    }

    public function addProjetEtudiant(ProjetEtudiant $projetEtudiant): self
    {
        if (!$this->projetEtudiants->contains($projetEtudiant)) {
            $this->projetEtudiants[] = $projetEtudiant;
            $projetEtudiant->setProjetPeriode($this);
        }

        return $this;
    }

    public function removeProjetEtudiant(ProjetEtudiant $projetEtudiant): self
    {
        if ($this->projetEtudiants->contains($projetEtudiant)) {
            $this->projetEtudiants->removeElement($projetEtudiant);
            // set the owning side to null (unless already changed)
            if ($projetEtudiant->getProjetPeriode() === $this) {
                $projetEtudiant->setProjetPeriode(null);
            }
        }

        return $this;
    }

    public function getTexteLibre(): ?string
    {
        return $this->texteLibre;
    }

    public function setTexteLibre(?string $texteLibre): self
    {
        $this->texteLibre = $texteLibre;

        return $this;
    }
}
