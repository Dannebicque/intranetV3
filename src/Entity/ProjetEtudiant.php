<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ProjetEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/12/2020 14:31

namespace App\Entity;

use App\Entity\Traits\UuidTrait;
use App\Repository\ProjetEtudiantRepository;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

/**
 * @ORM\Entity(repositoryClass=ProjetEtudiantRepository::class)
 */
class ProjetEtudiant extends BaseEntity
{

    public const ETAT_PROJET_ATTENTE = 'ETAT_PROJET_ATTENTE';
    public const ETAT_PROJET_AUTORISE = 'ETAT_PROJET_AUTORISE';
    public const ETAT_PROJET_DEPOSE = 'ETAT_PROJET_DEPOSE';
    public const ETAT_PROJET_VALIDE = 'ETAT_PROJET_VALIDE';
    public const ETAT_PROJET_IMPRIME = 'ETAT_PROJET_IMPRIME';
    public const DUREE_HEURE = 'h';
    public const DUREE_JOUR = 'j';

    use UuidTrait;

    /**
     * @ORM\ManyToOne(targetEntity=ProjetPeriode::class, inversedBy="projetEtudiants")
     */
    private $projetPeriode;

    /**
     * @ORM\ManyToOne(targetEntity=Entreprise::class, inversedBy="projetEtudiants", cascade={"persist", "remove"})
     */
    private $organisme;

    /**
     * @ORM\Column(type="boolean")
     */
    private $tempComplet = true;

    /**
     * @ORM\Column(type="float")
     */
    private $duree = 8;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $uniteDuree = self::DUREE_HEURE;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $sujet;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $activitesConfiees;

    /**
     * @ORM\ManyToMany(targetEntity=Etudiant::class, inversedBy="projetEtudiants")
     */
    private $etudiants;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $etatProjet = self::ETAT_PROJET_ATTENTE;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateAutorise;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateDepose;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateValidation;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateImprime;

    public function __construct()
    {
        $this->etudiants = new ArrayCollection();
        $this->setUuid(Uuid::uuid4());
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getProjetPeriode(): ?ProjetPeriode
    {
        return $this->projetPeriode;
    }

    public function setProjetPeriode(?ProjetPeriode $projetPeriode): self
    {
        $this->projetPeriode = $projetPeriode;

        return $this;
    }

    public function getOrganisme(): ?Entreprise
    {
        return $this->organisme;
    }

    public function setOrganisme(?Entreprise $organisme): self
    {
        $this->organisme = $organisme;

        return $this;
    }

    public function getTempComplet(): ?bool
    {
        return $this->tempComplet;
    }

    public function setTempComplet(bool $tempComplet): self
    {
        $this->tempComplet = $tempComplet;

        return $this;
    }

    public function getDuree(): ?float
    {
        return $this->duree;
    }

    public function setDuree(float $duree): self
    {
        $this->duree = $duree;

        return $this;
    }

    public function getUniteDuree(): ?string
    {
        return $this->uniteDuree;
    }

    public function setUniteDuree(string $uniteDuree): self
    {
        $this->uniteDuree = $uniteDuree;

        return $this;
    }

    public function getSujet(): ?string
    {
        return $this->sujet;
    }

    public function setSujet(string $sujet): self
    {
        $this->sujet = $sujet;

        return $this;
    }

    public function getActivitesConfiees(): ?string
    {
        return $this->activitesConfiees;
    }

    public function setActivitesConfiees(string $activitesConfiees): self
    {
        $this->activitesConfiees = $activitesConfiees;

        return $this;
    }

    /**
     * @return Collection|Etudiant[]
     */
    public function getEtudiants(): Collection
    {
        return $this->etudiants;
    }

    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
        }

        return $this;
    }

    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->contains($etudiant)) {
            $this->etudiants->removeElement($etudiant);
        }

        return $this;
    }

    public function getEtatProjet(): ?string
    {
        return $this->etatProjet;
    }

    public function setEtatProjet(string $etatProjet): self
    {
        $this->etatProjet = $etatProjet;

        return $this;
    }

    public function getDateAutorise(): ?DateTimeInterface
    {
        return $this->dateAutorise;
    }

    public function setDateAutorise(?DateTimeInterface $dateAutorise): self
    {
        $this->dateAutorise = $dateAutorise;

        return $this;
    }

    public function getDateDepose(): ?DateTimeInterface
    {
        return $this->dateDepose;
    }

    public function setDateDepose(?DateTimeInterface $dateDepose): self
    {
        $this->dateDepose = $dateDepose;

        return $this;
    }

    public function getDateValidation(): ?DateTimeInterface
    {
        return $this->dateValidation;
    }

    public function setDateValidation(?DateTimeInterface $dateValidation): self
    {
        $this->dateValidation = $dateValidation;

        return $this;
    }

    public function getDateImprime(): ?DateTimeInterface
    {
        return $this->dateImprime;
    }

    public function setDateImprime(?DateTimeInterface $dateImprime): self
    {
        $this->dateImprime = $dateImprime;

        return $this;
    }
}
