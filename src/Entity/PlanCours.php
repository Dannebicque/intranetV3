<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCours.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Enums\PlanCoursEnum;
use Carbon\Carbon;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity]
#[ORM\HasLifecycleCallbacks]
#[Vich\Uploadable]
#[ORM\InheritanceType('SINGLE_TABLE')]
#[ORM\DiscriminatorColumn('type', 'string')]
#[ORM\DiscriminatorMap([PlanCoursMatiere::class, PlanCoursRessource::class, PlanCoursSae::class])]
abstract class PlanCours
{
    use LifeCycleTrait;
    use MatiereTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    protected ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'planCours')]
    protected ?Personnel $responsable = null;

    #[ORM\ManyToOne(inversedBy: 'planCours')]
    protected ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\OneToMany(mappedBy: 'planCours', targetEntity: PlanCoursSequence::class, cascade: ['persist'])]
    protected Collection $planCoursSequences;

    #[ORM\OneToMany(mappedBy: 'planCours', targetEntity: PlanCoursRealise::class, cascade: ['persist'])]
    protected Collection $planCoursRealises;

    #[ORM\Column(nullable: true)]
    protected ?float $cmPrevu = null;

    #[ORM\Column(nullable: true)]
    protected ?float $tdPrevu = null;

    #[ORM\Column(nullable: true)]
    protected ?float $tpPrevu = null;

    #[ORM\Column(nullable: true)]
    protected ?float $cmRealise = null;

    #[ORM\Column(nullable: true)]
    protected ?float $tdRealise = null;

    #[ORM\Column(nullable: true)]
    protected ?float $tpRealise = null;

    #[ORM\Column]
    protected ?int $nbNotes = 2;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $bibliographie = null;

    #[ORM\Column]
    protected ?bool $planSuivi = false;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $planSuiviCommentaire = null;

    #[ORM\Column]
    protected ?bool $objectifsAtteints = false;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $objectifsFAtteintsCommentaire = null;

    #[ORM\Column]
    protected ?bool $competencesAcquises = false;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $competencesAcquisesCommentaire = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $commentaires_step1 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $commentaires_step2 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $commentaires_step3 = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $modeEvaluationCommentaire = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $saisiePlanCours = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $fichierPlanCours = null;

    #[Vich\UploadableField(mapping: 'fichierPlanCours', fileNameProperty: 'fichierPlanCours')]
    private ?File $fichierPlanCoursFile = null;

    #[ORM\ManyToMany(targetEntity: Personnel::class, inversedBy: 'plansCours')]
    private Collection $intervenants;

    #[ORM\Column(length: 30, nullable: true, enumType: PlanCoursEnum::class)]
    private ?PlanCoursEnum $etatPlanCours = null;


    public function __construct()
    {
        $this->planCoursSequences = new ArrayCollection();
        $this->planCoursRealises = new ArrayCollection();
        $this->intervenants = new ArrayCollection();
    }

    public function getResponsable(): ?Personnel
    {
        return $this->responsable;
    }

    public function setResponsable(?Personnel $responsable): self
    {
        $this->responsable = $responsable;

        return $this;
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

    /**
     * @return Collection<int, PlanCoursSequence>
     */
    public function getPlanCoursSequences(): Collection
    {
        return $this->planCoursSequences;
    }

    public function addPlanCoursSequence(PlanCoursSequence $planCoursSequence): self
    {
        if (!$this->planCoursSequences->contains($planCoursSequence)) {
            $this->planCoursSequences[] = $planCoursSequence;
            $planCoursSequence->setPlanCours($this);
        }

        return $this;
    }

    public function removePlanCoursSequence(PlanCoursSequence $planCoursSequence): self
    {
        if ($this->planCoursSequences->removeElement($planCoursSequence)) {
            // set the owning side to null (unless already changed)
            if ($planCoursSequence->getPlanCours() === $this) {
                $planCoursSequence->setPlanCours(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PlanCoursRealise>
     */
    public function getPlanCoursRealises(): Collection
    {
        return $this->planCoursRealises;
    }

    public function addPlanCoursRealise(PlanCoursRealise $planCoursRealise): self
    {
        if (!$this->planCoursRealises->contains($planCoursRealise)) {
            $this->planCoursRealises[] = $planCoursRealise;
            $planCoursRealise->setPlanCours($this);
        }

        return $this;
    }

    public function removePlanCoursRealise(PlanCoursRealise $planCoursRealise): self
    {
        if ($this->planCoursRealises->removeElement($planCoursRealise)) {
            // set the owning side to null (unless already changed)
            if ($planCoursRealise->getPlanCours() === $this) {
                $planCoursRealise->setPlanCours(null);
            }
        }

        return $this;
    }

    public function getNbNotes(): ?int
    {
        return $this->nbNotes;
    }

    public function setNbNotes(int $nbNotes): self
    {
        $this->nbNotes = $nbNotes;

        return $this;
    }

    public function getBibliographie(): ?string
    {
        return $this->bibliographie;
    }

    public function setBibliographie(?string $bibliographie): self
    {
        $this->bibliographie = $bibliographie;

        return $this;
    }

    public function isPlanSuivi(): ?bool
    {
        return $this->planSuivi;
    }

    public function setPlanSuivi(bool $planSuivi): self
    {
        $this->planSuivi = $planSuivi;

        return $this;
    }

    public function getPlanSuiviCommentaire(): ?string
    {
        return $this->planSuiviCommentaire;
    }

    public function setPlanSuiviCommentaire(?string $planSuiviCommentaire): self
    {
        $this->planSuiviCommentaire = $planSuiviCommentaire;

        return $this;
    }

    public function isObjectifsAtteints(): ?bool
    {
        return $this->objectifsAtteints;
    }

    public function setObjectifsAtteints(bool $objectifsAtteints): self
    {
        $this->objectifsAtteints = $objectifsAtteints;

        return $this;
    }

    public function getObjectifsFAtteintsCommentaire(): ?string
    {
        return $this->objectifsFAtteintsCommentaire;
    }

    public function setObjectifsFAtteintsCommentaire(?string $objectifsFAtteintsCommentaire): self
    {
        $this->objectifsFAtteintsCommentaire = $objectifsFAtteintsCommentaire;

        return $this;
    }

    public function isCompetencesAcquises(): ?bool
    {
        return $this->competencesAcquises;
    }

    public function setCompetencesAcquises(bool $competencesAcquises): self
    {
        $this->competencesAcquises = $competencesAcquises;

        return $this;
    }

    public function getCompetencesAcquisesCommentaire(): ?string
    {
        return $this->competencesAcquisesCommentaire;
    }

    public function setCompetencesAcquisesCommentaire(?string $competencesAcquisesCommentaire): self
    {
        $this->competencesAcquisesCommentaire = $competencesAcquisesCommentaire;

        return $this;
    }

    public function getCommentairesStep1(): ?string
    {
        return $this->commentaires_step1;
    }

    public function setCommentairesStep1(?string $commentaires): self
    {
        $this->commentaires_step1 = $commentaires;

        return $this;
    }

    public function getCommentairesStep2(): ?string
    {
        return $this->commentaires_step2;
    }

    public function setCommentairesStep2(?string $commentaires): self
    {
        $this->commentaires_step2 = $commentaires;

        return $this;
    }

    public function getCommentairesStep3(): ?string
    {
        return $this->commentaires_step3;
    }

    public function setCommentairesStep3(?string $commentaires): self
    {
        $this->commentaires_step3 = $commentaires;

        return $this;
    }

    public function getModeEvaluationCommentaire(): ?string
    {
        return $this->modeEvaluationCommentaire;
    }

    public function setModeEvaluationCommentaire(?string $modeEvaluationCommentaire): self
    {
        $this->modeEvaluationCommentaire = $modeEvaluationCommentaire;

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCmPrevu(): ?float
    {
        return $this->cmPrevu;
    }

    public function setCmPrevu(float $cmPrevu): self
    {
        $this->cmPrevu = $cmPrevu;

        return $this;
    }

    public function getTdPrevu(): ?float
    {
        return $this->tdPrevu;
    }

    public function setTdPrevu(float $tdPrevu): self
    {
        $this->tdPrevu = $tdPrevu;

        return $this;
    }

    public function getTpPrevu(): ?float
    {
        return $this->tpPrevu;
    }

    public function setTpPrevu(float $tpPrevu): self
    {
        $this->tpPrevu = $tpPrevu;

        return $this;
    }

    public function getCmRealise(): ?float
    {
        return $this->cmRealise;
    }

    public function setCmRealise(float $cmRealise): self
    {
        $this->cmRealise = $cmRealise;

        return $this;
    }

    public function getTdRealise(): ?float
    {
        return $this->tdRealise;
    }

    public function setTdRealise(float $tdRealise): self
    {
        $this->tdRealise = $tdRealise;

        return $this;
    }

    public function getTpRealise(): ?float
    {
        return $this->tpRealise;
    }

    public function setTpRealise(float $tpRealise): self
    {
        $this->tpRealise = $tpRealise;

        return $this;
    }

    public function getSaisiePlanCours(): ?string
    {
        return $this->saisiePlanCours;
    }

    public function setSaisiePlanCours(?string $saisiePlanCours): self
    {
        $this->saisiePlanCours = $saisiePlanCours;

        return $this;
    }

    public function getFichierPlanCours(): ?string
    {
        return $this->fichierPlanCours;
    }

    public function setFichierPlanCours(?string $fichierPlanCours): self
    {
        $this->fichierPlanCours = $fichierPlanCours;

        return $this;
    }

    /**
     * @return File|null
     */
    public function getFichierPlanCoursFile(): ?File
    {
        return $this->fichierPlanCoursFile;
    }

    /**
     * @param File|null $fichierPlanCoursFile
     */
    public function setFichierPlanCoursFile(?File $fichierPlanCoursFile): void
    {
        $this->fichierPlanCoursFile = $fichierPlanCoursFile;

        if (null !== $fichierPlanCoursFile) {
            $this->setUpdated(Carbon::now());
        }
    }

    /**
     * @return Collection<int, Personnel>
     */
    public function getIntervenants(): Collection
    {
        return $this->intervenants;
    }

    public function addIntervenant(Personnel $intervenant): self
    {
        if (!$this->intervenants->contains($intervenant)) {
            $this->intervenants->add($intervenant);
        }

        return $this;
    }

    public function removeIntervenant(Personnel $intervenant): self
    {
        $this->intervenants->removeElement($intervenant);

        return $this;
    }

    public function getEtatPlanCours(): ?PlanCoursEnum
    {
        return $this->etatPlanCours ?? PlanCoursEnum::NONE;
    }

    public function setEtatPlanCours(PlanCoursEnum $etatPlanCours): static
    {
        $this->etatPlanCours = $etatPlanCours;

        return $this;
    }
}
