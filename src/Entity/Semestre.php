<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SemestreRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Semestre extends BaseEntity
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
     * @var Annee
     * @ORM\ManyToOne(targetEntity="App\Entity\Annee")
     */
    private $annee;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=20, nullable=true)
     */
    private $couleur;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $ordre_annee; //dans l'année

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $ordre_lmd; //dans le LMD

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $actif = false;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $precedent;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $suivant;

    /**
     * @var Semestre
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private $decale; //semestre equivalent en décalé

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $nb_groupes_td = 1;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $nb_groupes_TP = 2;

    /**
     * @var
     * @ORM\OneToMany(targetEntity="App\Entity\Etudiant", mappedBy="semestre")
     */
    private $etudiants;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_mail_releve = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_mail_modification_note = false;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $opt_destinataire_mail_releve;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $opt_destinataire_mail_modification_note;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_evaluation_visible = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_evaluation_modifiable = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_penalite_absence = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_mail_absence_responsable = false;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $opt_destinataire_mail_absence_responsable;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $opt_mail_absence_etudiant = false;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $opt_point_penalite_absence = 0.5;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Article", mappedBy="semestres")
     */
    private $articles;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Document", mappedBy="semestres")
     */
    private $documents;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Date", mappedBy="semestres")
     */
    private $dates;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="semestre")
     */
    private $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Parcour", mappedBy="semestre")
     */
    private $options;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Borne", mappedBy="semestres")
     */
    private $bornes;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
        $this->documents = new ArrayCollection();
        $this->dates = new ArrayCollection();
        $this->hrs = new ArrayCollection();
        $this->options = new ArrayCollection();
        $this->bornes = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getCodeApogee()
    {
        return $this->code_apogee;
    }

    /**
     * @param mixed $code_apogee
     */
    public function setCodeApogee($code_apogee): void
    {
        $this->code_apogee = $code_apogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->code_version;
    }

    /**
     * @param mixed $code_version
     */
    public function setCodeVersion($code_version): void
    {
        $this->code_version = $code_version;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->code_departement;
    }

    /**
     * @param mixed $code_departement
     */
    public function setCodeDepartement($code_departement): void
    {
        $this->code_departement = $code_departement;
    }

    /**
     * @return Annee
     */
    public function getAnnee(): Annee
    {
        return $this->annee;
    }

    /**
     * @param Annee $annee
     */
    public function setAnnee(Annee $annee): void
    {
        $this->annee = $annee;
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
     * @return string
     */
    public function getCouleur(): string
    {
        return $this->couleur;
    }

    /**
     * @param string $couleur
     */
    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }

    /**
     * @return int
     */
    public function getOrdreAnnee(): int
    {
        return $this->ordre_annee;
    }

    /**
     * @param int $ordre_annee
     */
    public function setOrdreAnnee(int $ordre_annee): void
    {
        $this->ordre_annee = $ordre_annee;
    }

    /**
     * @return int
     */
    public function getOrdreLmd(): int
    {
        return $this->ordre_lmd;
    }

    /**
     * @param int $ordre_lmd
     */
    public function setOrdreLmd(int $ordre_lmd): void
    {
        $this->ordre_lmd = $ordre_lmd;
    }

    /**
     * @return bool
     */
    public function isActif(): bool
    {
        return $this->actif;
    }

    /**
     * @param bool $actif
     */
    public function setActif(bool $actif): void
    {
        $this->actif = $actif;
    }

    /**
     * @return Semestre
     */
    public function getPrecedent(): ?Semestre
    {
        return $this->precedent;
    }

    /**
     * @param Semestre $precedent
     */
    public function setPrecedent(Semestre $precedent): void
    {
        $this->precedent = $precedent;
    }

    /**
     * @return Semestre
     */
    public function getSuivant(): ?Semestre
    {
        return $this->suivant;
    }

    /**
     * @param Semestre $suivant
     */
    public function setSuivant(Semestre $suivant): void
    {
        $this->suivant = $suivant;
    }

    /**
     * @return Semestre
     */
    public function getDecale(): ?Semestre
    {
        return $this->decale;
    }

    /**
     * @param Semestre $decale
     */
    public function setDecale(Semestre $decale): void
    {
        $this->decale = $decale;
    }

    /**
     * @return int
     */
    public function getNbGroupesTd(): int
    {
        return $this->nb_groupes_td;
    }

    /**
     * @param int $nb_groupes_td
     */
    public function setNbGroupesTd(int $nb_groupes_td): void
    {
        $this->nb_groupes_td = $nb_groupes_td;
    }

    /**
     * @return int
     */
    public function getNbGroupesTP(): int
    {
        return $this->nb_groupes_TP;
    }

    /**
     * @param int $nb_groupes_TP
     */
    public function setNbGroupesTP(int $nb_groupes_TP): void
    {
        $this->nb_groupes_TP = $nb_groupes_TP;
    }

    /**
     * @return bool
     */
    public function isOptMailReleve(): bool
    {
        return $this->opt_mail_releve;
    }

    /**
     * @param bool $opt_mail_releve
     */
    public function setOptMailReleve(bool $opt_mail_releve): void
    {
        $this->opt_mail_releve = $opt_mail_releve;
    }

    /**
     * @return bool
     */
    public function isOptMailModificationNote(): bool
    {
        return $this->opt_mail_modification_note;
    }

    /**
     * @param bool $opt_mail_modification_note
     */
    public function setOptMailModificationNote(bool $opt_mail_modification_note): void
    {
        $this->opt_mail_modification_note = $opt_mail_modification_note;
    }

    /**
     * @return Personnel
     */
    public function getOptDestinataireMailReleve(): ?Personnel
    {
        return $this->opt_destinataire_mail_releve;
    }

    /**
     * @param Personnel $opt_destinataire_mail_releve
     */
    public function setOptDestinataireMailReleve(Personnel $opt_destinataire_mail_releve): void
    {
        $this->opt_destinataire_mail_releve = $opt_destinataire_mail_releve;
    }

    /**
     * @return Personnel
     */
    public function getOptDestinataireMailModificationNote(): ?Personnel
    {
        return $this->opt_destinataire_mail_modification_note;
    }

    /**
     * @param Personnel $opt_destinataire_mail_modification_note
     */
    public function setOptDestinataireMailModificationNote(Personnel $opt_destinataire_mail_modification_note): void
    {
        $this->opt_destinataire_mail_modification_note = $opt_destinataire_mail_modification_note;
    }

    /**
     * @return bool
     */
    public function isOptEvaluationVisible(): bool
    {
        return $this->opt_evaluation_visible;
    }

    /**
     * @param bool $opt_evaluation_visible
     */
    public function setOptEvaluationVisible(bool $opt_evaluation_visible): void
    {
        $this->opt_evaluation_visible = $opt_evaluation_visible;
    }

    /**
     * @return bool
     */
    public function isOptEvaluationModifiable(): bool
    {
        return $this->opt_evaluation_modifiable;
    }

    /**
     * @param bool $opt_evaluation_modifiable
     */
    public function setOptEvaluationModifiable(bool $opt_evaluation_modifiable): void
    {
        $this->opt_evaluation_modifiable = $opt_evaluation_modifiable;
    }

    /**
     * @return bool
     */
    public function isOptPenaliteAbsence(): bool
    {
        return $this->opt_penalite_absence;
    }

    /**
     * @param bool $opt_penalite_absence
     */
    public function setOptPenaliteAbsence(bool $opt_penalite_absence): void
    {
        $this->opt_penalite_absence = $opt_penalite_absence;
    }

    /**
     * @return bool
     */
    public function isOptMailAbsenceResponsable(): bool
    {
        return $this->opt_mail_absence_responsable;
    }

    /**
     * @param bool $opt_mail_absence_responsable
     */
    public function setOptMailAbsenceResponsable(bool $opt_mail_absence_responsable): void
    {
        $this->opt_mail_absence_responsable = $opt_mail_absence_responsable;
    }

    /**
     * @return Personnel
     */
    public function getOptDestinataireMailAbsenceResponsable(): ?Personnel
    {
        return $this->opt_destinataire_mail_absence_responsable;
    }

    /**
     * @param Personnel $opt_destinataire_mail_absence_responsable
     */
    public function setOptDestinataireMailAbsenceResponsable(Personnel $opt_destinataire_mail_absence_responsable): void
    {
        $this->opt_destinataire_mail_absence_responsable = $opt_destinataire_mail_absence_responsable;
    }

    /**
     * @return bool
     */
    public function isOptMailAbsenceEtudiant(): bool
    {
        return $this->opt_mail_absence_etudiant;
    }

    /**
     * @param bool $opt_mail_absence_etudiant
     */
    public function setOptMailAbsenceEtudiant(bool $opt_mail_absence_etudiant): void
    {
        $this->opt_mail_absence_etudiant = $opt_mail_absence_etudiant;
    }

    /**
     * @return float
     */
    public function getOptPointPenaliteAbsence(): float
    {
        return $this->opt_point_penalite_absence;
    }

    /**
     * @param float $opt_point_penalite_absence
     */
    public function setOptPointPenaliteAbsence(float $opt_point_penalite_absence): void
    {
        $this->opt_point_penalite_absence = $opt_point_penalite_absence;
    }

    /**
     * @return mixed
     */
    public function getEtudiants()
    {
        return $this->etudiants;
    }

    /**
     * @param mixed $etudiants
     */
    public function setEtudiants($etudiants): void
    {
        $this->etudiants = $etudiants;
    }

    /**
     * @return string
     */
    public function display() :string
    {
        if ($this->getAnnee() !== null)
        {
            return $this->libelle . ' | ' . $this->getAnnee()->getLibelle();
        }

        return $this->libelle;
    }

    /**
     * @return Collection|Article[]
     */
    public function getArticles(): Collection
    {
        return $this->articles;
    }

    public function addArticle(Article $article): self
    {
        if (!$this->articles->contains($article)) {
            $this->articles[] = $article;
            $article->addSemestre($this);
        }

        return $this;
    }

    public function removeArticle(Article $article): self
    {
        if ($this->articles->contains($article)) {
            $this->articles->removeElement($article);
            $article->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection|Document[]
     */
    public function getDocuments(): Collection
    {
        return $this->documents;
    }

    public function addDocument(Document $document): self
    {
        if (!$this->documents->contains($document)) {
            $this->documents[] = $document;
            $document->addSemestre($this);
        }

        return $this;
    }

    public function removeDocument(Document $document): self
    {
        if ($this->documents->contains($document)) {
            $this->documents->removeElement($document);
            $document->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection|Date[]
     */
    public function getDates(): Collection
    {
        return $this->dates;
    }

    public function addDate(Date $date): self
    {
        if (!$this->dates->contains($date)) {
            $this->dates[] = $date;
            $date->addSemestre($this);
        }

        return $this;
    }

    public function removeDate(Date $date): self
    {
        if ($this->dates->contains($date)) {
            $this->dates->removeElement($date);
            $date->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection|Hrs[]
     */
    public function getHrs(): Collection
    {
        return $this->hrs;
    }

    public function addHrs(Hrs $hrs): self
    {
        if (!$this->hrs->contains($hrs)) {
            $this->hrs[] = $hrs;
            $hrs->setSemestre($this);
        }

        return $this;
    }

    public function removeHrs(Hrs $hrs): self
    {
        if ($this->hrs->contains($hrs)) {
            $this->hrs->removeElement($hrs);
            // set the owning side to null (unless already changed)
            if ($hrs->getSemestre() === $this) {
                $hrs->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Parcour[]
     */
    public function getOptions(): Collection
    {
        return $this->options;
    }

    public function addOption(Parcour $option): self
    {
        if (!$this->options->contains($option)) {
            $this->options[] = $option;
            $option->setSemestre($this);
        }

        return $this;
    }

    public function removeOption(Parcour $option): self
    {
        if ($this->options->contains($option)) {
            $this->options->removeElement($option);
            // set the owning side to null (unless already changed)
            if ($option->getSemestre() === $this) {
                $option->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Borne[]
     */
    public function getBornes(): Collection
    {
        return $this->bornes;
    }

    public function addBorne(Borne $borne): self
    {
        if (!$this->bornes->contains($borne)) {
            $this->bornes[] = $borne;
            $borne->addSemestre($this);
        }

        return $this;
    }

    public function removeBorne(Borne $borne): self
    {
        if ($this->bornes->contains($borne)) {
            $this->bornes->removeElement($borne);
            $borne->removeSemestre($this);
        }

        return $this;
    }
}
