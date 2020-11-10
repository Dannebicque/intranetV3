<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/CovidAttestationEtudiant.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 10/11/2020 15:16

namespace App\Entity;

use App\Repository\CovidAttestationEtudiantRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CovidAttestationEtudiantRepository::class)
 */
class CovidAttestationEtudiant extends BaseEntity
{
    public const MATIN = 'AM';
    public const APRESMIDI = 'PM';
    public const TOUTELAJOURNEE = 'AL';

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $motif;

    /**
     * @ORM\ManyToOne(targetEntity=Diplome::class, inversedBy="covidAttestationEtudiants")
     */
    private $diplome;

    /**
     * @ORM\ManyToMany(targetEntity=Matiere::class, inversedBy="covidAttestationEtudiants")
     */
    private $matieres;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $salles;

    /**
     * @ORM\ManyToMany(targetEntity=Groupe::class, inversedBy="covidAttestationEtudiants")
     */
    private $groupes;

    /**
     * @ORM\Column(type="date")
     */
    private $datePresence;

    /**
     * @ORM\Column(type="string", length=2)
     */
    private $heure;

    /**
     * @ORM\Column(type="boolean")
     */
    private $convocationEnvoyee = false;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $dateEnvoi;

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

    public function getDatePresence(): ?\DateTimeInterface
    {
        return $this->datePresence;
    }

    public function setDatePresence(\DateTimeInterface $datePresence): self
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

    public function heureLong()
    {
        switch ($this->heure) {
            case self::MATIN:
                return 'Matin';
            case self::APRESMIDI:
                return 'Après-midi';
            case self::TOUTELAJOURNEE:
                return 'Toute la journée';
            default:
                return '-';
        }
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

    public function getDateEnvoi(): ?\DateTimeInterface
    {
        return $this->dateEnvoi;
    }

    public function setDateEnvoi(?\DateTimeInterface $dateEnvoi): self
    {
        $this->dateEnvoi = $dateEnvoi;

        return $this;
    }

    public function __clone()
    {
        $this->convocationEnvoyee = false;
        $this->dateEnvoi = null;
        $this->setCreated(new DateTime());
    }
}
