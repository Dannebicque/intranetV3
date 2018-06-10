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
    private $ordreAnnee; //dans l'année

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $ordreLmd; //dans le LMD

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
    private $nbGroupesTd = 1;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     */
    private $nbGroupesTP = 2;

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
    private $optMailReleve = false;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optMailModificationNote = false;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $optDestMailReleve;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $optDestMailModifNote;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optEvaluationVisible = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optEvaluationModifiable = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optPenaliteAbsence = true;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optMailAbsenceResp = false;

    /**
     * @var Personnel
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $optDestMailAbsenceResp;

    /**
     * @var boolean
     *
     * @ORM\Column(type="boolean")
     */
    private $optMailAbsenceEtudiant = false;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $optPointPenaliteAbsence = 0.5;

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

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CahierTexte", mappedBy="semestre")
     */
    private $cahierTextes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ue", mappedBy="semestre")
     */
    private $ues;

    public function __construct()
    {
        $this->articles = new ArrayCollection();
        $this->documents = new ArrayCollection();
        $this->dates = new ArrayCollection();
        $this->hrs = new ArrayCollection();
        $this->options = new ArrayCollection();
        $this->bornes = new ArrayCollection();
        $this->cahierTextes = new ArrayCollection();
        $this->ues = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getCodeApogee()
    {
        return $this->codeApogee;
    }

    /**
     * @param mixed $codeApogee
     */
    public function setCodeApogee($codeApogee): void
    {
        $this->codeApogee = $codeApogee;
    }

    /**
     * @return mixed
     */
    public function getCodeVersion()
    {
        return $this->codeVersion;
    }

    /**
     * @param mixed $codeVersion
     */
    public function setCodeVersion($codeVersion): void
    {
        $this->codeVersion = $codeVersion;
    }

    /**
     * @return mixed
     */
    public function getCodeDepartement()
    {
        return $this->codeDepartement;
    }

    /**
     * @param mixed $codeDepartement
     */
    public function setCodeDepartement($codeDepartement): void
    {
        $this->codeDepartement = $codeDepartement;
    }

    /**
     * @return Annee
     */
    public function getAnnee(): ?Annee
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
    public function getCouleur(): ?string
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
    public function getOrdreAnnee(): ?int
    {
        return $this->ordreAnnee;
    }

    /**
     * @param int $ordreAnnee
     */
    public function setOrdreAnnee(int $ordreAnnee): void
    {
        $this->ordreAnnee = $ordreAnnee;
    }

    /**
     * @return int
     */
    public function getOrdreLmd(): ?int
    {
        return $this->ordreLmd;
    }

    /**
     * @param int $ordreLmd
     */
    public function setOrdreLmd(int $ordreLmd): void
    {
        $this->ordreLmd = $ordreLmd;
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
        return $this->nbGroupesTd;
    }

    /**
     * @param int $nbGroupesTd
     */
    public function setNbGroupesTd(int $nbGroupesTd): void
    {
        $this->nbGroupesTd = $nbGroupesTd;
    }

    /**
     * @return int
     */
    public function getNbGroupesTP(): int
    {
        return $this->nbGroupesTP;
    }

    /**
     * @param int $nbGroupesTP
     */
    public function setNbGroupesTP(int $nbGroupesTP): void
    {
        $this->nbGroupesTP = $nbGroupesTP;
    }

    /**
     * @return bool
     */
    public function isOptMailReleve(): bool
    {
        return $this->optMailReleve;
    }

    /**
     * @param bool $optMailReleve
     */
    public function setOptMailReleve(bool $optMailReleve): void
    {
        $this->optMailReleve = $optMailReleve;
    }

    /**
     * @return bool
     */
    public function isOptMailModificationNote(): bool
    {
        return $this->optMailModificationNote;
    }

    /**
     * @param bool $optMailModificationNote
     */
    public function setOptMailModificationNote(bool $optMailModificationNote): void
    {
        $this->optMailModificationNote = $optMailModificationNote;
    }

    /**
     * @return Personnel
     */
    public function getOptDestMailReleve(): ?Personnel
    {
        return $this->optDestMailReleve;
    }

    /**
     * @param Personnel|null $optDestMailReleve
     */
    public function setOptDestMailReleve($optDestMailReleve): void
    {
        $this->optDestMailReleve = $optDestMailReleve;
    }

    /**
     * @return Personnel
     */
    public function getOptDestMailModifNote(): ?Personnel
    {
        return $this->optDestMailModifNote;
    }

    /**
     * @param Personnel|null $optDestMailModifNote
     */
    public function setOptDestMailModifNote( $optDestMailModifNote): void
    {
        $this->optDestMailModifNote = $optDestMailModifNote;
    }

    /**
     * @return bool
     */
    public function isOptEvaluationVisible(): bool
    {
        return $this->optEvaluationVisible;
    }

    /**
     * @param bool $optEvaluationVisible
     */
    public function setOptEvaluationVisible(bool $optEvaluationVisible): void
    {
        $this->optEvaluationVisible = $optEvaluationVisible;
    }

    /**
     * @return bool
     */
    public function isOptEvaluationModifiable(): bool
    {
        return $this->optEvaluationModifiable;
    }

    /**
     * @param bool $optEvaluationModifiable
     */
    public function setOptEvaluationModifiable(bool $optEvaluationModifiable): void
    {
        $this->optEvaluationModifiable = $optEvaluationModifiable;
    }

    /**
     * @return bool
     */
    public function isOptPenaliteAbsence(): bool
    {
        return $this->optPenaliteAbsence;
    }

    /**
     * @param bool $optPenaliteAbsence
     */
    public function setOptPenaliteAbsence(bool $optPenaliteAbsence): void
    {
        $this->optPenaliteAbsence = $optPenaliteAbsence;
    }

    /**
     * @return bool
     */
    public function isOptMailAbsenceResp(): bool
    {
        return $this->optMailAbsenceResp;
    }

    /**
     * @param bool $optMailAbsenceResp
     */
    public function setOptMailAbsenceResp(bool $optMailAbsenceResp): void
    {
        $this->optMailAbsenceResp = $optMailAbsenceResp;
    }

    /**
     * @return Personnel
     */
    public function getOptDestMailAbsenceResp(): ?Personnel
    {
        return $this->optDestMailAbsenceResp;
    }

    /**
     * @param Personnel|null $optDestMailAbsenceResp
     */
    public function setOptDestMailAbsenceResp($optDestMailAbsenceResp): void
    {
        $this->optDestMailAbsenceResp = $optDestMailAbsenceResp;
    }

    /**
     * @return bool
     */
    public function isOptMailAbsenceEtudiant(): bool
    {
        return $this->optMailAbsenceEtudiant;
    }

    /**
     * @param bool $optMailAbsenceEtudiant
     */
    public function setOptMailAbsenceEtudiant(bool $optMailAbsenceEtudiant): void
    {
        $this->optMailAbsenceEtudiant = $optMailAbsenceEtudiant;
    }

    /**
     * @return float
     */
    public function getOptPointPenaliteAbsence(): float
    {
        return $this->optPointPenaliteAbsence;
    }

    /**
     * @param float $optPointPenaliteAbsence
     */
    public function setOptPointPenaliteAbsence(float $optPointPenaliteAbsence): void
    {
        $this->optPointPenaliteAbsence = $optPointPenaliteAbsence;
    }

    /**
     * @return Etudiant[]
     */
    public function getEtudiants(): array
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
     * @return Collection|CahierTexte[]
     */
    public function getCahierTextes(): Collection
    {
        return $this->cahierTextes;
    }

    public function addCahierTexte(CahierTexte $cahierTexte): self
    {
        if (!$this->cahierTextes->contains($cahierTexte)) {
            $this->cahierTextes[] = $cahierTexte;
            $cahierTexte->setSemestre($this);
        }

        return $this;
    }

    public function removeCahierTexte(CahierTexte $cahierTexte): self
    {
        if ($this->cahierTextes->contains($cahierTexte)) {
            $this->cahierTextes->removeElement($cahierTexte);
            // set the owning side to null (unless already changed)
            if ($cahierTexte->getSemestre() === $this) {
                $cahierTexte->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Ue[]
     */
    public function getUes(): Collection
    {
        return $this->ues;
    }

    public function addUe(Ue $ue): self
    {
        if (!$this->ues->contains($ue)) {
            $this->ues[] = $ue;
            $ue->setSemestre($this);
        }

        return $this;
    }

    public function removeUe(Ue $ue): self
    {
        if ($this->ues->contains($ue)) {
            $this->ues->removeElement($ue);
            // set the owning side to null (unless already changed)
            if ($ue->getSemestre() === $this) {
                $ue->setSemestre(null);
            }
        }

        return $this;
    }
}
