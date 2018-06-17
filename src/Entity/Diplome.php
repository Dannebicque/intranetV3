<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DiplomeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Diplome extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeApogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeVersion;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $codeDepartement;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $responsableDiplome;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $assistantDiplome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeDiplome")
     */
    private $typeDiplome;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $optNbJoursSaisie = 15;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optDilpomeDecale = false; //existance du diplôme en décalé

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optSupprAbsence = false;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=10)
     */
    private $optMethodeCalcul = 'moymodules'; //ou moyues

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optAnonymat = false;

    /**
     * @var boolean
     *
     * @ORM\Column( type="boolean")
     */
    private $optCommentairesReleve = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optEspacePersoVisible = true;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $volumeHoraire = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $codeCelcatDepartement = 0;



    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="diplome")
     */
    private $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ppn", mappedBy="diplome")
     */
    private $ppns;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Competence", mappedBy="diplome")
     */
    private $competences;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation", inversedBy="diplomes")
     */
    private $formation;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Annee", mappedBy="diplome")
     */
    private $annees;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private $sigle;

    public function __construct()
    {
        $this->hrs = new ArrayCollection();
        $this->ppns = new ArrayCollection();
        $this->competences = new ArrayCollection();
        $this->annees = new ArrayCollection();
    }

    /**
     * @return null|string
     */
    public function getDisplay(): ?string
    {
        if ($this->getTypeDiplome() !== null) {
            return $this->getTypeDiplome()->getSigle() . ' ' . $this->libelle;
        }

        return $this->libelle;
    }

    public function getCodeApogee(): ?string
    {
        return $this->codeApogee;
    }

    public function setCodeApogee(string $codeApogee): self
    {
        $this->codeApogee = $codeApogee;

        return $this;
    }

    public function getCodeVersion(): ?string
    {
        return $this->codeVersion;
    }

    public function setCodeVersion(string $codeVersion): self
    {
        $this->codeVersion = $codeVersion;

        return $this;
    }

    public function getCodeDepartement(): ?string
    {
        return $this->codeDepartement;
    }

    public function setCodeDepartement(string $codeDepartement): self
    {
        $this->codeDepartement = $codeDepartement;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
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

    /**
     * @param Personnel $responsableDiplome
     */
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

    /**
     * @param Personnel $assistantDiplome
     */
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

    /**
     * @param mixed $typeDiplome
     */
    public function setTypeDiplome($typeDiplome): void
    {
        $this->typeDiplome = $typeDiplome;
    }

    /**
     * @return int
     */
    public function getOptNbJoursSaisie(): int
    {
        return $this->optNbJoursSaisie;
    }

    /**
     * @param int $optNbJoursSaisie
     */
    public function setOptNbJoursSaisie(int $optNbJoursSaisie): void
    {
        $this->optNbJoursSaisie = $optNbJoursSaisie;
    }

    /**
     * @return bool
     */
    public function isOptDilpomeDecale(): bool
    {
        return $this->optDilpomeDecale;
    }

    /**
     * @param bool $optDilpomeDecale
     */
    public function setOptDilpomeDecale(bool $optDilpomeDecale): void
    {
        $this->optDilpomeDecale = $optDilpomeDecale;
    }

    /**
     * @return bool
     */
    public function isOptSupprAbsence(): bool
    {
        return $this->optSupprAbsence;
    }

    /**
     * @param bool $optSupprAbsence
     */
    public function setOptSupprAbsence(bool $optSupprAbsence): void
    {
        $this->optSupprAbsence = $optSupprAbsence;
    }

    /**
     * @return string
     */
    public function getOptMethodeCalcul(): string
    {
        return $this->optMethodeCalcul;
    }

    /**
     * @param string $optMethodeCalcul
     */
    public function setOptMethodeCalcul(string $optMethodeCalcul): void
    {
        $this->optMethodeCalcul = $optMethodeCalcul;
    }

    /**
     * @return bool
     */
    public function isOptAnonymat(): bool
    {
        return $this->optAnonymat;
    }

    /**
     * @param bool $optAnonymat
     */
    public function setOptAnonymat(bool $optAnonymat): void
    {
        $this->optAnonymat = $optAnonymat;
    }

    /**
     * @return bool
     */
    public function isOptCommentairesReleve(): bool
    {
        return $this->optCommentairesReleve;
    }

    /**
     * @param bool $optCommentairesReleve
     */
    public function setOptCommentairesReleve(bool $optCommentairesReleve): void
    {
        $this->optCommentairesReleve = $optCommentairesReleve;
    }

    /**
     * @return bool
     */
    public function isOptEspacePersoVisible(): bool
    {
        return $this->optEspacePersoVisible;
    }

    /**
     * @param bool $optEspacePersoVisible
     */
    public function setOptEspacePersoVisible(bool $optEspacePersoVisible): void
    {
        $this->optEspacePersoVisible = $optEspacePersoVisible;
    }

    /**
     * @return int
     */
    public function getVolumeHoraire(): int
    {
        return $this->volumeHoraire;
    }

    /**
     * @param int $volumeHoraire
     */
    public function setVolumeHoraire(int $volumeHoraire): void
    {
        $this->volumeHoraire = $volumeHoraire;
    }

    /**
     * @return int
     */
    public function getCodeCelcatDepartement(): int
    {
        return $this->codeCelcatDepartement;
    }

    /**
     * @param int $codeCelcatDepartement
     */
    public function setCodeCelcatDepartement(int $codeCelcatDepartement): void
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

    public function update($name, $value): void
    {
        $t = explode('_', $name);
        $name = $t[0];
        $name[0] = \chr(\ord($name[0]) - 32);
        $method = 'set' . $name;
        if (method_exists($this, $method)) {
            $this->$method($value);
        }
    }

    /**
     * @return Collection|Competence[]
     */
    public function getCompetences(): Collection
    {
        return $this->competences;
    }

    public function addCompetence(Competence $competence): self
    {
        if (!$this->competences->contains($competence)) {
            $this->competences[] = $competence;
            $competence->setDiplome($this);
        }

        return $this;
    }

    public function removeCompetence(Competence $competence): self
    {
        if ($this->competences->contains($competence)) {
            $this->competences->removeElement($competence);
            // set the owning side to null (unless already changed)
            if ($competence->getDiplome() === $this) {
                $competence->setDiplome(null);
            }
        }

        return $this;
    }

    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    public function setFormation(?Formation $formation): self
    {
        $this->formation = $formation;

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
}
