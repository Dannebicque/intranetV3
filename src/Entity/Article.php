<?php
/**
 * Copyright (C) 7 / 2019 | David annebicque | IUT de Troyes - All Rights Reserved
 * @file /Users/davidannebicque/htdocs/intranetv3/src/Entity/Article.php
 * @author     David Annebicque
 * @project intranetv3
 * @date 7/12/19 11:23 AM
 * @lastUpdate 3/24/19 12:02 PM
 */

namespace App\Entity;

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
    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"article_administration"})
     */
    private $titre;

    /**
     * @ORM\Column(type="text")
     * @Groups({"article_administration"})
     */
    private $texte;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slug;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Semestre", inversedBy="articles")
     * @MaxDepth(2)
     * @Groups({"article_administration"})
     */
    private $semestres;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Personnel")
     * @MaxDepth(2)
     * @Groups({"article_administration"})
     */
    private $personnel;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Etudiant", inversedBy="articleLikes")
     */
    private $likes;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ArticleCategorie", inversedBy="articles")
     * @Groups({"article_administration"})
     */
    private $categorie;


    /**
     * Article constructor.
     *
     * @param Personnel $personnel
     */
    public function __construct(?Personnel $personnel)
    {
        $this->personnel = $personnel;
        $this->semestres = new ArrayCollection();
        $this->likes = new ArrayCollection();
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
        $nbreCar = 100;
        $texte = trim(strip_tags($this->texte)); // suppression des balises HTML
        if (is_numeric($nbreCar)) {
            $PointSuspension = '...'; // points de suspension (ou '' si vous n'en voulez pas)
            // ---------------------
            // COUPE DU TEXTE pour le RÉSUMÉ
            // ajout d'un espace de fin au cas où le texte n'en contiendrait pas...
            $texte .= ' ';
            $LongueurAvant = mb_strlen($texte);
            if ($LongueurAvant > $nbreCar) {
                // pour ne pas couper un mot, on va à l'espace suivant
                $texte = mb_substr($texte, 0, strpos($texte, ' ', $nbreCar));
                // On ajoute (ou pas) des points de suspension à la fin si le texte brut est plus long que $nbreCar
                if (!empty($PointSuspension)) {
                    $texte .= $PointSuspension;
                }
            }
            // ---------------------
        }

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

    public function getCategorie(): ?ArticleCategorie
    {
        return $this->categorie;
    }

    public function setCategorie(?ArticleCategorie $categorie): self
    {
        $this->categorie = $categorie;

        return $this;
    }
}
