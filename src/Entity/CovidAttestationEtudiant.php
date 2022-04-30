<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CovidAttestationEtudiant.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 17:48
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\CovidAttestationEtudiantRepository;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CovidAttestationEtudiantRepository::class)]
#[ORM\HasLifecycleCallbacks]
class CovidAttestationEtudiant extends BaseEntity
{
    use LifeCycleTrait;

    public final const MATIN = 'AM';
    public final const APRESMIDI = 'PM';
    public final const TOUTELAJOURNEE = 'AL';

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 10, nullable: true)]
    private ?string $motif = null;

    #[ORM\ManyToOne(targetEntity: Diplome::class, inversedBy: 'covidAttestationEtudiants')]
    private ?Diplome $diplome = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\Matiere>
     */
    #[ORM\ManyToMany(targetEntity: Matiere::class, inversedBy: 'covidAttestationEtudiants')]
    private Collection $matieres;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 150, nullable: true)]
    private ?string $salles = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<\App\Entity\Groupe>
     */
    #[ORM\ManyToMany(targetEntity: Groupe::class, inversedBy: 'covidAttestationEtudiants')]
    private Collection $groupes;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?DateTimeInterface $datePresence = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 2)]
    private string $heure = 'AL';

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::BOOLEAN)]
    private bool $convocationEnvoyee = false;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateEnvoi = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateDebut = null;

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATE_MUTABLE, nullable: true)]
    private ?CarbonInterface $dateFin = null;

    public function __construct()
    {
        $this->matieres = new ArrayCollection();
        $this->groupes = new ArrayCollection();
    }

    public function getMotif(): ?string
    {
        return $this->motif;
    }

    public function setMotif(string $motif): self
    {
        $this->motif = $motif;

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        return $this->diplome;
    }

    public function setDiplome(?Diplome $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatieres(): Collection
    {
        return $this->matieres;
    }

    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
        }

        return $this;
    }

    public function removeMatiere(Matiere $matiere): self
    {
        if ($this->matieres->contains($matiere)) {
            $this->matieres->removeElement($matiere);
        }

        return $this;
    }

    public function getSalles(): ?string
    {
        return $this->salles;
    }

    public function setSalles(string $salles): self
    {
        $this->salles = $salles;

        return $this;
    }

    /**
     * @return Collection|Groupe[]
     */
    public function getGroupes(): Collection
    {
        return $this->groupes;
    }

    public function addGroupe(Groupe $groupe): self
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes[] = $groupe;
        }

        return $this;
    }

    public function removeGroupe(Groupe $groupe): self
    {
        if ($this->groupes->contains($groupe)) {
            $this->groupes->removeElement($groupe);
        }

        return $this;
    }

    public function getDatePresence(): ?DateTimeInterface
    {
        return $this->datePresence;
    }

    public function setDatePresence(DateTimeInterface $datePresence): self
    {
        $this->datePresence = $datePresence;

        return $this;
    }

    public function getHeure(): ?string
    {
        return $this->heure;
    }

    public function setHeure(string $heure): self
    {
        $this->heure = $heure;

        return $this;
    }

    public function heureLong(): string
    {
        return match ($this->heure) {
            self::MATIN => 'Matin',
            self::APRESMIDI => 'Après-midi',
            self::TOUTELAJOURNEE => 'Toute la journée',
            default => '-',
        };
    }

    public function getConvocationEnvoyee(): ?bool
    {
        return $this->convocationEnvoyee;
    }

    public function setConvocationEnvoyee(bool $convocationEnvoyee): self
    {
        $this->convocationEnvoyee = $convocationEnvoyee;

        return $this;
    }

    public function getDateEnvoi(): ?CarbonInterface
    {
        return $this->dateEnvoi;
    }

    public function setDateEnvoi(?CarbonInterface $dateEnvoi): self
    {
        $this->dateEnvoi = $dateEnvoi;

        return $this;
    }

    public function __clone()
    {
        $this->convocationEnvoyee = false;
        $this->dateEnvoi = null;
        $this->setCreated(Carbon::now());
    }

    public function serialize(): string
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        return serialize([
            $this->getId(),
        ]);
    }

    public function getDateDebut(): ?CarbonInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(?CarbonInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?CarbonInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(?CarbonInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }
}
