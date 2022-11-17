<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Semestre.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 04/10/2022 09:25
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\SemestreRepository;
use App\Utils\Tools;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use JetBrains\PhpStorm\Deprecated;
use Stringable;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: SemestreRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Semestre extends BaseEntity implements Stringable
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    #[Groups(groups: [
        'article_administration',
        'date_administration',
        'semestre',
        'etudiants_administration',
        'document_administration',
    ])]
    private ?string $libelle = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $ordreAnnee = 1;

    #[ORM\Column(type: Types::INTEGER)]
    private int $ordreLmd = 1;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $actif = false;

    #[ORM\ManyToOne(targetEntity: Semestre::class)]
    #[Deprecated]
    private ?Semestre $precedent = null;

    #[ORM\ManyToOne(targetEntity: Semestre::class)]
    #[Deprecated]
    private ?Semestre $suivant = null;

    #[ORM\ManyToOne(targetEntity: Semestre::class)]
    #[Deprecated]
    private ?Semestre $decale = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbGroupesCm = 1;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbGroupesTd = 1;

    #[ORM\Column(type: Types::INTEGER)]
    private int $nbGroupesTP = 2;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Etudiant>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: Etudiant::class)]
    #[ORM\OrderBy(value: ['nom' => 'ASC', 'prenom' => 'ASC'])]
    private Collection $etudiants;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optMailReleve = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optMailModificationNote = false;

    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $optDestMailReleve = null;

    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $optDestMailModifNote = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optEvaluationVisible = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optEvaluationModifiable = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optPenaliteAbsence = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optMailAbsenceResp = false;

    #[ORM\ManyToOne(targetEntity: Personnel::class)]
    private ?Personnel $optDestMailAbsenceResp = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optMailAbsenceEtudiant = false;

    #[ORM\Column(type: Types::FLOAT)]
    private float $optPointPenaliteAbsence = 0.5;

    #[ORM\ManyToMany(targetEntity: Article::class, mappedBy: 'semestres')]
    private Collection $articles;

    #[ORM\ManyToMany(targetEntity: Document::class, mappedBy: 'semestres')]
    private Collection $documents;

    #[ORM\ManyToMany(targetEntity: Date::class, mappedBy: 'semestres')]
    private Collection $dates;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Hrs>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: Hrs::class)]
    private Collection $hrs;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Parcour>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: Parcour::class)]
    private Collection $parcours;

    #[ORM\ManyToMany(targetEntity: Borne::class, mappedBy: 'semestres')]
    private Collection $bornes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\CahierTexte>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: CahierTexte::class)]
    private Collection $cahierTextes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Ue>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: Ue::class)]
    #[ORM\OrderBy(value: ['numeroUe' => 'ASC'])]
    private Collection $ues;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\TypeGroupe>
     *
     */
    #[Deprecated]
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: TypeGroupe::class)]
    #[ORM\OrderBy(value: ['libelle' => 'ASC'])]
    private Collection $typeGroupes;

    #[ORM\Column(type: Types::INTEGER)]
    private ?int $moisDebut = 9;

    #[ORM\ManyToOne(targetEntity: Annee::class, fetch: 'EAGER', inversedBy: 'semestres')]
    #[Groups(groups: ['semestre'])]
    private ?Annee $annee = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\StagePeriode>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: StagePeriode::class)]
    private Collection $stagePeriodes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ScolaritePromo>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: ScolaritePromo::class)]
    private Collection $scolaritePromos;

    #[ORM\ManyToOne(targetEntity: Ppn::class, inversedBy: 'semestres')]
    private ?Ppn $ppnActif = null;

    #[ORM\Column(type: Types::STRING, length: 20)]
    private ?string $codeElement = null;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $optEvaluationPreInitialisee = false;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\QuestionnaireQualite>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: QuestionnaireQualite::class)]
    private Collection $qualiteQuestionnaires;

    #[ORM\Column(type: Types::INTEGER)]
    private int $optNbJoursSaisieAbsence = 10;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ProjetPeriode>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: ProjetPeriode::class)]
    private Collection $projetPeriodes;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\AbsenceEtatAppel>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: AbsenceEtatAppel::class)]
    private Collection $absenceEtatAppels;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\EdtCelcat>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: EdtCelcat::class)]
    private Collection $edtCelcats;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Evaluation>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: Evaluation::class)]
    private Collection $evaluations;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Rattrapage>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: Rattrapage::class)]
    private Collection $rattrapages;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\AbsenceJustificatif>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: AbsenceJustificatif::class)]
    private Collection $absenceJustificatifs;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\Absence>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: Absence::class)]
    private Collection $absences;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $optMailAssistanteJustificatifAbsence = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private ?bool $optBilanSemestre = false;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\AnneeUniversitaireSemestre>
     */
    #[ORM\OneToMany(mappedBy: 'semestre', targetEntity: AnneeUniversitaireSemestre::class)]
    private Collection $anneeUniversitaireSemestres;

    #[ORM\ManyToMany(targetEntity: ApcRessource::class, mappedBy: 'semestres', fetch: 'EXTRA_LAZY')]
    private Collection $apcSemestresRessources;

    #[ORM\ManyToMany(targetEntity: ApcSae::class, mappedBy: 'semestres')]
    private Collection $apcSemestresSaes;

    #[ORM\OneToMany(mappedBy: 'semestre_depart', targetEntity: SemestreLien::class, cascade: ['persist'])]
    private Collection $semestreLienDepart;

    #[ORM\OneToMany(mappedBy: 'semestre_arrive', targetEntity: SemestreLien::class)]
    private Collection $semestreLienArrive;

    #[ORM\ManyToMany(targetEntity: ProjetPeriode::class, mappedBy: 'semestres')]
    private Collection $projetPeriodeSemestres;

    #[ORM\ManyToMany(targetEntity: TypeGroupe::class, mappedBy: 'semestres')]
    private Collection $typeGroupess;

    public function __construct()
    {
        $this->init();
        $this->evaluations = new ArrayCollection();
        $this->rattrapages = new ArrayCollection();
        $this->absenceJustificatifs = new ArrayCollection();
        $this->absences = new ArrayCollection();
        $this->anneeUniversitaireSemestres = new ArrayCollection();
        $this->apcSemestresRessources = new ArrayCollection();
        $this->apcSemestresSaes = new ArrayCollection();
        $this->semestreLienDepart = new ArrayCollection();
        $this->semestreLienArrive = new ArrayCollection();
        $this->projetPeriodeSemestres = new ArrayCollection();
        $this->typeGroupess = new ArrayCollection();
    }

    private function init(): void
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
        $this->absenceEtatAppels = new ArrayCollection();
        $this->edtCelcats = new ArrayCollection();
    }

    public function __clone()
    {
        $this->init();
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

    #[Deprecated]
    public function getPrecedent(): ?self
    {
        return $this->precedent;
    }

    #[Deprecated]
    public function setPrecedent(?self $precedent): void
    {
        $this->precedent = $precedent;
    }

    #[Deprecated]
    public function getSuivant(): ?self
    {
        return $this->suivant;
    }

    #[Deprecated]
    public function setSuivant(?self $suivant): void
    {
        $this->suivant = $suivant;
    }

    #[Deprecated]
    public function getDecale(): ?self
    {
        return $this->decale;
    }

    #[Deprecated]
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

    public function getOptMailReleve(): ?bool
    {
        return $this->optMailReleve;
    }

    public function setOptMailReleve(bool $optMailReleve): void
    {
        $this->optMailReleve = $optMailReleve;
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

    public function getOptEvaluationVisible(): ?bool
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

    public function getOptEvaluationModifiable(): ?bool
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

    public function getOptPenaliteAbsence(): ?bool
    {
        return $this->optPenaliteAbsence;
    }

    public function setOptPenaliteAbsence(bool $optPenaliteAbsence): void
    {
        $this->optPenaliteAbsence = $optPenaliteAbsence;
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

    public function getOptMailAbsenceEtudiant(): ?bool
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

    public function setEtudiants(ArrayCollection|Collection $etudiants): void
    {
        $this->etudiants = $etudiants;
    }

    public function display(): string
    {
        if (null !== $this->getAnnee()) {
            return $this->libelle.' | '.$this->getAnnee()->getLibelle();
        }

        return $this->libelle;
    }

    public function getAnnee(): ?Annee
    {
        return $this->annee;
    }

    public function setAnnee(?Annee $annee): void
    {
        $this->annee = $annee;
    }

    public function displayAvecTypeDiplome(): string
    {
        if (null !== $this->getAnnee() && null !== $this->getAnnee()->getDiplome() && null !== $this->getAnnee()->getDiplome()->getTypeDiplome()) {
            return $this->getAnnee()->getDiplome()->getTypeDiplome()->getSigle().' | '.$this->libelle;
        }

        return $this->libelle;
    }

    public function displayLong(): string
    {
        return $this->getDiplome()->getDisplayCourt().' | '.$this->getLibelle();
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

    public function update(?string $name, mixed $value): void
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

    #[Deprecated]
    public function getTypeGroupes(): Collection
    {
        return $this->typeGroupes;
    }

    #[Deprecated]
    public function addTypeGroupe(TypeGroupe $typeGroupe): self
    {
        if (!$this->typeGroupes->contains($typeGroupe)) {
            $this->typeGroupes[] = $typeGroupe;
            $typeGroupe->setSemestre($this);
        }

        return $this;
    }

    #[Deprecated]
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

    public function getAnneeUniversitaire(): ?AnneeUniversitaire
    {
        if (null !== $this->getDiplome() && null !== $this->getDiplome()->getAnneeUniversitaire()) {
            return $this->getDiplome()->getAnneeUniversitaire();
        }

        return null;
    }

    public function getDiplome(): ?Diplome
    {
        if (null !== $this->getAnnee() && null !== $this->getAnnee()->getDiplome()) {
            return $this->getAnnee()->getDiplome();
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
        return $this->ppnActif;
    }

    public function setPpnActif(?Ppn $ppnActif): self
    {
        $this->ppnActif = $ppnActif;

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

    public function isActif(): bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): void
    {
        $this->actif = $actif;
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

    public function getOptMailModificationNote(): ?bool
    {
        return $this->optMailModificationNote;
    }

    public function isOptMailModificationNote(): bool
    {
        return $this->optMailModificationNote;
    }

    public function setOptMailModificationNote(bool $optMailModificationNote): void
    {
        $this->optMailModificationNote = $optMailModificationNote;
    }

    public function getOptMailAbsenceResp(): ?bool
    {
        return $this->optMailAbsenceResp;
    }

    public function isOptMailAbsenceResp(): bool
    {
        return $this->optMailAbsenceResp;
    }

    public function setOptMailAbsenceResp(bool $optMailAbsenceResp): void
    {
        $this->optMailAbsenceResp = $optMailAbsenceResp;
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
        // set the owning side to null (unless already changed)
        if ($this->absenceEtatAppels->removeElement($absenceEtatAppel) && $absenceEtatAppel->getSemestre() === $this) {
            $absenceEtatAppel->setSemestre(null);
        }

        return $this;
    }

    /**
     * @return Collection|\App\Entity\EdtCelcat[]
     */
    public function getEdtCelcats(): Collection
    {
        return $this->edtCelcats;
    }

    public function addEdtCelcat(EdtCelcat $edtCelcat): self
    {
        if (!$this->edtCelcats->contains($edtCelcat)) {
            $this->edtCelcats[] = $edtCelcat;
            $edtCelcat->setSemestre($this);
        }

        return $this;
    }

    public function removeEdtCelcat(EdtCelcat $edtCelcat): self
    {
        // set the owning side to null (unless already changed)
        if ($this->edtCelcats->removeElement($edtCelcat) && $edtCelcat->getSemestre() === $this) {
            $edtCelcat->setSemestre(null);
        }

        return $this;
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
        // set the owning side to null (unless already changed)
        if ($this->evaluations->removeElement($evaluation) && $evaluation->getSemestre() === $this) {
            $evaluation->setSemestre(null);
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
        // set the owning side to null (unless already changed)
        if ($this->rattrapages->removeElement($rattrapage) && $rattrapage->getSemestre() === $this) {
            $rattrapage->setSemestre(null);
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
        // set the owning side to null (unless already changed)
        if ($this->absenceJustificatifs->removeElement($absenceJustificatif) && $absenceJustificatif->getSemestre() === $this) {
            $absenceJustificatif->setSemestre(null);
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
        // set the owning side to null (unless already changed)
        if ($this->absences->removeElement($absence) && $absence->getSemestre() === $this) {
            $absence->setSemestre(null);
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->getLibelle();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getOptMailAssistanteJustificatifAbsence(): ?bool
    {
        return $this->optMailAssistanteJustificatifAbsence;
    }

    public function setOptMailAssistanteJustificatifAbsence(bool $optMailAssistanteJustificatifAbsence): self
    {
        $this->optMailAssistanteJustificatifAbsence = $optMailAssistanteJustificatifAbsence;

        return $this;
    }

    public function getOptBilanSemestre(): ?bool
    {
        return $this->optBilanSemestre;
    }

    public function setOptBilanSemestre(bool $optBilanSemestre): self
    {
        $this->optBilanSemestre = $optBilanSemestre;

        return $this;
    }

    /**
     * @return Collection<int, AnneeUniversitaireSemestre>
     */
    public function getAnneeUniversitaireSemestres(): Collection
    {
        return $this->anneeUniversitaireSemestres;
    }

    public function addAnneeUniversitaireAnnee(AnneeUniversitaireSemestre $anneeUniversitaireSemestre): self
    {
        if (!$this->anneeUniversitaireSemestres->contains($anneeUniversitaireSemestre)) {
            $this->anneeUniversitaireSemestres[] = $anneeUniversitaireSemestre;
            $anneeUniversitaireSemestre->setSemestre($this);
        }

        return $this;
    }

    public function removeAnneeUniversitaireSemestre(AnneeUniversitaireSemestre $anneeUniversitaireSemestre): self
    {
        // set the owning side to null (unless already changed)
        if ($this->anneeUniversitaireSemestres->removeElement($anneeUniversitaireSemestre) && $anneeUniversitaireSemestre->getSemestre() === $this) {
            $anneeUniversitaireSemestre->setSemestre(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, ApcRessource>
     */
    public function getApcSemestresRessources(): Collection
    {
        return $this->apcSemestresRessources;
    }

    public function addApcSemestresRessource(ApcRessource $apcSemestresRessource): self
    {
        if (!$this->apcSemestresRessources->contains($apcSemestresRessource)) {
            $this->apcSemestresRessources[] = $apcSemestresRessource;
            $apcSemestresRessource->addSemestre($this);
        }

        return $this;
    }

    public function removeApcSemestresRessource(ApcRessource $apcSemestresRessource): self
    {
        if ($this->apcSemestresRessources->removeElement($apcSemestresRessource)) {
            $apcSemestresRessource->removeSemestre($this);
        }

        return $this;
    }

    public function isPair(): bool
    {
        return 0 === $this->getOrdreLmd() % 2;
    }

    public function isImpair(): bool
    {
        return 1 === $this->getOrdreLmd() % 2;
    }

    /**
     * @return Collection<int, ApcSae>
     */
    public function getApcSemestresSaes(): Collection
    {
        return $this->apcSemestresSaes;
    }

    public function addApcSemestresSae(ApcSae $apcSemestresSae): self
    {
        if (!$this->apcSemestresSaes->contains($apcSemestresSae)) {
            $this->apcSemestresSaes[] = $apcSemestresSae;
            $apcSemestresSae->addSemestre($this);
        }

        return $this;
    }

    public function removeApcSemestresSae(ApcSae $apcSemestresSae): self
    {
        if ($this->apcSemestresSaes->removeElement($apcSemestresSae)) {
            $apcSemestresSae->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, SemestreLien>
     */
    public function getSemestreLienDepart(): Collection
    {
        return $this->semestreLienDepart;
    }

    public function addSemestreLienDepart(SemestreLien $semestreLienDepart): self
    {
        if (!$this->semestreLienDepart->contains($semestreLienDepart)) {
            $this->semestreLienDepart[] = $semestreLienDepart;
            $semestreLienDepart->setSemestreDepart($this);
        }

        return $this;
    }

    public function removeSemestreLienDepart(SemestreLien $semestreLienDepart): self
    {
        if ($this->semestreLienDepart->removeElement($semestreLienDepart)) {
            // set the owning side to null (unless already changed)
            if ($semestreLienDepart->getSemestreDepart() === $this) {
                $semestreLienDepart->setSemestreDepart(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, SemestreLien>
     */
    public function getSemestreLienArrive(): Collection
    {
        return $this->semestreLienArrive;
    }

    public function addSemestreLienArrive(SemestreLien $semestreLienArrive): self
    {
        if (!$this->semestreLienArrive->contains($semestreLienArrive)) {
            $this->semestreLienArrive[] = $semestreLienArrive;
            $semestreLienArrive->setSemestreArrive($this);
        }

        return $this;
    }

    public function removeSemestreLienArrive(SemestreLien $semestreLienArrive): self
    {
        if ($this->semestreLienArrive->removeElement($semestreLienArrive)) {
            // set the owning side to null (unless already changed)
            if ($semestreLienArrive->getSemestreArrive() === $this) {
                $semestreLienArrive->setSemestreArrive(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ProjetPeriode>
     */
    public function getProjetPeriodeSemestres(): Collection
    {
        return $this->projetPeriodeSemestres;
    }

    public function addProjetPeriodeSemestre(ProjetPeriode $projetPeriodeSemestre): self
    {
        if (!$this->projetPeriodeSemestres->contains($projetPeriodeSemestre)) {
            $this->projetPeriodeSemestres->add($projetPeriodeSemestre);
            $projetPeriodeSemestre->addSemestre($this);
        }

        return $this;
    }

    public function removeProjetPeriodeSemestre(ProjetPeriode $projetPeriodeSemestre): self
    {
        if ($this->projetPeriodeSemestres->removeElement($projetPeriodeSemestre)) {
            $projetPeriodeSemestre->removeSemestre($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, TypeGroupe>
     */
    public function getTypeGroupess(): Collection
    {
        return $this->typeGroupess;
    }

    public function addTypeGroupess(TypeGroupe $typeGroupess): self
    {
        if (!$this->typeGroupess->contains($typeGroupess)) {
            $this->typeGroupess->add($typeGroupess);
            $typeGroupess->addSemestre($this);
        }

        return $this;
    }

    public function removeTypeGroupess(TypeGroupe $typeGroupess): self
    {
        if ($this->typeGroupess->removeElement($typeGroupess)) {
            $typeGroupess->removeSemestre($this);
        }

        return $this;
    }
}
