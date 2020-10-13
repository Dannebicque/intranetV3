<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ProjetPeriode.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 13/10/2020 06:34

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use App\Repository\ProjetPeriodeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass=ProjetPeriodeRepository::class)
 */
class ProjetPeriode extends BaseEntity
{
    use UuidTrait;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="projetPeriodes")
     */
    private $semestre;

    /**
     * @ORM\ManyToMany(targetEntity=Personnel::class, inversedBy="projetPeriodes")
     */
    private $responsables;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDebut;

    /**
     * @ORM\Column(type="date")
     */
    private $dateFin;

    /**
     * @ORM\ManyToOne(targetEntity=AnneeUniversitaire::class, inversedBy="projetPeriodes")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\OneToMany(targetEntity=ProjetEtudiant::class, mappedBy="projetPeriode")
     */
    private $projetEtudiants;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $texteLibre;

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

    public function getDateDebut(): ?\DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(\DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(\DateTimeInterface $dateFin): self
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
