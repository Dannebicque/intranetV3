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
    private $code_apogee;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_version;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $code_departement;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $responsable_diplome;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $assistant_diplome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeDiplome")
     */
    private $type_diplome;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $opt_nb_jours_saisie = 15;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_dilpome_decale = false; //existance du diplôme en décalé

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_suppr_absence = false;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=10)
     */
    private $opt_methode_calcul = 'moymodules'; //ou moyues

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_anonymat = false;

    /**
     * @var boolean
     *
     * @ORM\Column( type="boolean")
     */
    private $opt_commentaires_releve = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_espace_perso_visible = true;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $volume_horaire = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $code_celcat_departement = 0;

    /**
     * @var Formation
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation")
     */
    private $formation;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="diplome")
     */
    private $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ppn", mappedBy="diplome")
     */
    private $ppns;

    public function __construct()
    {
        $this->hrs = new ArrayCollection();
        $this->ppns = new ArrayCollection();
    }

    public function getCodeApogee(): ?string
    {
        return $this->code_apogee;
    }

    public function setCodeApogee(string $code_apogee): self
    {
        $this->code_apogee = $code_apogee;

        return $this;
    }

    public function getCodeVersion(): ?string
    {
        return $this->code_version;
    }

    public function setCodeVersion(string $code_version): self
    {
        $this->code_version = $code_version;

        return $this;
    }

    public function getCodeDepartement(): ?string
    {
        return $this->code_departement;
    }

    public function setCodeDepartement(string $code_departement): self
    {
        $this->code_departement = $code_departement;

        return $this;
    }


    /**
     * @return Formation
     */
    public function getFormation(): ?Formation
    {
        return $this->formation;
    }

    /**
     * @param Formation $formation
     */
    public function setFormation(Formation $formation): void
    {
        $this->formation = $formation;
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
        return $this->responsable_diplome;
    }

    /**
     * @param Personnel $responsable_diplome
     */
    public function setResponsableDiplome(Personnel $responsable_diplome): void
    {
        $this->responsable_diplome = $responsable_diplome;
    }

    /**
     * @return Personnel
     */
    public function getAssistantDiplome(): ?Personnel
    {
        return $this->assistant_diplome;
    }

    /**
     * @param Personnel $assistant_diplome
     */
    public function setAssistantDiplome(Personnel $assistant_diplome): void
    {
        $this->assistant_diplome = $assistant_diplome;
    }

    /**
     * @return TypeDiplome
     */
    public function getTypeDiplome(): ?TypeDiplome
    {
        return $this->type_diplome;
    }

    /**
     * @param mixed $type_diplome
     */
    public function setTypeDiplome($type_diplome): void
    {
        $this->type_diplome = $type_diplome;
    }

    /**
     * @return int
     */
    public function getOptNbJoursSaisie(): int
    {
        return $this->opt_nb_jours_saisie;
    }

    /**
     * @param int $opt_nb_jours_saisie
     */
    public function setOptNbJoursSaisie(int $opt_nb_jours_saisie): void
    {
        $this->opt_nb_jours_saisie = $opt_nb_jours_saisie;
    }

    /**
     * @return bool
     */
    public function isOptDilpomeDecale(): bool
    {
        return $this->opt_dilpome_decale;
    }

    /**
     * @param bool $opt_dilpome_decale
     */
    public function setOptDilpomeDecale(bool $opt_dilpome_decale): void
    {
        $this->opt_dilpome_decale = $opt_dilpome_decale;
    }

    /**
     * @return bool
     */
    public function isOptSupprAbsence(): bool
    {
        return $this->opt_suppr_absence;
    }

    /**
     * @param bool $opt_suppr_absence
     */
    public function setOptSupprAbsence(bool $opt_suppr_absence): void
    {
        $this->opt_suppr_absence = $opt_suppr_absence;
    }

    /**
     * @return string
     */
    public function getOptMethodeCalcul(): string
    {
        return $this->opt_methode_calcul;
    }

    /**
     * @param string $opt_methode_calcul
     */
    public function setOptMethodeCalcul(string $opt_methode_calcul): void
    {
        $this->opt_methode_calcul = $opt_methode_calcul;
    }

    /**
     * @return bool
     */
    public function isOptAnonymat(): bool
    {
        return $this->opt_anonymat;
    }

    /**
     * @param bool $opt_anonymat
     */
    public function setOptAnonymat(bool $opt_anonymat): void
    {
        $this->opt_anonymat = $opt_anonymat;
    }

    /**
     * @return bool
     */
    public function isOptCommentairesReleve(): bool
    {
        return $this->opt_commentaires_releve;
    }

    /**
     * @param bool $opt_commentaires_releve
     */
    public function setOptCommentairesReleve(bool $opt_commentaires_releve): void
    {
        $this->opt_commentaires_releve = $opt_commentaires_releve;
    }

    /**
     * @return bool
     */
    public function isOptEspacePersoVisible(): bool
    {
        return $this->opt_espace_perso_visible;
    }

    /**
     * @param bool $opt_espace_perso_visible
     */
    public function setOptEspacePersoVisible(bool $opt_espace_perso_visible): void
    {
        $this->opt_espace_perso_visible = $opt_espace_perso_visible;
    }

    /**
     * @return int
     */
    public function getVolumeHoraire(): int
    {
        return $this->volume_horaire;
    }

    /**
     * @param int $volume_horaire
     */
    public function setVolumeHoraire(int $volume_horaire): void
    {
        $this->volume_horaire = $volume_horaire;
    }

    /**
     * @return int
     */
    public function getCodeCelcatDepartement(): int
    {
        return $this->code_celcat_departement;
    }

    /**
     * @param int $code_celcat_departement
     */
    public function setCodeCelcatDepartement(int $code_celcat_departement): void
    {
        $this->code_celcat_departement = $code_celcat_departement;
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


}
