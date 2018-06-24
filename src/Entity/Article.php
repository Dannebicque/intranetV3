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
     * @ORM\ManyToMany(targetEntity="App\Entity\Etudiant", inversedBy="articleLikes")
     */
    private $likes;


    /**
     * Article constructor.
     *
     * @param Personnel $personnel
     */
    public function __construct(Personnel $personnel)
    {
        $this->personnel = $personnel;
        $this->semestres = new ArrayCollection();
        $this->likes = new ArrayCollection();
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

    /**
     * @return null|string
     */
    public function getTitre(): ?string
    {
        return $this->titre;
    }

    /**
     * @param string $titre
     *
     * @return Article
     */
    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getTexte(): ?string
    {
        return $this->texte;
    }

    /**
     * @param string $texte
     *
     * @return Article
     */
    public function setTexte(string $texte): self
    {
        $this->texte = $texte;

        return $this;
    }

    /**
     * @return null|string
     */
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

    /**
     * @return bool|string
     */
    public function getResume()
    {
        return substr($this->texte,0, 100); //todo: améliorer par rapport aux mots
    }

    /**
     * @return null|string
     */
    public function getType(): ?string
    {
        return $this->type;
    }

    /**
     * @param string $type
     *
     * @return Article
     */
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

    /**
     * @param Semestre $semestre
     *
     * @return Article
     */
    public function addSemestre(Semestre $semestre): self
    {
        if (!$this->semestres->contains($semestre)) {
            $this->semestres[] = $semestre;
        }

        return $this;
    }

    /**
     * @param Semestre $semestre
     *
     * @return Article
     */
    public function removeSemestre(Semestre $semestre): self
    {
        if ($this->semestres->contains($semestre)) {
            $this->semestres->removeElement($semestre);
        }

        return $this;
    }

    /**
     * @return Personnel|null
     */
    public function getPersonnel(): ?Personnel
    {
        return $this->personnel;
    }

    /**
     * @param Personnel|null $personnel
     *
     * @return Article
     */
    public function setPersonnel(?Personnel $personnel): self
    {
        $this->personnel = $personnel;

        return $this;
    }

    /**
     * @return Collection|Etudiant[]
     */
    public function getLikes(): Collection
    {
        return $this->likes;
    }

    /**
     * @param Etudiant $like
     *
     * @return Article
     */
    public function addLike(Etudiant $like): self
    {
        if (!$this->likes->contains($like)) {
            $this->likes[] = $like;
        }

        return $this;
    }

    /**
     * @param Etudiant $like
     *
     * @return Article
     */
    public function removeLike(Etudiant $like): self
    {
        if ($this->likes->contains($like)) {
            $this->likes->removeElement($like);
        }

        return $this;
    }

}
