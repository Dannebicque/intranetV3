<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/AnneeUniversitaire.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\AnneeUniversitaireRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Stringable;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AnneeUniversitaireRepository::class)]
#[ORM\HasLifecycleCallbacks]
class AnneeUniversitaire extends BaseEntity implements Stringable
{
    use LifeCycleTrait;

    #[Groups(groups: ['annee_universitaire', 'celcat_administration'])]
    #[ORM\Column(type: Types::STRING, length: 30)]
    private ?string $libelle = null;

    #[Groups(groups: ['annee_universitaire'])]
    #[ORM\Column(type: Types::INTEGER)]
    private ?int $annee = null;

    #[Groups(groups: ['annee_universitaire'])]
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $commentaire = null;

    /**
     * @var Collection<int, Departement>
     */
    /** @deprecated */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitairePrepare', targetEntity: Departement::class)]
    private Collection $departements;

    /**
     * @var Collection<int, Calendrier>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: Calendrier::class)]
    private Collection $calendriers;

    /**
     * @var Collection<int, Scolarite>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: Scolarite::class)]
    private Collection $scolarites;

    /**
     * @var Collection<int, ScolaritePromo>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: ScolaritePromo::class)]
    private Collection $scolaritePromos;

    /**
     * @var Collection<int, Diplome>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: Diplome::class)]
    private Collection $diplomes;

    /**
     * @var Collection<int, StagePeriode>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: StagePeriode::class)]
    private Collection $stagePeriodes;

    /**
     * @var Collection<int, Evaluation>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: Evaluation::class)]
    private Collection $evaluations;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $active = false;

    /**
     * @var Collection<int, ProjetPeriode>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: ProjetPeriode::class)]
    private Collection $projetPeriodes;

    /**
     * @var Collection<Personnel>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: Personnel::class)]
    private Collection $personnels;

    /**
     * @var Collection<AlternancePlanning>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: AlternancePlanning::class)]
    private Collection $planningAlternances;

    /**
     * @var Collection<int, AnneeUniversitaireSemestre>
     */
    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: AnneeUniversitaireSemestre::class)]
    private Collection $anneeUniversitaireSemestres;

    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: EdtPlanning::class)]
    private Collection $edtPlannings;

    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: PlanCours::class)]
    private Collection $planCours;

    #[ORM\OneToMany(mappedBy: 'anneeUniversitaire', targetEntity: ConpereEtudiant::class)]
    private Collection $conpereEtudiants;

    public function __construct()
    {
        $this->departements = new ArrayCollection();
        $this->setAnnee((int) date('Y'));
        $this->calendriers = new ArrayCollection();
        $this->scolarites = new ArrayCollection();
        $this->scolaritePromos = new ArrayCollection();
        $this->diplomes = new ArrayCollection();
        $this->stagePeriodes = new ArrayCollection();
        $this->evaluations = new ArrayCollection();
        $this->projetPeriodes = new ArrayCollection();
        $this->personnels = new ArrayCollection();
        $this->planningAlternances = new ArrayCollection();
        $this->anneeUniversitaireSemestres = new ArrayCollection();
        $this->edtPlannings = new ArrayCollection();
        $this->planCours = new ArrayCollection();
        $this->conpereEtudiants = new ArrayCollection();
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

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    /**
     * @return Collection|Departement[]
     */
    public function getDepartements(): Collection
    {
        return $this->departements;
    }

    public function addDepartement(Departement $departement): self
    {
        if (!$this->departements->contains($departement)) {
            $this->departements[] = $departement;
            $departement->setAnneeUniversitairePrepare($this);
        }

        return $this;
    }

    public function removeDepartement(Departement $departement): self
    {
        if ($this->departements->contains($departement)) {
            $this->departements->removeElement($departement);
            // set the owning side to null (unless already changed)
            if ($departement->getAnneeUniversitairePrepare() === $this) {
                $departement->setAnneeUniversitairePrepare(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Calendrier[]
     */
    public function getCalendriers(): Collection
    {
        return $this->calendriers;
    }

    public function addCalendrier(Calendrier $calendrier): self
    {
        if (!$this->calendriers->contains($calendrier)) {
            $this->calendriers[] = $calendrier;
            $calendrier->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeCalendrier(Calendrier $calendrier): self
    {
        if ($this->calendriers->contains($calendrier)) {
            $this->calendriers->removeElement($calendrier);
            // set the owning side to null (unless already changed)
            if ($calendrier->getAnneeUniversitaire() === $this) {
                $calendrier->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Scolarite[]
     */
    public function getScolarites(): Collection
    {
        return $this->scolarites;
    }

    public function addScolarite(Scolarite $scolarite): self
    {
        if (!$this->scolarites->contains($scolarite)) {
            $this->scolarites[] = $scolarite;
            $scolarite->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeScolarite(Scolarite $scolarite): self
    {
        if ($this->scolarites->contains($scolarite)) {
            $this->scolarites->removeElement($scolarite);
            // set the owning side to null (unless already changed)
            if ($scolarite->getAnneeUniversitaire() === $this) {
                $scolarite->setAnneeUniversitaire(null);
            }
        }

        return $this;
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
            $scolaritePromo->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeScolaritePromo(ScolaritePromo $scolaritePromo): self
    {
        if ($this->scolaritePromos->contains($scolaritePromo)) {
            $this->scolaritePromos->removeElement($scolaritePromo);
            // set the owning side to null (unless already changed)
            if ($scolaritePromo->getAnneeUniversitaire() === $this) {
                $scolaritePromo->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Diplome[]
     */
    public function getDiplomes(): Collection
    {
        return $this->diplomes;
    }

    public function addDiplome(Diplome $diplome): self
    {
        if (!$this->diplomes->contains($diplome)) {
            $this->diplomes[] = $diplome;
            $diplome->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeDiplome(Diplome $diplome): self
    {
        if ($this->diplomes->contains($diplome)) {
            $this->diplomes->removeElement($diplome);
            // set the owning side to null (unless already changed)
            if ($diplome->getAnneeUniversitaire() === $this) {
                $diplome->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    public function displayAnneeUniversitaire(): string
    {
        $s = $this->getAnnee() + 1;

        return $this->getAnnee().' | '.$s;
    }

    public function getAnnee(): ?int
    {
        return $this->annee;
    }

    public function setAnnee(int $annee): self
    {
        $this->annee = $annee;

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
            $stagePeriode->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeStagePeriode(StagePeriode $stagePeriode): self
    {
        if ($this->stagePeriodes->contains($stagePeriode)) {
            $this->stagePeriodes->removeElement($stagePeriode);
            // set the owning side to null (unless already changed)
            if ($stagePeriode->getAnneeUniversitaire() === $this) {
                $stagePeriode->setAnneeUniversitaire(null);
            }
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
            $evaluation->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeEvaluation(Evaluation $evaluation): self
    {
        if ($this->evaluations->contains($evaluation)) {
            $this->evaluations->removeElement($evaluation);
            // set the owning side to null (unless already changed)
            if ($evaluation->getAnneeUniversitaire() === $this) {
                $evaluation->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function __toString(): string
    {
        return (string) $this->getAnnee();
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
            $projetPeriode->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeProjetPeriode(ProjetPeriode $projetPeriode): self
    {
        if ($this->projetPeriodes->contains($projetPeriode)) {
            $this->projetPeriodes->removeElement($projetPeriode);
            // set the owning side to null (unless already changed)
            if ($projetPeriode->getAnneeUniversitaire() === $this) {
                $projetPeriode->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getPersonnels(): Collection
    {
        return $this->personnels;
    }

    public function addPersonnel(Personnel $personnel): self
    {
        if (!$this->personnels->contains($personnel)) {
            $this->personnels[] = $personnel;
            $personnel->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removePersonnel(Personnel $personnel): self
    {
        // set the owning side to null (unless already changed)
        if ($this->personnels->removeElement($personnel) && $personnel->getAnneeUniversitaire() === $this) {
            $personnel->setAnneeUniversitaire(null);
        }

        return $this;
    }

    /**
     * @return Collection|AlternancePlanning[]
     */
    public function getAlternancePlannings(): Collection
    {
        return $this->planningAlternances;
    }

    public function addAlternancePlanning(AlternancePlanning $planningAlternance): self
    {
        if (!$this->planningAlternances->contains($planningAlternance)) {
            $this->planningAlternances[] = $planningAlternance;
            $planningAlternance->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeAlternancePlanning(AlternancePlanning $planningAlternance): self
    {
        // set the owning side to null (unless already changed)
        if ($this->planningAlternances->removeElement($planningAlternance) && $planningAlternance->getAnneeUniversitaire() === $this) {
            $planningAlternance->setAnneeUniversitaire(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, AnneeUniversitaireSemestre>
     */
    public function getAnneeUniversitaireSemestres(): Collection
    {
        return $this->anneeUniversitaireSemestres;
    }

    public function addAnneeUniversitaireSemestre(AnneeUniversitaireSemestre $anneeUniversitaireSemestre): self
    {
        if (!$this->anneeUniversitaireSemestres->contains($anneeUniversitaireSemestre)) {
            $this->anneeUniversitaireSemestres[] = $anneeUniversitaireSemestre;
            $anneeUniversitaireSemestre->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeAnneeUniversitaireSemestre(AnneeUniversitaireSemestre $anneeUniversitaireSemestre): self
    {
        // set the owning side to null (unless already changed)
        if ($this->anneeUniversitaireSemestres->removeElement($anneeUniversitaireSemestre) && $anneeUniversitaireSemestre->getAnneeUniversitaire() === $this) {
            $anneeUniversitaireSemestre->setAnneeUniversitaire(null);
        }

        return $this;
    }

    /**
     * @return Collection<int, EdtPlanning>
     */
    public function getEdtPlannings(): Collection
    {
        return $this->edtPlannings;
    }

    public function addEdtPlanning(EdtPlanning $edtPlanning): self
    {
        if (!$this->edtPlannings->contains($edtPlanning)) {
            $this->edtPlannings[] = $edtPlanning;
            $edtPlanning->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeEdtPlanning(EdtPlanning $edtPlanning): self
    {
        if ($this->edtPlannings->removeElement($edtPlanning)) {
            // set the owning side to null (unless already changed)
            if ($edtPlanning->getAnneeUniversitaire() === $this) {
                $edtPlanning->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, PlanCours>
     */
    public function getPlanCours(): Collection
    {
        return $this->planCours;
    }

    public function addPlanCour(PlanCours $planCour): self
    {
        if (!$this->planCours->contains($planCour)) {
            $this->planCours[] = $planCour;
            $planCour->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removePlanCour(PlanCours $planCour): self
    {
        if ($this->planCours->removeElement($planCour)) {
            // set the owning side to null (unless already changed)
            if ($planCour->getAnneeUniversitaire() === $this) {
                $planCour->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ConpereEtudiant>
     */
    public function getConpereEtudiants(): Collection
    {
        return $this->conpereEtudiants;
    }

    public function addConpereEtudiant(ConpereEtudiant $conpereEtudiant): self
    {
        if (!$this->conpereEtudiants->contains($conpereEtudiant)) {
            $this->conpereEtudiants->add($conpereEtudiant);
            $conpereEtudiant->setAnneeUniversitaire($this);
        }

        return $this;
    }

    public function removeConpereEtudiant(ConpereEtudiant $conpereEtudiant): self
    {
        if ($this->conpereEtudiants->removeElement($conpereEtudiant)) {
            // set the owning side to null (unless already changed)
            if ($conpereEtudiant->getAnneeUniversitaire() === $this) {
                $conpereEtudiant->setAnneeUniversitaire(null);
            }
        }

        return $this;
    }
}
