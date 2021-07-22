<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Parcour.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 22/07/2021 11:23
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ParcourRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Parcour extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"groupe_administration"})
     */
    private ?string $libelle;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Matiere", mappedBy="parcours")
     */
    private Collection $matieres;//todo: ne fonctionne plus...

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Semestre", inversedBy="parcours")
     */
    private Semestre $semestre;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private ?string $codeElement;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Groupe", mappedBy="parcours")
     */
    private Collection $groupes;

    public function __construct(Semestre $semestre)
    {
        $this->matieres = new ArrayCollection();
        $this->semestre = $semestre;
        $this->groupes = new ArrayCollection();
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
            $matiere->setParcours($this);
        }

        return $this;
    }

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

    public function getSemestre(): ?Semestre
    {
        return $this->semestre;
    }

    public function setSemestre(Semestre $semestre): self
    {
        $this->semestre = $semestre;

        return $this;
    }

    public function getDiplome(): ?Diplome
    {
        if (null !== $this->semestre && null !== $this->semestre->getAnnee() && null !== $this->semestre->getAnnee()->getDiplome()) {
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

    /**
     * @return Collection|Groupe[]
     */
    public function getGroupes(): Collection
    {
        return $this->groupes;
    }

    public function addGroupe(Groupe $groupe): self
    {
        if (!$this->groupes->contains($groupe)) {
            $this->groupes[] = $groupe;
            $groupe->setParcours($this);
        }

        return $this;
    }

    public function removeGroupe(Groupe $groupe): self
    {
        if ($this->groupes->contains($groupe)) {
            $this->groupes->removeElement($groupe);
            // set the owning side to null (unless already changed)
            if ($groupe->getParcours() === $this) {
                $groupe->setParcours(null);
            }
        }

        return $this;
    }
}
