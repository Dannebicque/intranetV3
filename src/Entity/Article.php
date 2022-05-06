<?php
/*
 * Copyright (c) 2022. | David Annebicque | IUT de Troyes  - All Rights Reserved
 * @file /Users/davidannebicque/Sites/intranetV3/src/Entity/Article.php
 * @author davidannebicque
 * @project intranetV3
 * @lastUpdate 06/05/2022 20:54
 */

namespace App\Entity;

use App\Entity\Traits\LifeCycleTrait;
use App\Entity\Traits\TypeDestinataireTrait;
use App\Repository\ArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

#[ORM\Entity(repositoryClass: ArticleRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Article extends BaseEntity
{
    use LifeCycleTrait;
    use TypeDestinataireTrait;

    #[Groups(groups: ['article_administration'])]
    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $titre = null;

    #[Groups(groups: ['article_administration'])]
    #[ORM\Column(type: Types::TEXT)]
    private ?string $texte = null;

    #[ORM\Column(type: Types::STRING, length: 255)]
    private ?string $slug = null;

    #[MaxDepth(2)]
    #[Groups(groups: ['article_administration'])]
    #[ORM\ManyToMany(targetEntity: Semestre::class, inversedBy: 'articles')]
    private Collection $semestres;

    #[Groups(groups: ['article_administration'])]
    #[ORM\ManyToOne(targetEntity: ArticleCategorie::class, inversedBy: 'articles')]
    private ?ArticleCategorie $categorie = null;

    /**
     * @var \Doctrine\Common\Collections\Collection<int, \App\Entity\ArticleLike>
     */
    #[ORM\OneToMany(mappedBy: 'article', targetEntity: ArticleLike::class)]
    private Collection $articleLikes;

    public function __construct(private ?Personnel $personnel)
    {
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

    public function setSlug(?string $slug): self
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
            $texte .= $PointSuspension;
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
}
