<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeDiplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/06/2021 09:32
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TypeDiplomeRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class TypeDiplome extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Diplome", mappedBy="typeDiplome")
     */
    private Collection $diplomes;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"type_diplome_administration"})
     */
    private ?string $libelle;

    /**
     *
     * @ORM\Column(type="string", length=20)
     * @Groups({"type_diplome_administration"})
     */
    private ?string $sigle;

    /**
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private int $nbSemestres = 2;

    /**
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private int $niveauEntree = 0;

    /**
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private int $niveauSortie = 3;

    /**
     * @ORM\Column(type="boolean")
     */
    private bool $apc = false;

    public function __construct()
    {
        $this->diplomes = new ArrayCollection();
    }

    public function getLibelle(): ?string
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    public function getSigle(): ?string
    {
        return $this->sigle;
    }

    public function setSigle(string $sigle): void
    {
        $this->sigle = $sigle;
    }

    public function getNbSemestres(): int
    {
        return $this->nbSemestres;
    }

    public function setNbSemestres(int $nbSemestres): void
    {
        $this->nbSemestres = $nbSemestres;
    }

    public function getNiveauEntree(): int
    {
        return $this->niveauEntree;
    }

    public function setNiveauEntree(int $niveauEntree): void
    {
        $this->niveauEntree = $niveauEntree;
    }

    public function getNiveauSortie(): int
    {
        return $this->niveauSortie;
    }

    public function setNiveauSortie(int $niveauSortie): void
    {
        $this->niveauSortie = $niveauSortie;
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
            $diplome->setTypeDiplome($this);
        }

        return $this;
    }

    public function removeDiplome(Diplome $diplome): self
    {
        if ($this->diplomes->contains($diplome)) {
            $this->diplomes->removeElement($diplome);
            // set the owning side to null (unless already changed)
            if ($diplome->getTypeDiplome() === $this) {
                $diplome->setTypeDiplome(null);
            }
        }

        return $this;
    }

    public function getApc(): ?bool
    {
        return $this->apc;
    }

    public function setApc(bool $apc): self
    {
        $this->apc = $apc;

        return $this;
    }
}
