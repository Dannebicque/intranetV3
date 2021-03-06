<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/TypeDiplome.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 07/02/2021 10:50
 */

namespace App\Entity;

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
    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Diplome", mappedBy="typeDiplome")
     */
    private $diplomes;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"type_diplome_administration"})
     */
    private $libelle;

    /**
     * @var string
     *
     * @ORM\Column(type="string", length=20)
     * @Groups({"type_diplome_administration"})
     */
    private $sigle;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private $nbSemestres = 2;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private $niveauEntree = 0;

    /**
     * @var int
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private $niveauSortie = 2;

    /**
     * @ORM\Column(type="boolean")
     */
    private $apc = false;

    public function __construct()
    {
        $this->diplomes = new ArrayCollection();
    }

    public function getLibelle()
    {
        return $this->libelle;
    }

    public function setLibelle($libelle): void
    {
        $this->libelle = $libelle;
    }

    /**
     * @return string
     */
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
