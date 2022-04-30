<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/ProjetEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 08:43
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\ProjetEtudiantRepository;
use Carbon\CarbonInterface;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;

#[ORM\Entity(repositoryClass: ProjetEtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class ProjetEtudiant extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;

    public final const ETAT_PROJET_ATTENTE = 'ETAT_PROJET_ATTENTE';
    public final const ETAT_PROJET_AUTORISE = 'ETAT_PROJET_AUTORISE';
    public final const ETAT_PROJET_DEPOSE = 'ETAT_PROJET_DEPOSE';
    public final const ETAT_PROJET_VALIDE = 'ETAT_PROJET_VALIDE';
    public final const ETAT_PROJET_IMPRIME = 'ETAT_PROJET_IMPRIME';
    public final const DUREE_HEURE = 'h';
    public final const DUREE_JOUR = 'j';

    #[ORM\ManyToOne(targetEntity: ProjetPeriode::class, inversedBy: 'projetEtudiants')]
    private ?ProjetPeriode $projetPeriode = null;

    #[ORM\ManyToOne(targetEntity: Entreprise::class, cascade: ['persist', 'remove'], inversedBy: 'projetEtudiants')]
    private ?Entreprise $organisme = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private bool $tempComplet = true;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::FLOAT)]
    private float $duree = 8;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10)]
    private string $uniteDuree = self::DUREE_HEURE;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255, nullable: true)]
    private ?string $sujet = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TEXT, nullable: true)]
    private ?string $activitesConfiees = null;

    #[ORM\ManyToMany(targetEntity: Etudiant::class, inversedBy: 'projetEtudiants')]
    private Collection $etudiants;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 30)]
    private string $etatProjet = self::ETAT_PROJET_ATTENTE;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateAutorise = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateDepose = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateValidation = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateImprime = null;

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

    public function setDateAutorise(?CarbonInterface $dateAutorise): self
    {
        $this->dateAutorise = $dateAutorise;

        return $this;
    }

    public function getDateDepose(): ?CarbonInterface
    {
        return $this->dateDepose;
    }

    public function setDateDepose(?CarbonInterface $dateDepose): self
    {
        $this->dateDepose = $dateDepose;

        return $this;
    }

    public function getDateValidation(): ?CarbonInterface
    {
        return $this->dateValidation;
    }

    public function setDateValidation(?CarbonInterface $dateValidation): self
    {
        $this->dateValidation = $dateValidation;

        return $this;
    }

    public function getDateImprime(): ?CarbonInterface
    {
        return $this->dateImprime;
    }

    public function setDateImprime(?CarbonInterface $dateImprime): self
    {
        $this->dateImprime = $dateImprime;

        return $this;
    }
}
