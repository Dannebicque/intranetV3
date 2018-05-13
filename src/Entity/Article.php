<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Article extends BaseEntity
{


    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titre;

    /**
     * @var integer
     * @ORM\Column(type="integer")
     */
    private $nbLike = 0;

    /**
     * @ORM\Column(type="text")
     */
    private $texte;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slug;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $type;

    /**
     * @var Formation
     * @ORM\ManyToOne(targetEntity="App\Entity\Formation")
     */
    private $formation;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="articles")
     */
    private $semestres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     */
    private $personnel;

    /**
     * @return int
     */
    public function getNbLike(): int
    {
        return $this->nbLike;
    }

    /**
     * @param int $nbLike
     */
    public function setNbLike(int $nbLike): void
    {
        $this->nbLike = $nbLike;
    }


    public function __construct(Personnel $personnel)
    {
        $this->personnel = $personnel;
        $this->semestres = new ArrayCollection();
    }

    /**
     * @return Formation
     */
    public function getFormation(): Formation
    {
        return $this->formation;
    }

    /**
     * @param Formation $formation
     */
    public function setFormation(Formation $formation): void
    {
        $this->formation = $formation;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTexte(): ?string
    {
        return $this->texte;
    }

    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    /**
     * @ORM\PrePersist()
     */
    public function setSlug(): self
    {
        $slug = str_replace(' ', '-', $this->titre);
        $this->slug = $slug;

        return $this;
    }

    public function getResume()
    {
        return substr($this->texte,0, 100); //todo: améliorer par rapport aux mots
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|Semestre[]
     */
    public function getSemestres(): Collection
    {
        return $this->semestres;
    }

    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

        return $this;
    }

    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }
}
