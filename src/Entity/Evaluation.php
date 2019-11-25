<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Evaluation.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EvaluationRepository")
 */
class Evaluation extends BaseEntity
{
    /**
     * @var UuidInterface
     *
     * @ORM\Column(type="uuid_binary", unique=true)
     */
    protected $uuid;

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
     * @ORM\Column(type="string", length=255)
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
     * @param Personnel   $personnel
     * @param Matiere     $matiere
     * @param Departement $departement
     *
     * @throws Exception
     */
    public function __construct(Personnel $personnel, Matiere $matiere, Departement $departement)
    {
        $this->uuid = Uuid::uuid4();

        $this->matiere = $matiere;
        $this->personnelAuteur = $personnel;
        $this->anneeuniversitaire = $matiere->getSemestre() !== null ? $matiere->getSemestre()->getAnneeUniversitaire() : date('Y');
        if ($matiere->getUe() !== null && $matiere->getUe()->getSemestre() !== null) {
            $this->setModifiable($matiere->getUe()->getSemestre()->isOptEvaluationModifiable());
            $this->setVisible($matiere->getUe()->getSemestre()->isOptEvaluationVisible());
        }

        $this->dateEvaluation = new DateTime('now');

        $this->personnelAutorise = new ArrayCollection();
        $this->notes = new ArrayCollection();
        $this->enfants = new ArrayCollection();
    }

    /**
     * @return Matiere|null
     */
    public function getMatiere(): ?Matiere
    {
        return $this->matiere;
    }

    /**
     * @param Matiere|null $matiere
     *
     * @return Evaluation
     */
    public function setMatiere(?Matiere $matiere): self
    {
        $this->matiere = $matiere;

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getPersonnelAuteur(): ?Personnel
    {
        return $this->personnelAuteur;
    }

    /**
     * @param Personnel|null $personnelAuteur
     *
     * @return Evaluation
     */
    public function setPersonnelAuteur(?Personnel $personnelAuteur): self
    {
        $this->personnelAuteur = $personnelAuteur;

        return $this;
    }

    /**
     * @return UuidInterface
     */
    public function getUuid(): UuidInterface
    {
        return $this->uuid;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getPersonnelAutorise(): Collection
    {
        return $this->personnelAutorise;
    }

    /**
     * @param Personnel $personnelAutorise
     *
     * @return Evaluation
     */
    public function addPersonnelAutorise(Personnel $personnelAutorise): self
    {
        if (!$this->personnelAutorise->contains($personnelAutorise)) {
            $this->personnelAutorise[] = $personnelAutorise;
        }

        return $this;
    }

    /**
     * @param Personnel $personnelAutorise
     *
     * @return Evaluation
     */
    public function removePersonnelAutorise(Personnel $personnelAutorise): self
    {
        if ($this->personnelAutorise->contains($personnelAutorise)) {
            $this->personnelAutorise->removeElement($personnelAutorise);
        }

        return $this;
    }

    /**
     * @return DateTimeInterface|null
     */
    public function getDateEvaluation(): ?DateTimeInterface
    {
        return $this->dateEvaluation;
    }

    /**
     * @param DateTimeInterface $dateEvaluation
     *
     * @return Evaluation
     */
    public function setDateEvaluation(DateTimeInterface $dateEvaluation): self
    {
        $this->dateEvaluation = $dateEvaluation;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getVisible(): ?bool
    {
        return $this->visible;
    }

    /**
     * @param bool $visible
     *
     * @return Evaluation
     */
    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    /**
     * @return bool|null
     */
    public function getModifiable(): ?bool
    {
        return $this->modifiable;
    }

    /**
     * @param bool $modifiable
     *
     * @return Evaluation
     */
    public function setModifiable(bool $modifiable): self
    {
        $this->modifiable = $modifiable;

        return $this;
    }

    /**
     * @return float|null
     */
    public function getCoefficient(): ?float
    {
        return $this->coefficient;
    }

    /**
     * @param float $coefficient
     *
     * @return Evaluation
     */
    public function setCoefficient(float $coefficient): self
    {
        $this->coefficient = $coefficient;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    /**
     * @param string $commentaire
     *
     * @return Evaluation
     */
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

    /**
     * @param Note $note
     *
     * @return Evaluation
     */
    public function addNote(Note $note): self
    {
        if (!$this->notes->contains($note)) {
            $this->notes[] = $note;
            $note->setEvaluation($this);
        }

        return $this;
    }

    /**
     * @param Note $note
     *
     * @return Evaluation
     */
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

    /**
     * @param Evaluation $enfant
     *
     * @return Evaluation
     */
    public function addEnfant(Evaluation $enfant): self
    {
        if (!$this->enfants->contains($enfant)) {
            $this->enfants[] = $enfant;
            $enfant->setParent($this);
        }

        return $this;
    }

    /**
     * @param Evaluation $enfant
     *
     * @return Evaluation
     */
    public function removeEnfant(Evaluation $enfant): self
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

    /**
     * @return Evaluation|null
     */
    public function getParent(): ?Evaluation
    {
        return $this->parent;
    }

    /**
     * @param Evaluation|null $parent
     *
     * @return Evaluation
     */
    public function setParent(?Evaluation $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    /**
     * @return TypeGroupe|null
     */
    public function getTypeGroupe(): ?TypeGroupe
    {
        return $this->typeGroupe;
    }

    /**
     * @param TypeGroupe|null $typeGroupe
     *
     * @return Evaluation
     */
    public function setTypeGroupe(?TypeGroupe $typeGroupe): self
    {
        $this->typeGroupe = $typeGroupe;

        return $this;
    }

    public function getUuidString(): string
    {
        return (string)$this->getUuid();
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        if ($this->matiere !== null && $this->matiere->getUe() !== null) {
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
}
