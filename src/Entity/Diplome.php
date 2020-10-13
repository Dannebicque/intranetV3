<?php
// Copyright (c) 2020. | David Annebicque | IUT de Troyes  - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Diplome.php
// @author davidannebicque
// @project intranetV3
// @lastUpdate 12/10/2020 18:20

namespace App\Entity;

use App\Entity\Traits\ApogeeTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use function chr;
use function ord;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DiplomeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Diplome extends BaseEntity
{
    use ApogeeTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

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
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeDiplome", inversedBy="diplomes")
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Departement", inversedBy="diplomes")
     */
    private $departement;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Annee", mappedBy="diplome")
     * @ORM\OrderBy({"libelle"="ASC"})
     */
    private $annees;

    /**
     * @ORM\Column(type="string", length=40)
     */
    private $sigle;

    /**
     * @ORM\Column(type="boolean")
     */
    private $actif = true;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="diplomes")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\Column(type="integer")
     */
    private $optSemainesVisibles = 2;

    /**
     * @ORM\Column(type="boolean")
     */
    private $optCertifieQualite = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $optResponsableQualite;

    /**
     * @ORM\OneToMany(targetEntity=ApcComptence::class, mappedBy="diplome")
     */
    private $apcComptences;

    public function __construct(Departement $departement)
    {
        $this->departement = $departement;
        $this->hrs = new ArrayCollection();
        $this->ppns = new ArrayCollection();
        $this->annees = new ArrayCollection();
        $this->apcComptences = new ArrayCollection();
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
    public function setCodeCelcatDepartement($codeCelcatDepartement): void
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

    /**
     * @param Hrs $hr
     *
     * @return Diplome
     */
    public function addHr(Hrs $hr): self
    {
        if (!$this->hrs->contains($hr)) {
            $this->hrs[] = $hr;
            $hr->setDiplome($this);
        }

        return $this;
    }

    /**
     * @param Hrs $hr
     *
     * @return Diplome
     */
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

    /**
     * @param Ppn $ppn
     *
     * @return Diplome
     */
    public function addPpn(Ppn $ppn): self
    {
        if (!$this->ppns->contains($ppn)) {
            $this->ppns[] = $ppn;
            $ppn->setDiplome($this);
        }

        return $this;
    }

    /**
     * @param Ppn $ppn
     *
     * @return Diplome
     */
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

    /**
     * @param $name
     * @param $value
     *
     * @return bool
     */
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

    /**
     * @return Departement|null
     */
    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    /**
     * @param Departement|null $departement
     *
     * @return Diplome
     */
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

    /**
     * @param Annee $annee
     *
     * @return Diplome
     */
    public function addAnnee(Annee $annee): self
    {
        if (!$this->annees->contains($annee)) {
            $this->annees[] = $annee;
            $annee->setDiplome($this);
        }

        return $this;
    }

    /**
     * @param Annee $annee
     *
     * @return Diplome
     */
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

    /**
     * @return null|string
     */
    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    /**
     * @param string $sigle
     *
     * @return Diplome
     */
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


    /**
     * @return string
     */
    public function displayAnneeUniversitaire(): string
    {
        return $this->getAnneeUniversitaire() !== null ? $this->getAnneeUniversitaire()->displayAnneeUniversitaire() : 'err';

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

    /**
     * @return string
     */
    public function getLibelleLong(): string
    {
        if ($this->getTypeDiplome() !== null) {
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
     * @return Collection|ApcComptence[]
     */
    public function getApcComptences(): Collection
    {
        return $this->apcComptences;
    }

    public function addApcComptence(ApcComptence $apcComptence): self
    {
        if (!$this->apcComptences->contains($apcComptence)) {
            $this->apcComptences[] = $apcComptence;
            $apcComptence->setDiplome($this);
        }

        return $this;
    }

    public function removeApcComptence(ApcComptence $apcComptence): self
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
}
