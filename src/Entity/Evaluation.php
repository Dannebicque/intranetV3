<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Evaluation.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:33
 */

namespace App\Entity;

use App\Classes\DataUserSession;
use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Entity\Traits\UuidTrait;
use App\Utils\Tools;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use function in_array;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EvaluationRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Evaluation extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;
    use MatiereTrait;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="evaluationsAuteur")
     */
    private ?Personnel $personnelAuteur;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Personnel", inversedBy="evaluationsAutorise")
     */
    private Collection $personnelAutorise;

    /**
     * @ORM\Column(type="date")
     */
    private ?CarbonInterface $dateEvaluation = null;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $visible = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $modifiable = false;

    /**
     * @ORM\Column(type="float")
     * @Assert\NotBlank
     * @Assert\Positive()
     */
    private ?float $coefficient = 1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private ?string $commentaire = '';

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="evaluation")
     */
    private Collection $notes;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Evaluation", inversedBy="enfants")
     */
    private ?Evaluation $parent;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Evaluation", mappedBy="parent")
     */
    private Collection $enfants;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeGroupe")
     */
    private ?TypeGroupe $typeGroupe;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private ?string $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="evaluations")
     */
    private ?AnneeUniversitaire $anneeUniversitaire;

    /**
     * @ORM\ManyToOne(targetEntity=Semestre::class, inversedBy="evaluations")
     */
    private ?Semestre $semestre;

    /**
     * Evaluation constructor.
     *
     * @throws Exception
     */
    public function __construct(Personnel $personnel, \App\DTO\Matiere $mat)
    {
        $this->setUuid(Uuid::uuid4());

        $this->idMatiere = $mat->id;
        $this->typeMatiere = $mat->typeMatiere;
        $this->personnelAuteur = $personnel;

        if (null !== $mat->semestre) {
            $this->anneeUniversitaire = $mat->semestre->getAnneeUniversitaire();
            $this->setModifiable($mat->semestre->isOptEvaluationModifiable());
            $this->setVisible($mat->semestre->isOptEvaluationVisible());
        }

        $this->dateEvaluation = Carbon::now();

        $this->personnelAutorise = new ArrayCollection();
        $this->notes = new ArrayCollection();
        $this->enfants = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getPersonnelAuteur(): ?Personnel
    {
        return $this->personnelAuteur;
    }

    public function setPersonnelAuteur(?Personnel $personnelAuteur): self
    {
        $this->personnelAuteur = $personnelAuteur;

        return $this;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getPersonnelAutorise(): Collection
    {
        return $this->personnelAutorise;
    }

    public function addPersonnelAutorise(Personnel $personnelAutorise): self
    {
        if (!$this->personnelAutorise->contains($personnelAutorise)) {
            $this->personnelAutorise[] = $personnelAutorise;
        }

        return $this;
    }

    public function removePersonnelAutorise(Personnel $personnelAutorise): self
    {
        if ($this->personnelAutorise->contains($personnelAutorise)) {
            $this->personnelAutorise->removeElement($personnelAutorise);
        }

        return $this;
    }

    public function getDateEvaluation(): ?CarbonInterface
    {
        return $this->dateEvaluation;
    }

    public function setDateEvaluation(?CarbonInterface $dateEvaluation): self
    {
        $this->dateEvaluation = $dateEvaluation;

        return $this;
    }

    public function getVisible(): ?bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    public function getModifiable(): ?bool
    {
        return $this->modifiable;
    }

    public function setModifiable(bool $modifiable): self
    {
        $this->modifiable = $modifiable;

        return $this;
    }

    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    public function setCoefficient(mixed $coefficient): self
    {
        $this->coefficient = Tools::convertToFloat($coefficient);

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(?string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    /**
     * @return Collection|Note[]
     */
    public function getNotes(): Collection
    {
        return $this->notes;
    }

    public function addNote(Note $note): self
    {
        if (!$this->notes->contains($note)) {
            $this->notes[] = $note;
            $note->setEvaluation($this);
        }

        return $this;
    }

    public function removeNote(Note $note): self
    {
        if ($this->notes->contains($note)) {
            $this->notes->removeElement($note);
            // set the owning side to null (unless already changed)
            if ($note->getEvaluation() === $this) {
                $note->setEvaluation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Evaluation[]
     */
    public function getEnfants(): Collection
    {
        return $this->enfants;
    }

    public function addEnfant(self $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    public function removeEnfant(self $enfant): self
    {
        if ($this->enfants->contains($enfant)) {
            $this->enfants->removeElement($enfant);
            // set the owning side to null (unless already changed)
            if ($enfant->getParent() === $this) {
                $enfant->setParent(null);
            }
        }

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    public function getTypeGroupe(): ?TypeGroupe
    {
        return $this->typeGroupe;
    }

    public function setTypeGroupe(?TypeGroupe $typeGroupe): self
    {
        $this->typeGroupe = $typeGroupe;

        return $this;
    }

    public function getUuidString(): string
    {
        return (string)$this->getUuid();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): self
    {
        $this->libelle = $libelle;

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

    public function getAutorise($personnelId, DataUserSession $datauser): bool
    {
        if ($datauser->isGoodDepartement('ROLE_CDD') || $datauser->isGoodDepartement('ROLE_DDE') || $datauser->isGoodDepartement('ROLE_ASS') || $datauser->isGoodDepartement('ROLE_RP') || $datauser->isGoodDepartement('ROLE_NOTES')) {
            return true;
        }
        $personnels[] = $this->getPersonnelAuteur()?->getId();
        $autorises = $this->getPersonnelAutorise();
        foreach ($autorises as $autorise) {
            $personnels[] = $autorise->getId();
        }

        return in_array($personnelId, $personnels, true);
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
}
