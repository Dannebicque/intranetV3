<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Parcour.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ParcourRepository")
 */
class Parcour extends BaseEntity
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $libelle;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="parcours")
     */
    private $matieres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="parcours")
     */
    private $semestre;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $codeElement;

    public function __construct(Semestre $semestre)
    {
        $this->matieres = new ArrayCollection();
        $this->semestre = $semestre;
    }

    /**
     * @return null|string
     */
    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    /**
     * @param string $libelle
     *
     * @return Parcour
     */
    public function setLibelle(string $libelle): self
    {
        $this->libelle = $libelle;

        return $this;
    }

    /**
     * @return Collection|Matiere[]
     */
    public function getMatieres(): Collection
    {
        return $this->matieres;
    }

    /**
     * @param Matiere $matiere
     *
     * @return Parcour
     */
    public function addMatiere(Matiere $matiere): self
    {
        if (!$this->matieres->contains($matiere)) {
            $this->matieres[] = $matiere;
            $matiere->setParcours($this);
        }

        return $this;
    }

    /**
     * @param Matiere $matiere
     *
     * @return Parcour
     */
    public function removeMatiere(Matiere $matiere): self
    {
        if ($this->matieres->contains($matiere)) {
            $this->matieres->removeElement($matiere);
            // set the owning side to null (unless already changed)
            if ($matiere->getParcours() === $this) {
                $matiere->setParcours(null);
            }
        }

        return $this;
    }

    /**
     * @return Semestre|null
     */
    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    /**
     * @param Semestre|null $semestre
     *
     * @return Parcour
     */
    public function setSemestre(?Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }



    /**
     * @return Diplome|null
     */
    public function getDiplome(): ?Diplome
    {
        if ($this->semestre !== null && $this->semestre->getAnnee() !== null && $this->semestre->getAnnee()->getDiplome() !== null) {
            return $this->semestre->getAnnee()->getDiplome();
        }

        return null;
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
