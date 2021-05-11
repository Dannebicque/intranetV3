<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Evaluation.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/05/2021 14:41
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Entity\Traits\UuidTrait;
use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;

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
     * @ORM\ManyToOne(targetEntity="App\Entity\Matiere", inversedBy="evaluations")
     */
    private $matiere;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel", inversedBy="evaluationsAuteur")
     */
    private $personnelAuteur;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Personnel", inversedBy="evaluationsAutorise")
     */
    private $personnelAutorise;

    /**
     * @ORM\Column(type="date")
     */
    private $dateEvaluation;

    /**
     * @ORM\Column(type="boolean")
     */
    private $visible = false;

    /**
     * @ORM\Column(type="boolean")
     */
    private $modifiable = false;

    /**
     * @ORM\Column(type="float")
     */
    private $coefficient;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $commentaire;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Note", mappedBy="evaluation")
     */
    private $notes;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Evaluation", inversedBy="enfants")
     */
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Evaluation", mappedBy="parent")
     */
    private $enfants;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\TypeGroupe")
     */
    private $typeGroupe;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     */
    private $libelle;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\AnneeUniversitaire", inversedBy="evaluations")
     */
    private $anneeUniversitaire;

    /**
     * Evaluation constructor.
     *
     * @throws Exception
     */
    public function __construct(Personnel $personnel, \App\DTO\Matiere $mat, Departement $departement)
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

        $this->dateEvaluation = new DateTime('now');

        $this->personnelAutorise = new ArrayCollection();
        $this->notes = new ArrayCollection();
        $this->enfants = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
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

    public function getDateEvaluation(): ?DateTimeInterface
    {
        return $this->dateEvaluation;
    }

    public function setDateEvaluation(DateTimeInterface $dateEvaluation): self
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

    public function setCoefficient(float $coefficient): self
    {
        $this->coefficient = $coefficient;

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
     * @return Collection|Note[]
     */
    public function getNotes()
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

    public function getSemestre(): ?Semestre
    {
        if (null !== $this->matiere && null !== $this->matiere->getUe()) {
            return $this->matiere->getUe()->getSemestre();
        }

        return null;
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

    public function getAutorise($personnelId): bool
    {
        $personnels[] = null !== $this->getPersonnelAuteur() ? $this->getPersonnelAuteur()->getId() : null;
        $autorises = $this->getPersonnelAutorise();
        foreach ($autorises as $autorise) {
            $personnels[] = $autorise->getId();
        }

        return \in_array($personnelId, $personnels, true);
    }
}
