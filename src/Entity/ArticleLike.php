<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;


/**
 * @ORM\Entity
 * @ORM\Table(name="ArticleLike")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="type", type="string")
 * @ORM\DiscriminatorMap( {"articleLike" = "ArticleLike", "personnel" = "ArticleLikePersonnel",  "etudiant" =
 *                        "ArticleLikeEtudiant"} )
 */
abstract class ArticleLike extends BaseEntity
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Article", inversedBy="articleLikes")
     */
    private $article;

    public function getArticle(): ?Article
    {
        return $this->article;
    }

    public function setArticle(?Article $article): self
    {
        $this->article = $article;

        return $this;
    }
}
