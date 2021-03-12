<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Ue.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 12/03/2021 19:14
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Ue extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     */
    private $numeroUe = 1;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $coefficient = 1;

    /**
     * @var float
     *
     * @ORM\Column(type="float")
     */
    private $nbEcts = 1;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="ue")
     * @ORM\OrderBy({"codeMatiere"="ASC"})
     */
    private $matieres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="ues")
     */
    private $semestre;

    /**
     * @ORM\Column(type="boolean")
     */
    private $actif = true;

    /**
     * @ORM\Column(type="boolean")
     */
    private $bonification = false;

    /**
     * @ORM\Column(type="string", length=15)
     */
    private $codeElement;

    /**
     * Ue constructor.
     */
    public function __construct(Semestre $semestre)
    {
        $this->matieres = new ArrayCollection();
        $this->semestre = $semestre;
    }

    /**
     * @return mixed
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getNumeroUe(): int
    {
        return $this->numeroUe;
    }

    public function setNumeroUe(int $numeroUe): void
    {
        $this->numeroUe = $numeroUe;
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

    /**
     * @return Ue
     */
    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setUe($this);
        }

        return $this;
    }

    /**
     * @return Ue
     */
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

    /**
     * @return Ue
     */
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
}
