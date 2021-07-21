<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Diplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 29/06/2021 18:15
 */

namespace App\Entity;

use App\Entity\Traits\ApogeeTrait;
use App\Entity\Traits\LifeCycleTrait;
use function chr;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use function ord;
use Serializable;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DiplomeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Diplome extends BaseEntity implements Serializable
{
    use ApogeeTrait;
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private ?Personnel $responsableDiplome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private ?Personnel $assistantDiplome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeDiplome", inversedBy="diplomes")
     */
    private ?TypeDiplome $typeDiplome;

    /**
     * @ORM\Column(type="integer")
     */
    private int $optNbJoursSaisie = 15;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optDilpomeDecale = false; //existance du diplôme en décalé

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optSupprAbsence = false;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private string $optMethodeCalcul = Constantes::METHODE_CALCUL_MOY_MODULE;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optAnonymat = false;

    /**
     * @ORM\Column( type="boolean")
     */
    private bool $optCommentairesReleve = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optEspacePersoVisible = true;

    /**
     * @ORM\Column(type="integer")
     */
    private int $volumeHoraire = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private int $codeCelcatDepartement = 0;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="diplome")
     */
    private Collection $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ppn", mappedBy="diplome")
     */
    private Collection $ppns;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="diplomes")
     */
    private ?Departement $departement;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Annee", mappedBy="diplome")
     * @ORM\OrderBy({"libelle"="ASC"})
     */
    private Collection $annees;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private ?string $sigle;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $actif = true;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="diplomes")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * @ORM\Column(type="integer")
     */
    private int $optSemainesVisibles = 2;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optCertifieQualite = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private ?Personnel $optResponsableQualite;

    /**
     * @ORM\OneToMany(targetEntity=ApcCompetence::class, mappedBy="diplome")
     */
    private Collection $apcComptences;

    /**
     * @ORM\OneToMany(targetEntity=CovidAttestationPersonnel::class, mappedBy="diplome")
     */
    private Collection $covidAttestationPersonnels;

    /**
     * @ORM\OneToMany(targetEntity=CovidAttestationEtudiant::class, mappedBy="diplome")
     */
    private Collection $covidAttestationEtudiants;

    /**
     * @ORM\OneToMany(targetEntity=ApcParcours::class, mappedBy="diplome")
     */
    private Collection $apcParcours;

    public function __construct(Departement $departement)
    {
        $this->departement = $departement;
        $this->hrs = new ArrayCollection();
        $this->ppns = new ArrayCollection();
        $this->annees = new ArrayCollection();
        $this->apcComptences = new ArrayCollection();
        $this->covidAttestationPersonnels = new ArrayCollection();
        $this->covidAttestationEtudiants = new ArrayCollection();
        $this->apcParcours = new ArrayCollection();
    }

    public function getDisplay(): ?string
    {
        if (null !== $this->getTypeDiplome()) {
            return $this->getTypeDiplome()->getSigle() . ' ' . $this->libelle;
        }

        return $this->libelle;
    }

    public function getDisplayCourt(): ?string
    {
        if (null !== $this->getTypeDiplome()) {
            return $this->getTypeDiplome()->getSigle() . ' ' . $this->sigle;
        }

        return $this->sigle;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return Personnel
     */
    public function getResponsableDiplome(): ?Personnel
    {
        return $this->responsableDiplome;
    }

    public function setResponsableDiplome(Personnel $responsableDiplome): void
    {
        $this->responsableDiplome = $responsableDiplome;
    }

    /**
     * @return Personnel
     */
    public function getAssistantDiplome(): ?Personnel
    {
        return $this->assistantDiplome;
    }

    public function setAssistantDiplome(Personnel $assistantDiplome): void
    {
        $this->assistantDiplome = $assistantDiplome;
    }

    /**
     * @return TypeDiplome
     */
    public function getTypeDiplome(): ?TypeDiplome
    {
        return $this->typeDiplome;
    }

    public function setTypeDiplome($typeDiplome): void
    {
        $this->typeDiplome = $typeDiplome;
    }

    public function getOptNbJoursSaisie(): int
    {
        return $this->optNbJoursSaisie;
    }

    public function setOptNbJoursSaisie(int $optNbJoursSaisie): void
    {
        $this->optNbJoursSaisie = $optNbJoursSaisie;
    }

    public function isOptDilpomeDecale(): bool
    {
        return $this->optDilpomeDecale;
    }

    public function setOptDilpomeDecale(bool $optDilpomeDecale): void
    {
        $this->optDilpomeDecale = $optDilpomeDecale;
    }

    public function isOptSupprAbsence(): bool
    {
        return $this->optSupprAbsence;
    }

    public function setOptSupprAbsence(bool $optSupprAbsence): void
    {
        $this->optSupprAbsence = $optSupprAbsence;
    }

    public function getOptMethodeCalcul(): string
    {
        return $this->optMethodeCalcul;
    }

    public function setOptMethodeCalcul(string $optMethodeCalcul): void
    {
        $this->optMethodeCalcul = $optMethodeCalcul;
    }

    public function isOptAnonymat(): bool
    {
        return $this->optAnonymat;
    }

    public function setOptAnonymat(bool $optAnonymat): void
    {
        $this->optAnonymat = $optAnonymat;
    }

    public function isOptCommentairesReleve(): bool
    {
        return $this->optCommentairesReleve;
    }

    public function setOptCommentairesReleve(bool $optCommentairesReleve): void
    {
        $this->optCommentairesReleve = $optCommentairesReleve;
    }

    public function isOptEspacePersoVisible(): bool
    {
        return $this->optEspacePersoVisible;
    }

    public function setOptEspacePersoVisible(bool $optEspacePersoVisible): void
    {
        $this->optEspacePersoVisible = $optEspacePersoVisible;
    }

    public function getVolumeHoraire(): int
    {
        return $this->volumeHoraire;
    }

    public function setVolumeHoraire(int $volumeHoraire): void
    {
        $this->volumeHoraire = $volumeHoraire;
    }

    public function getCodeCelcatDepartement(): int
    {
        return $this->codeCelcatDepartement;
    }

    public function setCodeCelcatDepartement(int $codeCelcatDepartement = 0): void
    {
        $this->codeCelcatDepartement = $codeCelcatDepartement;
    }

    /**
     * @return Collection|Hrs[]
     */
    public function getHrs(): Collection
    {
        return $this->hrs;
    }

    public function addHr(Hrs $hr): self
    {
        if (!$this->hrs->contains($hr)) {
            $this->hrs[] = $hr;
            $hr->setDiplome($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getDiplome() === $this) {
                $hr->setDiplome(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Ppn[]
     */
    public function getPpns(): Collection
    {
        return $this->ppns;
    }

    public function addPpn(Ppn $ppn): self
    {
        if (!$this->ppns->contains($ppn)) {
            $this->ppns[] = $ppn;
            $ppn->setDiplome($this);
        }

        return $this;
    }

    public function removePpn(Ppn $ppn): self
    {
        if ($this->ppns->contains($ppn)) {
            $this->ppns->removeElement($ppn);
            // set the owning side to null (unless already changed)
            if ($ppn->getDiplome() === $this) {
                $ppn->setDiplome(null);
            }
        }

        return $this;
    }

    public function update($name, $value): bool
    {
        $name[0] = chr(ord($name[0]) - 32);
        $method = 'set' . $name;
        if (method_exists($this, $method)) {
            $this->$method($value);

            return true;
        }

        return false;
    }

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

        return $this;
    }

    /**
     * @return Collection|Annee[]
     */
    public function getAnnees(): Collection
    {
        return $this->annees;
    }

    public function addAnnee(Annee $annee): self
    {
        if (!$this->annees->contains($annee)) {
            $this->annees[] = $annee;
            $annee->setDiplome($this);
        }

        return $this;
    }

    public function removeAnnee(Annee $annee): self
    {
        if ($this->annees->contains($annee)) {
            $this->annees->removeElement($annee);
            // set the owning side to null (unless already changed)
            if ($annee->getDiplome() === $this) {
                $annee->setDiplome(null);
            }
        }

        return $this;
    }

    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    public function setSigle(string $sigle): self
    {
        $this->sigle = $sigle;

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

    public function displayAnneeUniversitaire(): string
    {
        return null !== $this->getAnneeUniversitaire() ? $this->getAnneeUniversitaire()->displayAnneeUniversitaire() : 'err';
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

    public function getOptSemainesVisibles(): ?int
    {
        return $this->optSemainesVisibles;
    }

    public function setOptSemainesVisibles(int $optSemainesVisibles): self
    {
        $this->optSemainesVisibles = $optSemainesVisibles;

        return $this;
    }

    public function getLibelleLong(): string
    {
        if (null !== $this->getTypeDiplome()) {
            return $this->getTypeDiplome()->getSigle() . ' ' . $this->getLibelle();
        }

        return $this->getLibelle();
    }

    public function getSemestres(): array
    {
        $semestres = [];
        foreach ($this->getAnnees() as $annee) {
            foreach ($annee->getSemestres() as $semestre) {
                $semestres[] = $semestre;
            }
        }

        return $semestres;
    }

    public function getOptDilpomeDecale(): ?bool
    {
        return $this->optDilpomeDecale;
    }

    public function getOptSupprAbsence(): ?bool
    {
        return $this->optSupprAbsence;
    }

    public function getOptAnonymat(): ?bool
    {
        return $this->optAnonymat;
    }

    public function getOptCommentairesReleve(): ?bool
    {
        return $this->optCommentairesReleve;
    }

    public function getOptEspacePersoVisible(): ?bool
    {
        return $this->optEspacePersoVisible;
    }

    public function getOptCertifieQualite(): ?bool
    {
        return $this->optCertifieQualite;
    }

    public function setOptCertifieQualite(bool $certifieQualite): self
    {
        $this->optCertifieQualite = $certifieQualite;

        return $this;
    }

    public function getOptResponsableQualite(): ?Personnel
    {
        return $this->optResponsableQualite;
    }

    public function setOptResponsableQualite(?Personnel $responsableQualite): self
    {
        $this->optResponsableQualite = $responsableQualite;

        return $this;
    }

    /**
     * @return Collection|ApcCompetence[]
     */
    public function getApcComptences(): Collection
    {
        return $this->apcComptences;
    }

    public function addApcComptence(ApcCompetence $apcComptence): self
    {
        if (!$this->apcComptences->contains($apcComptence)) {
            $this->apcComptences[] = $apcComptence;
            $apcComptence->setDiplome($this);
        }

        return $this;
    }

    public function removeApcComptence(ApcCompetence $apcComptence): self
    {
        if ($this->apcComptences->contains($apcComptence)) {
            $this->apcComptences->removeElement($apcComptence);
            // set the owning side to null (unless already changed)
            if ($apcComptence->getDiplome() === $this) {
                $apcComptence->setDiplome(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CovidAttestationPersonnel[]
     */
    public function getCovidAttestationPersonnels(): Collection
    {
        return $this->covidAttestationPersonnels;
    }

    public function addCovidAttestationPersonnel(CovidAttestationPersonnel $covidAttestationPersonnel): self
    {
        if (!$this->covidAttestationPersonnels->contains($covidAttestationPersonnel)) {
            $this->covidAttestationPersonnels[] = $covidAttestationPersonnel;
            $covidAttestationPersonnel->setDiplome($this);
        }

        return $this;
    }

    public function removeCovidAttestationPersonnel(CovidAttestationPersonnel $covidAttestationPersonnel): self
    {
        if ($this->covidAttestationPersonnels->contains($covidAttestationPersonnel)) {
            $this->covidAttestationPersonnels->removeElement($covidAttestationPersonnel);
            // set the owning side to null (unless already changed)
            if ($covidAttestationPersonnel->getDiplome() === $this) {
                $covidAttestationPersonnel->setDiplome(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CovidAttestationEtudiant[]
     */
    public function getCovidAttestationEtudiants(): Collection
    {
        return $this->covidAttestationEtudiants;
    }

    public function addCovidAttestationEtudiant(CovidAttestationEtudiant $covidAttestationEtudiant): self
    {
        if (!$this->covidAttestationEtudiants->contains($covidAttestationEtudiant)) {
            $this->covidAttestationEtudiants[] = $covidAttestationEtudiant;
            $covidAttestationEtudiant->setDiplome($this);
        }

        return $this;
    }

    public function removeCovidAttestationEtudiant(CovidAttestationEtudiant $covidAttestationEtudiant): self
    {
        if ($this->covidAttestationEtudiants->contains($covidAttestationEtudiant)) {
            $this->covidAttestationEtudiants->removeElement($covidAttestationEtudiant);
            // set the owning side to null (unless already changed)
            if ($covidAttestationEtudiant->getDiplome() === $this) {
                $covidAttestationEtudiant->setDiplome(null);
            }
        }

        return $this;
    }

    public function serialize(): string
    {
        // Ajouté pour le problème de connexion avec le usernametoken
        return serialize([
            $this->getId(),
            $this->getLibelle(),
        ]);
    }

    public function unserialize($data): ?bool
    {
        return null;
    }

    /**
     * @return Collection|ApcParcours[]
     */
    public function getApcParcours(): Collection
    {
        return $this->apcParcours;
    }

    public function addApcParcour(ApcParcours $apcParcour): self
    {
        if (!$this->apcParcours->contains($apcParcour)) {
            $this->apcParcours[] = $apcParcour;
            $apcParcour->setDiplome($this);
        }

        return $this;
    }

    public function removeApcParcour(ApcParcours $apcParcour): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcParcours->removeElement($apcParcour) && $apcParcour->getDiplome() === $this) {
            $apcParcour->setDiplome(null);
        }

        return $this;
    }
}
