<?php
/*
 * Copyright (c) 2021. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetV3/src/Entity/Article.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 09/10/2021 10:33
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ArticleRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Article extends BaseEntity
{
    use LifeCycleTrait;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"article_administration"})
     */
    private ?string $titre;

    /**
     * @ORM\Column(type="text")
     * @Groups({"article_administration"})
     */
    private ?string $texte;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private ?string $slug;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="articles")
     * @MaxDepth(2)
     * @Groups({"article_administration"})
     */
    private Collection $semestres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @MaxDepth(2)
     * @Groups({"article_administration"})
     */
    private ?Personnel $personnel;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ArticleCategorie", inversedBy="articles")
     * @Groups({"article_administration"})
     */
    private ?ArticleCategorie $categorie;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ArticleLike", mappedBy="article")
     */
    private Collection $articleLikes;

    /**
     * @ORM\Column(type="string", length=5)
     */
    private ?string $typeDestinataire;

    /**
     * Article constructor.
     */
    public function __construct(?Personnel $personnel)
    {
        $this->personnel = $personnel;
        $this->semestres = new ArrayCollection();
        $this->articleLikes = new ArrayCollection();
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
     * @param $slug
     *
     * @return Article
     */
    public function setSlug($slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getResume(): string
    {
        $nbreCar = 100;
        $texte = trim(strip_tags($this->texte)); // suppression des balises HTML
        $PointSuspension = '...'; // points de suspension (ou '' si vous n'en voulez pas)
        // ---------------------
        // COUPE DU TEXTE pour le RÉSUMÉ
        // ajout d'un espace de fin au cas où le texte n'en contiendrait pas...
        $texte .= ' ';
        $LongueurAvant = mb_strlen($texte);
        if ($LongueurAvant > $nbreCar) {
            // pour ne pas couper un mot, on va à l'espace suivant
            $texte = mb_substr($texte, 0, mb_strpos($texte, ' ', $nbreCar));
            // On ajoute (ou pas) des points de suspension à la fin si le texte brut est plus long que $nbreCar
            if (!empty($PointSuspension)) {
                $texte .= $PointSuspension;
            }
        }
        // ---------------------


        // On renvoie le résumé du texte correctement formaté.
        return $texte;
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

    public function getCategorie(): ?ArticleCategorie
    {
        return $this->categorie;
    }

    public function setCategorie(?ArticleCategorie $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }

    /**
     * @return Collection|ArticleLike[]
     */
    public function getArticleLikes(): Collection
    {
        return $this->articleLikes;
    }

    public function addArticleLike(ArticleLike $articleLike): self
    {
        if (!$this->articleLikes->contains($articleLike)) {
            $this->articleLikes[] = $articleLike;
            $articleLike->setArticle($this);
        }

        return $this;
    }

    public function removeArticleLike(ArticleLike $articleLike): self
    {
        if ($this->articleLikes->contains($articleLike)) {
            $this->articleLikes->removeElement($articleLike);
            // set the owning side to null (unless already changed)
            if ($articleLike->getArticle() === $this) {
                $articleLike->setArticle(null);
            }
        }

        return $this;
    }

    public function getTypeDestinataire(): ?string
    {
        return $this->typeDestinataire;
    }

    public function setTypeDestinataire(string $typeDestinataire): self
    {
        $this->typeDestinataire = $typeDestinataire;

        return $this;
    }
}
