<?php
// Copyright (C) 11 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
// @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/TypeDiplome.php
// @author     David Annebicque
// @project intranetv3
// @date 25/11/2019 10:20
// @lastUpdate 23/11/2019 09:14

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
     * @var integer
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private $nbSemestres = 2;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private $niveauEntree = 0;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer")
     * @Groups({"type_diplome_administration"})
     */
    private $niveauSortie = 2;

    public function __construct()
    {
        $this->diplomes = new ArrayCollection();
    }

    /**
     * @return mixed
     */
    public function getLibelle()
    {
        return $this->libelle;
    }

    /**
     * @param mixed $libelle
     */
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

    /**
     * @param string $sigle
     */
    public function setSigle(string $sigle): void
    {
        $this->sigle = $sigle;
    }

    /**
     * @return int
     */
    public function getNbSemestres(): int
    {
        return $this->nbSemestres;
    }

    /**
     * @param int $nbSemestres
     */
    public function setNbSemestres(int $nbSemestres): void
    {
        $this->nbSemestres = $nbSemestres;
    }

    /**
     * @return int
     */
    public function getNiveauEntree(): int
    {
        return $this->niveauEntree;
    }

    /**
     * @param int $niveauEntree
     */
    public function setNiveauEntree(int $niveauEntree): void
    {
        $this->niveauEntree = $niveauEntree;
    }

    /**
     * @return int
     */
    public function getNiveauSortie(): int
    {
        return $this->niveauSortie;
    }

    /**
     * @param int $niveauSortie
     */
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
}
