<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/PlanCours.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 18/11/2022 08:54
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
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
    #[ORM\Column()]
    protected ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'planCours')]
    protected ?Personnel $intervenant = null;

    #[ORM\ManyToOne(inversedBy: 'planCours')]
    protected ?AnneeUniversitaire $anneeUniversitaire = null;

    #[ORM\OneToMany(mappedBy: 'planCours', targetEntity: PlanCoursSequence::class)]
    protected Collection $planCoursSequences;

    #[ORM\OneToMany(mappedBy: 'planCours', targetEntity: PlanCoursRealise::class)]
    protected Collection $planCoursRealises;

    #[ORM\Column]
    protected ?float $coefficient = null;

    #[ORM\Column]
    protected ?float $cmPrevu = null;

    #[ORM\Column]
    protected ?float $tdPrevu = null;

    #[ORM\Column]
    protected ?float $tpPrevu = null;

    #[ORM\Column]
    protected ?float $cmRealise = null;

    #[ORM\Column]
    protected ?float $tdRealise = null;

    #[ORM\Column]
    protected ?float $tpRealise = null;

    #[ORM\Column]
    protected ?int $nbNotes = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $bibliographie = null;

    #[ORM\Column]
    protected ?bool $planSuivi = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $planSuiviCommentaire = null;

    #[ORM\Column]
    protected ?bool $objectifsAtteints = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $objectifsFAtteintsCommentaire = null;

    #[ORM\Column]
    protected ?bool $competencesAcquises = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $competencesAcquisesCommentaire = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $commentaires = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    protected ?string $modeEvaluationCommentaire = null;



    public function __construct()
    {
        $this->planCoursSequences = new ArrayCollection();
        $this->planCoursRealises = new ArrayCollection();
    }

    public function getIntervenant(): ?Personnel
    {
        return $this->intervenant;
    }

    public function setIntervenant(?Personnel $intervenant): self
    {
        $this->intervenant = $intervenant;

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

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(float $coefficient): self
    {
        $this->coefficient = $coefficient;

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

    public function getCommentaires(): ?string
    {
        return $this->commentaires;
    }

    public function setCommentaires(?string $commentaires): self
    {
        $this->commentaires = $commentaires;

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
}
