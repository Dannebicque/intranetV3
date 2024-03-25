<?php
/*
 * Copyright (c) 2024. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Ue.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 23/02/2024 21:40
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Repository\UeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UeRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Ue extends BaseEntity
{
    use LifeCycleTrait;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private string $libelle;

    #[ORM\Column(type: Types::INTEGER)]
    private int $numeroUe = 1;

    #[ORM\Column(type: Types::FLOAT)]
    private float $coefficient = 1;

    #[ORM\Column(type: Types::FLOAT)]
    private float $nbEcts = 1;

    /**
     * @var Collection<int, Matiere>
     */
    #[ORM\OneToMany(mappedBy: 'ue', targetEntity: Matiere::class)]
    private Collection $matieres;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $actif = true;

    #[ORM\Column(type: Types::BOOLEAN)]
    private bool $bonification = false;

    #[ORM\Column(type: Types::STRING, length: 15)]
    private string $codeElement;

    #[ORM\ManyToOne(targetEntity: ApcCompetence::class, inversedBy: 'ue')]
    private ?ApcCompetence $apcCompetence = null;

    /**
     * Ue constructor.
     */
    public function __construct(#[ORM\ManyToOne(targetEntity: Semestre::class, inversedBy: 'ues')] private ?Semestre $semestre)
    {
        $this->matieres = new ArrayCollection();
    }

    public function getCoefficient(): float
    {
        return $this->coefficient;
    }

    public function setCoefficient(float $coefficient): void
    {
        $this->coefficient = $coefficient;
    }

    public function getNbEcts(): float
    {
        return $this->nbEcts;
    }

    public function setNbEcts(float $nbEcts): void
    {
        $this->nbEcts = $nbEcts;
    }

    public function getDiplome(): ?Diplome
    {
        if (null !== $this->semestre && null !== $this->semestre->getAnnee() && null !== $this->semestre->getAnnee()->getDiplome()) {
            return $this->semestre->getAnnee()->getDiplome();
        }

        return null;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatieres(): Collection
    {
        return $this->matieres;
    }

    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setUe($this);
        }

        return $this;
    }

    public function removeMatiere(Matiere $matiere): self
    {
        if ($this->matieres->contains($matiere)) {
            $this->matieres->removeElement($matiere);
            // set the owning side to null (unless already changed)
            if ($matiere->getUe() === $this) {
                $matiere->setUe(null);
            }
        }

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

    public function getActif(): ?bool
    {
        return $this->actif;
    }

    public function setActif(bool $actif): self
    {
        $this->actif = $actif;

        return $this;
    }

    public function getDisplay(): string
    {
        return 'UE '.$this->getNumeroUe().' | '.$this->getLibelle();
    }

    public function getNumeroUe(): int
    {
        return $this->numeroUe;
    }

    public function setNumeroUe(int $numeroUe): void
    {
        $this->numeroUe = $numeroUe;
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle(?string $libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getBonification(): ?bool
    {
        return $this->bonification;
    }

    public function setBonification(bool $bonification): self
    {
        $this->bonification = $bonification;

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

    public function getApcCompetence(): ?ApcCompetence
    {
        return $this->apcCompetence;
    }

    public function setApcCompetence(?ApcCompetence $apcCompetence): self
    {
        $this->apcCompetence = $apcCompetence;

        return $this;
    }
}
