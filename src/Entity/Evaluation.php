<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Evaluation.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:41
 */

namespace App\Entity;

use App\Classes\DataUserSession;
use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\MatiereTrait;
use App\Entity\Traits\UuidTrait;
use App\Repository\EvaluationRepository;
use App\Utils\Tools;
use Carbon\Carbon;
use Carbon\CarbonInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Validator\Constraints as Assert;
use function in_array;

#[ORM\Entity(repositoryClass: EvaluationRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Evaluation extends BaseEntity
{
    use UuidTrait;
    use LifeCycleTrait;
    use MatiereTrait;

    #[ORM\ManyToMany(targetEntity: Personnel::class, inversedBy: 'evaluationsAutorise')]
    private Collection $personnelAutorise;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?CarbonInterface $dateEvaluation;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $visible = false;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $modifiable = false;

    #[Assert\NotBlank]
    #[Assert\Positive]
    #[ORM\Column(type: Types::FLOAT)]
    private ?float $coefficient = 1;

    #[ORM\Column(type: Types::STRING, length: 255, nullable: true)]
    private ?string $commentaire = '';

    /**
     * @var Collection<int, Note>
     */
    #[ORM\OneToMany(mappedBy: 'evaluation', targetEntity: Note::class)]
    private Collection $notes;

    #[ORM\ManyToOne(targetEntity: Evaluation::class, inversedBy: 'enfants')]
    private ?Evaluation $parent = null;

    /**
     * @var Collection<int, Evaluation>
     */
    #[ORM\OneToMany(mappedBy: 'parent', targetEntity: Evaluation::class)]
    private Collection $enfants;

    #[ORM\ManyToOne(targetEntity: TypeGroupe::class, fetch: 'EAGER')]
    private ?TypeGroupe $typeGroupe = null;

    #[ORM\Column(type: Types::STRING, length: 100, nullable: true)]
    private ?string $libelle = null;

    #[ORM\ManyToOne(targetEntity: AnneeUniversitaire::class, inversedBy: 'evaluations')]
    private ?AnneeUniversitaire $anneeUniversitaire;

    #[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'evaluations')]
    private ?Semestre $semestre = null;

    /**
     * @throws Exception
     */
    public function __construct(#[ORM\ManyToOne(targetEntity: Personnel::class, inversedBy: 'evaluationsAuteur')] private ?Personnel $personnelAuteur, \App\DTO\Matiere $mat, Semestre $semestre)
    {
        $this->setUuid(Uuid::uuid4());
        $this->idMatiere = $mat->id;
        $this->typeMatiere = $mat->typeMatiere;

        $this->anneeUniversitaire = $semestre->getAnneeUniversitaire();
        $this->setModifiable($semestre->isOptEvaluationModifiable());
        $this->setVisible($semestre->isOptEvaluationVisible());
        $this->setSemestre($semestre);

        $this->dateEvaluation = Carbon::now();

        $this->personnelAutorise = new ArrayCollection();
        $this->notes = new ArrayCollection();
        $this->enfants = new ArrayCollection();
    }

    public function __clone()
    {
        $this->setUuid(Uuid::uuid4());
    }

    public function setPersonnelAuteur(?Personnel $personnelAuteur): self
    {
        $this->personnelAuteur = $personnelAuteur;

        return $this;
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
        return (string) $this->getUuid();
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

    public function getAutorise(int $personnelId, DataUserSession $datauser): bool
    {
        $personnels = [];
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

    public function getPersonnelAuteur(): ?Personnel
    {
        return $this->personnelAuteur;
    }

    /**
     * @return Collection|Personnel[]
     */
    public function getPersonnelAutorise(): Collection
    {
        return $this->personnelAutorise;
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
