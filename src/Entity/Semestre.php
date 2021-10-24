<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Semestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/10/2021 15:04
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Utils\Tools;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SemestreRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Semestre extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"article_administration", "date_administration", "semestre",
     *                                    "etudiants_administration","document_administration"})
     */
    private ?string $libelle;

    /**
     * @ORM\Column(type="string", length=20, nullable=true)
     * @deprecated
     */
    private ?string $couleur;

    /**
     * @ORM\Column(type="integer")
     */
    private int $ordreAnnee; //dans l'année

    /**
     * @ORM\Column(type="integer")
     */
    private int $ordreLmd; //dans le LMD

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $actif = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private ?Semestre $precedent;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private ?Semestre $suivant;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre")
     */
    private ?Semestre $decale; //semestre equivalent en décalé

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGroupesCm = 1;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGroupesTd = 1;

    /**
     * @ORM\Column(type="integer")
     */
    private int $nbGroupesTP = 2;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Etudiant", mappedBy="semestre")
     * @ORM\OrderBy({"nom" = "ASC", "prenom" = "ASC"})
     */
    private Collection $etudiants;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optMailReleve = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optMailModificationNote = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private ?Personnel $optDestMailReleve;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private ?Personnel $optDestMailModifNote;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optEvaluationVisible = true;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optEvaluationModifiable = true;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optPenaliteAbsence = true;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optMailAbsenceResp = false;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private ?Personnel $optDestMailAbsenceResp;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optMailAbsenceEtudiant = false;

    /**
     * @ORM\Column(type="float")
     */
    private float $optPointPenaliteAbsence = 0.5;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Article", mappedBy="semestres")
     */
    private Collection $articles;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Document", mappedBy="semestres")
     */
    private Collection $documents;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Date", mappedBy="semestres")
     */
    private Collection $dates;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Hrs", mappedBy="semestre")
     */
    private Collection $hrs;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Parcour", mappedBy="semestre")
     */
    private Collection $parcours;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Borne", mappedBy="semestres")
     */
    private Collection $bornes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CahierTexte", mappedBy="semestre")
     */
    private Collection $cahierTextes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Ue", mappedBy="semestre")
     * @ORM\OrderBy({"numeroUe" = "ASC"})
     */
    private Collection $ues;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\TypeGroupe", mappedBy="semestre")
     * @ORM\OrderBy({"libelle" = "ASC"})
     */
    private Collection $typeGroupes;

    /**
     * @ORM\Column(type="integer")
     */
    private ?int $moisDebut;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Annee", inversedBy="semestres", fetch="EAGER")
     * @Groups({"semestre"})
     */
    private ?Annee $annee;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StagePeriode", mappedBy="semestre")
     */
    private Collection $stagePeriodes;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ScolaritePromo", mappedBy="semestre")
     */
    private Collection $scolaritePromos;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Ppn", inversedBy="semestres")
     */
    private ?Ppn $ppn_actif;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codeElement;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $optEvaluationPreInitialisee = false;

    /**
     * @ORM\OneToMany(targetEntity="QuestionnaireQualite", mappedBy="semestre")
     */
    private Collection $qualiteQuestionnaires;

    /**
     * @ORM\Column(type="integer")
     */
    private int $optNbJoursSaisieAbsence = 10;

    /**
     * @ORM\OneToMany(targetEntity=ProjetPeriode::class, mappedBy="semestre")
     */
    private Collection $projetPeriodes;

    /**
     * @ORM\OneToMany(targetEntity=ApcRessource::class, mappedBy="semestre")
     */
    private Collection $apcRessources;

    /**
     * @ORM\OneToMany(targetEntity=ApcSae::class, mappedBy="semestre")
     */
    private Collection $apcSaes;

    /**
     * @ORM\OneToMany(targetEntity=AbsenceEtatAppel::class, mappedBy="semestre")
     */
    private $absenceEtatAppels;

    /**
     * @ORM\OneToMany(targetEntity=CelcatEvent::class, mappedBy="semestre")
     */
    private $celcatEvents;

    /**
     * @ORM\OneToMany(targetEntity=Evaluation::class, mappedBy="semestre")
     */
    private $evaluations;

    /**
     * @ORM\OneToMany(targetEntity=Rattrapage::class, mappedBy="semestre")
     */
    private $rattrapages;

    /**
     * @ORM\OneToMany(targetEntity=AbsenceJustificatif::class, mappedBy="semestre")
     */
    private $absenceJustificatifs;

    /**
     * @ORM\OneToMany(targetEntity=Absence::class, mappedBy="semestre")
     */
    private $absences;

    public function __construct()
    {
        $this->init();
        $this->evaluations = new ArrayCollection();
        $this->rattrapages = new ArrayCollection();
        $this->absenceJustificatifs = new ArrayCollection();
        $this->absences = new ArrayCollection();
    }

    public function __clone()
    {
        $this->init();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }

    public function getOrdreAnnee(): ?int
    {
        return $this->ordreAnnee;
    }

    public function setOrdreAnnee(int $ordreAnnee = 1): void
    {
        $this->ordreAnnee = $ordreAnnee;
    }

    public function getOrdreLmd(): ?int
    {
        return $this->ordreLmd;
    }

    public function setOrdreLmd(int $ordreLmd): void
    {
        $this->ordreLmd = $ordreLmd;
    }

    public function isActif(): bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): void
    {
        $this->actif = $actif;
    }

    public function getPrecedent(): ?self
    {
        return $this->precedent;
    }

    public function setPrecedent(?self $precedent): void
    {
        $this->precedent = $precedent;
    }

    public function getSuivant(): ?self
    {
        return $this->suivant;
    }

    public function setSuivant(?self $suivant): void
    {
        $this->suivant = $suivant;
    }

    public function getDecale(): ?self
    {
        return $this->decale;
    }

    public function setDecale(?self $decale): void
    {
        $this->decale = $decale;
    }

    public function getNbGroupesTd(): int
    {
        return $this->nbGroupesTd;
    }

    public function setNbGroupesTd(int $nbGroupesTd): void
    {
        $this->nbGroupesTd = $nbGroupesTd;
    }

    public function getNbGroupesTP(): int
    {
        return $this->nbGroupesTP;
    }

    public function setNbGroupesTP(int $nbGroupesTP): void
    {
        $this->nbGroupesTP = $nbGroupesTP;
    }

    public function isOptMailReleve(): bool
    {
        return $this->optMailReleve;
    }

    public function setOptMailReleve(bool $optMailReleve): void
    {
        $this->optMailReleve = $optMailReleve;
    }

    public function isOptMailModificationNote(): bool
    {
        return $this->optMailModificationNote;
    }

    public function setOptMailModificationNote(bool $optMailModificationNote): void
    {
        $this->optMailModificationNote = $optMailModificationNote;
    }

    public function getOptDestMailReleve(): ?Personnel
    {
        return $this->optDestMailReleve;
    }

    public function setOptDestMailReleve(?Personnel $optDestMailReleve): void
    {
        $this->optDestMailReleve = $optDestMailReleve;
    }

    public function getOptDestMailModifNote(): ?Personnel
    {
        return $this->optDestMailModifNote;
    }

    public function setOptDestMailModifNote(?Personnel $optDestMailModifNote): void
    {
        $this->optDestMailModifNote = $optDestMailModifNote;
    }

    public function isOptEvaluationVisible(): bool
    {
        return $this->optEvaluationVisible;
    }

    public function setOptEvaluationVisible(bool $optEvaluationVisible): void
    {
        $this->optEvaluationVisible = $optEvaluationVisible;
    }

    public function isOptEvaluationModifiable(): bool
    {
        return $this->optEvaluationModifiable;
    }

    public function setOptEvaluationModifiable(bool $optEvaluationModifiable): void
    {
        $this->optEvaluationModifiable = $optEvaluationModifiable;
    }

    public function isOptPenaliteAbsence(): bool
    {
        return $this->optPenaliteAbsence;
    }

    public function setOptPenaliteAbsence(bool $optPenaliteAbsence): void
    {
        $this->optPenaliteAbsence = $optPenaliteAbsence;
    }

    public function isOptMailAbsenceResp(): bool
    {
        return $this->optMailAbsenceResp;
    }

    public function setOptMailAbsenceResp(bool $optMailAbsenceResp): void
    {
        $this->optMailAbsenceResp = $optMailAbsenceResp;
    }

    public function getOptDestMailAbsenceResp(): ?Personnel
    {
        return $this->optDestMailAbsenceResp;
    }

    public function setOptDestMailAbsenceResp(?Personnel $optDestMailAbsenceResp): void
    {
        $this->optDestMailAbsenceResp = $optDestMailAbsenceResp;
    }

    public function isOptMailAbsenceEtudiant(): bool
    {
        return $this->optMailAbsenceEtudiant;
    }

    public function setOptMailAbsenceEtudiant(bool $optMailAbsenceEtudiant): void
    {
        $this->optMailAbsenceEtudiant = $optMailAbsenceEtudiant;
    }

    public function getOptPointPenaliteAbsence(): float
    {
        return $this->optPointPenaliteAbsence;
    }

    public function setOptPointPenaliteAbsence(float $optPointPenaliteAbsence): void
    {
        $this->optPointPenaliteAbsence = $optPointPenaliteAbsence;
    }

    public function getEtudiants(): ArrayCollection|Collection
    {
        return $this->etudiants;
    }

    public function setEtudiants($etudiants): void
    {
        $this->etudiants = $etudiants;
    }

    public function display(): string
    {
        if (null !== $this->getAnnee()) {
            return $this->libelle . ' | ' . $this->getAnnee()->getLibelle();
        }

        return $this->libelle;
    }

    public function displayAvecTypeDiplome(): string
    {
        if (null !== $this->getAnnee() && null !== $this->getAnnee()->getDiplome() && null !== $this->getAnnee()->getDiplome()->getTypeDiplome()) {
            return $this->getAnnee()->getDiplome()->getTypeDiplome()->getSigle() . ' | ' . $this->libelle;
        }

        return $this->libelle;
    }

    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    public function setAnnee(Annee $annee): void
    {
        $this->annee = $annee;
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
    public function getParcours(): Collection
    {
        return $this->parcours;
    }

    public function addParcour(Parcour $option): self
    {
        if (!$this->parcours->contains($option)) {
            $this->parcours[] = $option;
            $option->setSemestre($this);
        }

        return $this;
    }

    public function removeParcour(Parcour $option): self
    {
        if ($this->parcours->contains($option)) {
            $this->parcours->removeElement($option);
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

    /**
     * @param $name
     * @param $value
     */
    public function update($name, $value): void
    {
        Tools::updateFields($name, $value, $this);
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

    /**
     * @return Collection|TypeGroupe[]
     */
    public function getTypeGroupes(): Collection
    {
        return $this->typeGroupes;
    }

    public function addTypeGroupe(TypeGroupe $typeGroupe): self
    {
        if (!$this->typeGroupes->contains($typeGroupe)) {
            $this->typeGroupes[] = $typeGroupe;
            $typeGroupe->setSemestre($this);
        }

        return $this;
    }

    public function removeTypeGroupe(TypeGroupe $typeGroupe): self
    {
        if ($this->typeGroupes->contains($typeGroupe)) {
            $this->typeGroupes->removeElement($typeGroupe);
            // set the owning side to null (unless already changed)
            if ($typeGroupe->getSemestre() === $this) {
                $typeGroupe->setSemestre(null);
            }
        }

        return $this;
    }

    public function getMoisDebut(): ?int
    {
        return $this->moisDebut;
    }

    public function setMoisDebut(int $moisDebut): self
    {
        $this->moisDebut = $moisDebut;

        return $this;
    }

    /**
     * @return Collection|StagePeriode[]
     */
    public function getStagePeriodes(): Collection
    {
        return $this->stagePeriodes;
    }

    public function addStagePeriode(StagePeriode $stagePeriode): self
    {
        if (!$this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes[] = $stagePeriode;
            $stagePeriode->setSemestre($this);
        }

        return $this;
    }

    public function removeStagePeriode(StagePeriode $stagePeriode): self
    {
        if ($this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes->removeElement($stagePeriode);
            // set the owning side to null (unless already changed)
            if ($stagePeriode->getSemestre() === $this) {
                $stagePeriode->setSemestre(null);
            }
        }

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        if (null !== $this->getAnnee() && null !== $this->getAnnee()->getDiplome()) {
            return $this->getAnnee()->getDiplome();
        }

        return null;
    }

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        if (null !== $this->getDiplome() && null !== $this->getDiplome()->getAnneeUniversitaire()) {
            return $this->getDiplome()->getAnneeUniversitaire();
        }

        return null;
    }

    /**
     * @return Collection|ScolaritePromo[]
     */
    public function getScolaritePromos(): Collection
    {
        return $this->scolaritePromos;
    }

    public function addScolaritePromo(ScolaritePromo $scolaritePromo): self
    {
        if (!$this->scolaritePromos->contains($scolaritePromo)) {
            $this->scolaritePromos[] = $scolaritePromo;
            $scolaritePromo->setSemestre($this);
        }

        return $this;
    }

    public function removeScolaritePromo(ScolaritePromo $scolaritePromo): self
    {
        if ($this->scolaritePromos->contains($scolaritePromo)) {
            $this->scolaritePromos->removeElement($scolaritePromo);
            // set the owning side to null (unless already changed)
            if ($scolaritePromo->getSemestre() === $this) {
                $scolaritePromo->setSemestre(null);
            }
        }

        return $this;
    }

    public function getPpnActif(): ?Ppn
    {
        return $this->ppn_actif;
    }

    public function setPpnActif(?Ppn $ppn_actif): self
    {
        $this->ppn_actif = $ppn_actif;

        return $this;
    }

    public function getNbgroupeTpEdt(): int
    {
        if (0 === $this->nbGroupesTP % 2) {
            return $this->nbGroupesTP;
        }

        return $this->nbGroupesTP + 1;
    }

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function getNbGroupesCm(): ?int
    {
        return $this->nbGroupesCm;
    }

    public function setNbGroupesCm(int $nbGroupesCm): self
    {
        $this->nbGroupesCm = $nbGroupesCm;

        return $this;
    }

    public function getOptMailReleve(): ?bool
    {
        return $this->optMailReleve;
    }

    public function getOptMailModificationNote(): ?bool
    {
        return $this->optMailModificationNote;
    }

    public function getOptEvaluationVisible(): ?bool
    {
        return $this->optEvaluationVisible;
    }

    public function getOptEvaluationModifiable(): ?bool
    {
        return $this->optEvaluationModifiable;
    }

    public function getOptPenaliteAbsence(): ?bool
    {
        return $this->optPenaliteAbsence;
    }

    public function getOptMailAbsenceResp(): ?bool
    {
        return $this->optMailAbsenceResp;
    }

    public function getOptMailAbsenceEtudiant(): ?bool
    {
        return $this->optMailAbsenceEtudiant;
    }

    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
            $etudiant->setSemestre($this);
        }

        return $this;
    }

    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->contains($etudiant)) {
            $this->etudiants->removeElement($etudiant);
            // set the owning side to null (unless already changed)
            if ($etudiant->getSemestre() === $this) {
                $etudiant->setSemestre(null);
            }
        }

        return $this;
    }

    public function addHr(Hrs $hr): self
    {
        if (!$this->hrs->contains($hr)) {
            $this->hrs[] = $hr;
            $hr->setSemestre($this);
        }

        return $this;
    }

    public function removeHr(Hrs $hr): self
    {
        if ($this->hrs->contains($hr)) {
            $this->hrs->removeElement($hr);
            // set the owning side to null (unless already changed)
            if ($hr->getSemestre() === $this) {
                $hr->setSemestre(null);
            }
        }

        return $this;
    }

    public function getCodeElement(): ?string
    {
        return $this->codeElement;
    }

    public function setCodeElement(string $codeElement): self
    {
        $this->codeElement = $codeElement;

        return $this;
    }

    public function getOptEvaluationPreInitialisee(): ?bool
    {
        return $this->optEvaluationPreInitialisee;
    }

    public function setOptEvaluationPreInitialisee(bool $optEvaluationPreInitialisee): self
    {
        $this->optEvaluationPreInitialisee = $optEvaluationPreInitialisee;

        return $this;
    }

    /**
     * @return Collection|QuestionnaireQualite[]
     */
    public function getQualiteQuestionnaires(): ?Collection
    {
        return $this->qualiteQuestionnaires;
    }

    public function addQualiteQuestionnaire(QuestionnaireQualite $qualiteQuestionnaire): self
    {
        if (!$this->qualiteQuestionnaires->contains($qualiteQuestionnaire)) {
            $this->qualiteQuestionnaires[] = $qualiteQuestionnaire;
            $qualiteQuestionnaire->setSemestre($this);
        }

        return $this;
    }

    public function removeQualiteQuestionnaire(QuestionnaireQualite $qualiteQuestionnaire): self
    {
        if ($this->qualiteQuestionnaires->contains($qualiteQuestionnaire)) {
            $this->qualiteQuestionnaires->removeElement($qualiteQuestionnaire);
            // set the owning side to null (unless already changed)
            if ($qualiteQuestionnaire->getSemestre() === $this) {
                $qualiteQuestionnaire->setSemestre(null);
            }
        }

        return $this;
    }

    public function getOptNbJoursSaisieAbsence(): ?int
    {
        return $this->optNbJoursSaisieAbsence;
    }

    public function setOptNbJoursSaisieAbsence(int $optNbJoursSaisieAbsence): self
    {
        $this->optNbJoursSaisieAbsence = $optNbJoursSaisieAbsence;

        return $this;
    }

    /**
     * @return Collection|ProjetPeriode[]
     */
    public function getProjetPeriodes(): Collection
    {
        return $this->projetPeriodes;
    }

    public function addProjetPeriode(ProjetPeriode $projetPeriode): self
    {
        if (!$this->projetPeriodes->contains($projetPeriode)) {
            $this->projetPeriodes[] = $projetPeriode;
            $projetPeriode->setSemestre($this);
        }

        return $this;
    }

    public function removeProjetPeriode(ProjetPeriode $projetPeriode): self
    {
        if ($this->projetPeriodes->contains($projetPeriode)) {
            $this->projetPeriodes->removeElement($projetPeriode);
            // set the owning side to null (unless already changed)
            if ($projetPeriode->getSemestre() === $this) {
                $projetPeriode->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ApcRessource[]
     */
    public function getApcRessources(): Collection
    {
        return $this->apcRessources;
    }

    public function addApcRessource(ApcRessource $apcRessource): self
    {
        if (!$this->apcRessources->contains($apcRessource)) {
            $this->apcRessources[] = $apcRessource;
            $apcRessource->setSemestre($this);
        }

        return $this;
    }

    public function removeApcRessource(ApcRessource $apcRessource): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcRessources->removeElement($apcRessource) && $apcRessource->getSemestre() === $this) {
            $apcRessource->setSemestre(null);
        }

        return $this;
    }

    /**
     * @return Collection|ApcSae[]
     */
    public function getApcSaes(): Collection
    {
        return $this->apcSaes;
    }

    public function addApcSae(ApcSae $apcSae): self
    {
        if (!$this->apcSaes->contains($apcSae)) {
            $this->apcSaes[] = $apcSae;
            $apcSae->setSemestre($this);
        }

        return $this;
    }

    public function removeApcSae(ApcSae $apcSae): self
    {
        // set the owning side to null (unless already changed)
        if ($this->apcSaes->removeElement($apcSae) && $apcSae->getSemestre() === $this) {
            $apcSae->setSemestre(null);
        }

        return $this;
    }

    /**
     * @return Collection|AbsenceEtatAppel[]
     */
    public function getAbsenceEtatAppels(): Collection
    {
        return $this->absenceEtatAppels;
    }

    public function addAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        if (!$this->absenceEtatAppels->contains($absenceEtatAppel)) {
            $this->absenceEtatAppels[] = $absenceEtatAppel;
            $absenceEtatAppel->setSemestre($this);
        }

        return $this;
    }

    public function removeAbsenceEtatAppel(AbsenceEtatAppel $absenceEtatAppel): self
    {
        if ($this->absenceEtatAppels->removeElement($absenceEtatAppel)) {
            // set the owning side to null (unless already changed)
            if ($absenceEtatAppel->getSemestre() === $this) {
                $absenceEtatAppel->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|CelcatEvent[]
     */
    public function getCelcatEvents(): Collection
    {
        return $this->celcatEvents;
    }

    public function addCelcatEvent(CelcatEvent $celcatEvent): self
    {
        if (!$this->celcatEvents->contains($celcatEvent)) {
            $this->celcatEvents[] = $celcatEvent;
            $celcatEvent->setSemestre($this);
        }

        return $this;
    }

    public function removeCelcatEvent(CelcatEvent $celcatEvent): self
    {
        if ($this->celcatEvents->removeElement($celcatEvent)) {
            // set the owning side to null (unless already changed)
            if ($celcatEvent->getSemestre() === $this) {
                $celcatEvent->setSemestre(null);
            }
        }

        return $this;
    }

    private function init()
    {
        $this->articles = new ArrayCollection();
        $this->documents = new ArrayCollection();
        $this->dates = new ArrayCollection();
        $this->hrs = new ArrayCollection();
        $this->parcours = new ArrayCollection();
        $this->bornes = new ArrayCollection();
        $this->cahierTextes = new ArrayCollection();
        $this->ues = new ArrayCollection();
        $this->typeGroupes = new ArrayCollection();
        $this->stagePeriodes = new ArrayCollection();
        $this->scolaritePromos = new ArrayCollection();
        $this->etudiants = new ArrayCollection();
        $this->qualiteQuestionnaires = new ArrayCollection();
        $this->projetPeriodes = new ArrayCollection();
        $this->apcRessources = new ArrayCollection();
        $this->apcSaes = new ArrayCollection();
        $this->absenceEtatAppels = new ArrayCollection();
        $this->celcatEvents = new ArrayCollection();
    }

    /**
     * @return Collection|Evaluation[]
     */
    public function getEvaluations(): Collection
    {
        return $this->evaluations;
    }

    public function addEvaluation(Evaluation $evaluation): self
    {
        if (!$this->evaluations->contains($evaluation)) {
            $this->evaluations[] = $evaluation;
            $evaluation->setSemestre($this);
        }

        return $this;
    }

    public function removeEvaluation(Evaluation $evaluation): self
    {
        if ($this->evaluations->removeElement($evaluation)) {
            // set the owning side to null (unless already changed)
            if ($evaluation->getSemestre() === $this) {
                $evaluation->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Rattrapage[]
     */
    public function getRattrapages(): Collection
    {
        return $this->rattrapages;
    }

    public function addRattrapage(Rattrapage $rattrapage): self
    {
        if (!$this->rattrapages->contains($rattrapage)) {
            $this->rattrapages[] = $rattrapage;
            $rattrapage->setSemestre($this);
        }

        return $this;
    }

    public function removeRattrapage(Rattrapage $rattrapage): self
    {
        if ($this->rattrapages->removeElement($rattrapage)) {
            // set the owning side to null (unless already changed)
            if ($rattrapage->getSemestre() === $this) {
                $rattrapage->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|AbsenceJustificatif[]
     */
    public function getAbsenceJustificatifs(): Collection
    {
        return $this->absenceJustificatifs;
    }

    public function addAbsenceJustificatif(AbsenceJustificatif $absenceJustificatif): self
    {
        if (!$this->absenceJustificatifs->contains($absenceJustificatif)) {
            $this->absenceJustificatifs[] = $absenceJustificatif;
            $absenceJustificatif->setSemestre($this);
        }

        return $this;
    }

    public function removeAbsenceJustificatif(AbsenceJustificatif $absenceJustificatif): self
    {
        if ($this->absenceJustificatifs->removeElement($absenceJustificatif)) {
            // set the owning side to null (unless already changed)
            if ($absenceJustificatif->getSemestre() === $this) {
                $absenceJustificatif->setSemestre(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Absence[]
     */
    public function getAbsences(): Collection
    {
        return $this->absences;
    }

    public function addAbsence(Absence $absence): self
    {
        if (!$this->absences->contains($absence)) {
            $this->absences[] = $absence;
            $absence->setSemestre($this);
        }

        return $this;
    }

    public function removeAbsence(Absence $absence): self
    {
        if ($this->absences->removeElement($absence)) {
            // set the owning side to null (unless already changed)
            if ($absence->getSemestre() === $this) {
                $absence->setSemestre(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->getLibelle();
    }
}
