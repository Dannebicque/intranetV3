<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Annee.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\AnneeRepository;
use App\Utils\Tools;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AnneeRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Annee extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $codeEtape = null;

    #[ORM\Column(type: Types::STRING, length: 10)]
    private ?string $codeVersion = null;

    #[Groups(groups: ['annee'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $libelle = null;

    #[ORM\Column(name: 'ordre', type: Types::INTEGER)]
    private int $ordre = 1;

    #[Groups(groups: ['annee'])]
    #[ORM\Column(type: Types::STRING, length: 150, nullable: true)]
    private ?string $libelleLong = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optAlternance = false;

    #[ORM\ManyToOne(targetEntity: Diplome::class, inversedBy: 'annees')]
    private ?Diplome $diplome = null;

    /**
     * @var Collection<int, Semestre>
     */
    #[ORM\OneToMany(mappedBy: 'annee', targetEntity: Semestre::class)]
    #[ORM\OrderBy(value: ['ordreLmd' => 'ASC'])]
    private Collection $semestres;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $actif = true;

    /**
     * @var Collection<int, Alternance>
     */
    #[ORM\OneToMany(mappedBy: 'annee', targetEntity: Alternance::class)]
    private Collection $alternances;

    #[ORM\Column(type: Types::STRING, length: 30)]
    private ?string $couleur = null;

    /**
     * @var Collection<int, ApcNiveau>
     */
    #[ORM\OneToMany(mappedBy: 'annee', targetEntity: ApcNiveau::class)]
    private Collection $apcNiveaux;

    /**
     * @var Collection<AlternancePlanning>
     */
    #[ORM\OneToMany(mappedBy: 'annee', targetEntity: AlternancePlanning::class)]
    private Collection $alternancePlannings;

    #[ORM\OneToMany(mappedBy: 'annee', targetEntity: ConpereEtudiant::class)]
    private Collection $conpereEtudiants;

    public function __construct()
    {
        $this->semestres = new ArrayCollection();
        $this->alternances = new ArrayCollection();
        $this->apcNiveaux = new ArrayCollection();
        $this->alternancePlannings = new ArrayCollection();
        $this->conpereEtudiants = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getOrdre(): ?int
    {
        return $this->ordre;
    }

    public function setOrdre(int $ordre): void
    {
        $this->ordre = $ordre;
    }

    public function getLibelleLong(): ?string
    {
        return $this->libelleLong;
    }

    public function setLibelleLong(string $libelleLong): void
    {
        $this->libelleLong = $libelleLong;
    }

    public function update(string $name, mixed $value): void
    {
        Tools::updateFields($name, $value, $this);
    }

    /**
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
            $semestre->setAnnee($this);
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
            // set the owning side to null (unless already changed)
            if ($semestre->getAnnee() === $this) {
                $semestre->setAnnee(null);
            }
        }

        return $this;
    }

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }

    /**
     * @return Collection|Alternance[]
     */
    public function getAlternances(): Collection
    {
        return $this->alternances;
    }

    public function addAlternance(Alternance $alternance): self
    {
        if (!$this->alternances->contains($alternance)) {
            $this->alternances[] = $alternance;
            $alternance->setAnnee($this);
        }

        return $this;
    }

    public function removeAlternance(Alternance $alternance): self
    {
        if ($this->alternances->contains($alternance)) {
            $this->alternances->removeElement($alternance);
            // set the owning side to null (unless already changed)
            if ($alternance->getAnnee() === $this) {
                $alternance->setAnnee(null);
            }
        }

        return $this;
    }

    public function getAnneeUniversitaire(): ?int
    {
        if (null !== $this->getDiplome() && null !== $this->getDiplome()->getAnneeUniversitaire()) {
            return $this->getDiplome()->getAnneeUniversitaire()->getAnnee();
        }

        return 0;
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

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getOptAlternance(): ?bool
    {
        return $this->optAlternance;
    }

    public function isOptAlternance(): bool
    {
        return $this->optAlternance;
    }

    public function setOptAlternance(bool $optAlternance): void
    {
        $this->optAlternance = $optAlternance;
    }

    /**
     * @return Collection|ApcNiveau[]
     */
    public function getApcNiveaux(): Collection
    {
        return $this->apcNiveaux;
    }

    public function addApcNiveau(ApcNiveau $apcNiveau): self
    {
        if (!$this->apcNiveaux->contains($apcNiveau)) {
            $this->apcNiveaux[] = $apcNiveau;
            $apcNiveau->setAnnee($this);
        }

        return $this;
    }

    public function removeApcNiveau(ApcNiveau $apcNiveau): self
    {
        if ($this->apcNiveaux->contains($apcNiveau)) {
            $this->apcNiveaux->removeElement($apcNiveau);
            // set the owning side to null (unless already changed)
            if ($apcNiveau->getAnnee() === $this) {
                $apcNiveau->setAnnee(null);
            }
        }

        return $this;
    }

    public function getCodeEtape(): ?string
    {
        return $this->codeEtape;
    }

    public function setCodeEtape(?string $codeEtape): void
    {
        $this->codeEtape = $codeEtape;
    }

    public function getCodeVersion(): ?string
    {
        return $this->codeVersion;
    }

    public function setCodeVersion(?string $codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    /**
     * @return Collection|AlternancePlanning[]
     */
    public function getAlternancePlannings(): Collection
    {
        return $this->alternancePlannings;
    }

    public function addAlternancePlanning(AlternancePlanning $alternancePlanning): self
    {
        if (!$this->alternancePlannings->contains($alternancePlanning)) {
            $this->alternancePlannings[] = $alternancePlanning;
            $alternancePlanning->setAnnee($this);
        }

        return $this;
    }

    public function removeAlternancePlanning(AlternancePlanning $alternancePlanning): self
    {
        // set the owning side to null (unless already changed)
        if ($this->alternancePlannings->removeElement($alternancePlanning) && $alternancePlanning->getAnnee() === $this) {
            $alternancePlanning->setAnnee(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, ConpereEtudiant>
     */
    public function getConpereEtudiants(): Collection
    {
        return $this->conpereEtudiants;
    }

    public function addConpereEtudiant(ConpereEtudiant $conpereEtudiant): self
    {
        if (!$this->conpereEtudiants->contains($conpereEtudiant)) {
            $this->conpereEtudiants->add($conpereEtudiant);
            $conpereEtudiant->setAnnee($this);
        }

        return $this;
    }

    public function removeConpereEtudiant(ConpereEtudiant $conpereEtudiant): self
    {
        if ($this->conpereEtudiants->removeElement($conpereEtudiant)) {
            // set the owning side to null (unless already changed)
            if ($conpereEtudiant->getAnnee() === $this) {
                $conpereEtudiant->setAnnee(null);
            }
        }

        return $this;
    }
}
