<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/StagePeriode.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 6/9/19 8:47 AM
 */

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\StagePeriodeRepository")
 * @Vich\Uploadable
 */
class StagePeriode extends BaseEntity
{

    /**
     * @var UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;
    /**
     * @var string
     *
     * @ORM\Column(type="string", length=50)
     */
    private $documentName;
    /**
     * @var UploadedFile
     *
     * @Vich\UploadableField(mapping="ficheRenseignement", fileNameProperty="documentName")
     */
    private $documentFile;
    /**
     * @ORM\Column(type="integer")
     */
    private $numeroPeriode = 1;
    /**
     * @ORM\Column(type="string", length=100)
     */
    private $libelle = 'stage';
    /**
     * @ORM\Column(type="integer")
     */
    private $nbSemaines = 10;
    /**
     * @ORM\Column(type="integer")
     */
    private $nbJours = 40;
    /**
     * @ORM\Column(type="date")
     */
    private $dateDebut;
    /**
     * @ORM\Column(type="date")
     */
    private $dateFin;
    /**
     * @ORM\Column(type="text")
     */
    private $competencesVisees = 'texte';
    /**
     * @ORM\Column(type="text")
     */
    private $modaliteEvaluation = 'texte';
    /**
     * @ORM\Column(type="text")
     */
    private $modaliteEvaluationPedagogique = 'texte';
    /**
     * @ORM\Column(type="text")
     */
    private $modaliteEncadrement = 'texte';
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $documentRendre = 'texte';
    /**
     * @ORM\Column(type="float")
     */
    private $nbEcts = 12;
    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="stagePeriodes")
     */
    private $semestre;
    /**
     * @ORM\Column(type="boolean")
     */
    private $datesFlexibles = false;
    /**
     * @ORM\Column(type="boolean")
     */
    private $copieAssistant = true;
    /**
     * @ORM\OneToMany(targetEntity="StagePeriodeInterruption", mappedBy="stagePeriode", cascade={"persist", "remove"})
     */
    private $stagePeriodeInterruptions;
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StagePeriodeSoutenance", mappedBy="stagePeriode", cascade={"persist",
     *                                                                  "remove"})
     */
    private $stagePeriodeSoutenances;
    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Personnel", inversedBy="stagePeriodes")
     */
    private $responsables;
    /**
     * @ORM\Column(type="integer")
     */
    private $anneeUniversitaire;

    /**
     * @ORM\Column(type="text")
     */
    private $texteLibre;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\StagePeriodeOffre", mappedBy="stagePeriodes")
     */
    private $stagePeriodeOffres;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StageEtudiant", mappedBy="stagePeriode")
     */
    private $stageEtudiants;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\StageMailTemplate", mappedBy="stagePeriode")
     */
    private $stageMailTemplates;

    /**
     * StagePeriode constructor.
     *
     * @throws Exception
     */
    public function __construct()
    {
        $this->stagePeriodeInterruptions = new ArrayCollection();
        $this->stagePeriodeSoutenances = new ArrayCollection();
        $this->responsables = new ArrayCollection();
        $this->uuid = Uuid::uuid4();
        $this->stagePeriodeOffres = new ArrayCollection();
        $this->stageEtudiants = new ArrayCollection();
        $this->stageMailTemplates = new ArrayCollection();
    }

    /**
     * @return UuidInterface
     */
    public function getUuidString(): string
    {
        return (string)$this->getUuid();
    }

    /**
     * @return UuidInterface
     */
    public function getUuid(): UuidInterface
    {
        return $this->uuid;
    }

    public function getNumeroPeriode(): ?int
    {
        return $this->numeroPeriode;
    }

    public function setNumeroPeriode(int $numeroPeriode): self
    {
        $this->numeroPeriode = $numeroPeriode;

        return $this;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    public function getNbSemaines(): ?int
    {
        return $this->nbSemaines;
    }

    public function setNbSemaines(int $nbSemaines): self
    {
        $this->nbSemaines = $nbSemaines;

        return $this;
    }

    public function getNbJours(): ?int
    {
        return $this->nbJours;
    }

    public function setNbJours(int $nbJours): self
    {
        $this->nbJours = $nbJours;

        return $this;
    }

    public function getDateDebut(): ?DateTimeInterface
    {
        return $this->dateDebut;
    }

    public function setDateDebut(DateTimeInterface $dateDebut): self
    {
        $this->dateDebut = $dateDebut;

        return $this;
    }

    public function getDateFin(): ?DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getCompetencesVisees(): ?string
    {
        return $this->competencesVisees;
    }

    public function setCompetencesVisees(string $competencesVisees): self
    {
        $this->competencesVisees = $competencesVisees;

        return $this;
    }

    public function getModaliteEvaluation(): ?string
    {
        return $this->modaliteEvaluation;
    }

    public function setModaliteEvaluation(string $modaliteEvaluation): self
    {
        $this->modaliteEvaluation = $modaliteEvaluation;

        return $this;
    }

    public function getModaliteEvaluationPedagogique(): ?string
    {
        return $this->modaliteEvaluationPedagogique;
    }

    public function setModaliteEvaluationPedagogique(string $modaliteEvaluationPedagogique): self
    {
        $this->modaliteEvaluationPedagogique = $modaliteEvaluationPedagogique;

        return $this;
    }

    public function getModaliteEncadrement(): ?string
    {
        return $this->modaliteEncadrement;
    }

    public function setModaliteEncadrement(string $modaliteEncadrement): self
    {
        $this->modaliteEncadrement = $modaliteEncadrement;

        return $this;
    }

    public function getDocumentRendre(): ?string
    {
        return $this->documentRendre;
    }

    public function setDocumentRendre(string $documentRendre): self
    {
        $this->documentRendre = $documentRendre;

        return $this;
    }

    public function getNbEcts(): ?float
    {
        return $this->nbEcts;
    }

    public function setNbEcts(float $nbEcts): self
    {
        $this->nbEcts = $nbEcts;

        return $this;
    }

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getDatesFlexibles(): ?bool
    {
        return $this->datesFlexibles;
    }

    public function setDatesFlexibles(bool $datesFlexibles): self
    {
        $this->datesFlexibles = $datesFlexibles;

        return $this;
    }

    public function getCopieAssistant(): ?bool
    {
        return $this->copieAssistant;
    }

    public function setCopieAssistant(bool $copieAssistant): self
    {
        $this->copieAssistant = $copieAssistant;

        return $this;
    }

    /**
     * @return Collection|StagePeriodeInterruption[]
     */
    public function getStagePeriodeInterruptions(): Collection
    {
        return $this->stagePeriodeInterruptions;
    }

    public function addStagePeriodeInterruption(StagePeriodeInterruption $periodeInterruptionStage): self
    {
        if (!$this->stagePeriodeInterruptions->contains($periodeInterruptionStage)) {
            $this->stagePeriodeInterruptions[] = $periodeInterruptionStage;
            $periodeInterruptionStage->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStagePeriodeInterruption(StagePeriodeInterruption $periodeInterruptionStage): self
    {
        if ($this->stagePeriodeInterruptions->contains($periodeInterruptionStage)) {
            $this->stagePeriodeInterruptions->removeElement($periodeInterruptionStage);
            // set the owning side to null (unless already changed)
            if ($periodeInterruptionStage->getStagePeriode() === $this) {
                $periodeInterruptionStage->setStagePeriode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StagePeriodeSoutenance[]
     */
    public function getStagePeriodeSoutenances(): Collection
    {
        return $this->stagePeriodeSoutenances;
    }

    public function addStagePeriodeSoutenance(StagePeriodeSoutenance $stagePeriodeSoutenance): self
    {
        if (!$this->stagePeriodeSoutenances->contains($stagePeriodeSoutenance)) {
            $this->stagePeriodeSoutenances[] = $stagePeriodeSoutenance;
            $stagePeriodeSoutenance->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStagePeriodeSoutenance(StagePeriodeSoutenance $stagePeriodeSoutenance): self
    {
        if ($this->stagePeriodeSoutenances->contains($stagePeriodeSoutenance)) {
            $this->stagePeriodeSoutenances->removeElement($stagePeriodeSoutenance);
            // set the owning side to null (unless already changed)
            if ($stagePeriodeSoutenance->getStagePeriode() === $this) {
                $stagePeriodeSoutenance->setStagePeriode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getResponsables(): Collection
    {
        return $this->responsables;
    }

    public function addResponsable(Personnel $responsable): self
    {
        if (!$this->responsables->contains($responsable)) {
            $this->responsables[] = $responsable;
        }

        return $this;
    }

    public function removeResponsable(Personnel $responsable): self
    {
        if ($this->responsables->contains($responsable)) {
            $this->responsables->removeElement($responsable);
        }

        return $this;
    }

    /**
     * @return int|null
     */
    public function getAnneeUniversitaire(): ?int
    {
        return $this->anneeUniversitaire;
    }

    public function setAnneeUniversitaire(?int $anneeUniversitaire): self
    {
        $this->anneeUniversitaire = $anneeUniversitaire;

        return $this;
    }

    public function getTexteLibre(): ?string
    {
        return $this->texteLibre;
    }

    public function setTexteLibre(string $texteLibre): self
    {
        $this->texteLibre = $texteLibre;

        return $this;
    }

    /**
     * @return null|File
     */
    public function getDocumentFile(): ?File
    {
        return $this->documentFile;
    }

    /**
     * @param File|null $document
     *
     * @throws Exception
     */
    public function setDocumentFile(?File $document = null): void
    {
        $this->documentFile = $document;

        if (null !== $document) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->setUpdated(new DateTime());
        }
    }

    /**
     * @return string
     */
    public function getDocumentName(): ?string
    {
        return $this->documentName;
    }

    /**
     * @param string|null $documentName
     */
    public function setDocumentName(?string $documentName): void
    {
        $this->documentName = $documentName;
    }

    /**
     * @return Collection|StagePeriodeOffre[]
     */
    public function getStagePeriodeOffres(): Collection
    {
        return $this->stagePeriodeOffres;
    }

    public function addStagePeriodeOffre(StagePeriodeOffre $stagePeriodeOffre): self
    {
        if (!$this->stagePeriodeOffres->contains($stagePeriodeOffre)) {
            $this->stagePeriodeOffres[] = $stagePeriodeOffre;
            $stagePeriodeOffre->addStagePeriode($this);
        }

        return $this;
    }

    public function removeStagePeriodeOffre(StagePeriodeOffre $stagePeriodeOffre): self
    {
        if ($this->stagePeriodeOffres->contains($stagePeriodeOffre)) {
            $this->stagePeriodeOffres->removeElement($stagePeriodeOffre);
            $stagePeriodeOffre->removeStagePeriode($this);
        }

        return $this;
    }

    /**
     * @return Collection|StageEtudiant[]
     */
    public function getStageEtudiants(): Collection
    {
        return $this->stageEtudiants;
    }

    public function addStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if (!$this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants[] = $stageEtudiant;
            $stageEtudiant->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStageEtudiant(StageEtudiant $stageEtudiant): self
    {
        if ($this->stageEtudiants->contains($stageEtudiant)) {
            $this->stageEtudiants->removeElement($stageEtudiant);
            // set the owning side to null (unless already changed)
            if ($stageEtudiant->getStagePeriode() === $this) {
                $stageEtudiant->setStagePeriode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|StageMailTemplate[]
     */
    public function getStageMailTemplates(): Collection
    {
        return $this->stageMailTemplates;
    }

    public function addStageMailTemplate(StageMailTemplate $stageMailTemplate): self
    {
        if (!$this->stageMailTemplates->contains($stageMailTemplate)) {
            $this->stageMailTemplates[] = $stageMailTemplate;
            $stageMailTemplate->setStagePeriode($this);
        }

        return $this;
    }

    public function removeStageMailTemplate(StageMailTemplate $stageMailTemplate): self
    {
        if ($this->stageMailTemplates->contains($stageMailTemplate)) {
            $this->stageMailTemplates->removeElement($stageMailTemplate);
            // set the owning side to null (unless already changed)
            if ($stageMailTemplate->getStagePeriode() === $this) {
                $stageMailTemplate->setStagePeriode(null);
            }
        }

        return $this;
    }

    public function getMailAssistant() {
        if ($this->getSemestre() !== null && $this->getSemestre()->getDiplome() !== null && $this->getSemestre()->getDiplome()->getAssistantDiplome() !== null && $this->getSemestre()->getDiplome()->getAssistantDiplome()->getMailUniv() !== null && $this->getSemestre()->getDiplome()->getAssistantDiplome()->getMailUniv() !== '') {
            return [$this->getSemestre()->getDiplome()->getAssistantDiplome()->getMailUniv()];
        }

        return null;
    }
}
